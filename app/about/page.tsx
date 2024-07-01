"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPeopleArrows } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaLeanpub } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";

const about = {
  title: "About",
  description: "this is a description example",
};

const experience = {
  company: "Philips",
  position: "Example Position",
  duration: "2012 - 2014",
};

const leadershipValues = {
  type: "Lean",
  description: "Lean leadership through agile teambuilding methods",
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duratiom: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justiy-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="leadershipValues"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            
            <TabsTrigger value="leadershipValues">Leadership</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col  gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold border-b-8 pb-3 w-1/2 border-accent"> Industry experience</h3>
                <p className="max-w-[600px] text-black/80 mx-auto xl:mx-0 ">
                  Leadership is more than Lorem ipsum dolot sit awer contructir
                  elit, Vlumantes, sont dolot sit awer contructir elit,
                  Vlumantes, sont
                </p>
                
                <div className="grid grid-cols-1 mt-12">
                  <div className="border-[3px] relative bg-white border-gray-200 translate-x-[30px] scale-110 px-6 py-4 w-[600px]">
                    <Image alt="ge-logo" width="70" height="70" src="/assets/ge-healthcare-logo-small.png" className="absolute -top-4 -right-4 "/>
                    <h2 className="font-bold text-lg tracking-wider  text-accent">2021 - Today</h2>
                    <h3 className="text-base pt-4">Global Integrated Supply Chain Leader Pharmaceutical Diagnostics (PDx)</h3>
                    <h4 className="text-base pt-4 gap-2 flex items-center tracking-wider font-light">
                      <div className="w-[6px] rounded-full h-[6px] bg-accent"></div>
                      <p>
                        GE Healthcare
                      </p>
                    </h4>
                  </div>

                <div className="border-[3px] border-gray-100  px-6 py-4 w-[600px]">
                    <h2 className="font-bold text-lg tracking-wider  text-accent">2018 - 2020</h2>
                    <h3 className="text-base pt-4">Senior Vice President Supply Chain Systems & Medical Devices</h3>
                    <h4 className="text-base pt-4 gap-2 flex items-center tracking-wider font-light">
                      <div className="w-[6px] rounded-full h-[6px] bg-accent"></div>
                      <p>
                        Philips
                      </p>
                      <Image alt="philips logo" width="100" height="60" src="/assets/philips-logo.webp"/>
                    </h4>
                  </div> <div className="border-[3px] border-t-0 border-gray-100 px-6 py-4 w-[600px]">
                    <h2 className="font-bold text-lg tracking-wider  text-accent">2021 - Today</h2>
                    <h3 className="text-base pt-4">Vice President Supply Chain and S&OP - Diagnosis & Treatment</h3>
                    <h4 className="text-base pt-4 flex items-center gap-2 tracking-wider font-light">
                      <div className="w-[6px] rounded-full h-[6px] bg-accent"></div>
                      <p>
                        Philips
                      </p>
                      <Image alt="philips logo" width="100" height="60" src="/assets/philips-logo.webp"/>
                    </h4>
                  </div></div>
                
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex relative flex-col text-center xl:text-left gap-6">
                <h3 className="text-4xl font-bold border-b-8 w-1/2 border-accent pb-3">
                  My Philosophy
                </h3>
               
                <p className="w-2/3 pt-6">
                  Passionate, customer focused and results-driven Supply Chain Executive with profound experience in Medical Device Industry. Demonstrated success managing multi-billion-dollar international operations. Quality minded, energetic leader with ability to design, attract, and foster global high-performance teams developing solutions to save costs, improve revenues and drive customer satisfaction.
                </p>
                <p className="pt-6 text-left">
                  Passionate, customer focused and results-driven Supply Chain Executive with profound experience in Medical Device Industry. Demonstrated success managing multi-billion-dollar international operations. Quality minded, energetic leader with ability to design, attract, and foster global high-performance teams developing solutions to save costs, improve revenues and drive customer satisfaction.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="leadershipValues" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold border-b-8 border-accent pb-3 w-1/2">Leadership values</h3>
                <p className="max-w-[600px] text-black/80 mx-auto xl:mx-0 ">
                  Leadership is more than Lorem ipsum dolot sit awer contructir
                  elit, Vlumantes, sont dolot sit awer contructir elit,
                  Vlumantes, sont
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 ">
                  <div className="flex relative bg-white flex-col gap-6 border-2 rounded-br-none hover:rounded-br-2xl hover:border-accent transition-all duration-300 p-6 rounded-3xl hover:scale-110">
                    <FaPeopleArrows  className="absolute top-7 right-10 scale-[4]"/>
                    <h3 className="text-xl font-semibold tracking-wider flex items-center gap-4"><div className="w-[6px] h-[6px] rounded-full bg-accent"></div><p>People</p></h3>
                    <p>
                      Leadership is more than Lorem ipsum dolot sit awer
                      contructir elit, Vlumantes, sont dolot sit awer contructir
                      elit, Vlumantes, sont
                    </p>
                  </div>
                  <div className="flex relative flex-col gap-6 border-2 p-6 rounded-bl-none hover:rounded-bl-2xl hover:border-accent transition-all duration-300 rounded-3xl hover:scale-110">
                   <h3 className="text-xl font-semibold tracking-wider flex items-center gap-4"><div className="w-[6px] h-[6px] rounded-full bg-accent"></div><p>Lean</p></h3> 
                    <FaLeanpub className="absolute right-10 top-7 scale-[4] "/>
                    <p>
                      Leadership is more than Lorem ipsum dolot sit awer
                      contructir elit, Vlumantes, sont dolot sit awer contructir
                      elit, Vlumantes, sont
                    </p>
                  </div>
                  <div className="flex hover:border-accent relative transition-all rounded-tr-none hover:rounded-tr-2xl  duration-300 flex-col gap-6 border-2 p-6 rounded-3xl hover:scale-110">
                  <h3 className="text-xl font-semibold tracking-wider flex items-center gap-4"><div className="w-[6px] h-[6px] rounded-full bg-accent"></div><p>Optimization</p></h3>  
                    <GrOptimize className="scale-[4] absolute right-10 top-7"/>
                    <p>
                      Leadership is more than Lorem ipsum dolot sit awer
                      contructir elit, Vlumantes, sont dolot sit awer contructir
                      elit, Vlumantes, sont
                    </p>
                  </div>
                  <div className="flex relative hover:border-accent rounded-tl-none hover:rounded-tl-2xl transition-all duration-300 flex-col gap-6 border-2 p-6 rounded-3xl hover:scale-110">
                   <h3 className="text-xl font-semibold tracking-wider flex items-center gap-4"><div className="w-[6px] h-[6px] rounded-full bg-accent"></div><p>Problem solving</p></h3>  
                    <MdOutlineReportProblem className="scale-[4] top-7 right-10 absolute"/>
                    <p>
                      Leadership is more than Lorem ipsum dolot sit awer
                      contructir elit, Vlumantes, sont dolot sit awer contructir
                      elit, Vlumantes, sont
                    </p>
                  </div>{" "}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
