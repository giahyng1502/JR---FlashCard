import {ExamplesGrammar, Grammar} from "../models";

export function parseGrammar(rawList: any[]): Grammar[] {
    return rawList.map((raw : any) => ({
        title: raw.title,
        short_explanation : raw.short_explanation,
        long_explanation : raw.long_explanation,
        formation : raw.formation,
        short_explanation_vi : raw.short_explanation_vi,
        long_explanation_vi : raw.long_explanation_vi,
        formation_vi : raw.formation_vi,
        level : raw?.level,
        examples : raw.examples.map((entry : ExamplesGrammar) => ({
            jp : entry.jp,
            romaji : entry.romaji,
            en : entry.en,
            vi : entry.vi,
        })),
    }));
}
