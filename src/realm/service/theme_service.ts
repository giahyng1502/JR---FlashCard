import {getRealm} from "../index.ts";
const THEME_ID_KEY = 'app_theme';
import Realm from 'realm';

export const changeTheme = (value : string)=>{
    const realm = getRealm();
    if (!realm || realm.isClosed) return;

    try {
        realm.write(() => {
            realm.create(
                'ThemeSetting',
                { id: THEME_ID_KEY, value: value },
                Realm.UpdateMode.Modified
            );
        });
    } catch (e) {
        console.warn('Failed to write theme to Realm:', e);
    }
}
