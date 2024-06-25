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
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-[53rem]">
        <motion.div
          className={
            "p-7 m-5 rounded-xl shadow-lg bg-white/5"
          }
        >
          <h3 className="font-bold text-lg">
            University of Sri Jayewardenepura
          </h3>
          <p className="font-normal text-gray-500">Nugegoda, Sri Lanka.</p>
          <p className="mt-2 text-white/75">
            I am studying for a Bachelor of Science (Hons) in Computer Science
            at the University of Sri Jayewardenepura. The program covers a wide
            range of topics including programming, data structures, algorithms,
            database management, and operating systems. I’ve also studied
            advanced subjects like machine learning, artificial intelligence,
            and distributed systems. The coursework includes hands-on labs and
            projects, a major research project, and industrial training,
            providing a solid foundation in both theoretical and practical
            aspects of computer science.
          </p>
          <div className="flex flex-row-reverse mt-2 text-sm text-gray-400">
            Jun 2021 - Present
          </div>
        </motion.div>

        <motion.div
          className={
            "p-7 m-5 rounded-xl shadow-lg bg-white/5"
          }
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