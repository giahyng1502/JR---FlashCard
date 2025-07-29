import { ObjectSchema } from "realm";
const VocabularySchema = {
  name: "Vocabulary",
  primaryKey: "word",
  properties: {
    word: "string",
    meaning: "string",
    furigana: "string",
    romaji: "string",
    level: "int",
    pos: "string",
    meaning_vi: "string",
    pos_vi: "string",
  },
};

const SegmentSchema : ObjectSchema= {
  name: "Segment",
  embedded: true,
  properties: {
    furigana: "string",
    unlinked: "string",
  },
};

const ExampleSchema : ObjectSchema = {
  name: "ExampleVocabulary",
  embedded: true,
  properties: {
    segments: "Segment[]",
    en: "string",
    vi: "string",
  },
};

const VocabularyDetailSchema : ObjectSchema = {
    name: "VocabularyDetail",
    primaryKey: "word",
    properties: {
      word: "string",
      examples: "ExampleVocabulary[]",
    },
};

export {VocabularySchema, SegmentSchema, ExampleSchema,VocabularyDetailSchema};
