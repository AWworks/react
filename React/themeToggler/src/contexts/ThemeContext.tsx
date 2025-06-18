import { createContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void;
}
// Context defaults
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { }
})
export default ThemeContext;