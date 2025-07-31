import React, {useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {useRoute} from "@react-navigation/native";
import {GrammarDetailRouteProp} from "../../navigation";
import {FONT_SIZE, PADDING, RADIUS} from "../../styles";
import TextComponent from "../../components/ui/text_component.tsx";
import GrammarList from "./grammar_list.tsx";
import Container from "../../components/ui/container.tsx";

const GrammarDetail = () => {
    const {theme} = useAppTheme();
    const route = useRoute<GrammarDetailRouteProp>();
    const {grammar} = route.params
    console.log(grammar)
    const headerComponent = useCallback(()=>{
        return (
            <>
                <View style={[styles.titleBox,{
                    backgroundColor : theme.primary
                }]}>
                    <TextComponent bold size={FONT_SIZE.LG}>{grammar.title}</TextComponent>
                </View>
                <TextComponent size={FONT_SIZE.LG}>
                    A . Explain
                </TextComponent>

                <View style={[styles.titleBox,{
                    backgroundColor : theme.searchPrimary
                }]}>
                    <TextComponent size={FONT_SIZE.MD}>
                        {grammar.formation}
                    </TextComponent>
                </View>
                <TextComponent>
                    {grammar.long_explanation}
                </TextComponent>

                <View style={[styles.titleBox,{
                    backgroundColor : theme.searchPrimary
                }]}>
                    <TextComponent size={FONT_SIZE.MD}>
                        {grammar.formation_vi}
                    </TextComponent>
                </View>
                <TextComponent>
                    {grammar.long_explanation_vi}
                </TextComponent>
                <View style={{height : PADDING.MD}}/>
                <TextComponent size={FONT_SIZE.LG}>
                    B . Examples
                </TextComponent>
            </>
        )
    },[grammar,theme])
    return (
        <Container>
            <HeaderComponent title={"Grammar Detail"} isBack />

            <GrammarList items={grammar.examples} headerComponent={headerComponent}/>
        </Container>
    );

}
const styles = StyleSheet.create({
    titleBox : {
      borderRadius : RADIUS.LG,
        padding : PADDING.LG,
        marginVertical : PADDING.LG,
        justifyContent : 'center',
        alignItems: 'center'
    },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default GrammarDetail;
