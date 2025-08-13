import { useState, useEffect } from 'react';
import { getThemePreset, applyThemeToDOM } from '../utils/themePresets';

export const useGameTheme = () => {
  const [theme, setTheme] = useState({
    xColor: '#ff4757',
    oColor: '#3742fa',
    backgroundColor: '#f1f2f6',
    boardColor: '#ffffff',
    textColor: '#2f3542'
  });
  
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);
  
  const updateColor = (colorType, value) => {
    setTheme(prev => ({
      ...prev,
      [colorType]: value
    }));
  };
  
  const applyPreset = (presetName) => {
    const presetTheme = getThemePreset(presetName);
    setTheme(presetTheme);
  };
  
  return {
    theme,
    isCustomizationOpen,
    setIsCustomizationOpen,
    updateColor,
    applyPreset
  };
}; 