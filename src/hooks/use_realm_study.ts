import { useRealm } from '@realm/react';
import { BSON } from 'realm';
import { useCallback } from 'react';

type RealmObjectBase = {
    _id: BSON.ObjectId;
    [key: string]: any;
};

export const useStudyRealm = () => {
    const realm = useRealm();

    /**
     * Thêm dữ liệu vào Realm
     * @param schemaName Tên schema (VD: 'VocabularySchema_Study')
     * @param data Dữ liệu không bao gồm _id
     */
    const createItem = useCallback(<T extends RealmObjectBase>(
        schemaName: string,
        data: Omit<T, '_id'>
    ) => {
        let created: T | null = null;
        realm.write(() => {
            created = realm.create(schemaName, {
                _id: data._id || new BSON.ObjectId(),
                ...data,
            }) as unknown as T;
        });

        return created;
    }, [realm]);

    /**
     * Cập nhật dữ liệu
     * @param schemaName Tên schema
     * @param id ID của object
     * @param updates Dữ liệu cập nhật
     */
    const updateItem = useCallback(<T extends RealmObjectBase>(
        schemaName: string,
        _id: BSON.ObjectId,
        updates: Partial<T>
    ) => {
        realm.write(() => {
            const item = realm.objectForPrimaryKey<T>(schemaName, _id as unknown as T[keyof T]);
            if (item) {
                Object.assign(item, updates);
            }
        });
    }, [realm]);

    /**
     * Xoá dữ liệu
     * @param schemaName Tên schema
     * @param id ID của object
     */
    const deleteItem = useCallback(<T extends RealmObjectBase>(
        schemaName: string,
        _id: BSON.ObjectId
    ) => {
        realm.write(() => {
            const item = realm.objectForPrimaryKey<T>(schemaName, _id as unknown as T[keyof T]);
            if (item) {
                realm.delete(item);
            }
        });
    }, [realm]);

    return {
        createItem,
        updateItem,
        deleteItem,
    };
};
