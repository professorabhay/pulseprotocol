import { Cover } from "@/app/components/ui/cover";
import Header from './components/Header'
import Footer from "./components/Footer";
import About from "./components/About";
import Details from "./components/Details";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="h-[52rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Background overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Main content */}
        <div className="relative z-20 text-center">
          <div className="text-5xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            <Cover>Pulse Protocol</Cover>
          </div>
          <p className="mt-4 text-5xl sm:text-3xl">Social Graph Built On AO</p>
        </div>
      </div> 
      <About />
        <Details />
      <Contact />
      <Footer/>
    </div>
  );
}
