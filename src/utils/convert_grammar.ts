import { ExamplesGrammar, Grammar } from "../models";

// Type mở rộng để chứa cả ngữ pháp và quảng cáo
export type GrammarListItem = Grammar | { type: "native_ad"; id: string };

// Hàm parse ngữ pháp và chèn quảng cáo sau mỗi adInterval mục
export function parseGrammar(rawList: any[], adInterval = 7): GrammarListItem[] {
    const grammarList: Grammar[] = rawList.map((raw: any): Grammar => ({
        title: raw.title,
        short_explanation: raw.short_explanation,
        long_explanation: raw.long_explanation,
        formation: raw.formation,
        short_explanation_vi: raw.short_explanation_vi,
        long_explanation_vi: raw.long_explanation_vi,
        formation_vi: raw.formation_vi,
        examples: raw.examples.map((entry: ExamplesGrammar) => ({
            jp: entry.jp,
            romaji: entry.romaji,
            en: entry.en,
            vi: entry.vi,
        })),
    }));

    const result: GrammarListItem[] = [];
    for (let i = 0; i < grammarList.length; i++) {
        result.push(grammarList[i]);
        if ((i + 1) % adInterval === 0 && i !== grammarList.length - 1) {
            result.push({ type: "native_ad", id: `grammar-ad-${i}` });
        }
    }

    return result;
}
