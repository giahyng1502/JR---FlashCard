import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {FlashList} from '@shopify/flash-list';
import {Vocabulary} from '../../models';
import VocabularyItem from './vocabulary_item';
import {useNavigation} from '@react-navigation/native';
import {MainNavigationProp, NameScreenProp} from '../../navigation';
import {playLocalSound} from '../../configs/audio/play_audio.ts';
import BannerAdComponent from "../../components/ads/banner_ads.tsx";
import {BannerAdSize} from "react-native-google-mobile-ads";
import {VocabularyListItem} from "../../utils/convert_vocabulary.ts";
import {NativeComponent} from "../../components/ads/native_card_ads.tsx";

type Props = {
    vocabs: Vocabulary[];
    scrollHandler?: any; // Animated scroll handler
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<Vocabulary>);

const VocabularyList = ({ vocabs, scrollHandler }: Props) => {
    const navigation = useNavigation<MainNavigationProp>();

    const handleVocabDetail = useCallback((vocab: Vocabulary) => {
        navigation.navigate(NameScreenProp.vocabulary_detail, { vocab });
    }, [navigation]);

    const handlePlayAudio = useCallback((file_name: string) => {
        playLocalSound(file_name);
    }, []);


    const renderItem = useCallback(({ item }: { item: VocabularyListItem }) => {
        if ("type" in item && item.type === "native_ad") {
            return <NativeComponent />;
        }

        // item là Vocabulary
        return (
            <VocabularyItem
                vocab={item}
                onPress={handleVocabDetail}
                onPlayAudio={handlePlayAudio}
            />
        );
    }, [handlePlayAudio, handleVocabDetail]);

    const keyExtractor = useCallback((item: Vocabulary, index: number) => {
        return `${item.word}-${index}`;
    }, []);

    return (
        <AnimatedFlashList
            data={vocabs}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            estimatedItemSize={60}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            ListHeaderComponent={<BannerAdComponent size={BannerAdSize.BANNER}/>}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    word: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    meaning: {
        fontSize: 16,
        color: '#555',
    },
});

export default VocabularyList;
