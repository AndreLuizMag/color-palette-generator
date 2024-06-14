import ColorPicker from "@/components/ColorPicker";
import { Section } from "@/components/Section";
import { useThemeContext } from "@/contexts/ThemeContext";
import React from "react";

export const SecPicker = () => {
  const { color, hslColor } = useThemeContext();

  return (
    <Section>
      <div className="container-md ds-flex flow-col-nw gap-lg">
        <div className="row">
          <div className="col">
            <h1 className="sm:heading-03">Color Picker</h1>
          </div>
        </div>
        <div className="row align-stretch">
          <div className="col">
            <ColorPicker />
          </div>
        </div>
      </div>
    </Section>
  );
};
