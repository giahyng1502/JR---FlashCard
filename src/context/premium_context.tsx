import React, { createContext, useEffect, useState } from "react";
import Purchases from "react-native-purchases";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PremiumModal from "../modal/premium_modal.tsx";

const STORAGE_KEY = 'is_vip';

type PremiumType = {
    showPremium: (isShow: boolean) => void;
    isVIP: boolean;
    refreshVIP: () => Promise<void>;
};

export const PremiumContext = createContext<PremiumType>({
    showPremium: () => {},
    isVIP: false,
    refreshVIP: async () => {},
});

export const PremiumContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isVIP, setIsVIP] = useState<boolean>(false);

    const saveVIPToStorage = async (vip: boolean) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, vip ? '1' : '0');
        } catch (error) {
            console.warn('Failed to save VIP status:', error);
        }
    };

    const loadVIPFromStorage = async () => {
        try {
            const val = await AsyncStorage.getItem(STORAGE_KEY);
            setIsVIP(val === '1');
        } catch (error) {
            console.warn('Failed to load VIP from storage:', error);
        }
    };

    const fetchVIPStatus = async () => {
        try {
            const info = await Purchases.getCustomerInfo();
            const active = info.entitlements.active;
            const vip = !!active['premium'];
            setIsVIP(vip);
            await saveVIPToStorage(vip);
        } catch (error) {
            console.warn("Failed to fetch VIP status:", error);
        }
    };

    useEffect(() => {
        // load local trước, rồi fetch từ server sau
        loadVIPFromStorage().then(fetchVIPStatus);
    }, []);

    const showPremium = (show: boolean) => {
        if (isVIP) return;
        setIsShow(show);
    };

    return (
        <PremiumContext.Provider value={{ showPremium, isVIP, refreshVIP: fetchVIPStatus }}>
            {children}
            {!isVIP && isShow && (
                <PremiumModal onBackPress={() => setIsShow(false)} />
            )}
        </PremiumContext.Provider>
    );
};
