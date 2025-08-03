import {ThemeMode} from "../context/theme_context.tsx";
import {getEffectiveThemeMode} from "../screen/add_data/theme_selected.tsx";
import tinycolor from "tinycolor2";

export const darkenColor = (themeMode : ThemeMode,color : string)  : string=> {
    const effectiveMode = getEffectiveThemeMode(themeMode);
    const darken = effectiveMode === "dark" ? -15 : 15;
    return tinycolor(color).darken(darken).toString() || color;
}
