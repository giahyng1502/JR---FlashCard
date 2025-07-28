import {getCachedRealm} from "./save_data_to_local.ts";
import {JLPT_LEVELS} from "../../types";


export const searchAllGrammarLevels = (keyword: string) => {
    const results: any[] = [];

    for (const level of JLPT_LEVELS) {
        try {
            const realm = getCachedRealm('grammar', level);
            const matches = realm
                .objects('Grammar')
                .filtered(
                    'name CONTAINS[c] $0 OR meaning CONTAINS[c] $0 OR structure CONTAINS[c] $0 OR description CONTAINS[c] $0',
                    keyword
                );

            if (matches.length > 0) {
                results.push(
                    ...matches.map((item: any) => ({
                        ...item.toJSON(),
                        level,
                    }))
                );
            }
        } catch (err) {
            console.warn(`⚠️ Không thể load grammar_${level}:`, err);
        }
    }

    return results;
};
