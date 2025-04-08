"use client";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Vortex } from "@/components/ui/vortex";
import { Cover } from "@/components/ui/cover";
import { LayoutGridDemo } from "@/app/projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroSectionOne } from "./aboutme";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import { LightBoard } from "@/components/ui/lightboard";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Home() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    
    <div className="bg-black overflow-hidden">
      {/* Hero Section with Vortex */}
      <Vortex
      backgroundColor="black"
      className="flex items-center justify-center flex-col px-2 md:px-10 py-4 min-h-screen"
    >
      <div className="w-80% flex justify-center">
        <Cover>
          <div className="w-screen max-w-[full] min-h-[400px] flex items-center justify-center text-center px-4 rounded-[50px]">
            <div>
              <h2 className="text-white text-2xl md:text-6xl font-bold">
                Amar's Website
              </h2>
              <p className="text-white text-sm md:text-2xl mt-4">
                A personal website I made
              </p>
            </div>
          </div>
        </Cover>
      </div>
    </Vortex>
    <TracingBeam>
    {/*about me */}
    <div className="">
      
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white dark:text-white text-center sm:mb-2 md:mb-30">
      About me
    </h1>
    <HeroSectionOne/>
    {/* <div className="">
      <LightBoard
        rows={50}
        controlledHoverState={false}
        lightSize={4}
        gap={1}
        text="draw"
        font="default"
        updateInterval={0}
        disableDrawing={false}
      />
    </div> */}

    </div>


      {/* Projects Section */}
      <div className="mt-20 px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white dark:text-white text-center sm:mb-2 md:mb-0">
        Projects
      </h1>
        <LayoutGridDemo />
      </div>



      <div className="flex flex-col">
  <ContainerScroll
    titleComponent={
      <>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white dark:text-white text-center sm:mb-2 md:mb-10">
          Resume
          </h1>
      </>
    }
  >
    <div className="w-full h-[80vh] flex justify-center items-center">
      <object
        data="/Amar_Koonar_Resume.pdf"
        type="application/pdf"
        width="80%"
        height="100%"
      >
        <p className="text-black">
          Your browser doesn't support embedding PDFs.{" "}
          <a href="/../../public/Amar_Koonar_Resume.pdf" target="_blank" className="underline">
            Download it instead
          </a>
        </p>
      </object>
    </div>
  </ContainerScroll>
  </div>
  

      {/* Floating Dock (bottom right) */}
      <div className=" z-50 h-30 fixed -bottom-15 right-4 pl-36 transition-transform duration-200 ease-in-out hover:-translate-y-10">
        <div className="relative mt-10">
          <FloatingDock
            items={links}
          />
      </div>
      </div>

      </TracingBeam>
    </div>

  );
}
