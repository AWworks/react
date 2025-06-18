import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <div className="mb-4">
            <button
                className={theme === "light" ? "btn btn-dark" : "btn btn-light"}
                onClick={toggleTheme}
            >
                Switch to {theme === "light" ? "dark" : "light"} Theme.
            </button>
        </div>
    )
}
export default ThemeToggler;