import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {FONT_SIZE} from "../../styles";
import IconCheck from "../../assets/svgs/icon_check.tsx";
import {useAppTheme} from "../../hooks";
import TextComponent from "./text_component.tsx";

type Props = {
    label: string;
    checked: boolean;
    onChange : (value: boolean) => void;
}

const CheckBoxComponent = ({ label, checked, onChange } : Props) => {
    const {theme} = useAppTheme();
    return (
        <TouchableOpacity style={styles.container} onPress={() => onChange(!checked)}>
            <View style={[styles.checkbox,{borderColor: theme.borderColor}, checked && {borderColor : theme.activeColor }]}>
                {checked && <IconCheck color={theme.primary} />}
            </View>
            <TextComponent>{label}</TextComponent>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 2,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CheckBoxComponent;
