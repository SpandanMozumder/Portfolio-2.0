"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { linkedin, github, instagram, copyright } from "../assets";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-white py-[5rem]">
      <div className="h-full w-3/4 flex lg:flex-row justify-between lg:p-[5rem] md:p-[1rem] sm:p-[0rem] xs:w-[80%] xs:flex-col mob:flex-col">
        <div className="flex flex-col w-full md:items-center xs:items-center mob:items-center lg:items-start">
          <h2 className="lg:text-[3rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-5 sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem] ">
            Get in Touch
          </h2>
          <div className="flex flex-row  xs:pb-[2rem] mob:pb-[2rem]">
            <Link href="https://github.com/SpandanMozumder">
              <button className="p-3 hover:bg-slate-600 rounded-lg transition-all">
                <Image src={github} alt="github" />
              </button>
            </Link>

            <Link href="https://www.linkedin.com/in/spandan-mozumder-729386240/">
              <button className="p-3 hover:bg-slate-600 rounded-lg transition-all">
                <Image src={linkedin} alt="linkedin" />
              </button>
            </Link>

            <Link href="https://www.instagram.com/spandyzlost/">
              <button className="p-3 hover:bg-slate-600 rounded-lg transition-all">
                <Image src={instagram} alt="instagram" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full md:items-center xs:items-center mob:items-center lg:items-start">
          <h2 className="lg:text-[3rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-5 sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem]">
            Navigate
          </h2>
          <ul>
            <li className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg">
              <button
                onClick={() => router.push("/home")}
                className="hover:border-b hover:border-white"
              >
                Home
              </button>
            </li>

            <li className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg">
              <button
                onClick={() => router.push("/home")}
                className="hover:border-b hover:border-white"
              >
                About Me
              </button>
            </li>

            <li className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg">
              <button
                onClick={() => router.push("/resume")}
                className="hover:border-b hover:border-white"
              >
                Resume
              </button>
            </li>

            <li className="p-3 bg-gradient-to-r from-[#EEEEEE] to-[#3c3c3c] text-transparent bg-clip-text text-lg">
              <button
                onClick={() => router.push("/projects")}
                className="hover:border-b hover:border-white"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <p className="flex flex-row gap-3 pb-[3rem] mob:p-5 justify-center items-center">
        <Image src={copyright}          alt="copyright"        />
        2024. Made by Spandan Mozumder.
      </p>
    </div>
  );
};

export default Footer;
