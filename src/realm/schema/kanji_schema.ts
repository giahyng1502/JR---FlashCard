// Schema
import {ObjectSchema} from "realm";

const KanjiSimpleSchema : ObjectSchema = {
  name: "KanjiSimple",
  primaryKey: "character",
  properties: {
    character: "string",
  },
};

const RelatedWordSchema : ObjectSchema = {
    name: "RelatedWord",
    embedded: true,
    properties: {
        word: "string",
        reading: "string",
        meaning_en: "string",
        meaning_vi: "string",
    },
};

const KanjiDetailSchema : ObjectSchema = {
    name: "Kanji",
    primaryKey: "kanji",
    properties: {
        kanji: "string",
        meanings: "string[]",
        meanings_vi: "string[]",
        on_readings: "string[]",
        kun_readings: "string[]",
        jlpt_level: "string",
        relatedWords: "RelatedWord[]",
    },
};

export  {RelatedWordSchema, KanjiSimpleSchema, KanjiDetailSchema};
