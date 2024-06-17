import { useThemeContext } from "@/contexts/ThemeContext";
import React, { FC, HTMLAttributes } from "react";
import "./styles.scss";

interface SquareProps extends HTMLAttributes<HTMLDivElement> {
  l?: number;
  highlight?: boolean;
}

export const Square: FC<SquareProps> = ({ l, highlight }) => {
  const { hslColor } = useThemeContext();
  const backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${
    l ? l : hslColor.l
  }%)`;
  return (
    <div
      style={{ backgroundColor }}
      className="square ds-flex-center w-100 radius-sm"
      data-highlight={highlight ? "true" : "false"}
    >
      <span className={`square__text theme-${l && l < 50 ? "dark" : "light"}`}>
        hsl({hslColor.h}, {hslColor.s}%, {l}%)
      </span>
    </div>
  );
};
