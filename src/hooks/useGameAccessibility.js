import { useState, useEffect, useCallback } from 'react';
import { soundManager } from '../utils/soundEffects';

export const useGameAccessibility = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    soundEnabled: true
  });

  const [announcements, setAnnouncements] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAccessibilitySettings(prev => ({
      ...prev,
      reducedMotion: mediaQuery.matches
    }));

    const handleChange = (e) => {
      setAccessibilitySettings(prev => ({
        ...prev,
        reducedMotion: e.matches
      }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setAccessibilitySettings(prev => ({
      ...prev,
      highContrast: mediaQuery.matches
    }));

    const handleChange = (e) => {
      setAccessibilitySettings(prev => ({
        ...prev,
        highContrast: e.matches
      }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const announceToScreenReader = useCallback((message) => {
    setAnnouncements(message);
    setTimeout(() => setAnnouncements(''), 1000);
  }, []);

  const getAccessibilityClass = useCallback(() => {
    const classes = [];
    if (accessibilitySettings.reducedMotion) classes.push('reduced-motion');
    if (accessibilitySettings.highContrast) classes.push('high-contrast');
    if (accessibilitySettings.largeText) classes.push('large-text');
    return classes.join(' ');
  }, [accessibilitySettings]);

  const toggleLargeText = useCallback(() => {
    setAccessibilitySettings(prev => ({
      ...prev,
      largeText: !prev.largeText
    }));
  }, []);

  const toggleSound = useCallback(() => {
    const newSoundState = soundManager.toggleSound();
    setAccessibilitySettings(prev => ({
      ...prev,
      soundEnabled: newSoundState
    }));
  }, []);

  const playSound = useCallback((soundName) => {
    if (accessibilitySettings.soundEnabled) {
      soundManager.play(soundName);
    }
  }, [accessibilitySettings.soundEnabled]);

  return {
    accessibilitySettings,
    announcements,
    announceToScreenReader,
    getAccessibilityClass,
    toggleLargeText,
    toggleSound,
    playSound
  };
}; 