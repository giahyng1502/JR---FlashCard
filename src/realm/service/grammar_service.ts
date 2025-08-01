import { getCachedRealm, GRAMMAR } from "./save_data_to_local.ts";
import { JLPTLevel } from "../../types";
import {parseGrammar} from "../../utils";

const JLPT_LEVELS: JLPTLevel[] = ['N1', 'N2', 'N3', 'N4', 'N5'];
const FILE_NAME_GRAMMAR = "Grammar" as const;

type SearchOptions = {
    keyword: string;
    level?: JLPTLevel;
};

const searchAllGrammarLevels = ({ keyword, level }: SearchOptions) => {
    const results: any[] = [];
    const searchLevels = level ? [level] : JLPT_LEVELS;

    for (const lv of searchLevels) {
        try {
            const realm = getCachedRealm(GRAMMAR, lv);

            const matches = keyword.trim()
                ? realm.objects(FILE_NAME_GRAMMAR).filtered(
                    'title LIKE[c] $0 OR short_explanation LIKE[c] $0 OR long_explanation LIKE[c] $0 OR formation LIKE[c] $0',
                    `*${keyword}*`
                )
                : realm.objects(FILE_NAME_GRAMMAR);

            if (matches.length > 0) {
                const data = parseGrammar(Array.from(matches));
                results.push(...data); // 👈 tránh mảng lồng mảng
            }
        } catch (err) {
            console.warn(`⚠️ Không thể load grammar_${lv}:`, err);
        }
    }

    return results;
};


export { searchAllGrammarLevels, FILE_NAME_GRAMMAR };
