import {useContext} from "react";
import {VisitCounterContext} from "../context/visit_context.tsx";

export const useVisitCounter = () => {
    const ctx = useContext(VisitCounterContext);
    if (!ctx) throw new Error("useVisitCounter must be used inside VisitCounterProvider");
    return ctx;
};
