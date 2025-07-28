import Realm from "realm";

import {
    GrammarSchema,
    ExampleGrammarSchema,
    VocabularySchema,
    VocabularyDetailSchema,
    SegmentSchema,
    ExampleSchema,
    KanjiSimpleSchema,
    KanjiDetailSchema,
    RelatedWordSchema,
} from '../schema';
import {getRealmFromFile} from "./open_schema.ts";
import {JLPTLevel} from "../../types";


const realmCache: Record<string, Realm> = {};

/**
 * Preload toàn bộ Realm vào bộ nhớ cache
 */
export const preloadAllRealms = async () => {
    const levels: JLPTLevel[] = ['N5','N4','N3','N2','N1'];

    for (const level of levels) {
        try {
            // Grammar theo cấp độ
            const grammarRealm = await getRealmFromFile(`data/grammar_${level}.realm`, [
                GrammarSchema,
                ExampleGrammarSchema,
            ]);
            realmCache[`grammar_${level}`] = grammarRealm;
            console.log(`✅ Đã load grammar_${level}`);
        } catch (err) {
            console.warn(`⚠️ Không thể load grammar_${level}:`, err);
        }

        try {
            // Kanji theo cấp độ
            const kanjiRealm = await getRealmFromFile(`data/kanji_${level}.realm`, [
                KanjiSimpleSchema,
            ]);
            realmCache[`kanji_${level}`] = kanjiRealm;
            console.log(`✅ Đã load kanji_${level}`);
        } catch (err) {
            console.warn(`⚠️ Không thể load kanji_${level}:`, err);
        }
    }

    // Vocabulary tổng hợp
    const vocabRealm = await getRealmFromFile(`data/vocab.realm`, [VocabularySchema]);
    realmCache['vocab'] = vocabRealm;

    // Vocabulary chi tiết
    const vocabDetailRealm = await getRealmFromFile(`data/vocabulary_detail.realm`, [
        VocabularyDetailSchema,
        SegmentSchema,
        ExampleSchema,
    ]);
    realmCache['vocab_detail'] = vocabDetailRealm;

    // Kanji chi tiết
    const kanjiDetailRealm = await getRealmFromFile(`data/kanji_detail.realm`, [
        KanjiDetailSchema,
        RelatedWordSchema,
    ]);
    realmCache['kanji_detail'] = kanjiDetailRealm;

    console.log('✅ Đã preload toàn bộ Realm vào cache.');
};

/**
 * Lấy Realm đã cache sẵn
 */
export const getCachedRealm = (
    type: 'grammar' | 'kanji',
    level: JLPTLevel
): Realm => {
    const key = `${type}_${level}`;
    const realm = realmCache[key];
    if (!realm) throw new Error(`Realm chưa được preload: ${key}`);
    return realm;
};

/**
 * Lấy Realm không phân cấp độ
 */
export const getStaticRealm = (
    key: 'vocab' | 'vocab_detail' | 'kanji_detail'
): Realm => {
    const realm = realmCache[key];
    console.log(realmCache)
    if (!realm) throw new Error(`Realm chưa được preload: ${key}`);
    return realm;
};
