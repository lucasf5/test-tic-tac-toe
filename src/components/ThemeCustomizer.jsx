import React from 'react';
import '../styles/ThemeCustomizer.css';

const ThemeCustomizer = ({ isOpen, onClose, theme, updateColor, applyPreset }) => {
    if (!isOpen) return null;

    const colorOptions = [
        { key: 'xColor', label: 'Cor do X', value: theme.xColor },
        { key: 'oColor', label: 'Cor do O', value: theme.oColor },
        { key: 'backgroundColor', label: 'Cor de fundo', value: theme.backgroundColor },
        { key: 'boardColor', label: 'Cor do tabuleiro', value: theme.boardColor },
        { key: 'textColor', label: 'Cor do texto', value: theme.textColor }
    ];

    const presets = [
        { name: 'classic', label: 'Clássico' },
        { name: 'dark', label: 'Escuro' },
        { name: 'nature', label: 'Natureza' },
        { name: 'sunset', label: 'Pôr do Sol' }
    ];

    return (
        <div className="theme-customizer-overlay" onClick={onClose}>
            <div className="theme-customizer" onClick={(e) => e.stopPropagation()}>
                <div className="customizer-header">
                    <h3>Personalizar Cores</h3>
                    <button
                        className="close-btn"
                        onClick={onClose}
                        aria-label="Fechar personalização"
                    >
                        ✕
                    </button>
                </div>

                <div className="customizer-content">
                    <div className="color-section">
                        <h4>Cores Personalizadas</h4>
                        {colorOptions.map(({ key, label, value }) => (
                            <div key={key} className="color-input-group">
                                <label htmlFor={key}>{label}</label>
                                <div className="color-input-container">
                                    <input
                                        type="color"
                                        id={key}
                                        value={value}
                                        onChange={(e) => updateColor(key, e.target.value)}
                                        aria-label={`Selecionar ${label.toLowerCase()}`}
                                    />
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => updateColor(key, e.target.value)}
                                        placeholder="#000000"
                                        aria-label={`Digitar ${label.toLowerCase()}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="preset-section">
                        <h4>Presets</h4>
                        <div className="preset-buttons">
                            {presets.map(({ name, label }) => (
                                <button
                                    key={name}
                                    className="preset-btn"
                                    onClick={() => applyPreset(name)}
                                    aria-label={`Aplicar tema ${label}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeCustomizer; 