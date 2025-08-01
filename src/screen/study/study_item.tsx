import React from 'react';
import { useColorScheme } from 'react-native'; // 👈 để xác định dark/light thực tế
import {TouchableOpacity } from 'react-native';
import { Study } from "../../models";
import TextComponent from "../../components/ui/text_component";
import { FONT_SIZE, PADDING, RADIUS } from "../../styles";
import {CardColorName, cardColors} from "../../theme";
import { useAppTheme } from "../../hooks";

type Props = {
    item: Study;
};

const StudyItem = ({ item }: Props) => {
    const { themeMode } = useAppTheme();
    const systemScheme = useColorScheme(); // 'light' | 'dark' | null

    const currentTheme = themeMode === "system" ? systemScheme || "light" : themeMode;

    const theme = cardColors[item?.background_name as CardColorName]?.[currentTheme];

    if (!theme) {
        console.warn(`Theme "${item.background_name}" is invalid`);
        return null;
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                backgroundColor: theme.backgroundColor,
                borderRadius: RADIUS.LG,
                padding: PADDING.MD,
            }}
        >
            <TextComponent bold size={FONT_SIZE.LG} color={theme.textColor}>
                {item.title}
            </TextComponent>
            <TextComponent size={FONT_SIZE.SM} color={theme.textColor}>
                {item.description}
            </TextComponent>
            <TextComponent color={theme.textColor}>
                {item.type} : {item.count}/30
            </TextComponent>
        </TouchableOpacity>
    );
};

export default React.memo(StudyItem);
