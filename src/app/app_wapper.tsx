import React, { useEffect, useState } from 'react';
import App from '../../App';
import {preloadAllRealms} from "../realm/service";

export default function AppWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                await preloadAllRealms();
                setIsLoaded(true);
            } catch (err) {
                console.error("Lỗi preload Realm:", err);
            }
        };
        loadData();
    }, []);

    if (!isLoaded) return null;

    return <App />;
}
