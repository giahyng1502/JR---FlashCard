import Realm from 'realm';
import RNFS from 'react-native-fs';
import { Platform } from 'react-native';

export const getRealmFromFile = async (
    relativePath: string, // ví dụ: 'data/vocab.realm'
    schema: Realm.ObjectSchema[],
): Promise<Realm> => {
    const fileName = relativePath.split('/').pop()!;
    const folder = `${RNFS.DocumentDirectoryPath}/data`;
    const destPath = `${folder}/${fileName}`;

    console.log('File cần copy:', relativePath);
    console.log(' copy:', destPath);

    const exists = await RNFS.exists(destPath);
    if (!exists) {
        try {
            // Tạo thư mục nếu chưa có
            if (!(await RNFS.exists(folder))) {
                await RNFS.mkdir(folder);
            }

            if (Platform.OS === 'android') {
                await RNFS.copyFileAssets(relativePath, destPath);
            } else {
                const sourcePath = `${RNFS.MainBundlePath}/${relativePath}`;
                await RNFS.copyFile(sourcePath, destPath);
            }

            console.log(`✅ Copied Realm file to: ${destPath}`);
        } catch (err) {
            console.error('❌ Lỗi khi copy realm:', err);
            throw err;
        }
    } else {
        console.log('✅ Realm file đã tồn tại, không cần copy lại.');
    }

    try {
        const realm = await Realm.open({
            schema : schema,
            path: destPath,
            schemaVersion : 1
        });
        console.log('Realm đã được mở thành công.');
        return realm;
    } catch (err) {
        console.error('Lỗi khi mở Realm:', err);
        throw err;
    }
};
