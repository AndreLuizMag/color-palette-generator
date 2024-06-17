import React from "react";
import "./card.scss";
import { useThemeContext } from "@/contexts/ThemeContext";
import { generateColor } from "@/utils/colorPalletGenerator";

export const Card = () => {
  const { hslColor, theme } = useThemeContext();

  const color = generateColor(hslColor.h, hslColor.s, theme ? theme.l20 : 20);
  const gradient = generateColor(
    hslColor.h,
    hslColor.s,
    theme ? theme.l70 : 70
  );

  return (
    <div className="card ps-relative p-10 ds-flex flow-col-nw gap-sm radius-sm overflow-hidden">
      <h3 className="" style={{ color }}>
        Lorem ipsum
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        voluptate, harum maiores, eveniet soluta suscipit dolores obcaecati
        blanditiis delectus eligendi laudantium labore ullam! In officia
        temporibus corporis placeat quo ullam.
      </p>
      <svg
        width="219"
        height="87"
        viewBox="0 0 219 87"
        className="ps-absolute top-0 right-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118 0.000177277C156 -0.000221597 219 0.000177277 219 0.000177277V50.0002C219 50.0002 185 36.0002 151 36.0002C56 36.0002 0 86.5002 0 86.5002C0 86.5002 60.8629 0.000777028 118 0.000177277Z"
          fill={gradient}
        />
      </svg>
    </div>
  );
};
