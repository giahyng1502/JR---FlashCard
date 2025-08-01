export type Type = "kanji" | "vocabulary" | "grammar"
import { BSON } from "realm";
export type Study = {
    _id: BSON.ObjectId;
    title: string;
    description: string;
    createdAt: string;
    count: number;
    background_name: string;
    type: Type; // enum hoặc string
};

