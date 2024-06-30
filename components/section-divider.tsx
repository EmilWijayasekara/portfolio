"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0.5, y: 0 }}
      animate={{
        y: [0, -40, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <IoIosArrowDown />
    </motion.div>
  );
}
