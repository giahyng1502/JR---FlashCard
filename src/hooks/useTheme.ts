import {useContext} from "react";
import {Theme_context} from "../context/theme_context.tsx";

export const useAppTheme = () => useContext(Theme_context);
