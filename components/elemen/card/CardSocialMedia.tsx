import { Card } from '@/types/types';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export const CardSocialMedia: React.FC<Card> = ({ className }) => {
  return (

    <ul className={'icon-home flex gap-8 justify-center ' + className}>
      <li><Link href={"https://www.facebook.com/adam.setiadi.583"} target='_blank'><FaFacebook /></Link></li>
      <li><Link href={"https://www.instagram.com/adamstdi._/"} target='_blank'><FaInstagram /></Link></li>
      <li><Link href={"https://github.com/madamroger007"} target='_blank'><FaGithub /></Link></li>
      <li><Link href={"https://www.linkedin.com/in/adamstdi"} target='_blank'><FaLinkedin /></Link></li>

    </ul>
  )
}
