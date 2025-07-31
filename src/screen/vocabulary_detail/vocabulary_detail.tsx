import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {VocabularyDetailRouteProp} from '../../navigation';
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {FONT_SIZE, PADDING, RADIUS} from "../../styles";
import TextComponent from "../../components/ui/text_component.tsx";
import ExamplesVocabularyList from "./exam_vocab_list.tsx";
import useVocabularyDetail from "./vocabulary_detail_hook.ts";
import Container from "../../components/ui/container.tsx";

const VocabularyDetail = () => {
  const route = useRoute<VocabularyDetailRouteProp>();
  const vocabulary = route.params.vocab;
  const {theme} = useAppTheme();
  const vobDetail = useVocabularyDetail(vocabulary.word);

  return (
      <Container>
        <HeaderComponent title={'Word Detail'} isBack />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.wordBox,{
          backgroundColor : theme.primary
        }]}>
          <TextComponent>{vocabulary.furigana}</TextComponent>
          <TextComponent size={FONT_SIZE.XXXL} bold>{vocabulary.word}</TextComponent>
          <TextComponent>{vocabulary.romaji}</TextComponent>

        </View>
        <View style={{height : PADDING.SM}}/>
        <TextComponent size={FONT_SIZE.LG}>A.Class {vocabulary.pos}</TextComponent>
        <View style={{height : PADDING.SM}}/>
        <TextComponent size={FONT_SIZE.LG}>B.Examples</TextComponent>
        <ExamplesVocabularyList examples={vobDetail?.examples} />
        </ScrollView>
      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : PADDING.SM
  },
  wordBox : {
    borderRadius : RADIUS.LG,
    padding : PADDING.SM,
    justifyContent : 'center',
    alignItems: 'center',
    height : 150
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default VocabularyDetail;
