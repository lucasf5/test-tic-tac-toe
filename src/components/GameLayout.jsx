import React from 'react';
import GameContainer from './GameContainer';
import Scoreboard from './Scoreboard';
import '../styles/GameLayout.css';

const GameLayout = ({
  gameContainerProps,
  scoreboardProps
}) => {
  return (
    <main className="game-layout">
      <GameContainer {...gameContainerProps} />
      <aside className="game-sidebar">
        <Scoreboard {...scoreboardProps} />
      </aside>
    </main>
  );
};

export default GameLayout; 