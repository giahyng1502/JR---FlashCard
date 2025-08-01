import React, { useState, useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useAnimatedScrollHandler,
    interpolate,
    useAnimatedReaction,
    runOnJS,
} from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';

import HeaderComponent from '../../components/ui/header_component';
import { JLPTLevel } from '../../types';
import useVocabulary from './vocabulary_hook';
import VocabularyList from './vocabulary_list';
import SearchComponent from '../../components/ui/search_component';
import LevelComponent from '../../components/ui/level_component';
import HiraganaListComponent from '../../components/ui/letter_component';
import Container from '../../components/ui/container';
import BannerAdComponent from "../../components/ads/banner_ads.tsx";

const VocabularyUI = () => {
    const [keyword, setKeyword] = useState('');
    const [posKeyword, setPosKeyword] = useState('');
    const [level, setLevel] = useState<JLPTLevel>();
    const [prefix, setPrefix] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const prevY = useSharedValue(0);
    const progress = useSharedValue(0); // 0: hiện, 1: ẩn
    const isHidden = useSharedValue(false);
    const hasFilter = useSharedValue(false);

    // Animated style for search bar
    const searchAnimStyle = useAnimatedStyle(() => {
        const height = interpolate(progress.value, [0, 1], [150, 0]);
        const translateY = interpolate(progress.value, [0, 1], [0, -20]);
        const opacity = interpolate(progress.value, [0, 1], [1, 0]);

        return {
            height,
            opacity,
            transform: [{ translateY }],
            overflow: 'hidden',
        };
    });

    useAnimatedReaction(
        () => progress.value,
        (current, prev) => {
            if (current !== prev) {
                runOnJS(setIsSearch)(current === 1);
            }
        }
    );
    useEffect(() => {
        hasFilter.value = !!(keyword || posKeyword || level || prefix);
    }, [keyword, posKeyword, level, prefix]);

    // Scroll handler
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            const offsetY = event.contentOffset.y;
            const diff = offsetY - prevY.value;

            if (diff > 6 && offsetY > 30 && !isHidden.value && !hasFilter.value) {
                // Chỉ ẩn nếu KHÔNG có filter
                isHidden.value = true;
                progress.value = withTiming(1, { duration: 200 });
            }
            prevY.value = offsetY;
        },
    });


    const vocabularies = useVocabulary({
        keyword,
        prefix,
        level,
        posKeyword,
    });

    return (
        <Container>
            <HeaderComponent
                title="Vocabulary"
                isSearch={isSearch}
                onSearch={() => {
                    if (isHidden.value) {
                        isHidden.value = false;
                        progress.value = withTiming(0, { duration: 300 });
                    }
                }}
            />

            <Animated.View style={[styles.searchContainer, searchAnimStyle]}>
                <SearchComponent
                    value={keyword}
                    onValueChange={setKeyword}
                    searchPlaceholder="JP / Romaji / EN / VI"
                />
                <LevelComponent levelCurrent={level} onLevelCurrentChange={setLevel} />
                <HiraganaListComponent currentLetter={prefix} onLetterChange={setPrefix} />
            </Animated.View>
            <VocabularyList vocabs={vocabularies} scrollHandler={onScroll} />
        </Container>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        paddingHorizontal: 12,
        paddingTop: 8,
    },
});

export default VocabularyUI;
