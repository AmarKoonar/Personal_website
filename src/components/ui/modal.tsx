"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "motion/react";

export function AnimatedModalDemo() {

  const images = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    
  ];
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 h-15">
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
