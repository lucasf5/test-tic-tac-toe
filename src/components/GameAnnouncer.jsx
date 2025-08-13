import React from 'react';
import '../styles/GameAnnouncer.css';

const GameAnnouncer = ({ announcements }) => {
    if (!announcements) return null;

    return (
        <div
            className="game-announcer"
            aria-live="polite"
            aria-atomic="true"
            role="status"
        >
            {announcements}
        </div>
    );
};

export default GameAnnouncer; 