import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {PADDING} from "../../styles";
import useVocabulary from "./vocabulary_hook.ts";
import {JLPTLevel} from "../../types";
import VocabularyList from "./vocabulary_list.tsx";
import SearchComponent from "../../components/ui/search_component.tsx";
import LevelComponent from "../../components/ui/level_component.tsx";
import HiraganaListComponent from "../../components/ui/letter_component.tsx";

const VocabularyUI = () => {
    const {theme} = useAppTheme();
    const [keyword, setKeyword] = useState<string>('');
    const [posKeyword, setPosKeyword] = useState<string>('');
    const [level, setLevel] = useState<JLPTLevel>();
    const [prefix, setPrefix] = useState<string>('');
    const vocabularies = useVocabulary({
        keyword,
        prefix,
        level,
        posKeyword
    })
    return (
        <View style={styles.container}>
            <HeaderComponent theme={theme} title={"Vocabulary"} />
            <SearchComponent theme={theme} value={keyword} onValueChange={setKeyword}/>
            <LevelComponent levelCurrent={level} onLevelCurrentChange={setLevel} theme={theme}/>
            <HiraganaListComponent currentLetter={prefix} onLetterChange={setPrefix}/>
            <VocabularyList vocabs={vocabularies} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      padding : PADDING.SM
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default VocabularyUI;
