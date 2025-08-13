import { useState, useEffect, useCallback } from 'react';
import { checkWinner, checkDraw, makeRandomMove } from '../utils/gameLogic';
import { useGameTimer } from './useGameTimer';
import { useGameAnimations } from './useGameAnimations';
import { useGameAccessibility } from './useGameAccessibility';

export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [score, setScore] = useState({ X: 0, O: 0, draws: 0 });
  const [gameCount, setGameCount] = useState(0);
  const [matchWinner, setMatchWinner] = useState(null);

  const timer = useGameTimer(5);
  const animations = useGameAnimations();
  const accessibility = useGameAccessibility();

  const updateScore = useCallback((result) => {
    setScore(prev => {
      const newScore = { ...prev };
      if (result === 'draw') {
        newScore.draws += 1;
      } else {
        newScore[result] += 1;
      }
      return newScore;
    });
    
    setGameCount(prev => prev + 1);
    animations.animateScoreUpdate();
    accessibility.playSound('click');
    
    const newScore = { ...score };
    if (result === 'draw') {
      newScore.draws += 1;
    } else {
      newScore[result] += 1;
    }
    
    if (newScore.X >= 11 || newScore.O >= 11) {
      const winner = newScore.X >= 11 ? 'X' : 'O';
      setMatchWinner(winner);
      accessibility.announceToScreenReader(`${winner} venceu a partida!`);
      accessibility.playSound('win');
    }
  }, [score, animations, accessibility]);

  const makeMove = useCallback((index) => {
    if (board[index] || gameOver) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    
    animations.animateSquareAppear();
    accessibility.playSound('click');
    accessibility.announceToScreenReader(`Jogador ${isXNext ? 'X' : 'O'} jogou na posição ${index + 1}`);
    
    const winner = checkWinner(newBoard);
    const isDraw = checkDraw(newBoard);
    
    if (winner) {
      setWinner(winner);
      setGameOver(true);
      timer.pauseTimer();
      updateScore(winner);
      animations.animateWinnerHighlight();
      accessibility.announceToScreenReader(`${winner} venceu esta partida!`);
      accessibility.playSound('win');
    } else if (isDraw) {
      setIsDraw(true);
      setGameOver(true);
      timer.pauseTimer();
      updateScore('draw');
      accessibility.announceToScreenReader('Empate!');
      accessibility.playSound('draw');
    } else {
      setIsXNext(!isXNext);
      timer.startTimer();
      accessibility.announceToScreenReader(`Próximo jogador: ${!isXNext ? 'X' : 'O'}`);
    }
  }, [board, isXNext, gameOver, timer, updateScore, animations, accessibility]);

  const makeAutoMove = useCallback(() => {
    if (gameOver) return;
    
    const randomIndex = makeRandomMove(board);
    if (randomIndex !== null) {
      makeMove(randomIndex);
    }
  }, [board, gameOver, makeMove]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
    setIsDraw(false);
    timer.resetTimer();
    timer.startTimer();
    accessibility.announceToScreenReader('Novo jogo iniciado');
    accessibility.playSound('click');
  }, [timer, accessibility]);

  const resetScore = useCallback(() => {
    setScore({ X: 0, O: 0, draws: 0 });
    setGameCount(0);
    setMatchWinner(null);
    accessibility.announceToScreenReader('Placar resetado');
    accessibility.playSound('click');
  }, [accessibility]);

  const resetMatch = useCallback(() => {
    resetGame();
    resetScore();
  }, [resetGame, resetScore]);

  useEffect(() => {
    if (timer.timeLeft === 0 && timer.isActive && !gameOver) {
      makeAutoMove();
    }
  }, [timer.timeLeft, timer.isActive, gameOver, makeAutoMove]);

  useEffect(() => {
    const hasMoves = board.some(square => square !== null);
    if (hasMoves && !gameOver && !timer.isActive) {
      timer.startTimer();
    }
  }, [board, gameOver, timer]);

  useEffect(() => {
    if (timer.timeLeft <= 2 && timer.timeLeft > 0 && timer.isActive) {
      accessibility.playSound('timer');
    }
  }, [timer.timeLeft, timer.isActive, accessibility]);

  return {
    board,
    isXNext,
    gameOver,
    winner,
    isDraw,
    timeLeft: timer.timeLeft,
    timerStatus: timer.getTimerStatus(),
    timerActive: timer.isActive,
    score,
    gameCount,
    matchWinner,
    makeMove,
    resetGame,
    resetScore,
    resetMatch,
    animations,
    accessibility
  };
}; 