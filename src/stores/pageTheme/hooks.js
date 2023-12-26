import { useSelector } from "react-redux";

export const useTheme = () => useSelector(state => state.pageTheme.theme)
export const useLanguage = () => useSelector(state => state.pageTheme.language)