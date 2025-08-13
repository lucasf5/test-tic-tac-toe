import React from 'react';
import GameTimer from './GameTimer';
import '../styles/GameInfo.css';

const GameInfo = ({ currentPlayer, timeLeft, timerStatus, timerActive, winner, isDraw, gameOver }) => {
  const getStatusMessage = () => {
    if (winner) {
      return `Vencedor: ${winner}`;
    }
    if (isDraw) {
      return 'Empate!';
    }
    if (gameOver) {
      return 'Jogo finalizado';
    }
    return `Próximo jogador: ${currentPlayer}`;
  };

  return (
    <div className="game-info">
      <div className="status">
        <h2>{getStatusMessage()}</h2>
      </div>

      {!gameOver && (
        <GameTimer
          timeLeft={timeLeft}
          timerStatus={timerStatus}
          isActive={timerActive}
        />
      )}

      {gameOver && (
        <div className="game-over-message">
          <p>Clique em "Novo Jogo" para continuar</p>
        </div>
      )}
    </div>
  );
};

export default GameInfo; 