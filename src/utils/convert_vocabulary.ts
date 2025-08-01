import {ExampleVocabulary, Segment, Vocabulary, VocabularyDetail} from "../models";


// Type mở rộng để chứa cả từ vựng và quảng cáo
export type VocabularyListItem = Vocabulary | { type: "native_ad"; id: string };

// Hàm parse và chèn quảng cáo
export function parseVocabularies(rawList: any[], adInterval = 7): VocabularyListItem[] {
    const vocabList: VocabularyListItem[] = rawList.map((raw): Vocabulary => ({
        word: raw.word,
        meaning: raw.meaning,
        furigana: raw.furigana,
        romaji: raw.romaji,
        level: raw.level,
        pos: raw.pos,
        meaning_vi: raw.meaning_vi,
        pos_vi: raw.pos_vi,
        audio: raw.audio,
        id: raw?.id,
        study_id: raw?.study_id,
    }));

    // Chèn native ad sau mỗi `adInterval` từ vựng
    const result: VocabularyListItem[] = [];
    for (let i = 0; i < vocabList.length; i++) {
        result.push(vocabList[i]);
        if ((i + 1) % adInterval === 0 && i !== vocabList.length - 1) {
            result.push({ type: "native_ad", id: `ad-${i}` });
        }
    }

    return result;
}

export function parseVocabularyDetail(raw : any): VocabularyDetail {
    return  ({
        word: raw.word,
        examples: raw.examples.map((example: ExampleVocabulary) => {
            return {
                en : example.en,
                vi : example.vi,
                segments : example.segments.map((segment: Segment) => {
                    return {
                        furigana : segment.furigana,
                        unlinked : segment.unlinked,
                    }
                }),
            }
        }),
    });
}

