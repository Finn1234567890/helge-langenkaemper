"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[298px] h-[298px] overflow-hidden xl:w-[420px] xl:h-[498px]">
                <Image  src="/assets/helge.png"
                        alt="image of Helge Langenkaemper"
                        className="object-container rounded-full"
                        priority
                        quality={100}
                        fill
                        />
            </div>
        </motion.div>
    </div>
  )
}

export default Photo