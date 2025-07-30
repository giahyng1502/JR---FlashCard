type Vocabulary = {
    word : string,
    meaning : string,
    furigana : string,
    romaji : string,
    level : string,
    pos : string,
    meaning_vi : string,
    pos_vi : string,
    audio : string,
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
