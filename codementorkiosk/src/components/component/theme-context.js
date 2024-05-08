/* @refresh client */
import React, { createContext, useState } from "react";

// Criar o contexto de tema
export const ThemeContext = createContext();

// Provedor de contexto de tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Defina o tema inicial como "light"

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
