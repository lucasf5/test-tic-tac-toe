import React from 'react';
import '../styles/GameHeader.css';

const GameHeader = ({ onOpenCustomization }) => {
  return (
    <header className="game-header">
      <h1 className="game-title">🎮 Jogo da Velha</h1>
      <button
        className="customization-button"
        onClick={onOpenCustomization}
        aria-label="Personalizar cores do jogo"
      >
        🎨 Personalizar
      </button>
    </header>
  );
};

export default GameHeader; 