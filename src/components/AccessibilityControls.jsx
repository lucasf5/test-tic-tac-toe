import React from 'react';
import '../styles/AccessibilityControls.css';

const AccessibilityControls = ({
    accessibilitySettings,
    onToggleLargeText,
    onToggleSound
}) => {
    return (
        <div className="accessibility-controls" role="group" aria-label="Controles de acessibilidade">
            <button
                className={`accessibility-btn ${accessibilitySettings.largeText ? 'active' : ''}`}
                onClick={onToggleLargeText}
                aria-label={`${accessibilitySettings.largeText ? 'Desativar' : 'Ativar'} texto grande`}
                title="Alternar tamanho do texto"
            >
                <span className="icon">🔍</span>
                <span className="label">Texto Grande</span>
            </button>

            <button
                className={`accessibility-btn ${accessibilitySettings.soundEnabled ? 'active' : ''}`}
                onClick={onToggleSound}
                aria-label={`${accessibilitySettings.soundEnabled ? 'Desativar' : 'Ativar'} sons`}
                title="Alternar sons"
            >
                <span className="icon">🔊</span>
                <span className="label">Sons</span>
            </button>

            <div className="accessibility-info">
                <span className="info-text">
                    {accessibilitySettings.reducedMotion && 'Movimento reduzido ativo'}
                    {accessibilitySettings.highContrast && 'Alto contraste ativo'}
                </span>
            </div>
        </div>
    );
};

export default AccessibilityControls; 