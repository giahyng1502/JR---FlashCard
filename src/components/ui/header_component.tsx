import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextComponent from "./text_component.tsx";
import IconSearch from "../../assets/svgs/ic_search.tsx";
import IconBack from "../../assets/svgs/ic_back.tsx";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_SIZE } from "../../styles";
import {useAppTheme} from "../../hooks";

type Props = {
    title: string;
    isSearch?: boolean;
    isBack?: boolean;
    onSearch? : ()=>void;
};

const HeaderComponent = ({title, isSearch, isBack,onSearch }: Props) => {
    const {theme} = useAppTheme();
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView edges={['top']} style={[styles.container]}>
            <View style={styles.inner}>
                {isBack ? (
                    <TouchableOpacity style={styles.icon} onPress={handleBack}>
                        <IconBack color={theme.textPrimary} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.icon}>
                        <TextComponent size={FONT_SIZE.LG}>VIP</TextComponent>
                    </View>
                )}

                <TextComponent size={FONT_SIZE.XL} bold>
                    {title}
                </TextComponent>

                {isSearch ? (
                    <TouchableOpacity style={styles.icon} onPress={onSearch}>
                        <IconSearch color={theme.textPrimary} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.icon} />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 0,
        paddingTop: 0,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    icon: {
        width: 40,
        alignItems: 'center',
    },
});

export default HeaderComponent;
