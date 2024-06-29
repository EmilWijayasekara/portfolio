"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[30rem] sm:max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Technical skills</SectionHeading>
      <div className="flex flex-wrap justify-center my-2 gap-2 max-w-[40rem] cursor-pointer">
        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Java</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>C</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>C#</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>.NET</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>MySQL</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>HTML</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>CSS</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Bootstrap</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Tailwind CSS</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Git</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>GitHub</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>AWS S3</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>AWS EC2</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>AWD RDS</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Arduino</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>JavaScript</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>TypeScript</span>
        </motion.div>

        <motion.div
          className="flex items-center bg-white/10 p-3 rounded-lg text-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        >
          <span>Python</span>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#0f766e] absolute sm:top-[185rem] top-[230rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        animate={{ x: 100, opacity: [0, 1, 0] }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 8, repeat: Infinity, repeatType: "loop" },
        }}
      ></motion.div>
    </section>
  );
}
