"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 select-none pointer-events-none"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-[53rem]">
        <motion.div className={"p-7 m-5 rounded-xl shadow-lg bg-white/5"}>
          <h3 className="font-bold text-lg">
            Bachelor of Science (Hons) in Computer Science
          </h3>
          <p className="font-normal text-gray-500">
            University of Sri Jayewardenepura
          </p>
          <p className="mt-2 text-white/75">
            Gaining comprehensive knowledge in programming, data structures,
            algorithms, database management, and operating systems. My studies
            also encompass advanced topics such as machine learning, artificial
            intelligence, and distributed systems. Through hands-on labs,
            projects, a major research initiative, and industrial training, I
            have developed a strong foundation in both the theoretical and
            practical aspects of computer science.
          </p>
          <div className="flex flex-row-reverse mt-2 text-sm text-gray-400">
            Jun 2021 - Present
          </div>
        </motion.div>
      </div>
    </section>
  );
}
