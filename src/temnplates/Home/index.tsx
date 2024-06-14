"use client";
import { ReactNode, useEffect, useRef } from "react";
import { LayoutGroup, motion, useAnimation, useInView } from "framer-motion";

import { appFadeInUp } from "@/utils/framerMotion";

import { SecPicker } from "./SecPicker";
import { SecVariant } from "./SecVariant";
import { SecFrame } from "./SecFrame";

const Wrapper = ({ content }: { content: ReactNode }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={appFadeInUp}
      initial="hidden"
      animate={control}
      exit="exit"
      className="article-wrapper"
    >
      {content}
    </motion.div>
  );
};

export const ContentWrapper = ({}) => {
  const contentList = [
    <SecPicker key="picker" />,
    <SecVariant key="variant" />,
  ];

  return (
    <LayoutGroup>
      {contentList.map((content, index) => (
        <Wrapper key={index} content={content} />
      ))}
    </LayoutGroup>
  );
};
