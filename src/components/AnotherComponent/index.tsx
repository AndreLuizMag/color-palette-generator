"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const AnotherComponent: React.FC = () => {
  const { color, hslColor, theme } = useThemeContext();

  console.log(theme);

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
      {theme && (
        <div>
          <p>Base: {theme.base}</p>
          <p>L10: {theme.l10}</p>
          <p>L20: {theme.l20}</p>
          <p>L30: {theme.l30}</p>
          <p>L50: {theme.l50}</p>
          <p>L60: {theme.l60}</p>
          <p>L70: {theme.l70}</p>
          <p>L80: {theme.l80}</p>
          <p>L802: {theme.l802}</p>
          <p>L90: {theme.l90}</p>
          <p>L902: {theme.l902}</p>
        </div>
      )}
    </div>
  );
};

export default AnotherComponent;
