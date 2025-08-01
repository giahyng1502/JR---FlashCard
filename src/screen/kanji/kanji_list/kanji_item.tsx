import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Kanji} from "../../../models";
import {FONT_SIZE, RADIUS} from "../../../styles";
import {useAppTheme} from "../../../hooks";
import TextComponent from "../../../components/ui/text_component.tsx";

type Props = {
    item: Kanji;
    onPress?: (character : string) => void,
};

const KanjiItem = ({ item,onPress }: Props) => {
    const {theme} = useAppTheme();
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor : theme.primary}]} onPress={()=>{
            onPress && onPress(item.character);
        }}>
            <TextComponent size={FONT_SIZE.XL}>{item.character}</TextComponent>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16,borderRadius : RADIUS.SM,margin : 2,justifyContent : 'center',alignItems: 'center',elevation : 4 },
});

export default React.memo(KanjiItem);
