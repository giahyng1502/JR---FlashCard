import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import TextComponent from './text_component.tsx';
import {MARGIN, RADIUS} from '../../styles';
import {ThemeColors} from '../../types';
import {useAppTheme} from "../../hooks";

// Hiragana list
export const hiraganaList = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を', 'ん'
];

type Props = {
    currentLetter: string;
    onLetterChange: (letter: string) => void;
};

const HiraganaListComponent = ({ currentLetter, onLetterChange }: Props) => {
    const {theme} = useAppTheme();
    const handleLetterChange = (letter: string) => {
        letter === currentLetter ? onLetterChange("") : onLetterChange(letter);
    }
    const renderLetter = (letter: string) => {
        return (
            <TouchableOpacity
                key={letter}
                style={[
                    styles.item,
                    {
                        backgroundColor: currentLetter === letter ? theme.primary : 'transparent',
                        borderColor: theme.borderColor,
                    },
                ]}
                onPress={()=>handleLetterChange(letter)}
            >
                <TextComponent size={18} weight="bold">
                    {letter}
                </TextComponent>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextComponent size={20} weight="bold">
                Letter:
            </TextComponent>
            <FlatList
                data={hiraganaList}
                keyExtractor={(item) => item}
                renderItem={({ item }) => renderLetter(item)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom : MARGIN.SM
    },
    scrollContent: {
        gap: 12,
        marginLeft: MARGIN.XS,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: RADIUS.SM,
        width: 50,
    },
});

export default HiraganaListComponent;
