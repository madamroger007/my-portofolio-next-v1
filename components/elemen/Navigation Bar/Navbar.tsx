"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IconHero } from '../img/Icon'
import { clsx } from 'clsx';
import { useMediaQueries } from '@/hook/Mediaquery'


const Navlink = ({ children, href }: { children: React.ReactNode, href: string }) => {

  const pathname = usePathname();

  return (
    <li className='px-2'><Link className='flex gap-3 items-center' href={href}>{pathname === href ? (
      <>
        <p className='text-lg'>(</p> {children} <p className='text-lg'>)</p>
      </>

    ) : (
      children
    )} </Link></li>
  )
}

const Navbar = () => {
  const { isTabletOrMobile } = useMediaQueries();
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="fixed z-50 navbar backdrop-blur-3xl " suppressHydrationWarning={true}>
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Navlink href='/'>Home</Navlink>
            <Navlink href='/about'>About</Navlink>
            <Navlink href='/skill'>Skill</Navlink>
            <Navlink href='/project'>Project</Navlink>
            <Navlink href='/contact'>Contact</Navlink>
            <div className='w-full  flex justify-center py-3'>
              <a className="btn bg-[#286F6C] px-5 py-2" ><p className='text-white'>Download CV</p></a>
            </div>
          </ul>

        </div>



        <div className={clsx(' flex justify-center w-full', isTabletOrMobile && "hidden")}>
          <IconHero className='w-20 h-20' />
        </div>
      </div>
      {isTabletOrMobile && (
        <div className={clsx(isTabletOrMobile && "navbar-end")} >
          <IconHero className='w-20 h-20' />
        </div>
      )}

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1">
          <Navlink href='/'>Home</Navlink>
          <Navlink href='/about'>About</Navlink>
          <Navlink href='/skill'>Skill</Navlink>
          <Navlink href='/project'>Project</Navlink>
          <Navlink href='/contact'>Contact</Navlink>


        </ul>
      </div>
      <div className={clsx(isTabletOrMobile ? "hidden" : "navbar-end justify-center")}>
        <a className="btn bg-[#286F6C] px-5 py-2" ><p className='text-white'>Download CV</p></a>
      </div>
    </div>

  )
}

export default Navbar