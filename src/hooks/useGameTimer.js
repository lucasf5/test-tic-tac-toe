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
            intervalRef.current = null;
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
            intervalRef.current = null;
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
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
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (!isActive || isPaused) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isActive, isPaused]);

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