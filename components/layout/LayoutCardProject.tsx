import React from 'react'
import CardProject from '../elemen/card/CardProject'
import { ProjectItem } from '@/lib/data.d'

const LayoutCardProject = ({ items }: { items: ProjectItem[] }) => {
  return (
    <div className=' w-full grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center px-5 py-10'>
      {items.map((item,index) => (
        <CardProject key={index} title={item.title} desc={item.desc} icon={item.icon} img={item.img} />
      ))}
       
    </div>
  )
}

export default LayoutCardProject