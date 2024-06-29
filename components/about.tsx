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
      <p className="mb-3 text-center ">
        I'm a final-year student at the University of Sri Jayewardenapura,
        deeply passionate about computer hardware and troubleshooting. My
        technical skills are robust, particularly in Java, and I'm currently
        enhancing my expertise in .NET and C#. Additionally, I have hands-on
        experience with graphic design, having worked on projects for local and
        international clients. I actively contribute to my university's media
        team and engage in various problem-solving platforms to refine my
        skills. Beyond academics and technology, I'm a huge football fan,
        enjoying both watching and playing the sport.
      </p>
    </motion.section>
  );
}
