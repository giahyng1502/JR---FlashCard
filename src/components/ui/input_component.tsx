import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import {useAppTheme} from "../../hooks";
import {FONTS} from "../../styles";

type Props = {
    value: string;
    placeholder: string;
} & TextInputProps;

const InputComponent = ({ value, placeholder,...rest }: Props) => {
    const {theme} = useAppTheme();
    const [isFocused, setIsFocused] = useState<boolean>(false)
    return (
        <View style={[styles.container,{
            backgroundColor : theme.searchPrimary
        }]}>
            <TextInput
                style={[styles.input,{
                    borderColor: isFocused ? theme.borderColor : theme.activeColor,
                    backgroundColor: theme.searchPrimary,
                    color : theme.textPrimary,
                }]}
                placeholderTextColor={theme.textSecondary}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        fontFamily : FONTS.REGULAR,
        paddingHorizontal: 12,
        fontSize: 16,
    },
});

export default InputComponent;
