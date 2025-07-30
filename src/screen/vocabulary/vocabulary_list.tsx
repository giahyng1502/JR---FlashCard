import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Vocabulary } from '../../models';
import VocabularyItem from "./vocabulary_item.tsx";
import {useNavigation} from "@react-navigation/native";
import {MainNavigationProp, NameScreenProp} from "../../navigation";
import {playLocalSound} from "../../configs/audio/play_audio.ts";

type Props = {
    vocabs: Vocabulary[];
};

const VocabularyList = ({ vocabs }: Props) => {

    const navigation = useNavigation<MainNavigationProp>();

    const handleVocabDetail = useCallback((vocab : Vocabulary)=>{
        navigation.navigate(NameScreenProp.vocabulary_detail,{
            vocab
        })
    },[navigation])

    const handlePlayAudio = useCallback((file_name : string)=>{
        playLocalSound(file_name);
    },[])
    const renderItem = useCallback(({ item }: { item: Vocabulary }) => {
        return (
            <VocabularyItem vocab={item} onPress={handleVocabDetail} onPlayAudio={handlePlayAudio} />
        );
    }, [handlePlayAudio, handleVocabDetail]);

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
