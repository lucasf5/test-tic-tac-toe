import { useState, useCallback } from 'react';

export const useGameAnimations = () => {
    const [animations, setAnimations] = useState({
        squareAppear: false,
        winnerHighlight: false,
        scoreUpdate: false,
        themeTransition: false
    });

    const triggerAnimation = useCallback((animationName, duration = 300) => {
        setAnimations(prev => ({
            ...prev,
            [animationName]: true
        }));

        setTimeout(() => {
            setAnimations(prev => ({
                ...prev,
                [animationName]: false
            }));
        }, duration);
    }, []);

    const animateSquareAppear = useCallback(() => {
        triggerAnimation('squareAppear', 300);
    }, [triggerAnimation]);

    const animateWinnerHighlight = useCallback(() => {
        triggerAnimation('winnerHighlight', 1000);
    }, [triggerAnimation]);

    const animateScoreUpdate = useCallback(() => {
        triggerAnimation('scoreUpdate', 500);
    }, [triggerAnimation]);

    const animateThemeTransition = useCallback(() => {
        triggerAnimation('themeTransition', 400);
    }, [triggerAnimation]);

    return {
        animations,
        animateSquareAppear,
        animateWinnerHighlight,
        animateScoreUpdate,
        animateThemeTransition
    };
}; 