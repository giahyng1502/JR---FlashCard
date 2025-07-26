import Realm from 'realm';
import {
    ExampleGrammarSchema,
    ExampleSchema,
    GrammarSchema, KanjiDetailSchema, KanjiSimpleSchema,
    RelatedWordSchema,
    SegmentSchema,
    VocabularyDetailSchema, VocabularySchema
} from "./schema";
let realmInstance: Realm | null = null;

export const openRealm = async () => {
    if (realmInstance && !realmInstance.isClosed) {
        console.log('📂 Realm already opened');
        return realmInstance;
    }
    realmInstance = await Realm.open({
        schema:
            [
                RelatedWordSchema,
                ExampleGrammarSchema,
                GrammarSchema,
                VocabularyDetailSchema,
                ExampleSchema,
                SegmentSchema,
                VocabularySchema,
                KanjiDetailSchema,
                KanjiSimpleSchema
            ],
        schemaVersion: 1,
    });
    console.log('📂 Realm opened successfully');
    return realmInstance;
};

export const getRealm = (): Realm => {
    if (!realmInstance) {
        throw new Error('Realm has not been initialized. Call openRealm() first.');
    }
    if (realmInstance.isClosed) {
        throw new Error('Realm instance is closed.');
    }
    return realmInstance;
};
