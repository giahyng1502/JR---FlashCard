//ThemeSetting.ts
export class ThemeSetting extends Realm.Object<ThemeSetting> {
    id!: string; // e.g. "app_theme"
    value!: string; // themeId

    static schema: Realm.ObjectSchema = {
        name: 'ThemeSetting',
        primaryKey: 'id',
        properties: {
            id: 'string',
            value: 'string',
        },
    };
}
