import {useQuery} from "@realm/react";
import {SchemaName, StudySchema} from "../../realm/schema";
import {Study} from "../../models";
import {parseStudy} from "../../utils";

const useStudyHook = (): Study[] => {
    const studies = useQuery(SchemaName.study); // "Study"
    const studyArray = Array.from(studies);
    return parseStudy(studyArray);
};


export default useStudyHook;
