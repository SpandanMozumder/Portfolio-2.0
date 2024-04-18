"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {cross, lines} from "../assets";

const NavbarMobile = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-[100vw] fixed justify-end z-[99]">
      {isOpen ? (
        <div className="bg-black flex justify-end p-2 m-3 rounded-xl border border-[#76ABAE]">
          <button onClick={toggleOpen}>
            <Image src={lines} alt="open"/>
          </button>
        </div>
      ) : (
        <div className="bg-black w-[20rem] h-auto flex flex-col p-2 m-3 rounded-xl border border-[#76ABAE]">
          <div className="w-full flex justify-end">
            <button onClick={toggleOpen}>
            <Image src={cross} alt="close"/>
            </button>
          </div>
          <div className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg text-center mb-3 ">
            <button
              onClick={() => router.push("/home")}
              className="hover:border-b hover:border-white"
            >
              Home
            </button>
          </div>

          <div className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg text-center mb-3">
            <button
              onClick={() => router.push("/home")}
              className="hover:border-b hover:border-white"
            >
              About Me
            </button>
          </div>

          <div className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg text-center mb-3">
            <button
              onClick={() => router.push("/resume")}
              className="hover:border-b hover:border-white"
            >
              Resume
            </button>
          </div>

          <div className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg text-center mb-5">
            <button
              onClick={() => router.push("/projects")}
              className="hover:border-b hover:border-white"
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
