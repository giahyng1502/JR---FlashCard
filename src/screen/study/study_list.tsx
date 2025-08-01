import React, {useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useStudyHook from "./study_hook.ts";
import {FlashList} from "@shopify/flash-list";
import {Study} from "../../models";
import StudyItem from "./study_item.tsx";


const StudyList = () => {
    const studiesList = useStudyHook();
    console.log(studiesList);
    const renderItem = useCallback(({ item }: { item: Study }) => {
        return <StudyItem item={item} />;
    }, []);
    const keyExtractor = useCallback((item: Study, index: number) => {
        return `${item._id.toHexString()}_${index}`;
    }, []);

    return (
        <FlashList
            data={studiesList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            estimatedItemSize={60}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default StudyList;
