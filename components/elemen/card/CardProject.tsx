/* eslint-disable @next/next/no-img-element */
// import { IconProject, ProjectItem } from '@/lib/data.d'
import { Project, Icons } from '@/types/types';
import Link from 'next/link'
import React from 'react'
import TooltipComponent from '../TooltipComponent'

const CardProject: React.FC<Project> = (items) => {
  return (
    <Link href={items.url} target='_blank' className="card md:w-96 max-md:w-72 dark:bg-gray-800  shadow-xl  transition-colors duration-1000 ">
      <figure><img src={items.imgUrl} alt={items.title} className=' grayscale hover:grayscale-0 ' /></figure>
      <div className="card-body ">
        <h2 className="card-name">
          {items.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className='truncate ... hover:overflow-visible hover:text-wrap'>{items.description}</p>
        <div className="card-actions justify-end flex pt-5" >
          {items.icons.map((icon: Icons) => (
            <TooltipComponent key={icon.name} tooltip={icon.name}>
              <img src={icon.url} alt="" className="badge bg-transparent  border-transparent  grayscale hover:grayscale-0 " />
            </TooltipComponent>
          ))}
        </div>
      </div>
    </Link>

  )
}

export default CardProject