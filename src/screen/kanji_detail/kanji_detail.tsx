import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {KanjiDetailRouteProp} from "../../navigation";
import {useKanjiDetail} from "./use_kanji_detail.ts";
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {FONT_SIZE, PADDING, RADIUS} from "../../styles";
import TextComponent from "../../components/ui/text_component.tsx";
import {RelatedWord} from "../../models";
import RelativeItem from "./relative_item.tsx";

const KanjiDetail = () => {
    const navigation = useNavigation();
    const route = useRoute<KanjiDetailRouteProp>();
    const {theme} = useAppTheme();
    const {character} = route.params;
    const kanjiDetail = useKanjiDetail(character);

    const renderItem = React.useCallback(({item}: {item: RelatedWord}) => {
        return (
            <RelativeItem item={item} theme={theme}/>
        );
    }, [theme]);

    const renderListHeader = React.useCallback(() => {
        return (
            <>
                {/* BOX KANJI */}
                <View style={[styles.kanjiBox, {backgroundColor: theme.primary}]}>
                    <TextComponent size={FONT_SIZE.XXXL}>{character}</TextComponent>
                </View>

                {/* THÔNG TIN */}
                <TextComponent>A. On: {kanjiDetail?.on_readings?.join(', ')}</TextComponent>
                <View style={{height : 10}}/>
                <TextComponent>B. Âm Kun: {kanjiDetail?.kun_readings?.join(', ')}</TextComponent>
                <View style={{height : 10}}/>

                <TextComponent>Nghĩa (EN): {kanjiDetail?.meanings?.join(', ')}</TextComponent>
                <View style={{height : 10}}/>

                <TextComponent>Nghĩa (VI): {kanjiDetail?.meanings_vi?.join(', ')}</TextComponent>

                {/* TỪ VỰNG LIÊN QUAN */}

                <TextComponent style={{marginTop: 10}} weight="bold">
                    C. Từ vựng liên quan:
                </TextComponent>
                <View style={{height : 10}}/>

            </>
        );
    }, [character,kanjiDetail,theme]);

    return (
        <View style={styles.container}>
            <HeaderComponent theme={theme} title={"Kanji Detail"} isBack/>


            <View style={styles.boxRelative}>
                <FlatList
                    data={kanjiDetail?.relatedWords}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.word}_${index}`}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={renderListHeader}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.MD,
        paddingTop: 16,
    },
    kanjiBox: {
        borderRadius: RADIUS.LG,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
    },
    boxRelative: {
        marginTop: 8,
        flexDirection: 'row',
    },
    wordItem: {
        padding: 10,
        borderRadius: RADIUS.MD,
        marginRight: 10,
    },
});

export default KanjiDetail;
