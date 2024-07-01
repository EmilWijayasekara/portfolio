"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { FaFacebook } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiGithub } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaSpotify } from "react-icons/fa6";

let decimal: number;

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <div className="max-w-[25rem] sm:max-w-[31rem]">
      <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Let's get in touch</SectionHeading>

        <a
          className="flex justify-center items-center bg-white/[0.07] !pl-3 p-2 rounded-full text-lg gap-3 hover:bg-[#D44638]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(212,70,56,0.3)] sm:min-w-[25rem] min-w-[15rem] h-[4rem] hover:scale-110"
          href="mailto:emilshamen@gmail.com"
          target="_blank"
        >
          <MdEmail className="text-3xl" />
          <p className="pr-3">Email: emilshamen@gmail.com</p>
        </a>

        <div className="flex flex-wrap justify-center my-2 gap-2 max-w-[40rem]">
          <a
            className="flex items-center bg-white/[0.07] p-2 rounded-full text-lg gap-3 hover:bg-[#1877F2]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(24,119,242,0.3)]"
            href="https://www.facebook.com/it.is.Emil"
            target="_blank"
          >
            <FaFacebook className="text-3xl" />
            <p className="pr-3">Facebook</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 pl-4 rounded-full text-lg gap-3 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(131,58,180,0.3)]"
            href="https://www.instagram.com/its_emil___"
            target="_blank"
          >
            <PiInstagramLogoFill className="text-3xl" />
            <p className="pr-3">Instagram</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 rounded-full text-lg gap-3 hover:bg-[#1DB954]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(29,185,84,0.3)] hover:text-slate-800"
            href="https://open.spotify.com/user/db7oap8q6zsn2q72iooqt4zeg?si=a6f12152d0534792"
            target="_blank"
          >
            <FaSpotify className="text-3xl" />
            <p className="pr-3">Spotify </p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 pl-4 rounded-full text-lg gap-3 hover:bg-[#0072b1]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(0,114,177,0.3)]"
            href="https://www.linkedin.com/in/emil-wijayasekara"
            target="_blank"
          >
            <RxLinkedinLogo className="text-3xl" />
            <p className="pr-3">LinkedIn</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 rounded-full text-lg gap-3 hover:bg-[#64748b]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(100,116,139,0.3)]"
            href="https://github.com/EmilWijayasekara"
            target="_blank"
          >
            <SiGithub className="text-3xl" />
            <p className="pr-3">GitHub</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 pl-4 rounded-full text-lg gap-3 hover:bg-[#eba340]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(235,163,64,0.3)]"
            href="https://leetcode.com/u/Emil_Wijayasekara"
            target="_blank"
          >
            <SiLeetcode className="text-3xl" />
            <p className="pr-3">LeetCode</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 pl-4 rounded-full text-lg gap-3 hover:bg-[#00b760]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(0,183,96,0.3)]"
            href="https://www.hackerrank.com/profile/emilshamen"
            target="_blank"
          >
            <FaHackerrank className="text-3xl" />
            <p className="pr-3">HackerRank</p>
          </a>

          <a
            className="flex items-center bg-white/[0.07] p-2 rounded-full text-lg gap-3 hover:bg-[#FFC0CB]/100 transition-all hover:shadow-[0_0_15px_10px_rgba(225,192,203,0.3)] hover:text-slate-800"
            href="https://www.behance.net/emilwijayasekara"
            target="_blank"
          >
            <IoLogoBehance className="text-3xl" />
            <p className="pr-3">Behance </p>
          </a>
        </div>
      </motion.section>

      <motion.div
        className="bg-[#0f766e]/40 absolute bottom-[10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] overflow-hidden"
        animate={{ x: 100, opacity: [0, 1, 0] }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 4, repeat: Infinity, repeatType: "loop" },
        }}
      ></motion.div>
    </div>
  );
}
