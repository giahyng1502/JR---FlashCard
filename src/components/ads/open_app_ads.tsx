import { useEffect } from 'react';
import {
    AppOpenAd,
    AdEventType,
} from 'react-native-google-mobile-ads';
import {getAdUnitId} from "../../utils";

const AppOpenAdComponent = () => {
    const unitId = getAdUnitId('open_app');

    useEffect(() => {
        if (!unitId) return;

        const appOpenAd = AppOpenAd.createForAdRequest(unitId);
        const unsubscribe = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
            appOpenAd.show();
        });

        appOpenAd.load();

        return unsubscribe;
    }, [unitId]);

    return null;
};

export default AppOpenAdComponent;
