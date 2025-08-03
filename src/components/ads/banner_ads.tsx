import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { View } from 'react-native';
import {getAdUnitId} from "../../utils";
type Props = {
    size? : BannerAdSize;
}
const BannerAdComponent = ({size = BannerAdSize.BANNER} : Props) => {

    const unitId = getAdUnitId('banner');

    if (!unitId) return null;
    return (
        <View style={{width : '100%',alignItems : 'center',padding : 15}}>
            <BannerAd
                unitId={unitId}
                size={size}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
                onAdLoaded={() => {
                    console.log('Ad loaded');
                }}
                onAdFailedToLoad={(error) => {
                    console.error('Ad failed to load:', error);
                }}
            />
        </View>
    );
};

export default BannerAdComponent;
