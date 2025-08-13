import React from 'react';
import '../styles/Square.css';

const Square = ({ value, onClick, isWinning = false, animationState = null }) => {
  const getAnimationClass = () => {
    if (animationState === 'appear') return 'square-appear';
    if (animationState === 'winner') return 'square-winner';
    return '';
  };

  const getSquareClass = () => {
    const baseClass = 'square';
    const winningClass = isWinning ? 'winning' : '';
    const animationClass = getAnimationClass();
    return `${baseClass} ${winningClass} ${animationClass}`.trim();
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className={getSquareClass()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Quadrado ${value || 'vazio'}`}
      disabled={value !== null}
      tabIndex={value === null ? 0 : -1}
    >
      {value && (
        <span className={`symbol ${value.toLowerCase()}`}>
          {value}
        </span>
      )}
    </button>
  );
};

export default Square; 