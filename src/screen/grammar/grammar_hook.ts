import { useEffect, useState } from 'react';
import {searchAllGrammarLevels} from '../../realm/service';
import {GrammarListItem, parseGrammar} from "../../utils";
import {JLPTLevel} from "../../types";

type SearchOptions = {
    keyword: string;
    level?: JLPTLevel;
};

export function useGrammar({keyword,level} : SearchOptions): GrammarListItem[] {
    const [grammars, setGrammars] = useState<GrammarListItem[]>([]);

    useEffect(() => {
        try {
            const data = searchAllGrammarLevels({keyword, level});
            setGrammars(data);
        } catch (e) {
            console.error('Lỗi khi load tất cả Kanji:', e);
        }
    }, [keyword,level]);

    return grammars;
}
