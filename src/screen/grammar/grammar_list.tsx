import React, {useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Grammar } from '../../models';
import GrammarItem from "./grammar_item.tsx";

type Props = {
    grammars: Grammar[];
};
const GrammarList = ({ grammars }: Props) => {
    const renderItem = React.useCallback(
        ({ item }: { item: Grammar }) => <GrammarItem grammar={item} />,
        []
    );
    const keyExtractor = useCallback((item: Grammar, index: number) => {
        return `${item.title}_${index}`;
    }, []);

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
