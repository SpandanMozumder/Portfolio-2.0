import Link from "next/link";
import React from "react";

const CV = () => {
  return (
    <div className="pb-[5rem]">
      <h1 className="lg:text-[3rem] md:text-[2rem] sm:text-[1.8rem] mob:text-[1.3rem] pb-[1rem]">
        EDUCATION
      </h1>
      <div className="flex lg:flex-row md:flex-row sm:flex-col mob:flex-col justify-between">
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-normal">
          Techno India University
        </p>
        <p className="lg:text-[1.1rem] md:text-[1.0rem] font-extralight">
          Kolkata, India
        </p>
      </div>

      <div className="flex lg:flex-row md:flex-row sm:flex-col mob:flex-col justify-between pb-[1.5rem]">
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-normal">
          Bachelor of Technology - Computer Science with Artificial Intelligence
        </p>
        <p className="lg:text-[1.1rem] md:text-[1.0rem] font-extralight">
          September 2022 - Present
        </p>
      </div>

      <h1 className="lg:text-[3rem] md:text-[2rem] sm:text-[1.8rem] mob:text-[1.3rem] pb-[1rem]">
        SKILLS
      </h1>
      <div className="pb-[2rem]">
        <p className="lg:text-[1.3rem] md:text-[1.1rem]">
          <span className="font-bold">Languages: </span>HTML, CSS, JavaScript,
          Java, C, Bash, TypeScript
        </p>
        <p className="lg:text-[1.3rem] md:text-[1.1rem]">
          <span className="font-bold">Frameworks: </span>ReactJS, NodeJS,
          ExpressJS, NextJS, Redux, ThreeJS, GraphQL, Firebase, GSap
        </p>
        <p className="lg:text-[1.3rem] md:text-[1.1rem]">
          <span className="font-bold">Dev Tools: </span>VS Code, Thunder Client,
          GitHub, Postman
        </p>
        <p className="lg:text-[1.3rem] md:text-[1.1rem]">
          <span className="font-bold">Databases: </span>MongoDB
        </p>
        <p className="lg:text-[1.3rem] md:text-[1.1rem]">
          <span className="font-bold">Soft Skills: </span>Teaching,
          Communications, Multitasking, Collaboration
        </p>
      </div>

      <h1 className="lg:text-[3rem] md:text-[2rem] sm:text-[1.8rem] mob:text-[1.3rem] pb-[1rem]">
        PROJECTS
      </h1>
      <div className="pb-[1.5rem]">
        <Link href="https://github.com/SpandanMozumder/iPhone-Clone">
          <h2 className="lg:text-[1.5rem] md:text-[1.3rem] font-bold cursor-pointer">
            Iphone Clone
          </h2>
        </Link>
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-extralight">
          [ReactJS, ThreeJS, GSap]
        </p>
        <ul className="lg:text-[1.1rem] md:text-[1rem] font-light">
          <li>
            → A fully responsive IPhone website clone, with animations using GSap, and actualy model rendering using ThreeJS.
          </li>
        </ul>
      </div>

      <div className="pb-[1.5rem]">
        <Link href="https://github.com/SpandanMozumder/BitShare">
          <h2 className="lg:text-[1.5rem] md:text-[1.3rem] font-bold cursor-pointer">
            BitShare
          </h2>
        </Link>
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-extralight">
          [ReactJS, NodeJS, ExpressJS, MongoDB, Redux]
        </p>
        <ul className="lg:text-[1.1rem] md:text-[1rem] font-light">
          <li>
            → A file sharing website, that uses OTP verification for
            authentication using email and notifications for file transfer in
            email.
          </li>
          <li>
            → Implemented web sockets using Socket.io for real-time update of
            file transfers.
          </li>
        </ul>
      </div>

      <div className="pb-[1.5rem]">
        <Link href="https://github.com/SpandanMozumder/Flying-Game">
          <h2 className="lg:text-[1.5rem] md:text-[1.3rem] font-bold cursor-pointer">
            Flying Game
          </h2>
        </Link>
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-extralight">
          [ReactJS, ThreeJS]
        </p>
        <ul className="lg:text-[1.1rem] md:text-[1rem] font-light">
          <li>
            → Made a plane flying game using blender models from internet using
            ThreeJS.
          </li>
          <li>
            → Implemented the 3D rendering through @react-three/drei package and
            physics through @react-three/canon package.
          </li>
        </ul>
      </div>

      <div className="pb-[1.5rem]">
        <Link href="https://github.com/SpandanMozumder/Car-Game">
          <h2 className="lg:text-[1.5rem] md:text-[1.3rem] font-bold cursor-pointer">
            Car Game
          </h2>
        </Link>
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-extralight">
          [ReactJS, ThreeJS]
        </p>
        <ul className="lg:text-[1.1rem] md:text-[1rem] font-light">
          <li>
            → Made a simple car game across a path using blender models from
            internet with axis controls for the car while jumping and two camera
            modes.
          </li>
        </ul>
      </div>

      <div className="pb-[1.5rem]">
        <Link href="https://github.com/SpandanMozumder/Chess">
          <h2 className="lg:text-[1.5rem] md:text-[1.3rem] font-bold cursor-pointer">
            Chess
          </h2>
        </Link>
        <p className="lg:text-[1.3rem] md:text-[1.1rem] font-extralight">
          [ReactJS, JavaScript]
        </p>
        <ul className="lg:text-[1.1rem] md:text-[1rem] font-light">
          <li>
            → Made a simple game of chess using React and vanilla Javascript.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CV;
