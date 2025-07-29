import React from 'react';
import { ScrollView, View } from 'react-native';
import { ExamplesGrammar } from '../../models';
import ExampleItem from './example_item.tsx';

type Props = {
    items: ExamplesGrammar[];
    headerComponent: React.FC;
};

const GrammarList = ({ items, headerComponent: HeaderComponent }: Props) => {
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
        >
            <HeaderComponent />
            {items.map((item, index) => (
                <ExampleItem key={`${index}_${item.jp}`} item={item} index={index} />
            ))}
        </ScrollView>
    );
};

export default GrammarList;
