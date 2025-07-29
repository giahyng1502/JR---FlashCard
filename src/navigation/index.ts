import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {AppStackParamList} from "./param_type";

export type KanjiDetailNavigationProp = StackNavigationProp<AppStackParamList, 'kanji_detail'>;
export type KanjiDetailRouteProp = RouteProp<AppStackParamList, 'kanji_detail'>;

export type GrammarDetailNavigationProp = StackNavigationProp<AppStackParamList, 'grammar_detail'>;
export type GrammarDetailRouteProp = RouteProp<AppStackParamList, 'grammar_detail'>;

export type MainNavigationProp = StackNavigationProp<AppStackParamList, 'main'>;
export type MainRouteProp = RouteProp<AppStackParamList, 'main'>;

export type VocabularyDetailNavigationProp = StackNavigationProp<AppStackParamList, 'vocabulary_detail'>;
export type VocabularyDetailRouteProp = RouteProp<AppStackParamList, 'vocabulary_detail'>;

export const NameScreenProp = {
    kanjiDetail: 'kanji_detail',
    grammar_detail: 'grammar_detail',
    main: 'main',
    vocabulary_detail : 'vocabulary_detail',
} as const;
