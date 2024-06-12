"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const AnotherComponent: React.FC = () => {
  const { color, hslColor } = useThemeContext();

  return (
    <div>
      <ul>
        <li>
          <p>Hex: {color}</p>
          <p>H: {hslColor.h}</p>
          <p>S: {hslColor.s}%</p>
          <p>L: {hslColor.l}%</p>
        </li>
      </ul>
    </div>
  );
};

export default AnotherComponent;
