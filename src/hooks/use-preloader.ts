
'use client';
import { useState, useEffect } from 'react';

export const usePreloader = (delay = 3000) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Optional: Store in session storage to only show once per session
            sessionStorage.setItem('preloaderShown', 'true');
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);
    
    // Optional: Check session storage to avoid re-showing
    useEffect(() => {
        if(sessionStorage.getItem('preloaderShown')) {
            setIsLoading(false);
        }
    }, [])

    return isLoading;
}
