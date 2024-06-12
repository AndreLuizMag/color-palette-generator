"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const ColorPicker: React.FC = () => {
  const { color, handleChange } = useThemeContext();

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
