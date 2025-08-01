import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {Kanji} from '../../../models';
import KanjiItem from './kanji_item';
import {useNavigation} from "@react-navigation/native";
import {KanjiDetailNavigationProp, NameScreenProp} from "../../../navigation";
import {useAppTheme} from "../../../hooks";
import BannerAdComponent from "../../../components/ads/banner_ads.tsx";
import {BannerAdSize} from "react-native-google-mobile-ads";

type Props = {
    kanjis: Kanji[];
};

const KanjiList: React.FC<Props> = ({
                                        kanjis,
                                    }) => {

    const navigation = useNavigation<KanjiDetailNavigationProp>();
    const { theme } = useAppTheme();

    const handlePress = useCallback((character : string)=>{
        navigation.navigate(NameScreenProp.kanjiDetail,{
            character
        })
    },[])

    const renderItem = React.useCallback(
        ({item}: { item: Kanji }) => <KanjiItem item={item} onPress={handlePress}/>,
        [handlePress, theme]
    );

    const keyExtractor = React.useCallback(
        (item: Kanji, index: number) => `${item.character}_${index}`,
        []
    );



    return (
        <FlashList
            data={kanjis}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            estimatedItemSize={48}
            numColumns={6}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            removeClippedSubviews={true}
            ListHeaderComponent={<BannerAdComponent size={BannerAdSize.BANNER}/>}

        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
});

export default KanjiList;
