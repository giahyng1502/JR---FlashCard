type Kanji = {
    character : string,
}
type KanjiDetail = {
    kanji : string,
    meanings : string[],
    meanings_vi : string[],
    on_readings : string[],
    kun_readings : string[],
    relatedWords : RelatedWord,
}

type RelatedWord = {
    word : string,
    reading : string,
    meaning_en : string,
    meaning_vi : string,
}

export {Kanji,KanjiDetail,RelatedWord}
