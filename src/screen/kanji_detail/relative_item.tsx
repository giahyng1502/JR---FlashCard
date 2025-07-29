import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ThemeColors} from "../../types";
import {RelatedWord} from "../../models";
import TextComponent from "../../components/ui/text_component.tsx";
import {FONT_SIZE, PADDING} from "../../styles";

type Props = {
  item : RelatedWord
}

const RelativeItem = ({item} : Props) => (
  <View style={styles.container}>
    <View style={styles.kanji}>
      <TextComponent size={FONT_SIZE.X}> {item.reading}</TextComponent>
      <TextComponent size={FONT_SIZE.XXL}>{item.word}</TextComponent>
    </View>
    <View style={styles.mean}>
      <TextComponent>{item.meaning_en}</TextComponent>
      <TextComponent>{item.meaning_vi}</TextComponent>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    alignItems : 'center',
    borderTopWidth : 0.5,
    padding : PADDING.XS
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  kanji : {
    width : '35%',
    justifyContent : 'center',
    alignContent: 'center',
  },
  mean : {
    flexShrink : 1,
  }
});

export default RelativeItem;
