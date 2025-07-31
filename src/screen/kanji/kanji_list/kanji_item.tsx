import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Kanji} from "../../../models";
import {FONT_SIZE, RADIUS} from "../../../styles";
import {useAppTheme} from "../../../hooks";

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
            <Text style={styles.character}>{item.character}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16,borderRadius : RADIUS.SM,margin : 2,justifyContent : 'center',alignItems: 'center' },
    character: { fontSize: FONT_SIZE.XL },
});

export default React.memo(KanjiItem);
