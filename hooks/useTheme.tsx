import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#E6E6E6",
  surface: "#FFFFFF",

  text: "#000000",
  textMuted: "#4B5563",

  border: "#D1D5DB",

  primary: "#FAA885",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",

  shadow: "rgba(0,0,0,0.15)",

  gradients: {
    background: ["#F2F2F2", "#E6E6E6"],
    surface: ["#FFFFFF", "#F3F4F6"],

    primary: ["#FAA885", "#F58B63"],
    success: ["#22C55E", "#16A34A"],
    warning: ["#F59E0B", "#D97706"],
    danger: ["#EF4444", "#DC2626"],

    muted: ["#9CA3AF", "#6B7280"],
    empty: ["#F3F4F6", "#E5E7EB"],
  },

  backgrounds: {
    input: "#FFFFFF",
    editInput: "#F9FAFB",
  },

  statusBarStyle: "dark-content",
};
const darkColors: ColorScheme = {
  bg: "#1C1C1C",
  surface: "#2A2A2A",

  text: "#FAFAFA",
  textMuted: "#A1A1AA",

  border: "#3F3F46",

  primary: "#FAA885",
  success: "#4ADE80",
  warning: "#FACC15",
  danger: "#F87171",

  shadow: "rgba(0,0,0,0.8)",

  gradients: {
    background: ["#1C1C1C", "#2A2A2A"],
    surface: ["#2A2A2A", "#3F3F46"],

    primary: ["#FAA885", "#F58B63"],
    success: ["#22C55E", "#16A34A"],
    warning: ["#F59E0B", "#D97706"],
    danger: ["#EF4444", "#DC2626"],

    muted: ["#52525B", "#71717A"],
    empty: ["#3F3F46", "#52525B"],
  },

  backgrounds: {
    input: "#2A2A2A",
    editInput: "#1C1C1C",
  },

  statusBarStyle: "light-content",
};

interface ThemeContextType {
  isDarkMode: boolean,
  toggleDarkMode: () => void,
  colors: ColorScheme
}


const ThemeContext = createContext<undefined | ThemeContextType>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // get the user's choice
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
export default useTheme
