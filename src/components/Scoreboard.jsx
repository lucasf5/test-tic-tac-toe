import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ score, gameCount, matchWinner, onResetScore }) => {
    const getMatchStatus = () => {
        if (matchWinner) {
            return `🏆 ${matchWinner} venceu a partida!`;
        }
        if (score.X >= 11 || score.O >= 11) {
            return `🏆 ${score.X >= 11 ? 'X' : 'O'} venceu a partida!`;
        }
        return `Primeiro a 11 vitórias vence!`;
    };

    return (
        <div className="scoreboard">
            <div className="scoreboard-header">
                <h3>Placar</h3>
                <button
                    className="reset-score-btn"
                    onClick={onResetScore}
                    aria-label="Resetar placar"
                >
                    🔄 Resetar
                </button>
            </div>

            <div className="score-container">
                <div className="score-item">
                    <span className="player">X</span>
                    <span className="score">{score.X}</span>
                </div>

                <div className="score-item">
                    <span className="player">O</span>
                    <span className="score">{score.O}</span>
                </div>

                <div className="score-item">
                    <span className="player">Empates</span>
                    <span className="score">{score.draws}</span>
                </div>
            </div>

            <div className="game-count">
                <span>Partidas jogadas: {gameCount}</span>
            </div>

            <div className="match-status">
                <p>{getMatchStatus()}</p>
            </div>

            {matchWinner && (
                <div className="match-winner">
                    <button
                        className="new-match-btn"
                        onClick={onResetScore}
                    >
                        Nova Partida
                    </button>
                </div>
            )}
        </div>
    );
};

export default Scoreboard; 