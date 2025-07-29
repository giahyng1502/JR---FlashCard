import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ExamplesGrammar} from "../../models";
import ExampleItem from "./example_item.tsx";
type Props = {
    items: ExamplesGrammar[],
    headerComponent: React.FC
}

const GrammarList = ({ items ,headerComponent}: Props) => {
    const renderItem = useCallback(
        ({ item,index }: { item: ExamplesGrammar,index : number }) => (
            <ExampleItem item={item} index={index}/>
        ),
        []
    );

    const keyExtractor = useCallback(
        (item: ExamplesGrammar, index: number) => `${index}_${item.jp}`,
        []
    );

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={{
                marginBottom : 100
            }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default GrammarList;

