import {Kanji, Vocabulary} from "../models";

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
    }));
}
