import {BSON} from "realm";

type Vocabulary = {
    id? : number
    word : string,
    _id?: BSON.ObjectId;
    meaning : string,
    furigana : string,
    romaji : string,
    level : string,
    pos : string,
    meaning_vi : string,
    pos_vi : string,
    audio : string,
    study_id? : number
}

type Segment = {
    furigana : string,
    unlinked : string,
}

type ExampleVocabulary = {
    segments : Segment[],
    en : string,
    vi : string,
}

type VocabularyDetail = {
    word: string,
    examples : ExampleVocabulary[]
}

export {Segment, VocabularyDetail, ExampleVocabulary,Vocabulary}
