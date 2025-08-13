export const THEME_PRESETS = {
  classic: {
    xColor: '#ff4757',
    oColor: '#3742fa',
    backgroundColor: '#f1f2f6',
    boardColor: '#ffffff',
    textColor: '#2f3542'
  },
  dark: {
    xColor: '#ff6b6b',
    oColor: '#4ecdc4',
    backgroundColor: '#2d3436',
    boardColor: '#636e72',
    textColor: '#ffffff'
  },
  nature: {
    xColor: '#00b894',
    oColor: '#fdcb6e',
    backgroundColor: '#e8f5e8',
    boardColor: '#ffffff',
    textColor: '#2d3436'
  },
  sunset: {
    xColor: '#e17055',
    oColor: '#fdcb6e',
    backgroundColor: '#ffeaa7',
    boardColor: '#fab1a0',
    textColor: '#2d3436'
  }
};

export const getThemePreset = (presetName) => {
  return THEME_PRESETS[presetName] || THEME_PRESETS.classic;
};

export const applyThemeToDOM = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--x-color', theme.xColor);
  root.style.setProperty('--o-color', theme.oColor);
  root.style.setProperty('--bg-color', theme.backgroundColor);
  root.style.setProperty('--board-color', theme.boardColor);
  root.style.setProperty('--text-color', theme.textColor);
}; 