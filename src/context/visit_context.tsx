import React, { createContext, useState, useContext } from "react";

type VisitCounterContextType = {
    counters: Record<string, number>;
    increment: (screenName: string) => void;
    reset: (screenName : string) => void;
};

export const VisitCounterContext = createContext<VisitCounterContextType | undefined>(undefined);

export const VisitCounterProvider = ({ children }: { children: React.ReactNode }) => {
    const [counters, setCounters] = useState<Record<string, number>>({});

    const increment = (screenName: string) => {
        setCounters((prev) => ({
            ...prev,
            [screenName]:  (prev[screenName] || 0) + 1,
        }));
    };
    const reset = (screenName: string) => {
        setCounters((prev) => ({
            ...prev,
            [screenName]:  0,
        }));
    };

    return (
        <VisitCounterContext.Provider value={{ counters, increment ,reset }}>
            {children}
        </VisitCounterContext.Provider>
    );
};

export const useVisitCounter = () => {
    const context = useContext(VisitCounterContext);
    if (!context) throw new Error("useVisitCounter must be used inside VisitCounterProvider");
    return context;
};
