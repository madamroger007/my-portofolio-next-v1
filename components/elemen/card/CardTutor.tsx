/* eslint-disable @next/next/no-img-element */
import { IconProject, ProjectItem } from '@/lib/data.d'
import Link from 'next/link'
import React from 'react'

export const CardTutor: React.FC<ProjectItem> = ({ title, desc, icon, img, link }) => {
  return (
    <Link href={link} className="card  dark:bg-gray-800  w-96 shadow-xl shadow-slate-4000 dark:shadow-none">
      <figure className='pt-8 px-5 '>
        <img
          src={img}
          alt={title} className='rounded-lg' />
      </figure>
      <div className="card-body grid grid-cols-2 ">
        <div>
          <h2 className="card-title">{title}</h2>
          <p className='truncate ... hover:overflow-visible hover:text-wrap'>{desc}</p>
        </div>
        <div className="card-actions justify-end flex pt-5">
          {icon.map((icon: IconProject) => (
            <img src={icon.icon} alt={icon.name} className="badge bg-transparent  border-transparent" key={icon.name} />
          ))}
        </div>
      </div>
    </Link>

  )
}
