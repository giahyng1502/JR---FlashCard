import React, { useRef, useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";
import { getRealm, openRealm } from "../realm";

const AppStateChange: React.FC = () => {
    const appState = useRef(AppState.currentState);

    useEffect(() => {
        const handleAppStateChange = async (nextAppState: AppStateStatus) => {
            const prevAppState = appState.current;

            if (
                ['inactive', 'background'].includes(prevAppState) &&
                nextAppState === 'active'
            ) {
                console.log('App đã vào lại foreground');

                const realm = getRealm();
                if (!realm || realm.isClosed) {
                    try {
                        await openRealm();
                        console.log('Realm đã được mở lại.');
                    } catch (err) {
                        console.error('Lỗi khi mở lại Realm:', err);
                    }
                }
            }

            appState.current = nextAppState;
        };

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, []);

    return null;
};

export default AppStateChange;
