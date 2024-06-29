"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="text-sm">
        <motion.div
          className="w-[25rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectShopFusion.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">ShopFusion.</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                Comprehensive shop management system designed to streamline
                retail operations. This project is still under development.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  C#
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  .NET
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  GUNA UI
                </span>
              </div>
              <div className="mt-12 flex items-center text-gray-400">
                <SiGithub className="mr-2" />
                <span>Visit Project GitHub Repository</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-[25rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectGCBS.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">Gesture Controlled Speaker</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                Hand gesture-controlled Bluetooth speaker with machine
                learning-based gesture recognition.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  ARDUINO
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  ESP-32 CAM
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  EDGE IMPULSE
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  C++
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  ARDUINO IDE
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <SiGithub className="mr-2" />
                <span>Visit Project GitHub Repository</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-[25rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectFrosterFannels.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">
                Garment Retail Analytics and Optimization System
              </h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                Garment Retail Analytics system to provide real-time insights
                and enhance retail operational efficiency.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  HTML
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  CSS
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  PHP
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  MYSQL
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  BOOTSTRAP
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <SiGithub className="mr-2" />
                <span>Visit Project GitHub Repository</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
