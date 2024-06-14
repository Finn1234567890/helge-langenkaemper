import { AnyCnameRecord } from "dns"
import Link from "next/link"

import { FaLinkedinIn } from 'react-icons/fa'

const socials = [
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/langenkaemper-helge-08657260/"}
]

const Socials = ({ containerStyles, iconStyles }: {containerStyles: string, iconStyles:string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, idx) => {
            return <Link key={idx} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials