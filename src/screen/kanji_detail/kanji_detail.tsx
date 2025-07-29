import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {KanjiDetailRouteProp} from "../../navigation";
import {useKanjiDetail} from "./use_kanji_detail.ts";
import HeaderComponent from "../../components/ui/header_component.tsx";
import {useAppTheme} from "../../hooks";
import {FONT_SIZE, PADDING, RADIUS} from "../../styles";
import TextComponent from "../../components/ui/text_component.tsx";
import RelativeItem from "./relative_item.tsx";

const KanjiDetail = () => {
    const navigation = useNavigation();
    const route = useRoute<KanjiDetailRouteProp>();
    const {theme} = useAppTheme();
    const {character} = route.params;
    const kanjiDetail = useKanjiDetail(character);

    return (
        <View style={styles.container}>
            <HeaderComponent theme={theme} title="Kanji Detail" isBack />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            >
                {/* BOX KANJI */}
                <View style={[styles.kanjiBox, {backgroundColor: theme.primary}]}>
                    <TextComponent size={FONT_SIZE.XXXL}>{character}</TextComponent>
                </View>

                {/* THÔNG TIN */}
                <TextComponent size={FONT_SIZE.LG}>
                    A. On: {kanjiDetail?.on_readings?.join(', ')}
                </TextComponent>
                <View style={{height: 10}} />
                <TextComponent size={FONT_SIZE.LG}>
                    B. Âm Kun: {kanjiDetail?.kun_readings?.join(', ')}
                </TextComponent>
                <View style={{height: 10}} />

                <TextComponent>
                    Nghĩa (EN): {kanjiDetail?.meanings?.join(', ')}
                </TextComponent>
                <View style={{height: 10}} />

                <TextComponent>
                    Nghĩa (VI): {kanjiDetail?.meanings_vi?.join(', ')}
                </TextComponent>

                {/* TỪ VỰNG LIÊN QUAN */}
                <TextComponent
                    style={{marginTop: 10}}
                    weight="bold"
                    size={FONT_SIZE.LG}
                >
                    C. Từ vựng liên quan:
                </TextComponent>
                <View style={{height: 10}} />

                {kanjiDetail?.relatedWords?.map((item, index) => (
                    <RelativeItem key={`${item.word}_${index}`} item={item} />
                ))}
            </ScrollView>
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
});

export default KanjiDetail;
