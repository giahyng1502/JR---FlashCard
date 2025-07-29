import {useEffect, useState} from 'react';
import {Vocabulary} from '../../models';
import {AdvancedSearchOptions, searchVocabularyAdvanced} from '../../realm/service';

const useVocabulary = ({
        keyword,
        posKeyword,
        level,
        prefix,
                       }
                       : AdvancedSearchOptions)
    : Vocabulary[] =>
{
    const [vocabulary, setVocabulary] = useState<Vocabulary[]>([]);

    useEffect(() => {
        const data = searchVocabularyAdvanced({keyword, posKeyword, level, prefix});
        setVocabulary(data);
    }, [keyword, level, posKeyword, prefix]);

    return vocabulary;
};

export default useVocabulary;
