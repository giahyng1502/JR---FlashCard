import {Vocabulary, VocabularyDetail} from "../../models";
import {useEffect, useState} from "react";
import {getVocabularyDetail} from "../../realm/service";

const useVocabularyDetail = (word : string) => {
    const [vobDetail, setVobDetail] = useState<VocabularyDetail>()

    useEffect(() => {
        const data = getVocabularyDetail(word);
        setVobDetail(data)
    }, [word]);

    return vobDetail;
}

export default useVocabularyDetail;
