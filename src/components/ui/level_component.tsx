import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {JLPT_LEVELS} from "../../realm/service";
import TextComponent from "./text_component.tsx";
import {MARGIN, RADIUS} from "../../styles";
import {JLPTLevel, ThemeColors} from "../../types";

type Props = {
    levelCurrent: JLPTLevel;
    onLevelCurrentChange: (levelCurrent: JLPTLevel) => void;
    theme : ThemeColors
}

const LevelComponent = ({levelCurrent,onLevelCurrentChange,theme}: Props) => {
    const renderLevel = (level: JLPTLevel) => {
        return (
            <TouchableOpacity key={level} style={[styles.item,{
                backgroundColor : levelCurrent === level ? theme.primary : "transparent",
                borderColor : theme.borderColor,
            }]} onPress={()=>{
                onLevelCurrentChange(level);
            }}>
                <TextComponent size={18} weight="bold">
                    {level}
                </TextComponent>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextComponent size={20} weight="bold">
                Level:
            </TextComponent>

            <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true}>
                {JLPT_LEVELS.map(renderLevel)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        alignContent : 'center',
        alignItems: 'center',
        marginVertical : MARGIN.LG

    },
    scrollContent: {
        gap: 12,
        marginLeft : MARGIN.XS
    },
    item: {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius : RADIUS.SM,
        width : 50,

    },
});

export default LevelComponent;
