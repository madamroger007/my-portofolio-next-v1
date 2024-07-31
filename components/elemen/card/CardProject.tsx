/* eslint-disable @next/next/no-img-element */
import { IconProject, ProjectItem } from '@/lib/data.d'
import Link from 'next/link'
import React from 'react'
import TooltipComponent from '../TooltipComponent'

const CardProject: React.FC<ProjectItem> = ({ title, desc, icon, img, link }) => {
  return (
    <Link href={link} target='_blank' className="card md:w-96 max-md:w-72 dark:bg-gray-800  shadow-xl  transition-colors duration-1000 ">
      <figure><img src={img} alt={title} className=' grayscale hover:grayscale-0 ' /></figure>
      <div className="card-body ">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className='truncate ... hover:overflow-visible hover:text-wrap'>{desc}</p>
        <div className="card-actions justify-end flex pt-5" >
          {icon.map((icon: IconProject) => (
            <TooltipComponent key={icon.name} tooltip={icon.name}>
              <img src={icon.icon} alt="" className="badge bg-transparent  border-transparent  grayscale hover:grayscale-0 " />
            </TooltipComponent>
          ))}
        </div>
      </div>
    </Link>

  )
}

export default CardProject