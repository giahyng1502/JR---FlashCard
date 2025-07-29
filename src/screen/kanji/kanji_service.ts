import { useEffect, useState } from 'react';
import { Kanji } from '../../models';
import { FILE_NAME_KANJI, getCachedRealm, KANJI, LEVELS } from '../../realm/service';
import { parseKanjis } from '../../utils';
import {JLPTLevel} from "../../types";


export function useAllKanji(level : JLPTLevel): Kanji[] {
    const [kanjis, setKanjis] = useState<Kanji[]>([]);

    useEffect(() => {
        try {
                const realm = getCachedRealm(KANJI, level || "N5");
                const data = realm.objects(FILE_NAME_KANJI.kanji);
                const parsed = parseKanjis(Array.from(data));

            setKanjis(parsed);
        } catch (e) {
            console.error('Lỗi khi load tất cả Kanji:', e);
        }
    }, [level]);

    return kanjis;
}
