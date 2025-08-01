import {Grammar, Vocabulary} from "../models";

export type BottomStackParamList = {
    vocabulary: undefined,
    kanji : undefined,
    grammar : undefined,
    study : undefined,
    setting : undefined,
}
export type AppStackParamList = {
    main : undefined
    kanji_detail : {
        character : string,
    }
    grammar_detail : {
        grammar : Grammar
    }
    vocabulary_detail : {
        vocab : Vocabulary
    }
    add_data : undefined
}

