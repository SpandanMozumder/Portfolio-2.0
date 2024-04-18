"use client";

import Link from "next/link";
import CV from "./CV";
import { useRouter } from "next/navigation";

const Resume = () => {
  const router = useRouter();

  const downloadPDF = () => {
    const pdfUrl = "../assets/resume.pdf";
    const filename = "resume.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = filename;
    downloadLink.click();
  };

  return (
    <div className="h-full w-full flex justify-center items-center text-white py-[5rem]">
      <div className="h-full w-3/4 flex flex-col justify-center lg:p-[5rem] md:p-[1rem] sm:p-[0rem] xs:w-[80%]">
        <h1 className="lg:text-[4rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text pb-[4rem] sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem]">
          My Resume
        </h1>

        <div>
          <CV />
        </div>

        <div className="w-full flex justify-center gap-7">
          <Link href="https://drive.google.com/file/d/12ZzJnR3fIvz297fYj64jVv8ZIsXNcVcX/view?usp=drive_link">
            <button className="border bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] w-[15rem] h-[3rem] text-black rounded-md hover:font-semibold transition-all">
              Download Resume
            </button>
          </Link>

          <button
            onClick={() => router.push("/projects")}
            className="border bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] w-[15rem] h-[3rem] text-black rounded-md hover:font-semibold transition-all"
          >
            See All of My Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
