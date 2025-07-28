import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {AppStackParamList} from "./param_type";

export type KanjiDetailNavigationProp = StackNavigationProp<AppStackParamList, 'kanji_detail'>;
export type KanjiDetailRouteProp = RouteProp<AppStackParamList, 'kanji_detail'>;



export const NameScreenProp = {
    kanjiDetail: 'kanji_detail',
    main: 'main',
} as const;
