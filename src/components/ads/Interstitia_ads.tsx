import {
    InterstitialAd,
    AdEventType,
} from 'react-native-google-mobile-ads';
import { getAdUnitId } from "../../utils";

export const showInterstitialAd = () => {
    const unitId = getAdUnitId('interstitial_free_feature');
    const interstitial = InterstitialAd.createForAdRequest(unitId || '');

    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        interstitial.show();
    });

    interstitial.load();

    setTimeout(() => {
        unsubscribe();
    }, 10000);
};
