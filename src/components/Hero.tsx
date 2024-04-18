"use client";
import React from "react";

export function Hero() {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-transparent z-[99]">
      <div className="h-full w-full flex flex-col justify-center md:p-[6rem] xs:p-[3rem] mob:p-[2rem]">
        <h1 className="lg:text-[9rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3 lg:text-left md:text-center md:text-[8rem] sm:text-[5rem] sm:text-center xs:text-center xs:text-[3rem] mob:text-[3rem] mob:text-center">
          Hi!
        </h1>
        <h2 className="lg:text-[4rem] bg-gradient-to-b to-[#EEEEEE] from-[#76ABAE] text-transparent bg-clip-text mb-3 lg:text-left md:text-center md:text-[3rem] sm:text-[2.5rem] sm:text-center xs:text-center xs:text-[2rem] mob:text-[1.5rem] mob:text-center">
          I&apos;m Spandan Mozumder
        </h2>
        <h3 className="lg:text-[3rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3 lg:text-left md:text-center md:text-[2rem] sm:text-[2.5rem] sm:text-center xs:text-center xs:text-[1.3rem] mob:text-[1.3rem] mob:text-center">
          A Full-Stack Web Developer
        </h3>
      </div>
      <div className="h-full w-[40%] hidden justify-center items-center bg-red-300">
        Image
      </div>
    </div>
  );
}
