import React from 'react';
import { useGameState } from './hooks/useGameState';
import { useGameTheme } from './hooks/useGameTheme';
import { findWinningLine } from './utils/gameLogic';
import GameHeader from './components/GameHeader';
import GameLayout from './components/GameLayout';
import ThemeCustomizer from './components/ThemeCustomizer';
import AccessibilityControls from './components/AccessibilityControls';
import GameAnnouncer from './components/GameAnnouncer';
import './App.css';

function App() {
  const {
    board,
    isXNext,
    gameOver,
    winner,
    isDraw,
    timeLeft,
    timerStatus,
    timerActive,
    score,
    gameCount,
    matchWinner,
    makeMove,
    resetGame,
    resetScore,
    resetMatch,
    animations,
    accessibility
  } = useGameState();

  const {
    theme,
    isCustomizationOpen,
    setIsCustomizationOpen,
    updateColor,
    applyPreset
  } = useGameTheme();

  const winningLine = findWinningLine(board, winner);

  const gameContainerProps = {
    currentPlayer: isXNext ? 'X' : 'O',
    timeLeft,
    timerStatus,
    timerActive,
    winner,
    isDraw,
    gameOver,
    board,
    onSquareClick: makeMove,
    winningLine,
    onNewGame: resetGame,
    onNewMatch: resetMatch,
    matchWinner,
    animations
  };

  const scoreboardProps = {
    score,
    gameCount,
    matchWinner,
    onResetScore: resetScore
  };

  const accessibilityClass = accessibility.getAccessibilityClass();

  return (
    <div className={`app ${accessibilityClass}`}>
      <GameAnnouncer announcements={accessibility.announcements} />

      <GameHeader onOpenCustomization={() => setIsCustomizationOpen(true)} />

      <AccessibilityControls
        accessibilitySettings={accessibility.accessibilitySettings}
        onToggleLargeText={accessibility.toggleLargeText}
        onToggleSound={accessibility.toggleSound}
      />

      <GameLayout
        gameContainerProps={gameContainerProps}
        scoreboardProps={scoreboardProps}
      />

      <ThemeCustomizer
        isOpen={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        theme={theme}
        updateColor={(colorType, value) => {
          updateColor(colorType, value);
          animations.animateThemeTransition();
          accessibility.playSound('theme');
        }}
        applyPreset={(presetName) => {
          applyPreset(presetName);
          animations.animateThemeTransition();
          accessibility.playSound('theme');
        }}
      />
    </div>
  );
}

export default App;
