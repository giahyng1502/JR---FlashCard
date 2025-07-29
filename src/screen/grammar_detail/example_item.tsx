import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ExamplesGrammar} from "../../models";
import TextComponent from "../../components/ui/text_component.tsx";
import {FONT_SIZE, MARGIN, PADDING} from "../../styles";
type Props = {
    item : ExamplesGrammar
    index : number
}
const ExampleItem = ({item,index} : Props) => (
  <View style={styles.container}>
    <TextComponent bold size={FONT_SIZE.LG}>{index + 1}.{item.jp}</TextComponent>
      <View style={{height : PADDING.XS}}/>
    <TextComponent size={FONT_SIZE.MD}>{item.romaji}</TextComponent>
      <View style={{height : PADDING.XS}}/>
    <TextComponent size={FONT_SIZE.MD}>{item.en}</TextComponent>
      <View style={{height : PADDING.XS}}/>
    <TextComponent size={FONT_SIZE.MD}>{item.vi}</TextComponent>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginVertical : MARGIN.SM
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default React.memo(ExampleItem);
