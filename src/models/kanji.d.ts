// file: models/kanji.ts

type Kanji = {
    character: string,
}

type RelatedWord = {
    word: string,
    reading: string,
    meaning_en: string,
    meaning_vi: string,
}

type KanjiDetail = {
    kanji: string,
    meanings: string[],
    meanings_vi: string[],
    on_readings: string[],
    kun_readings: string[],
    relatedWords: RelatedWord[],
}

export {
    Kanji,
    KanjiDetail,
    RelatedWord,
};
