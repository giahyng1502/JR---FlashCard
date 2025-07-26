import {ObjectSchema} from "realm";

const ExampleGrammarSchema : ObjectSchema = {
    name: "Example",
    embedded: true,
    properties: {
        jp: "string?",
        romaji: "string?",
        en: "string?",
        vi: "string?",
    },
};

const GrammarSchema : ObjectSchema = {
    name: "Grammar",
    primaryKey: "title",
    properties: {
        title: "string",
        short_explanation: "string?",
        long_explanation: "string?",
        formation: "string?",
        examples: "Example[]",
        short_explanation_vi: "string?",
        long_explanation_vi: "string?",
        formation_vi: "string?",
    },
};

export {GrammarSchema,ExampleGrammarSchema}
