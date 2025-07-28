import {Kanji, KanjiDetail, RelatedWord} from "../models";

export function parseKanjis(rawList: any[]): Kanji[] {
    return rawList.map((raw) => ({
        character: raw.character,
    }));
}

export function parseKanjiDetail(raw: any): KanjiDetail {
    return {
        kanji: raw.kanji,
        meanings: raw.meanings ?? [],
        meanings_vi: raw.meanings_vi ?? [],
        on_readings: raw.on_readings ?? [],
        kun_readings: raw.kun_readings ?? [],
        relatedWords: (raw.relatedWords ?? []).map((r: any): RelatedWord => ({
            word: r.word,
            reading: r.reading,
            meaning_en: r.meaning_en,
            meaning_vi: r.meaning_vi,
        })),
    };
}


export function parseKanjiDetails(rawList: any[]): KanjiDetail[] {
    return rawList.map((raw) => ({
        kanji: raw.kanji,
        meanings: raw.meanings ?? [],
        meanings_vi: raw.meanings_vi ?? [],
        on_readings: raw.on_readings ?? [],
        kun_readings: raw.kun_readings ?? [],
        relatedWords: (raw.relatedWords ?? []).map((r: any): RelatedWord => ({
            word: r.word,
            reading: r.reading,
            meaning_en: r.meaning_en,
            meaning_vi: r.meaning_vi,
        })),
    }));
}
