"use client"
import Link from 'next/link'
import React from 'react'

const ButtonPrimary = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <Link href={""} className={"btn bg-[#286F6C]  py-2 " + className}  ><p className='text-white'>{children}</p></Link>
    )
}
export default React.memo(ButtonPrimary)