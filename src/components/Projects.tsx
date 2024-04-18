import { Meteors } from "../ui/meteors";
import { projects } from "../constants";

const page = () => {
  return (
    <div className="h-full w-full flex justify-center items-center text-white py-[5rem]"> 
      <div className="m-[-10rem] h-full w-3/4 flex flex-col justify-center lg:p-[5rem] md:p-[1rem] sm:p-[0rem] xs:w-[80%]">
        <h1 className="text-[4rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-10 mt-[10rem] lg:text-[3rem] sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem]">
          My Projects
        </h1>

        <div className=" w-full relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />

          {projects.map((project) => (
            <div key={project.id} className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start mb-[4rem]">
              <div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 md:text-[1.5rem] sm:text-[1rem]">
                  {project.name}
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:bg-black">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 font-semibold "
                    >
                      GitHub Repo
                    </a>
                  </button>
                  {project.netlify && (
                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:bg-black">
                      <a
                        href={project.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 font-semibold"
                      >
                        Netlify
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
