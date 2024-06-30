"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="my-[10rem] max-w-[45rem] rounded-2xl text-center leading-8 sm:mb-40 scroll-mt-28 p-10 hover:scale-105"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-center leading-normal sm:leading-relaxed">
        An Undergraduate with a deep passion for computer hardware,
        troubleshooting, data privacy, and graphic design, I merge creativity
        with technical expertise. My robust problem-solving skills are developed
        through active engagement in various platforms and contributions to the
        media team. Beyond academics and technology, I'm a football player and
        an avid fan of both football and Formula 1. I strive to push boundaries
        and bring ideas to life.
      </p>
    </motion.section>
  );
}
