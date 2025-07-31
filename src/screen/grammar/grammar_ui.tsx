import React, {useState} from 'react';
import HeaderComponent from "../../components/ui/header_component.tsx";
import SearchComponent from "../../components/ui/search_component.tsx";
import LevelComponent from "../../components/ui/level_component.tsx";
import {JLPTLevel} from "../../types";
import {useGrammar} from "./grammar_hook.ts";
import GrammarList from "./grammar_list.tsx";
import Container from "../../components/ui/container.tsx";

const GrammarUi = () => {
  const [value, setValue] = useState<string>('')
  const [level, setLevel] = useState<JLPTLevel>();
  const grammars = useGrammar({keyword : value,level});
  return  (
      <Container>
        <HeaderComponent title={"Grammar"} isSearch />
        <SearchComponent
            value={value}
            onValueChange={setValue}
            searchPlaceholder="Search grammar, meaning (vi/en) ..."/>
        <LevelComponent levelCurrent={level} onLevelCurrentChange={setLevel}/>
        <GrammarList grammars={grammars}/>
      </Container>
  );
}


export default GrammarUi;
