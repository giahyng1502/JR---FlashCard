import React from 'react';
import {ScrollView} from 'react-native';
import {ExamplesGrammar} from '../../models';
import ExampleItem from './example_item.tsx';
import BannerAdComponent from "../../components/ads/banner_ads.tsx";
import {BannerAdSize} from "react-native-google-mobile-ads";

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
            <BannerAdComponent size={BannerAdSize.INLINE_ADAPTIVE_BANNER}/>
        </ScrollView>
    );
};

export default GrammarList;
