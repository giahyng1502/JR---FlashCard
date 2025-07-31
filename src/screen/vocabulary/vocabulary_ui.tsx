import React, {useState} from 'react';
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import useVocabulary from "./vocabulary_hook.ts";
import {JLPTLevel} from "../../types";
import VocabularyList from "./vocabulary_list.tsx";
import SearchComponent from "../../components/ui/search_component.tsx";
import LevelComponent from "../../components/ui/level_component.tsx";
import HiraganaListComponent from "../../components/ui/letter_component.tsx";
import Container from "../../components/ui/container.tsx";

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
        <Container>
            <HeaderComponent title={"Vocabulary"} />
            <SearchComponent
                value={keyword}
                onValueChange={setKeyword}
                searchPlaceholder="JP / Romaji / EN / VI"
            />
            <LevelComponent levelCurrent={level} onLevelCurrentChange={setLevel}/>
            <HiraganaListComponent currentLetter={prefix} onLetterChange={setPrefix}/>
            <VocabularyList vocabs={vocabularies} />
        </Container>
    );
}


export default VocabularyUI;
