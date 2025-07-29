import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Vocabulary } from '../../models';
import { useAppTheme } from '../../hooks';
import { FONT_SIZE, MARGIN, PADDING, RADIUS } from '../../styles';
import TextComponent from '../../components/ui/text_component.tsx';
import IconSound from "../../assets/svgs/ic_sound.tsx";

type Props = {
    vocab: Vocabulary;
    onPress: (vocab : Vocabulary) => void;
};

const VocabularyItem = ({ vocab ,onPress }: Props) => {
    const { theme } = useAppTheme();

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: theme.primary }]}
                          onPress={() => {
                              onPress && onPress(vocab);
                          }}>
            {/* Phần từ vựng chính */}
            <View style={styles.vocabBlock}>
                {!!vocab.furigana && (
                    <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>
                        {vocab.furigana}
                    </TextComponent>
                )}
                <TextComponent bold size={FONT_SIZE.XXL}>
                    {vocab.word}
                </TextComponent>
                {!!vocab.romaji && (
                    <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>
                        {vocab.romaji}
                    </TextComponent>
                )}

                {/* Phần nghĩa */}
                <View style={styles.meaningBlock}>
                    <TextComponent size={FONT_SIZE.MD}>{vocab.meaning}</TextComponent>
                    <TextComponent size={FONT_SIZE.MD}>{vocab.meaning_vi}</TextComponent>
                </View>
            </View>



            {/* Phần từ loại (POS) */}
            <View style={styles.block}>
                <View style={[styles.posBlock,{
                    backgroundColor : theme.secondary
                }]}>
                    <TextComponent size={FONT_SIZE.SM}>
                        {vocab.pos?.split(' ')[0].replace(/[,，。]/g, '') || ''}
                    </TextComponent>
                </View>

                <TouchableOpacity style={{
                    backgroundColor : '#1D940F',
                    padding : PADDING.XS,
                    borderRadius : RADIUS.SM
                }}>
                    <IconSound color={'white'}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: RADIUS.LG,
        padding: PADDING.SM,
        marginVertical: MARGIN.XS,
        alignItems: 'center',
        flexShrink : 1,
        gap : 10,
        flexWrap: 'wrap',
        justifyContent: 'flex-end', // Căn phải từng dòng
        alignContent: 'flex-end',   // Căn phải toàn bộ nếu có nhiều dòng
    },
    vocabBlock: {
        justifyContent: 'flex-start',
        flex : 1,
    },
    meaningBlock: {
        justifyContent: 'center',
    },
    posBlock: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding : PADDING.XS,
        borderRadius : RADIUS.MD
    },

    block : {
        alignItems : 'flex-end',
        gap : 10,
    }
});

export default VocabularyItem;
