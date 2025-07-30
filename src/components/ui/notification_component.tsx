import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useAppTheme} from "../../hooks";
import TextComponent from "./text_component.tsx";
import {FONT_SIZE, PADDING, RADIUS} from "../../styles";
const vocabulary = {
        word: "毎朝",
        meaning: "every morning",
        furigana: "まいあさ",
        romaji: "maiasa",
        level: 5,
        pos: "Noun, Adverb (fukushi)",
        meaning_vi: "mỗi buổi sáng",
        pos_vi: "Danh từ, trạng từ (fukushi)",
        audio: "hungcy_0.mp3"
    };

type Props = {
    isVI : boolean;
    isEnglish : boolean;
    isRomaji : boolean;
}
const NotificationComponent = ({isEnglish = true,isVI = true,isRomaji = false}:Props) => {
    const {theme} = useAppTheme();

    const mean =
        (isEnglish ? vocabulary.meaning : "") +
        (isVI ? `${isEnglish ? " - " : ""}${vocabulary.meaning_vi}` : "")

    const word = `${vocabulary.word} - ${vocabulary.furigana}` + (isRomaji ? ` - ${vocabulary.romaji}` : "");

    return  (
        <View style={styles.container}>
            <TextComponent>{word}</TextComponent>
            <TextComponent size={FONT_SIZE.SM} style={{
                position : "absolute",
                top : 5,
                right : 15,
            }}>now</TextComponent>
            <TextComponent size={FONT_SIZE.SM}>{mean}</TextComponent>
        </View>
    );

}
const styles = StyleSheet.create({
  container: {
      height : 100,
      backgroundColor : "white",
      borderRadius : RADIUS.LG,
      padding : PADDING.SM,
      justifyContent : 'space-around'
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default NotificationComponent;
