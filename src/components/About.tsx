"use client";
import { useRouter } from "next/navigation";

import ImageCarousel from "./ImageCarousel/ImageCarousel";

const About = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full flex justify-center items-center text-white py-[5rem]">
      <div className="h-full w-3/4 flex flex-col justify-center lg:p-[5rem] md:p-[1rem] sm:p-[0rem] xs:w-[80%]">
        <div>
          <h1 className="lg:text-[4rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-5 sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem]">
            About
          </h1>
          <p className="text-[1.5rem] bg-gradient-to-r from-[#FFF] to-[#6d6d6d] text-transparent bg-clip-text mb-10 sm:text-[1.3rem] xs:text-[1.1rem] mob:text-[1rem]">
            Hello Guys! <br /> <br />
            My name is Spandan Mozumder. I am a student pursuing BTech. degree
            in Computer Science and Engineering with Artificial Intelligence.{" "}
            <br /> <br />
            I am a Full-Stack Web Developer with a love for learning and
            implementing new technologies. <br /> <br />
            I am proficient in deploying robust and responsive front-end
            applications using ReactJS and NextJS and I am also quite well
            versed in adding backend functionalities to a website using NodeJS
            and ExpressJS. I have practical knowledge of implementing APIs into
            webpages as well as making new REST APIs from scratch. I have
            implemented various UI and animation libraries into my webpages and
            also worked a little 3D model rendering using ThreeJS
            <br /> <br />
          </p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <button onClick={() => router.push("/resume")} className="border bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] w-[10rem] h-[3rem] text-black rounded-md hover:font-semibold transition-all z-[50]">
            See My Resume
          </button>
        </div>

        <div className="md:m-[-1rem]">
          <h1 className="mt-[10rem] text-[4rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3 md:text-[2.65rem] xs:text-[2rem] mob:text-[1.5rem]">
            Technologies I have worked with
          </h1>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
