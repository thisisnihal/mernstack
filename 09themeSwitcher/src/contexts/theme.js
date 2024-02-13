import { createContext, useContext } from "react";

//
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// by doing that you dont need to set useContext again and again
export default function useTheme() {
  return useContext(ThemeContext);
}
