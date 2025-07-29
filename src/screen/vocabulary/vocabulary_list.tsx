import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Vocabulary } from '../../models';
import VocabularyItem from "./vocabulary_item.tsx";

type Props = {
    vocabs: Vocabulary[];
};

const VocabularyList = ({ vocabs }: Props) => {
    console.log(vocabs.length);
    const renderItem = useCallback(({ item }: { item: Vocabulary }) => {
        return (
            <VocabularyItem vocab={item}/>
        );
    }, []);

    const keyExtractor = useCallback((item: Vocabulary, index: number) => {
        return `${item.word}-${index}`;
    }, []);

    return (
        <FlashList
            data={vocabs}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            estimatedItemSize={60}
            showsVerticalScrollIndicator={false}
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
