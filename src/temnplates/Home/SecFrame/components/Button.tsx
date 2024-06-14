import { useThemeContext } from "@/contexts/ThemeContext";
import { generateBackground } from "@/utils/colorPalletGenerator";
import { compColorVariant } from "@/utils/interface";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  colorVariant: compColorVariant;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ colorVariant, children }) => {
  return (
    <button type="button" className="">
      {children}
    </button>
  );
};
