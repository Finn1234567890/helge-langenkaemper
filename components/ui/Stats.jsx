"use client"

import { Currency } from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 12,
        text: "Years of industry experience"
    },
    {
        num: 6,
        text: "Sites managed"
    },
    {
        num:  150,
        text: "Example stat"
    }
]

const Stats = () => {
  return (
    <section className=" pb-12 xl:pt-0 xl:pb-0 py-2 ">
        <div className="container  mx-auto border-b border-t py-2">
            <div className='py-2 '>

                <div className="flex flex-warp max-w-[80vw] gap-6 mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-4 items-center justify-center flex-1 xl:justify-start"> 
                                <CountUp end={item.num} duration={4} delay={0.5} className=" text-accent text-5xl xl:text-6xl font-[1100]" />
                                <p className={`leading-snug text-xl ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
                            </div>
                            )
                    })}
                    
                </div>
            </div>
    </div>
    </section>
   
  )
}

export default Stats