import {getCachedRealm, getStaticRealm} from "./save_data_to_local.ts";
import {JLPTLevel} from "../../types";
import {KanjiDetail} from "../../models";
import {parseKanjiDetail} from "../../utils";
export const FILE_NAME_KANJI = {
    kanji: "KanjiSimple",
    kanji_detail: "Kanji",
} as const;

export const JLPT_LEVELS: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

export const searchAllKanjiLevels = (keyword: string) => {
    const results: any[] = [];

    for (const level of JLPT_LEVELS) {
        try {
            const realm = getCachedRealm('kanji', level);
            const matches = realm
                .objects('KanjiSimple')
                .filtered(
                    'kanji CONTAINS[c] $0 OR meaning CONTAINS[c] $0 OR onyomi CONTAINS[c] $0 OR kunyomi CONTAINS[c] $0',
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
            console.warn(`Không thể load kanji_${level}:`, err);
        }
    }

    return results;
};

export const searchKanjiByCharacter = function (character: string): KanjiDetail | undefined {
    try {
        const realm = getStaticRealm('kanji_detail');
        const normalizedCharacter = character.split(' ')[0];
        const match = realm
            .objects('Kanji')
            .filtered('kanji BEGINSWITH $0', normalizedCharacter)[0];

        if (match) {
            return parseKanjiDetail(match.toJSON());
        }
    } catch (err) {
        console.warn(`Không thể load kanji_detail:`, err);
    }

    return undefined;
};
