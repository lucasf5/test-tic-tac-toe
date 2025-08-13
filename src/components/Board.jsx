import React from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = ({ board, onSquareClick, winningLine = [], animations = null }) => {
  const renderSquare = (index) => {
    const isWinning = winningLine.includes(index);
    const animationState = animations?.squareAppear && board[index] ? 'appear' : null;

    return (
      <Square
        key={index}
        value={board[index]}
        onClick={() => onSquareClick(index)}
        isWinning={isWinning}
        animationState={animationState}
      />
    );
  };

  return (
    <div className="board" role="grid" aria-label="Tabuleiro do jogo da velha">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board; 