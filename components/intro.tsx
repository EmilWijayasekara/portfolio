"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SiGithub } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FaSpotify } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-50 max-h-[90vh] text-center sm:my-10 scroll-mt-[100rem]"
    >
      <div className="mb-100 flex flex-col sm:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="flex-shrink-0"
        >
          <Image
            src="/Emil.jpg"
            alt="Emil Wijayasekara"
            width={300}
            height={300}
            quality={95}
            priority={true}
            className="rounded-full object-cover border-[0.35rem] border-white/10 shadow-xl hover:scale-110 transition hover:border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="sm:ml-8 text-center sm:text-left"
        >
          <h1 className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl !leading-[0]">
            <span className="mb-4 font-bold text-7xl">
              Hello, I'm Emil.
              <br />
            </span>
            <div className="mt-4">
              <span className="text-xl">
                A Final Year Computer Science Undergraduate. <br />
                Interested in Cybersecurity, Software Development and
                Operations.
              </span>
            </div>
          </h1>

          <div className="flex justify-center sm:justify-normal flex-row flex-wrap text-lg sm:flex-row gap-3 px-4 sm:text-lg font-medium">
            <a
              className="bg-white/10 p-5 text-white/60 hover:text-sky-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://www.linkedin.com/in/emil-wijayasekara/"
              target="_blank"
            >
              <RxLinkedinLogo />
            </a>

            <a
              className="bg-white/10 p-4 text-white/60 hover:text-gray-100 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
              href="https://github.com/EmilWijayasekara"
              target="_blank"
            >
              <SiGithub />
            </a>

            <a
              className="bg-white/10 p-4 text-white/60 hover:text-red-200 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
              href="mailto:emilshamen@gmail.com"
              target="_blank"
            >
              <MdEmail />
            </a>

            <a
              className="bg-white/10 p-4 text-white/60 hover:text-green-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
              href="https://open.spotify.com/user/db7oap8q6zsn2q72iooqt4zeg"
              target="_blank"
            >
              <FaSpotify />
            </a>

            <Link
              href="#contact"
              className="sm:mt-0 mt-4 group bg-cyan-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#075985] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        animate={{ x: 100, opacity: [0, 1, 0] }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 8, repeat: Infinity, repeatType: "loop" },
        }}
      ></motion.div>

      <motion.div
        className="bg-[#0f766e] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        animate={{ x: 100, opacity: [0, 1, 0] }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 4, repeat: Infinity, repeatType: "loop" },
        }}
      ></motion.div>

    </section>
  );
}
