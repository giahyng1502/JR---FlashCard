import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from "../../types";
import TextComponent from "./text_component.tsx";
import IconSearch from "../../assets/svgs/ic_search.tsx";
import {FONT_SIZE, MARGIN, width} from "../../styles";
import IconBack from "../../assets/svgs/ic_back.tsx";
import {useNavigation} from "@react-navigation/native";

type Props = {
    theme : ThemeColors;
    title : string;
    isSearch? : boolean;
    isBack? : boolean;
}

const HeaderComponent = ({theme,title,isSearch,isBack} : Props) => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            {isBack ? (
                <TouchableOpacity style={styles.icon} onPress={handleBack}>
                    <IconBack color={theme.textPrimary}/>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <TextComponent size={FONT_SIZE.LG}>VIP</TextComponent>
                </TouchableOpacity>
            )}
            <TextComponent size={FONT_SIZE.XL} bold >{title}</TextComponent>
            {isSearch ? <TouchableOpacity style={styles.icon}>
                <IconSearch color={theme.textPrimary}/>
            </TouchableOpacity> : <View style={styles.icon}/>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width :width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height : 80,
  },
  icon: {
    width : 40
  },
});

export default HeaderComponent;
