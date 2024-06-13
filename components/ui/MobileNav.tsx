"use client"

import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci"
import { links, type Links } from '@/lib/links'

const MobileNav = () => {
    const pathname = usePathname()

  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className='flex gap-8 w-full items-center flex-col pt-12'>
            <h1 className='font-bold py-12 text-3xl'>MENU</h1>
            {links.map((item: Links, index: number) => {
                return <Link    key={index}   
                                href={item.path}
                                className={`capitalize w-fit transition-all duration-200 ease-in-out hover:text-accent text-xl border-b-[3px] ${item.path === pathname ? "border-accent text-accent" : "border-transparent hover:scale-105"}`}> 
                                {item.name} 
                        </Link>
            })}
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav