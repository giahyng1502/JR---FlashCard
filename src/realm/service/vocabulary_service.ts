import {getStaticRealm} from "./save_data_to_local.ts";
import {Vocabulary, VocabularyDetail} from "../../models";
import {parseVocabularies, parseVocabularyDetail} from "../../utils/convert_vocabulary.ts";
import {JLPTLevel} from "../../types";

export type AdvancedSearchOptions = {
    keyword?: string;
    posKeyword?: string;
    level?: JLPTLevel;
    prefix?: string;
};

export const searchVocabularyAdvanced = (options: AdvancedSearchOptions) :Vocabulary[] => {
    try {
        const realm = getStaticRealm('vocab');

        const queryParts: string[] = [];
        const args: any[] = [];

        if (options.keyword?.trim()) {
            queryParts.push(
                '(word CONTAINS[c] $' + args.length +
                ' OR meaning CONTAINS[c] $' + args.length +
                ' OR meaning_vi CONTAINS[c] $' + args.length +
                ' OR furigana CONTAINS[c] $' + args.length +
                ' OR romaji CONTAINS[c] $' + args.length + ')'
            );
            args.push(options.keyword);
        }

        if (options.posKeyword?.trim()) {
            queryParts.push(
                '(pos CONTAINS[c] $' + args.length +
                ' OR pos_vi CONTAINS[c] $' + args.length + ')'
            );
            args.push(options.posKeyword);
        }

        if (options.prefix?.trim()) {
            queryParts.push('furigana BEGINSWITH[c] $' + args.length);
            args.push(options.prefix);
        }

        if (options.level) {
            const jlptLevelNumber = parseInt(options.level.replace("N", ""), 10);
            queryParts.push('level == $' + args.length);
            args.push(jlptLevelNumber);
        }

        const finalQuery = queryParts.join(' AND ');
        const results = finalQuery
            ? realm.objects('Vocabulary').filtered(finalQuery, ...args)
            : realm.objects("Vocabulary");


        return parseVocabularies(Array.from(results));
    } catch (err) {
        console.error('Lỗi khi tìm kiếm nâng cao:', err);
        return [];
    }
};


export const getVocabularyDetail = (word: string) : VocabularyDetail => {
    const realm = getStaticRealm('vocab_detail');
    const data = realm.objectForPrimaryKey<VocabularyDetail>('VocabularyDetail', word);

    return parseVocabularyDetail(data);
};
