"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IconHero } from '../img/Icon'
import { clsx } from 'clsx';
import { useMediaQueries } from '@/hooks/Mediaquery'
import ButtonPrimary from '../button/ButtonPrimary'

const Navlink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const pathname = usePathname();
  return (
    <li className='px-2'><Link className='flex gap-3 items-center dark:text-white text-black font-semibold' href={href}>{pathname === href ? (
      <>
        <p className='text-lg '>(</p> {children} <p className='text-lg'>)</p>
      </>

    ) : (
      children
    )} </Link></li>
  )
}

const Navbar = () => {
  const { isTabletOrMobile } = useMediaQueries();



  return (
    <div className="fixed z-50 navbar backdrop-blur-3xl " suppressHydrationWarning={true}>
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu gap-2 menu-sm dropdown-content mt-3 z-[1] px-3 py-5 shadow rounded-box w-52 dark:bg-black bg-white">
            <Navlink href='/'>Home</Navlink>
            <Navlink href='/about'>About</Navlink>
            <Navlink href='/skill'>Skill</Navlink>
            <Navlink href='/project'>Project</Navlink>
            <Navlink href='/contact'>Contact</Navlink>
          </ul>

        </div>

        <div className={clsx(isTabletOrMobile ? "hidden" : ' flex justify-center w-full')}>
          <IconHero className='w-20 h-20' />
        </div>
      </div>
      {isTabletOrMobile && (
        <div className={clsx(isTabletOrMobile && "navbar-end")} >
          <IconHero className='w-20 h-20' />
        </div>
      )}

      <div className="navbar-center max-md:hidden lg:flex">

        <ul className="menu menu-horizontal px-1">
          <Navlink href='/'>Home</Navlink>
          <Navlink href='/about'>About</Navlink>
          <Navlink href='/skill'>Skill</Navlink>
          <Navlink href='/project'>Project</Navlink>
          <Navlink href='/contact'>Contact</Navlink>



        </ul>
      </div>
      <div className={clsx(isTabletOrMobile ? "hidden" : "navbar-end justify-center")}>
      </div>
    </div>

  )
}

export default Navbar