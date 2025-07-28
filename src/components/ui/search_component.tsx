import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ThemeColors} from "../../types";
import IconSearch from "../../assets/svgs/ic_search.tsx";
import {PADDING, RADIUS} from "../../styles";

type Props = {
    theme : ThemeColors,
    value : string,
    onValueChange : (value : string) => void,
}

const SearchComponent: React.FC<Props> = ({theme,value,onValueChange}) => {

    return (
        <View style={[styles.container,{backgroundColor : theme.searchPrimary}]}>
            <IconSearch color={"#999999"}/>
            <TextInput style={styles.searchInput} onChangeText={onValueChange} value={value} placeholder={"Search..."} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height : 40,
      flexDirection : 'row',
    alignItems: 'center',
      borderRadius : RADIUS.MD,
      padding : PADDING.SM
  },
    searchInput: {
      height: 40,
    }
});

export default SearchComponent;
