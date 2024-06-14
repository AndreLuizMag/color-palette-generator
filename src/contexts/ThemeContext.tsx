"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useColorPicker from "@/hooks/useColorPicker";
import { HSLColor } from "@/utils/interface";
import { Theme } from "@/utils/type";

interface ThemeContextProps {
  color: string;
  hslColor: HSLColor;
  theme: Theme | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { color, hslColor, theme, handleChange } = useColorPicker();

  return (
    <ThemeContext.Provider value={{ color, hslColor, theme, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useColorPickerContext must be used within a ColorPickerProvider"
    );
  }
  return context;
};
