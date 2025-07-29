import React, {useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Grammar } from '../../models';
import GrammarItem from "./grammar_item.tsx";
import {useNavigation} from "@react-navigation/native";
import {GrammarDetailNavigationProp, NameScreenProp} from "../../navigation";

type Props = {
    grammars: Grammar[];
};
const GrammarList = ({ grammars }: Props) => {
    const navigation = useNavigation<GrammarDetailNavigationProp>();
    const keyExtractor = useCallback((item: Grammar, index: number) => {
        return `${item.title}_${index}`;
    }, []);

    const handleGrammarDetail = useCallback((grammar : Grammar) => {
        navigation.navigate(NameScreenProp.grammar_detail,{
            grammar
        })
    },[]);
    const renderItem = React.useCallback(
        ({ item }: { item: Grammar }) => <GrammarItem grammar={item} onPress={handleGrammarDetail} />,
        []
    );
    return (
        <FlashList
            data={grammars}
            renderItem={renderItem}
            estimatedItemSize={80}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
        />
    );
};


const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    meaning: {
        fontSize: 16,
        color: '#555',
        marginTop: 4,
    },
});

export default GrammarList;
