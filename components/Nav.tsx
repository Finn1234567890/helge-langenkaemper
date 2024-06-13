"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links, type Links } from "@/lib/links";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-12">
      {links.map((link: Links, index: number) => {
        return (
          <Link
            key={index}
            className={`capitalize text-lg  hover:text-accent transition-all duration-200 ease-linear font-semibold ${
              link.path === pathname
                ? "text-accent border-b-[3px] border-accent"
                : "border-b-[3px] border-transparent hover:scale-110"
            }`}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
