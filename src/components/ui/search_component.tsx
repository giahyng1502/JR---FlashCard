import React from 'react';
import {View,StyleSheet, TextInput} from 'react-native';
import IconSearch from "../../assets/svgs/ic_search.tsx";
import {PADDING, RADIUS} from "../../styles";
import {useAppTheme} from "../../hooks";

type Props = {
    value : string,
    onValueChange : (value : string) => void,
    searchPlaceholder : string
}

const SearchComponent: React.FC<Props> = ({value,onValueChange,searchPlaceholder}) => {
    const {theme} = useAppTheme();
    return (
        <View style={[styles.container,{backgroundColor : theme.searchPrimary}]}>
            <IconSearch color={theme.primary}/>
            <TextInput
                style={styles.searchInput}
                onChangeText={onValueChange}
                value={value}
                placeholderTextColor={theme.textSecondary}
                placeholder={searchPlaceholder}
            />
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
        flex : 1,
    }
});

export default SearchComponent;
