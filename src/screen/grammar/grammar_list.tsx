import React, { useCallback, useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import Animated from 'react-native-reanimated';
import { FlashList } from '@shopify/flash-list';
import { Grammar } from '../../models';
import GrammarItem from './grammar_item';
import { useNavigation } from '@react-navigation/native';
import { GrammarDetailNavigationProp, NameScreenProp } from '../../navigation';
import BannerAdComponent from "../../components/ads/banner_ads.tsx";
import {BannerAdSize} from "react-native-google-mobile-ads";
import {NativeComponent} from "../../components/ads/native_card_ads.tsx";
import {GrammarListItem} from "../../utils";

type Props = {
    grammars: Grammar[];
    scrollHandler?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<Grammar>);

const GrammarList = ({ grammars, scrollHandler }: Props) => {
    const navigation = useNavigation<GrammarDetailNavigationProp>();
    const listRef = useRef<FlashList<Grammar>>(null); // optional, in case you need to scroll to top later

    const keyExtractor = useCallback((item: Grammar, index: number) => {
        return `${item.title}_${index}`;
    }, []);

    const handleGrammarDetail = useCallback((grammar: Grammar) => {
        navigation.navigate(NameScreenProp.grammar_detail, {
            grammar,
        });
    }, [navigation]);


    const renderItem = useCallback(
        ({ item }: { item: GrammarListItem }) => {
            if ("type" in item && item.type === "native_ad") {
                return <NativeComponent />;
            }
            return <GrammarItem grammar={item} onPress={handleGrammarDetail} />;
        },
        [handleGrammarDetail]
    );


    return (
        <AnimatedFlashList
            ref={listRef}
            data={grammars}
            renderItem={renderItem}
            estimatedItemSize={80}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            ListHeaderComponent={<BannerAdComponent size={BannerAdSize.BANNER}/>}

        />
    );
};

export default GrammarList;
