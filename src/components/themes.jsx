import React, { createContext, useContext, useState, useEffect } from "react";

// Definimos nuestros temas adaptativos usando clases de Tailwind
export const themeOptions = {
  light: {
    name: "light",
    bgBase: "bg-[#f8f9fa]",
    bgGlass: "bg-[#fce7f3]/40",
    borderGlass: "border-white/20",
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-500",
    accentText: "text-[#faacd4]",
    accentBg: "bg-[#faacd4]",
    accentHover: "hover:bg-[#f992c3]",
    shadow: "shadow-[0_4px_30px_rgba(0,0,0,0.05)]",
  },
  dark: {
    name: "dark",
    bgBase: "bg-slate-950",
    bgGlass: "bg-slate-900/60",
    borderGlass: "border-slate-700/50",
    textPrimary: "text-slate-100",
    textSecondary: "text-slate-400",
    accentText: "text-[#f9a8d4]",
    accentBg: "bg-[#db2777]",
    accentHover: "hover:bg-[#be185d]",
    shadow: "shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
  },
  nature: {
    name: "nature",
    bgBase: "bg-[#f1f5f2]",
    bgGlass: "bg-[#e2efe5]/50",
    borderGlass: "border-emerald-500/20",
    textPrimary: "text-emerald-950",
    textSecondary: "text-emerald-700",
    accentText: "text-emerald-600",
    accentBg: "bg-emerald-500",
    accentHover: "hover:bg-emerald-600",
    shadow: "shadow-[0_4px_30px_rgba(16,185,129,0.1)]",
  },
};

// Creamos el contexto con valores por defecto (para evitar fallos si no se envuelve la app)
const ThemeContext = createContext({
  theme: themeOptions.light,
  currentTheme: "light",
  changeTheme: () => {},
  themeOptions,
});

export const ThemeProvider = ({ children }) => {
  // Mantenemos el tema en memoria usando localStorage
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("physis-theme");
    return savedTheme && themeOptions[savedTheme] ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("physis-theme", currentTheme);
    document.documentElement.className = currentTheme; // Opcional, util para estilos puros
  }, [currentTheme]);

  const changeTheme = (themeName) => setCurrentTheme(themeName);
  const theme = themeOptions[currentTheme];

  return (
    <ThemeContext.Provider
      value={{ theme, currentTheme, changeTheme, themeOptions }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
