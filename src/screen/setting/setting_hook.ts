import {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = 'app-settings-checkbox';
type Checkbox = {
    isVI: boolean;
    isEnglish: boolean;
    isRomaji: boolean;
};


const useSetting = () =>  {
    const [checkbox, setCheckbox] = useState<Checkbox>({
        isVI: true,
        isEnglish: true,
        isRomaji: true,
    });
    useEffect(() => {
        const loadCheckbox = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if (jsonValue != null) {
                    setCheckbox(JSON.parse(jsonValue));
                }
            } catch (e) {
                console.error("Failed to load settings:", e);
            }
        };
        loadCheckbox();
    }, []);


    useEffect(() => {
        const saveCheckbox = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(checkbox));
            } catch (e) {
                console.error("Failed to save settings:", e);
            }
        };
        saveCheckbox();
    }, [checkbox]);

    return {checkbox,setCheckbox};
}



export default useSetting ;
