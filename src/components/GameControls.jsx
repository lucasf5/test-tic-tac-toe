import React from 'react';
import '../styles/GameControls.css';

const GameControls = ({ 
  onNewGame, 
  onNewMatch, 
  isGameOver, 
  hasGameStarted, 
  matchWinner 
}) => {
  return (
    <div className="game-controls">
      <button
        className="new-game-button"
        onClick={onNewGame}
        disabled={!isGameOver && !hasGameStarted}
        aria-label="Iniciar novo jogo"
      >
        Novo Jogo
      </button>
      
      {matchWinner && (
        <button
          className="new-match-button"
          onClick={onNewMatch}
          aria-label="Iniciar nova partida"
        >
          Nova Partida
        </button>
      )}
    </div>
  );
};

export default GameControls; 