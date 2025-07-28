import { useEffect, useRef, useState } from 'react';

export function useThrottled<T>(value: T, delay: number): T {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        const now = Date.now();
        const remaining = delay - (now - lastExecuted.current);

        if (remaining <= 0) {
            lastExecuted.current = now;
            setThrottledValue(value);
        } else {
            const timeout = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, remaining);

            return () => clearTimeout(timeout);
        }
    }, [value, delay]);

    return throttledValue;
}
