import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ExampleVocabulary} from "../../models";
import TextComponent from "../../components/ui/text_component.tsx";
import {FONT_SIZE, PADDING} from "../../styles";

type Props = {
  example : ExampleVocabulary
}

const ExampleVocabularyItem = ({example} : Props) => {
  return (
      <View style={styles.container}>
         <View style={styles.jp}>
           {example.segments.map((segment, index) => (
               <View key={`${segment.furigana}_${index}`} style={styles.segment}>
                 <TextComponent style={styles.furigana}>{segment.furigana}</TextComponent>
                 <TextComponent style={styles.unlinked}>{segment.unlinked}</TextComponent>
               </View>
           ))}
         </View>
        <View style={{height : PADDING.SM}}/>
        <TextComponent>{example.en}</TextComponent>
        <View style={{height : PADDING.SM}}/>
        <TextComponent>{example.vi}</TextComponent>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  jp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  segment: {
    alignItems: 'flex-start',
    justifyContent : 'center'
  },
  furigana: {
    fontSize: FONT_SIZE.X,
  },
  unlinked: {
    fontSize: FONT_SIZE.XL,
  },
});


export default React.memo(ExampleVocabularyItem);
