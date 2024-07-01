import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/ui/Socials";
import Image from "next/image";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full mt-10" aria-label="This is the Homepage">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none"> 
            <Image alt={`ge logo`} width="200" height="100" className="xl:-ml-5 hidden xl:block xl:mb-6" src="/assets/ge-healthcare-logo.png" />
            <div className="flex items-center">
              <span className="text-xl w-full xl:w-fit text-center xl:text-start">Global Integrated Supply Chain Leader PDx</span>
             
            </div>
            <h1 className="h1 mb-8">Helge <br/> Langenkaemper</h1>
            <p className="max-w-[500px] mb-9 text-black/80">
              Passionate, customer focused and results-driven Supply Chain Executive with profound experience in Medical Device Industry.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" 
              size="lg"
              className="uppercase flex items-center gap-2"   >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="flex h-full  items-center justify-center">
                <Socials containerStyles="flex gap-6" iconStyles="w-12 h-12 text-xl border border-accent rounded-2xl flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:ml-10 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-10">
        <Stats />
      </div>
    </section>

  );
}

export default Home