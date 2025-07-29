import { getCachedRealm, GRAMMAR } from "./save_data_to_local.ts";
import { JLPTLevel } from "../../types";

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
            const realm = getCachedRealm(GRAMMAR, lv || "N5");

            const matches = keyword.trim()
                ? realm.objects(FILE_NAME_GRAMMAR).filtered(
                    'title LIKE[c] $0 OR short_explanation LIKE[c] $0 OR long_explanation LIKE[c] $0 OR formation LIKE[c] $0',
                    `*${keyword}*`
                )
                : realm.objects(FILE_NAME_GRAMMAR);


            if (matches.length > 0) {
                results.push(
                    ...matches.map((item: any) => ({
                        ...item.toJSON(),
                        level : lv,
                    }))
                );
            }
        } catch (err) {
            console.warn(`⚠️ Không thể load grammar_${level}:`, err);
        }
    }

    return results;
};

export { searchAllGrammarLevels, FILE_NAME_GRAMMAR };
