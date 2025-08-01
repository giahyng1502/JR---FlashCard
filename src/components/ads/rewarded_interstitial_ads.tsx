import { useEffect } from 'react';
import {
    RewardedInterstitialAd,
    AdEventType,
    RewardedAdEventType,
} from 'react-native-google-mobile-ads';
import { Button } from 'react-native';
import {getAdUnitId} from '../../utils';

const RewardedInterstitialAdComponent = () => {
    const unitId = getAdUnitId('rewarded_interstitial_lesson_complete');
    const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(unitId || '');

    useEffect(() => {
        const loadSub = rewardedInterstitial.addAdEventListener(AdEventType.LOADED, () => {
            rewardedInterstitial.show();
        });

        const rewardSub = rewardedInterstitial.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            (reward) => {
                console.log('User earned reward:', reward);
            }
        );

        rewardedInterstitial.load();

        return () => {
            loadSub();
            rewardSub();
        };
    }, [rewardedInterstitial]);

    return (
        <Button
            title="Load Rewarded Interstitial Ad"
    onPress={() => rewardedInterstitial.load()}
    />
);
};

export default RewardedInterstitialAdComponent;
