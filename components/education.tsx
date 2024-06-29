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
            University of Sri Jayewardenepura
          </h3>
          <p className="font-normal text-gray-500">Nugegoda, Sri Lanka.</p>
          <p className="mt-2 text-white/75">
            Pursuing a Bachelor of Science (Hons) in Computer Science, gaining
            comprehensive knowledge in programming, data structures, algorithms,
            database management, and operating systems. My studies also
            encompass advanced topics such as machine learning, artificial
            intelligence, and distributed systems. Through hands-on labs,
            projects, a major research initiative, and industrial training, I
            have developed a strong foundation in both the theoretical and
            practical aspects of computer science.
          </p>
          <div className="flex flex-row-reverse mt-2 text-sm text-gray-400">
            Jun 2021 - Present
          </div>
        </motion.div>

        <motion.div
          className={"p-7 m-5 rounded-xl shadow-lg bg-white/5 hidden"}
        >
          <h3 className="font-bold text-lg">Bandaranayake Central College</h3>
          <p className="font-normal text-gray-500">Veyangoda, Sri Lanka.</p>
          <p className="mt-2 text-white/75">
            I was an active member of the School Football Team from 2011 to
            2018, developing teamwork and leadership skills. I also played in
            the Senior Western Band from 2014 to 2017, enhancing my musical
            abilities. Additionally, I contributed to the school's Graphic
            Designing Team from 2015 to 2020, where I honed my design skills.
          </p>
          <div className="flex flex-row-reverse mt-2 text-sm text-gray-400">
            Jan 2010 - Aug 2018
          </div>
        </motion.div>
      </div>
    </section>
  );
}
