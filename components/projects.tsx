"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { IoCloudOffline } from "react-icons/io5";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="text-sm">
        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectPersonalMediaServer.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">Personal Media Server</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                Cloud-based media server using Jellyfin to provide seamless
                video and music streaming across multiple platforms, ensuring
                smooth media experience.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  JELLYFIN
                </span>
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  SONARR
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  RADARR
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  PROWLARR
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  JELLYSEERR
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  DIGITALOCEAN
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <BsGlobe className="mr-2" />
                <span>
                  <a href="mailto:emilshamen@gmail.com?subject=Request%20access%20for%20Personal%20Media%20Server">
                    Request to experience the Full Project Online
                  </a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectPWP.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">Personal Web Page</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                A dynamic portfolio website to highlight my projects,
                demonstrating my expertise in front-end development and design.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  NEXT JS
                </span>
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  REACT
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  TYPESCRIPT
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  TAILWIND CSS
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  FRAMER MOTION
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <BsGlobe className="mr-2" />
                <span>
                  <a href="#">You are here right now!</a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectHomeNetwork.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">
                Home Network Control Center
              </h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                Utilizes Pi-hole to monitor network activities, block ads, and
                manage traffic, while also employing port-forwarding for network
                management.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  PI-HOLE
                </span>
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  DIGITALOCEAN
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <IoCloudOffline className="mr-2" />
                <span>
                  <a href="#">Hosted privately</a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
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
                <a
                  href="https://github.com/EmilWijayasekara/gesture-controlled-bluetooth-speaker"
                  target="_blank"
                >
                  <span>Visit Project GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectRobot.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">Personal Assistant Robot</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                The Personal Assistant Robot executes commands to play YouTube
                music, perform Google searches, take notes, and set alarms,
                streamlining daily tasks.
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  ARDUINO
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  PYTHON
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
                <a
                  href="https://github.com/EmilWijayasekara/personal-assistant-robot"
                  target="_blank"
                >
                  <span>Visit Project GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
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
                <IoConstructSharp className="mr-2" />
                <span>Project on GitHub Currently Private</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/projectInnoWave.jpg"
              alt="Meta Logo"
              className="w-[15.5rem] mr-4 rounded-lg hidden sm:block"
            />
            <div className="text-left">
              <h2 className="font-bold text-3xl">InnoWave</h2>
              <p className="font-normal text-gray-300 pt-3 text-sm pr-4">
                InnoWave is a feature-rich note-taking app that goes beyond
                traditional editors, offering a collaborative and visually
                appealing workspace. (Group Project)
              </p>
              <div className="flex flex-wrap mt-3 text-xs">
                <span className="bg-white/20 rounded-full p-1 px-2 mr-1 mt-1 tracking-wider">
                  NEXT JS
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  TYPESCRIPT
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  REACT
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  Clerk
                </span>
                <span className="bg-white/20 rounded-xl p-1 px-2 mr-1 mt-1 tracking-wider">
                  TAILWIND CSS
                </span>
              </div>
              <div className="mt-8 flex items-center text-gray-400">
                <BsGlobe className="mr-2" />
                <span>
                  <a href="https://innowave-app.vercel.app/" target="_blank">
                    Experience the Full Project Online
                  </a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-[20rem] sm:max-w-[45rem] sm:w-[45rem] sm:h-[17rem] sm:p-3 sm:m-4 p-5 m-6 rounded-xl shadow-lg bg-white/5 overflow-hidden cursor-pointer"
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
                <a
                  href="https://github.com/EmilWijayasekara/ForesterFannels-garment-retail-analytics-and-optimization-system"
                  target="_blank"
                >
                  <span>Visit Project GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[10rem]">
        <SectionHeading>My Graphic Designing projects</SectionHeading>
        <a href="https://www.behance.net/emilwijayasekara" target="_blank">
          <div className="hidden sm:block relative bg-white/5 sm:max-w-[45rem] sm:h-[25.5rem] rounded-xl m-6 shadow-lg mt-[5rem] hover:scale-110 transition-all hover:shadow-2xl hover:bg-white/20">
            <img
              src="/projectDES.png"
              alt=""
              className="absolute p-3 top-[-3.7rem] rounded-xl"
            />
          </div>
          <div className="sm:hidden block bg-white/5 w-[20rem] h-auto shadow-lg rounded-lg p-5 m-6 overflow-hidden cursor-pointer">
            <img
              src="/projectDESMobile.jpg"
              alt=""
              className="rounded-lg shadow-lg"
            />
            <div className="text-center mt-2">
              Explore more of my design projects on{" "}
              <span className="font-bold">
                Béhance <IoArrowForward className="inline" />
              </span>
            </div>
          </div>
        </a>
      </div>

      <motion.div
        className="bg-[#581c87] absolute sm:top-[100rem] top-[115rem] -z-10 left-[-50rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        animate={{ x: 100, opacity: [0, 1, 0] }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 8, repeat: Infinity, repeatType: "loop" },
        }}
      ></motion.div>
    </section>
  );
}
