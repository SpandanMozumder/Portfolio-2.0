import { Hero } from "@/components/Hero";
import { BackgroundBeams } from "../../ui/background-beams";
import { Spotlight } from "../../ui/spotlight";
import About from "@/components/About";
import CurrentProjects from "@/components/CurrentProjects";
import { TracingBeam } from "../../ui/tracing-beam";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";

const page = () => {
  return (
    <div>
      <Navbar />
    <TracingBeam>
      <div className="h-[100vh] w-[100vw] bg-[#000000] font-font1 fixed top-0 left-0 z-[-1]">
        <BackgroundBeams />
      </div>
      <Hero />
      <div className="h-auto w-[100vw]">
        <Spotlight className="left-0 opacity-100 z-[-1]"/>
        <About />
      </div>
      <CurrentProjects />
      <Contact />
      <Footer />
    </TracingBeam>
    </div>
  );
};

export default page;
