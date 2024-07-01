"use client"

import { motion } from "framer-motion"
import React, { useState} from "react"



import { BsArrowUpRight } from 'react-icons/bs'

import Link from "next/link"
import Image from "next/image"

const projects = [{
    title: "Lean",
    short: "The core principle of lean is to reduce and eliminate non-value adding activities and waste.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit eros, commodo mattis malesuada a, sollicitudin in ex. Nam quis suscipit elit. Curabitur ut imperdiet libero. Curabitur non nisl quis augue eleifend dignissim. Etiam pharetra condimentum finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam accumsan egestas erat elementum aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dolor elit, viverra nec elit eget, euismod scelerisque odio. Pellentesque ultricies elementum leo. Sed vel ipsum sit amet felis mollis faucibus sed elementum metus. Nunc odio nibh, molestie sed ex nec, varius ultricies massa."
},
{
    title: "Agile",
    short: "Rather, agile is a group of methodologies that demonstrate a commitment to tight feedback cycles and continuous improvement.",
    description: "Morbi dignissim, dui vitae condimentum vestibulum, quam lacus viverra tellus, nec ullamcorper libero lectus eu justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed lobortis tellus. Duis sit amet accumsan nisl, a finibus dolor. Phasellus nec sem a turpis dignissim fermentum. Quisque consequat ac ex varius fermentum. Nam volutpat viverra lacinia. Vivamus nulla dui, rutrum et lorem in, auctor luctus nibh. Morbi at elit vel enim luctus feugiat ac sed quam. Maecenas non ex ut tortor ornare aliquet ut ac ipsum. Duis laoreet commodo venenatis. Ut at finibus erat. Aenean."
},
{
    title: "Continuous Improvement",
    short: "Ongoing imprtovment of products, services or processes through incremental and breakthrough improvements.",
    description: "Nullam lobortis felis id mi mattis ultricies. Aliquam sodales rutrum nulla ut gravida. Aliquam ultricies tortor non porta viverra. Pellentesque vitae nisi a arcu luctus aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur efficitur lobortis mi, non cursus ante interdum at. Curabitur suscipit, mi vitae lacinia sodales."
}]


const Leadership = () => {
    const [project, setProject ] = useState([projects[0]])

    return(
        <motion.section initial={{ opacity: 0}} animate={{ opacity: 1 }} className="h-min-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    text
                </div>
                <div className="w-full xl:">
                    slider
                </div>
            </div>
        </motion.section>
    )
}

export default Leadership