import {ObjectSchema} from "realm";

const StudySchema : ObjectSchema = {
    name: "Study",
    primaryKey: "_id",
    properties: {
        _id: "objectId",
        title: "string",
        description: "string",
        createdAt: "string",
        count: "int",
        background_name : "string",
        type : "string",
    },
};

const ExampleGrammarSchema_Study : ObjectSchema = {
    name: "Example_Study",
    embedded: true,
    properties: {
        jp: "string?",
        romaji: "string?",
        en: "string?",
        vi: "string?",
    },
};

const GrammarSchema_study : ObjectSchema = {
    name: "Grammar_Study",
    primaryKey: "_id",
    properties: {
        _id : 'objectId',
        study_id: "objectId",
        title: "string",
        short_explanation: "string?",
        long_explanation: "string?",
        formation: "string?",
        examples: "Example_Study[]",
        short_explanation_vi: "string?",
        long_explanation_vi: "string?",
        formation_vi: "string?",
    },
};


const RelatedWordSchema_Study : ObjectSchema = {
    name: "RelatedWord_Study",
    embedded: true,
    properties: {
        word: "string",
        reading: "string",
        meaning_en: "string",
        meaning_vi: "string",
    },
};

const KanjiDetailSchema_Study : ObjectSchema = {
    name: "Kanji_Study",
    primaryKey: "_id",
    properties: {
        _id : 'objectId',
        kanji: "string",
        meanings: "string[]",
        meanings_vi: "string[]",
        on_readings: "string[]",
        kun_readings: "string[]",
        jlpt_level: "string",
        study_id: "objectId",
        relatedWords: "RelatedWord_Study[]",
    },
};

const VocabularySchema_Study = {
    name: 'Vocabulary_Study',
    primaryKey: "_id",
    properties: {
        _id : 'string',
        word: 'string',
        meaning: 'string',
        furigana: 'string',
        romaji: 'string',
        level: 'int',
        pos: 'string',
        meaning_vi: 'string',
        pos_vi: 'string',
        audio : 'string',
        study_id: 'objectId',
    },
};

const SchemaName = {
    study: "Study",
    exampleGrammar: "Example_Study",
    grammar: "Grammar_Study",
    relatedWord: "RelatedWord_Study",
    kanji: "Kanji_Study",
    vocabulary: "Vocabulary_Study",
};


export
{
    ExampleGrammarSchema_Study,
    VocabularySchema_Study,
    GrammarSchema_study,
    RelatedWordSchema_Study,
    KanjiDetailSchema_Study,
    StudySchema,
    SchemaName
}

