import {BSON} from "realm";

type Grammar = {
    title: string,
    short_explanation : string,
    long_explanation : string,
    formation : string,
    short_explanation_vi : string,
    long_explanation_vi : string,
    formation_vi : string,
    examples : ExamplesGrammar[];
    study_id? : number
    _id?: BSON.ObjectId;
}

type ExamplesGrammar = {
    jp : string,
    romaji : string,
    en : string,
    vi : string,
}

export {Grammar,ExamplesGrammar}
