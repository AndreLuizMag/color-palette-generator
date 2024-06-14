"use client";
import { colorPaletteGenerator } from "@/utils/colorPalletGenerator";
import { hexToHsl } from "@/utils/converter";
import { HSLColor } from "@/utils/interface";
import { Theme } from "@/utils/type";
import { useState } from "react";

const useColorPicker = () => {
  const [color, setColor] = useState("#3D7AF5");
  const [hslColor, setHslColor] = useState<HSLColor>({ h: 220, s: 90, l: 60 });
  const [theme, setTheme] = useState<Theme | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = event.target.value;
    setColor(hexColor);
    const hsl = hexToHsl(hexColor);
    setHslColor(hsl);
    const generatedTheme = colorPaletteGenerator(hsl);
    setTheme(colorPaletteGenerator(hsl));
  };

  return {
    color,
    hslColor,
    theme,
    handleChange,
  };
};

export default useColorPicker;
