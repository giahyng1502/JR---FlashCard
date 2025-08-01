import {Study} from "../../models";
import {useStudyRealm} from "../../hooks/use_realm_study.ts";
import {SchemaName} from "../../realm/schema";

export const useAddDataHook = () => {
    const {createItem} = useStudyRealm();

    const addDataStudy = (data : Study) => {
        try {
            createItem(SchemaName.study,data)
        }catch (e) {
            console.log(e)
        }
    }
    return {addDataStudy}
}
