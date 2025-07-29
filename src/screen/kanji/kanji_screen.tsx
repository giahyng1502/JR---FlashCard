import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import KanjiList from "./kanji_list/kanji_list.tsx";
import {useAppTheme} from "../../hooks";
import {FONT_SIZE, MARGIN, PADDING} from "../../styles";
import {useAllKanji} from "./kanji_service.ts";
import SearchComponent from "../../components/ui/search_component.tsx";
import LevelComponent from "../../components/ui/level_component.tsx";
import {JLPTLevel} from "../../types";
import TextComponent from "../../components/ui/text_component.tsx";
import HeaderComponent from "../../components/ui/header_component.tsx";

const PAGE_SIZE = 30;
const INITIAL_LIMIT = 60;

const KanjiUi = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);
    const { theme } = useAppTheme();
    const [searchText, setSearchText] = useState<string>('')
    const [selectLevel, setSelectLevel] = useState<JLPTLevel>("N5")
    const allKanjis = useAllKanji(selectLevel);


    return (
        <View style={styles.container}>
            <HeaderComponent theme={theme} title={"Kanji"} isSearch/>
            <SearchComponent value={searchText} theme={theme} onValueChange={setSearchText}/>
            <LevelComponent theme={theme} onLevelCurrentChange={setSelectLevel} levelCurrent={selectLevel}/>
            <TextComponent size={FONT_SIZE.LG} color={theme.textSecondary} style={{marginBottom : MARGIN.SM}}>
                {selectLevel}
            </TextComponent>
            <KanjiList
                kanjis={allKanjis}
                theme={theme}
            />
        </View>
    );
};



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

export default KanjiUi;
