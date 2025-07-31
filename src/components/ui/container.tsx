import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import {useAppTheme} from "../../hooks";
import {PADDING} from "../../styles";

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: Props) => {
  const {theme} = useAppTheme();
  return (
      <View style={[styles.container, style,{
        backgroundColor : theme.background
      }]}>
        {children}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : PADDING.MD
  },
});

export default Container;
