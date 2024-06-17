import { TitleCard } from '@/components/elemen/card/TitleCard'
import { TiFlowChildren } from "react-icons/ti";
import React from 'react'
import TitleLiner from '@/components/elemen/text/TitleLiner';
import LayoutCardExperience from '@/components/elemen/card/LayoutCardExperience';
import { PropsDataExp } from '@/lib/data.d';
const Experience = () => {
  return (
    <div>
      <section className='flex flex-col items-center gap-5 '>
        <TitleCard >
          <TiFlowChildren />
          <h1>Flow</h1>
        </TitleCard>
        <TitleLiner title='Experience' />
      </section>
      <section className='grid md:grid-cols-2 grid-cols-1 px-10 py-10 gap-10 '>
        <LayoutCardExperience items={PropsDataExp} subtitle='Experience' title='Work' key={"1"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />
        <LayoutCardExperience items={PropsDataExp} subtitle='Alumni' title='Academic' key={"1"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />

      </section>
    </div>
  )
}

export default Experience