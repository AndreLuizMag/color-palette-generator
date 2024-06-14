import { Section } from "@/components/Section";
import React from "react";
import { Button } from "./components/Button";

export const SecFrame = () => {
  return (
    <Section>
      <div className="container-md ds-flex flow-col-nw gap-lg">
        <div className="row">
          <div className="col">
            <h2>Frame</h2>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </Section>
  );
};
