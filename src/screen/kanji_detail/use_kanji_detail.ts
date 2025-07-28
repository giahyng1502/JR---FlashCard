import { useEffect, useState } from 'react';
import {KanjiDetail} from '../../models';
import {
    searchKanjiByCharacter
} from '../../realm/service';


export function useKanjiDetail(character: string): KanjiDetail | undefined {
    const [kanji, setKanji] = useState<KanjiDetail>();

    useEffect(() => {
        try {
            console.log(character)
            const data = searchKanjiByCharacter(character);
            console.log(data)

            setKanji(data);
        } catch (e) {
            console.error('Lỗi khi load Kanji detail:', e);
        }
    }, [character]);

    return kanji;
}
