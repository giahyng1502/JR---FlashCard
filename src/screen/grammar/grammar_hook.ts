import { useEffect, useState } from 'react';
import {Grammar} from '../../models';
import {searchAllGrammarLevels} from '../../realm/service';
import {parseGrammar} from "../../utils";
import {JLPTLevel} from "../../types";

type SearchOptions = {
    keyword: string;
    level?: JLPTLevel;
};

export function useGrammar({keyword,level} : SearchOptions): Grammar[] {
    const [grammars, setGrammars] = useState<Grammar[]>([]);

    useEffect(() => {
        try {
            const data = searchAllGrammarLevels({keyword, level});
            const parsed = parseGrammar(data);
            setGrammars(parsed);
        } catch (e) {
            console.error('Lỗi khi load tất cả Kanji:', e);
        }
    }, [keyword,level]);

    return grammars;
}
