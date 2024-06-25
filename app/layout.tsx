"use client";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emil Wijayasekara | Web Portfolio",
  description:
    "Emil is a final year computer science undergraduate with interests in cybersecurity, software development, and operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${inter.className} bg-gray-900 text-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <motion.div
          className="bg-[] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#083344]"
          animate={{ x: 100, opacity: [0, 1, 0] }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 3, repeat: Infinity, repeatType: "loop" },
          }}
        ></motion.div>

        <motion.div
          className="bg-[#334155] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
          animate={{ x: 100, opacity: [0, 1, 0] }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 8, repeat: Infinity, repeatType: "loop" },
          }}
        ></motion.div>

        <motion.div
          className="bg-[#334155] absolute top-[150rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
          animate={{ x: 100, opacity: [0, 1, 0] }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 3, repeat: Infinity, repeatType: "loop" },
          }}
        ></motion.div>

        <motion.div
          className="bg-[#3b0764] absolute top-[150rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
          animate={{ x: 100, opacity: [0, 1, 0] }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 7, repeat: Infinity, repeatType: "loop" },
          }}
        ></motion.div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
