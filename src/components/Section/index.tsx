import React, { FC, HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <section
      className={`section p-block-10 radius-md theme-secondary ${className}`}
    >
      {children}
    </section>
  );
};
