"use client";

import { useState } from "react";

interface HSLColor {
  h: number;
  s: number;
  l: number;
}

const useColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const [hslColor, setHslColor] = useState<HSLColor>({ h: 0, s: 0, l: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = event.target.value;
    setColor(hexColor);
    const hsl = hexToHsl(hexColor);
    setHslColor(hsl);
  };

  const hexToHsl = (hex: string): HSLColor => {
    hex = hex.replace(/^#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
  };

  return {
    color,
    hslColor,
    handleChange,
  };
};

export default useColorPicker;
