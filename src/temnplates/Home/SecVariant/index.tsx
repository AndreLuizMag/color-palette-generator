import AnotherComponent from "@/components/AnotherComponent";
import { Section } from "@/components/Section";
import { Square } from "@/components/Square";
import { useThemeContext } from "@/contexts/ThemeContext";
import React from "react";

export const SecVariant = () => {
  const { color, hslColor, theme } = useThemeContext();

  return (
    <Section>
      <div className="container-md ds-flex flow-col-nw gap-lg">
        <div className="row">
          <div className="col">
            <h2 className="sm:heading-04">Generated variables</h2>
          </div>
        </div>
        <div className="ds-grid grid-tpl-col-05 sm:grid-tpl-col-02 gap-sm">
          <Square l={theme?.l10} highlight={theme?.l10 === hslColor.l} />
          <Square l={theme?.l20} highlight={theme?.l20 === hslColor.l} />
          <Square l={theme?.l30} highlight={theme?.l30 === hslColor.l} />
          <Square l={theme?.l50} highlight={theme?.l50 === hslColor.l} />
          <Square l={theme?.l60} highlight={theme?.l60 === hslColor.l} />
          <Square l={theme?.l70} highlight={theme?.l70 === hslColor.l} />
          <Square l={theme?.l80} highlight={theme?.l80 === hslColor.l} />
          <Square l={theme?.l802} highlight={theme?.l802 === hslColor.l} />
          <Square l={theme?.l90} highlight={theme?.l90 === hslColor.l} />
          <Square l={theme?.l902} highlight={theme?.l902 === hslColor.l} />
        </div>
      </div>
    </Section>
  );
};
