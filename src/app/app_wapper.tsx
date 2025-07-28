import React, {useEffect} from 'react';
import App from '../../App';
import {preloadAllRealms} from "../realm/service/save_data_to_local.ts";

export default function AppWrapper() {
    useEffect(() => {
        preloadAllRealms();
    }, []);
    return (
            <App />
    );
}

