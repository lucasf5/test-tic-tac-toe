import React from 'react';
import GameInfo from './GameInfo';
import Board from './Board';
import GameControls from './GameControls';
import '../styles/GameContainer.css';

const GameContainer = ({
  currentPlayer,
  timeLeft,
  timerStatus,
  timerActive,
  winner,
  isDraw,
  gameOver,
  board,
  onSquareClick,
  winningLine,
  onNewGame,
  onNewMatch,
  matchWinner,
  animations
}) => {
  return (
    <div className="game-container">
      <GameInfo
        currentPlayer={currentPlayer}
        timeLeft={timeLeft}
        timerStatus={timerStatus}
        timerActive={timerActive}
        winner={winner}
        isDraw={isDraw}
        gameOver={gameOver}
      />

      <Board
        board={board}
        onSquareClick={onSquareClick}
        winningLine={winningLine}
        animations={animations}
      />

      <GameControls
        onNewGame={onNewGame}
        onNewMatch={onNewMatch}
        isGameOver={gameOver}
        hasGameStarted={board.some(square => square !== null)}
        matchWinner={matchWinner}
      />
    </div>
  );
};

export default GameContainer; 