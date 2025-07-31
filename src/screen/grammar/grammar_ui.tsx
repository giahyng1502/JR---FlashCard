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
import { StyleSheet } from 'react-native';

import HeaderComponent from '../../components/ui/header_component';
import SearchComponent from '../../components/ui/search_component';
import LevelComponent from '../../components/ui/level_component';
import { JLPTLevel } from '../../types';
import { useGrammar } from './grammar_hook';
import GrammarList from './grammar_list';
import Container from '../../components/ui/container';

const GrammarUi = () => {
    const [value, setValue] = useState('');
    const [level, setLevel] = useState<JLPTLevel>();
    const [isSearch, setIsSearch] = useState(false);

    const grammars = useGrammar({ keyword: value, level });

    const prevY = useSharedValue(0);
    const progress = useSharedValue(0);
    const isHidden = useSharedValue(false);
    const hasFilter = useSharedValue(false);

    // Ẩn/hiện thanh tìm kiếm mượt
    const searchAnimStyle = useAnimatedStyle(() => {
        const height = interpolate(progress.value, [0, 1], [120, 0]);
        const translateY = interpolate(progress.value, [0, 1], [0, -16]);
        const opacity = interpolate(progress.value, [0, 1], [1, 0]);
        return {
            height,
            opacity,
            transform: [{ translateY }],
            overflow: 'hidden',
        };
    });

    useEffect(() => {
        hasFilter.value = !!(value || level);
    }, [value, level]);

    useAnimatedReaction(
        () => progress.value,
        (current, prev) => {
            if (current !== prev) {
                runOnJS(setIsSearch)(current === 1);
            }
        }
    );

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            const offsetY = event.contentOffset.y;
            const diff = offsetY - prevY.value;

            if (diff > 6 && offsetY > 30 && !isHidden.value && !hasFilter.value) {
                isHidden.value = true;
                progress.value = withTiming(1, {duration: 250});
            }
            prevY.value = offsetY;
        },
    });

    return (
        <Container>
            <HeaderComponent
                title="Grammar"
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
                    value={value}
                    onValueChange={setValue}
                    searchPlaceholder="Search grammar, meaning (vi/en)..."
                />
                <LevelComponent
                    levelCurrent={level}
                    onLevelCurrentChange={setLevel}
                />
            </Animated.View>

            <GrammarList grammars={grammars} scrollHandler={onScroll} />
        </Container>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        paddingHorizontal: 12,
        paddingTop: 8,
    },
});

export default GrammarUi;
