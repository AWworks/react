import { useState } from "react";
import ThemeContext, { type Theme } from "./contexts/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import ThemedCard from "./components/ThemedCard";

function App() {
  // State to track the current theme ("light" or "dark")
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((existingTheme) => (existingTheme === "light" ? "dark" : "light"));
  };

  // Context value containing the current theme and toggle function
  const themeContext = {
    theme,
    toggleTheme,
  };

  return (
    // Provide the theme context to all child components
    <ThemeContext.Provider value={themeContext}>
      <div
        // Set background and text color based on the current theme
        className={
          theme === "dark"
            ? "min-vh-100 p-5 bg-dark text-light"
            : "min-vh-100 p-5 bg-light text-dark"
        }
      >
        <div className="container">
          {/* App title */}
          <h1 className="mb-4">React Theme Toggle using Bootstrap</h1>
          {/* Button to toggle theme */}
          <ThemeToggler />
          {/* Card that changes appearance based on theme */}
          <ThemedCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;