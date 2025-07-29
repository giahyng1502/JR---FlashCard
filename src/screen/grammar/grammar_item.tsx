import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Grammar} from "../../models";
import {useAppTheme} from "../../hooks";
import TextComponent from "../../components/ui/text_component.tsx";
import {FONT_SIZE, MARGIN, PADDING, RADIUS} from "../../styles";

type Props = {
    grammar: Grammar;
    onPress: (grammar : Grammar) => void;
}

const GrammarItem = ({grammar,onPress} : Props) => {
    const {theme} = useAppTheme();
    return (
        <TouchableOpacity style={[styles.container,{
            backgroundColor : theme.primary
        }]} onPress={()=>{
            onPress && onPress(grammar);
        }}>
            <TextComponent bold size={FONT_SIZE.LG}>{grammar.title}</TextComponent>
            <TextComponent size={FONT_SIZE.SM}>{grammar.short_explanation}</TextComponent>
            <TextComponent size={FONT_SIZE.SM}>{grammar.short_explanation_vi}</TextComponent>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginVertical : MARGIN.XS,
      padding : PADDING.SM,
      borderRadius : RADIUS.MD,
      gap : 8
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default React.memo(GrammarItem);
