import {getStaticRealm} from "./save_data_to_local.ts";


export const searchAllVocabulary = (keyword: string) => {
    try {
        const realm = getStaticRealm('vocab');
        const matches = realm
            .objects('Vocabulary')
            .filtered(
                'word CONTAINS[c] $0 OR meaning CONTAINS[c] $0 OR meaning_vi CONTAINS[c] $0 OR furigana CONTAINS[c] $0 OR romaji CONTAINS[c] $0',
                keyword
            );

        return matches.map((item: any) => item.toJSON());
    } catch (err) {
        console.error("Lỗi khi tìm kiếm từ vựng:", err);
        return [];
    }
};
export const searchVocabularyByKeywordAndPOS = (
    keyword: string,
    posKeyword: string,
    offset: number = 0,
    limit: number = 50
) => {
    try {
        const realm = getStaticRealm('vocab');

        let query = '';
        const args: string[] = [];

        if (keyword.trim()) {
            query += '(word CONTAINS[c] $0 OR meaning CONTAINS[c] $0 OR meaning_vi CONTAINS[c] $0 OR furigana CONTAINS[c] $0 OR romaji CONTAINS[c] $0)';
            args.push(keyword);
        }

        if (posKeyword.trim()) {
            if (query) query += ' AND ';
            query += '(pos CONTAINS[c] $' + args.length + ' OR pos_vi CONTAINS[c] $' + args.length + ')';
            args.push(posKeyword);
        }

        const results = realm.objects('Vocabulary').filtered(query, ...args);

        // Phân trang: lấy từ offset, giới hạn limit
        return results.slice(offset, offset + limit).map((item: any) => item.toJSON());
    } catch (err) {
        console.error("Lỗi khi tìm kiếm từ vựng:", err);
        return [];
    }
};


export const searchVocabularyByFuriganaPrefixAndLevel = (prefix: string, level?: number) => {
    try {
        const realm = getStaticRealm('vocab');

        let query = 'furigana BEGINSWITH[c] $0';
        const args: any[] = [prefix];

        if (level !== undefined) {
            query += ' AND level == $1';
            args.push(level);
        }

        const matches = realm.objects('Vocabulary').filtered(query, ...args);

        return matches.map((item: any) => item.toJSON());
    } catch (err) {
        console.error("Lỗi khi tìm kiếm furigana theo level:", err);
        return [];
    }
};


export const getVocabularyDetailByWord = (word: string) => {
    try {
        const realm = getStaticRealm('vocab_detail');

        const item = realm.objectForPrimaryKey('VocabularyDetail', word);

        if (item) {
            return item.toJSON();
        }

        return null;
    } catch (err) {
        console.error(`Lỗi khi lấy chi tiết từ vựng '${word}':`, err);
        return null;
    }
}
