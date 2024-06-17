import { Section } from "@/components/Section";
import React from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Alert } from "./components/Alert";

export const SecExamples = () => {
  return (
    <Section>
      <div className="container-md ds-flex flow-col-nw gap-lg">
        <div className="row">
          <div className="col">
            <h2>Examples</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col ds-flex-start flow-col-nw gap-sm">
            <Button colorVariant="l30">Primary</Button>
            <Button colorVariant="l50">Secondary</Button>
            <Button colorVariant="l60">Tertiary</Button>
          </div>
        </div>
        <div className="bv-row">
          <div className="bv-col">
            <Alert />
          </div>
        </div>
      </div>
    </Section>
  );
};
