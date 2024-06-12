import React, { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.scss";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className="section p-block-16 radius-md">
      <div className="container-md">{children}</div>
    </section>
  );
};
