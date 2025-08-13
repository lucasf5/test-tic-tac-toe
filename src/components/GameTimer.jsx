import React from 'react';
import '../styles/GameTimer.css';

const GameTimer = ({ timeLeft, timerStatus, isActive }) => {
    const getTimerClass = () => {
        const baseClass = 'game-timer';
        const statusClass = `timer-${timerStatus}`;
        return `${baseClass} ${statusClass} ${isActive ? 'active' : ''}`;
    };

    const getTimerIcon = () => {
        switch (timerStatus) {
            case 'critical':
                return '⏰';
            case 'warning':
                return '⏱️';
            default:
                return '⏲️';
        }
    };

    const getTimerColor = () => {
        switch (timerStatus) {
            case 'critical':
                return '#f44336';
            case 'warning':
                return '#ff9800';
            default:
                return 'var(--text-color)';
        }
    };

    return (
        <div className="timer-container">
            <div className={getTimerClass()}>
                <span className="timer-icon">{getTimerIcon()}</span>
                <span className="timer-label">Tempo restante:</span>
                <span
                    className="timer-value"
                    style={{ color: getTimerColor() }}
                >
                    {timeLeft}s
                </span>
            </div>

            {isActive && (
                <div className="timer-progress">
                    <div
                        className="timer-progress-bar"
                        style={{
                            width: `${(timeLeft / 5) * 100}%`,
                            backgroundColor: getTimerColor()
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default GameTimer; 