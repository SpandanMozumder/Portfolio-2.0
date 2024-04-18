"use client";
import { navLinks } from "../constants";
import { useRouter } from "next/navigation";

const NavbarWeb = () => {
  const router = useRouter();
  return (
    <div className="fixed flex justify-center items-center w-[100vw] h-[5rem] top-0 z-[99]">
      <div className="mt-[1rem] bg-black bg-opacity-95 border border-[#76ABAE] w-[40rem] h-[3.5rem] flex justify-center rounded-2xl ">
        <ul className="flex justify-center items-center text-white px-11 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <div className="px-5 rounded-2xl hover:bg-gradient-to-r hover:from-[#EEEEEE] hover:to-[#76ABAE] hover:text-transparent hover:bg-clip-text">
                <button onClick={() => router.push(link.path)}>
                {link.title}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarWeb;
