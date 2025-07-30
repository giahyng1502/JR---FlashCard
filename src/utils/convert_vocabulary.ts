import {ExampleVocabulary, Segment, Vocabulary, VocabularyDetail} from "../models";

export function parseVocabularies(rawList: any[]): Vocabulary[] {
    return rawList.map((raw) => ({
        word: raw.word,
        meaning : raw.meaning,
        furigana : raw.furigana,
        romaji : raw.romaji,
        level : raw.level,
        pos : raw.pos,
        meaning_vi : raw.meaning_vi,
        pos_vi : raw.pos_vi,
        audio : raw.audio,
    }));
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

