import Realm from 'realm';
import {ThemeSetting} from "./schema/theme_schema.ts";

let realmInstance: Realm | null = null;

export const openRealm = async () => {
    if (realmInstance) {
        return realmInstance;
    }
    console.log('🔌 Opening Realm...');
    realmInstance = await Realm.open({
        schema: [
            ThemeSetting
        ],
        schemaVersion: 1,
    });
    return realmInstance;
};

export const getRealm = (): Realm => {
    if (!realmInstance) {
        throw new Error('Realm has not been initialized. Call openRealm() first.');
    }
    return realmInstance;
};
