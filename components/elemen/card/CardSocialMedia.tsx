import { Card } from '@/types/types';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export const CardSocialMedia: React.FC<Card> = ({ className }) => {
  return (

    <ul className={'icon-home flex gap-8 justify-center ' + className}>
      <li><Link href={"https://www.facebook.com/adam.setiadi.583"}><FaFacebook /></Link></li>
      <li><Link href={"https://www.instagram.com/adamstdi._/"}><FaInstagram /></Link></li>
      <li><Link href={"https://github.com/madamroger007"}><FaGithub /></Link></li>
      <li><Link href={"https://www.linkedin.com/in/adamstdi"}><FaLinkedin /></Link></li>

    </ul>
  )
}
