import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopFusion.",
    description:
      "Comprehensive shop management system designed to streamline retail operations. This project is still under development. 👷‍♂️🛠️",
    tags: ["C#", ".NET", "Guna UI", "SQL", "Microsoft SQL Server"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Gesture control Bluetooth speaker",
    description:
      "Hand gesture-controlled Bluetooth speaker with machine learning-based gesture recognition, achieving satisfactory accuracy.",
    tags: ["Arduino", "ESP-32", "EDGE IMPULSE", "C++", "Arduino IDE"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Garment retail analytics and Optimization system",
    description:
      "Created a Garment Retail Analytics and Optimization system, operational efficiency and strong technical proficiency.",
    tags: ["HTML", "CSS", "PHP", "MYSQL", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C",
  "C#",
  "Java",
  ".NET",
  "MySQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "AWS S3",
  "AWS EC2",
  "AWS RDS",
  "Arduino",
  "JavaScript",
  "TypeScript",
  "Python"
] as const;
