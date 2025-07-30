import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import HeaderComponent from "../../components/ui/header_component.tsx";
import { useAppTheme } from "../../hooks";
import {FONT_SIZE, MARGIN, PADDING} from "../../styles";
import NotificationComponent from "../../components/ui/notification_component.tsx";
import CheckBoxComponent from "../../components/ui/checkbox_component.tsx";
import useSetting from "./setting_hook.ts";
import VocabularyItem from "../vocabulary/vocabulary_item.tsx";
import {Vocabulary} from "../../models";
import {playLocalSound} from "../../configs/audio/play_audio.ts";
import ThemeSelector from "./theme_selected.tsx";
import TextComponent from "../../components/ui/text_component.tsx";

const CHECKBOX_OPTIONS = [
    { key: 'isVI', label: 'Việt Nam' },
    { key: 'isEnglish', label: 'English' },
    { key: 'isRomaji', label: 'Romaji' },
] as const;

const vocabulary : Vocabulary = {
    id : 0,
    word: "毎朝",
    meaning: "every morning",
    furigana: "まいあさ",
    romaji: "maiasa",
    level: "5",
    pos: "Noun, Adverb (fukushi)",
    meaning_vi: "mỗi buổi sáng",
    pos_vi: "Danh từ, trạng từ (fukushi)",
    audio: "hungcy_0.mp3"
};


const SettingUi = () => {
    const { theme,setThemeId } = useAppTheme();
    const { checkbox, setCheckbox } = useSetting();
    const handlePlayAudio = useCallback((file_name : string)=>{
        playLocalSound(file_name);
    },[])
    return (
        <View style={styles.container}>
            <HeaderComponent theme={theme} title={"Setting"} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <TextComponent size={FONT_SIZE.LG} bold>Notification</TextComponent>
                <View style={{height : PADDING.SM}}/>
            <NotificationComponent
                isVI={checkbox.isVI}
                isEnglish={checkbox.isEnglish}
                isRomaji={checkbox.isRomaji}
            />
            {CHECKBOX_OPTIONS.map((option) => (
                <CheckBoxComponent
                    key={option.key}
                    label={option.label}
                    checked={checkbox[option.key]}
                    onChange={(val) =>
                        setCheckbox((prev) => ({ ...prev, [option.key]: val }))
                    }
                />
            ))}
            <VocabularyItem vocab={vocabulary} onPlayAudio={handlePlayAudio}/>
            <View style={{height : PADDING.SM}}/>
            <TextComponent size={FONT_SIZE.LG} bold>Colors</TextComponent>
            <View style={{height : PADDING.SM}}/>
            <ThemeSelector onSelectTheme={setThemeId}/>
            <TouchableOpacity style={styles.textBtn}>
                <TextComponent bold>Terms of use</TextComponent>
            </TouchableOpacity>
            <View style={{
                backgroundColor : theme.borderColor,
                height : 2
            }}/>
            <TouchableOpacity style={styles.textBtn}>
                <TextComponent bold>Privacy Policy</TextComponent>
            </TouchableOpacity>
            <View style={{
                backgroundColor : theme.borderColor,
                height : 2
            }}/>
            <TouchableOpacity style={styles.textBtn}>
                <TextComponent bold>Contact us</TextComponent>
            </TouchableOpacity>
            <View style={{height : PADDING.SM}}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
    },
    textBtn : {
        marginVertical : MARGIN.MD
    }
});

export default SettingUi;
