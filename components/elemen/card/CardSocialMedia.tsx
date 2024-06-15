import { Card } from '@/types/types';
import React from 'react'
import { FaFacebook,FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";
export const CardSocialMedia:React.FC<Card> = ({className}) => {
  return (
    <ul className={'icon-home flex gap-8 justify-center '+className}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaGithub/></li>
                <li><FaLinkedin/></li>

            </ul>
  )
}
