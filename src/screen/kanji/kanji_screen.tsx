import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import KanjiList from "./kanji_list/kanji_list.tsx";
import {useAppTheme} from "../../hooks";
import {FONT_SIZE, MARGIN, PADDING} from "../../styles";
import {useAllKanji} from "./kanji_service.ts";
import LevelComponent from "../../components/ui/level_component.tsx";
import {JLPTLevel} from "../../types";
import TextComponent from "../../components/ui/text_component.tsx";
import HeaderComponent from "../../components/ui/header_component.tsx";
import Container from "../../components/ui/container.tsx";
import BannerAdComponent from "../../components/ads/banner_ads.tsx";

const KanjiUi = () => {
    const { theme } = useAppTheme();
    const [selectLevel, setSelectLevel] = useState<JLPTLevel>("N5")
    const allKanjis = useAllKanji(selectLevel);


    return (
        <Container>
            <HeaderComponent title={"Kanji"}/>
            <LevelComponent onLevelCurrentChange={setSelectLevel} levelCurrent={selectLevel}/>
            <TextComponent size={FONT_SIZE.LG} color={theme.textSecondary} style={{marginBottom : MARGIN.SM}}>
                {selectLevel}
            </TextComponent>
            <KanjiList
                kanjis={allKanjis}
            />
        </Container>
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
