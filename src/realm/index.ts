// import Realm from 'realm';
// import {ThemeSetting} from "./schema/theme_schema.ts";
// let realmInstance: Realm | null = null;
//
// export const openRealm = async () => {
//     if (realmInstance && !realmInstance.isClosed) {
//         console.log('📂 Realm already opened');
//         return realmInstance;
//     }
//     realmInstance = await Realm.open({
//         schema: [ThemeSetting],
//         schemaVersion: 1,
//     });
//     console.log('📂 Realm opened successfully');
//     return realmInstance;
// };
//
// export const getRealm = (): Realm => {
//     if (!realmInstance) {
//         throw new Error('Realm has not been initialized. Call openRealm() first.');
//     }
//     if (realmInstance.isClosed) {
//         throw new Error('Realm instance is closed.');
//     }
//     return realmInstance;
// };
