"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[275px] top-3  left-[14px] h-[280px] absolute xl:top-6 xl:left-6 -z-10 overflow-hidden xl:w-[460px] xl:h-[470px]"
        >
          <Image
            src="/assets/helge-new.png"
            alt="image of Helge Langenkaemper"
            className="object-container absolute  rounded-full"
            priority
            quality={100}
            fill
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#2563eb"
            strokeWidth={"4"}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 20 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
