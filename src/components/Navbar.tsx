'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({className}:{className?:string}){
    const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-10", className)}
    >   
    <Menu setActive={setActive}>
    <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Links </HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
    </MenuItem>
        <Link href={'/course'}>
            <MenuItem active={active} setActive={setActive} item="Products">
                All courses
            </MenuItem>
        </Link>

        <Link href={'/contact'}>
            <MenuItem active={active} setActive={setActive} item="contact us">
                
            </MenuItem>
        </Link>
    </Menu>
      
    </div>
  )
}

export default Navbar
