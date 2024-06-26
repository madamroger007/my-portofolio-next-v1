"use client"
/* eslint-disable @next/next/no-img-element */
import { CardTutor } from '@/components/elemen/card/CardTutor'
import { TitleCard } from '@/components/elemen/card/TitleCard'
import TitleLiner from '@/components/elemen/text/TitleLiner'
import LayoutCardProject from '@/components/layout/LayoutCardProject'
import { Project } from '@/lib/data.d'
import React from 'react'
import { FaLink } from 'react-icons/fa'

const Videoproject = ({ items }: { items: Project[] }) => {
  const [item, setItem] = React.useState<Project[] | []>(items || []);
  console.log(item)
  return (
    <div className=''>
      <section className='flex flex-col items-center gap-5 '>
        <TitleCard >
          <FaLink />
          <h1>Portofolio</h1>
        </TitleCard>
        <TitleLiner title='Video Project' />
      </section>
      <section className='w-full'>

        {item.length > 0 && item.map((i, index) => (
          <LayoutCardProject key={index}>

            {i.items.map((it, index) => (

              <CardTutor key={index} title={it.title} icon={it.icon} desc={it.desc} img={it.img} link={it.link} />
            ))}
          </LayoutCardProject>
        ))}
      </section>

    </div>
  )
}

export default Videoproject