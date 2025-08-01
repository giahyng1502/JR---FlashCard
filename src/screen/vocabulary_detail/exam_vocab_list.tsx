import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ExampleVocabulary} from '../../models';
import ExampleVocabularyItem from "./exam_vocab_item.tsx";

type Props = {
  examples?: ExampleVocabulary[];
};

const ExamplesVocabularyList = ({examples}: Props) => {

  return (
      <View style={styles.container}>
        {examples?.map((item, index) => (
            <ExampleVocabularyItem key={`${item.en}_${index}`} example={item} />
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
});

export default ExamplesVocabularyList;
