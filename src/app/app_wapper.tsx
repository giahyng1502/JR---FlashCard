import React, {useEffect} from 'react';
import App from '../../App';
import {preloadAllRealms} from "../realm/service/vocabulary_service.ts";

export default function AppWrapper() {
    useEffect(() => {
        preloadAllRealms();
    }, []);
    return (
            <App />
    );
}

