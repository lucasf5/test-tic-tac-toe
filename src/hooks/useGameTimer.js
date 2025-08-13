import { useState, useEffect, useCallback, useRef } from 'react';

export const useGameTimer = (initialTime = 5) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const startTimer = useCallback(() => {
        setIsActive(true);
        setIsPaused(false);
        setTimeLeft(initialTime);
    }, [initialTime]);

    const pauseTimer = useCallback(() => {
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    const resumeTimer = useCallback(() => {
        setIsPaused(false);
    }, []);

    const resetTimer = useCallback(() => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(initialTime);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, [initialTime]);

    const getTimerStatus = useCallback(() => {
        if (!isActive) return 'idle';
        if (isPaused) return 'paused';
        if (timeLeft <= 1) return 'critical';
        if (timeLeft <= 2) return 'warning';
        return 'normal';
    }, [isActive, isPaused, timeLeft]);

    useEffect(() => {
        if (isActive && !isPaused && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isActive, isPaused, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0 && isActive) {
            timeoutRef.current = setTimeout(() => {
                setIsActive(false);
            }, 100);
        }
    }, [timeLeft, isActive]);

    return {
        timeLeft,
        isActive,
        isPaused,
        startTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
        getTimerStatus
    };
}; 