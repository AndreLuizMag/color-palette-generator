"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import "./styles.scss";

const ColorPicker: React.FC = () => {
  const { color, handleChange } = useThemeContext();

  return (
    <div className="color-picker ds-flex flow-row-nw gap-3xs">
      <div className="ds-flex flow-col-nw gap-3xs">
        <label htmlFor="color-picker" className="color-picker__label ds-none">
          Color Picker
        </label>
        <input
          type="color"
          id="color-picker"
          className="color-picker__input"
          value={color}
          onChange={handleChange}
        />
      </div>

      <div className="ds-flex flow-col-nw gap-3xs">
        <label htmlFor="color-hex" className="color-picker__label ds-none">
          Color Hex
        </label>
        <input
          type="text"
          id="color-hex"
          className=""
          value={color}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
