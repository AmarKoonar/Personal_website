"use client";

import { motion } from "motion/react";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LightBoard } from "@/components/ui/lightboard"; // Make sure this path is correct

export function HeroSectionOne() {
  const langs = [
    {
      id: 1,
      name: "Python",
      designation: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXY4HPZw4oglSrJwFwUbEzOgdxCAu-2vspSA&s",
    },
    {
      id: 2,
      name: "JavaScript",
      designation: "",
      image:
        "/js.png",
    },
    {
      id: 3,
      name: "C++",
      designation: "",
      image:
        "/c-.png",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "",
      image:
        "/typescript.png",
    },
    {
      id: 5,
      name: "HTML",
      designation: "Markup",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXY4HPZw4oglSrJwFwUbEzOgdxCAu-2vspSA&s",
    },
    {
      id: 6,
      name: "CSS",
      designation: "Styling Wizard",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXY4HPZw4oglSrJwFwUbEzOgdxCAu-2vspSA&s",
    },
  ];

  return (
    <div className="relative mx-auto min-h-screen flex max-w-7xl flex-col items-center justify-center px-4 bg-zinc-900">
      {/* Four Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Section Wrapper */}
      <div className="py-10 md:py-20 space-y-16 w-full max-w-5xl">
        {/* About Me Section with LightBoard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              About Me
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl">
              I'm Amar, a passionate developer building sleek, interactive websites
              using modern tech like React, Tailwind, and AI tools.
            </p>
          </div>
          {/*addsomthing here*/}
        </motion.div>

        {/* Languages Section */}
        <Section title="Languages" delay={0.2}>
          <AnimatedTooltip items={langs} />
        </Section>

        {/* Technologies Section */}
        <Section title="Technologies" delay={0.4}>
          <AnimatedTooltip items={langs} />
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const isText = typeof children === "string";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center space-y-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-white">
        {title}
      </h2>

      {isText ? (
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          {children}
        </p>
      ) : (
        <div className="flex justify-center">{children}</div>
      )}
    </motion.div>
  );
}
