import { TracingBeam } from "../../ui/tracing-beam";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "../../ui/background-beams";
import { Contact } from "@/components/Contact";


const page = () => {
  return (
    <div>
      <Navbar />
    <TracingBeam>
      <div className="h-[100vh] w-[100vw] bg-[#000000] font-font1 fixed top-0 left-0 z-[-1]">
        <BackgroundBeams />
      </div>
      <Contact />
      <Footer />
    </TracingBeam>
    </div>
  )
}

export default page