// file: models/kanji.ts

import {BSON} from "realm";

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
    study_id? : number
    _id?: BSON.ObjectId;
}

export {
    Kanji,
    KanjiDetail,
    RelatedWord,
};
