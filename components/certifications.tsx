"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Certifications");
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Certifications & Achievements</SectionHeading>
      <div className="flex flex-wrap justify-center max-w-[45rem]">
        <a
          href="https://www.credly.com/badges/06436ad7-08e2-4dc6-9328-523645e693f4/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "max-w-[20rem] p-5 m-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-sky-900/10 overflow-hidden cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center">
              <img
                src="/aws-ccp.png"
                alt="Certification Logo"
                className="w-[13rem] mx-auto mb-[-1rem]"
              />
              <h3 className="font-bold text-lg mt-8">
                AWS Certified Cloud Practitioner
              </h3>
              <p className="font-normal text-gray-500">Sep 2024</p>
            </div>
          </motion.div>
        </a>

        <a
          href="https://www.credly.com/badges/527de692-7a52-47a9-9ac4-bc9e9df5aeb4/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "max-w-[20rem] p-5 m-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-sky-900/10 overflow-hidden cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center">
              <img
                src="/googlecsc.png"
                alt="Certification Logo"
                className="w-[15rem] mx-auto mb-[-1rem]"
              />
              <h3 className="font-bold text-lg">
                Google Cybersecurity Professional Certificate
              </h3>
              <p className="font-normal text-gray-500">Oct 2023 - Feb 2024</p>
            </div>
          </motion.div>
        </a>

        <a
          href="https://coursera.org/verify/7753LGQFJT5T"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "max-w-[20rem] w-full sm:max-w-[40rem] p-3 m-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-sky-900/10 overflow-hidden cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <img
                src="/awslogo.png"
                alt="Meta Logo"
                className="w-[3.5rem] mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg">
                  Amazon Web Services - Cloud Technical Essentials
                </h3>
                <p className="font-normal text-gray-500">Oct 2023</p>
              </div>
            </div>
          </motion.div>
        </a>

        <a
          href="https://coursera.org/verify/CUK3XXJUE8LN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "max-w-[20rem] w-full sm:max-w-[40rem] p-3 m-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-sky-900/10 overflow-hidden cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <img
                src="/uomin.jpg"
                alt="Meta Logo"
                className="w-[4rem] mr-4 rounded-lg"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg">
                  University of Minnesota - Introduction to Software Testing
                </h3>
                <p className="font-normal text-gray-500">Nov 2023</p>
              </div>
            </div>
          </motion.div>
        </a>

        <a
          href="https://coursera.org/verify/VRHAAKBL7T37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "max-w-[20rem] w-full sm:max-w-[40rem] p-3 m-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-sky-900/10 overflow-hidden cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <img
                src="/metalogo.png"
                alt="Meta Logo"
                className="w-[4rem] mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg">
                  Meta - Introduction to Front-End Development
                </h3>
                <p className="font-normal text-gray-500">Oct 2023</p>
              </div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
