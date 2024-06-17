import { useThemeContext } from "@/contexts/ThemeContext";
import { generateColor } from "@/utils/colorPalletGenerator";
import { compColorVariant } from "@/utils/interface";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

type CombinedProps = compColorVariant & ButtonProps;

export const Button: FC<CombinedProps> = ({ colorVariant, children }) => {
  const { color, hslColor, theme } = useThemeContext();

  const backgroundColor = generateColor(
    hslColor.h,
    hslColor.s,
    theme ? theme[colorVariant] : 10
  );

  return (
    <button type="button" className="font-primary" style={{ backgroundColor }}>
      {children}
    </button>
  );
};
