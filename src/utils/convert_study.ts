import {Study} from "../models";

export function parseStudy(rawList: any[]): Study[] {
    return rawList.map((raw) => ({
        _id : raw._id,
        description : raw.description,
        createdAt : raw.createdAt,
        background_name : raw.background_name,
        count : raw.count,
        type : raw.type,
        title : raw.title,
    }));
}
