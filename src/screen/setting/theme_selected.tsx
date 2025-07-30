import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {themes} from "../../theme/themes.ts";
import {MARGIN, PADDING} from "../../styles";

const ThemeSelector = ({ onSelectTheme } : {onSelectTheme : (themeId : string) => void}) => {
    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            {Object.entries(themes).map(([key, theme], index) => (
                <TouchableOpacity
                    key={key}
                    style={[styles.themeBox, { backgroundColor: theme.light.primary }]}
                    onPress={() => onSelectTheme(key)}
                >
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical : PADDING.SM
    },
    themeBox: {
        width: 50,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        marginLeft : MARGIN.SM
    },
});

export default ThemeSelector;
