import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {PADDING} from "../../styles";
import SearchComponent from "../../components/ui/search_component.tsx";
import LevelComponent from "../../components/ui/level_component.tsx";
import {JLPTLevel} from "../../types";
import {useGrammar} from "./grammar_hook.ts";
import GrammarList from "./grammar_list.tsx";

const GrammarUi = () => {
  const [value, setValue] = useState<string>('')
  const {theme} = useAppTheme();
  const [level, setLevel] = useState<JLPTLevel>();
  const grammars = useGrammar({keyword : value,level});
  return  (
      <View style={styles.container}>
        <HeaderComponent theme={theme} title={"Grammar"} isSearch />
        <SearchComponent theme={theme} value={value} onValueChange={setValue}/>
        <LevelComponent levelCurrent={level} onLevelCurrentChange={setLevel} theme={theme}/>
        <GrammarList grammars={grammars}/>
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

export default GrammarUi;
