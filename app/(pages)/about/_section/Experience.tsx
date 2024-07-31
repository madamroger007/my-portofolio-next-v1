import { TitleCard } from '@/components/elemen/card/TitleCard'
import { TiFlowChildren } from "react-icons/ti";
import React from 'react'
import TitleLiner from '@/components/elemen/text/TitleLiner';
import LayoutCardExperience from '@/components/layout/LayoutCardExperience';
import { PropsDataExpSchool, PropsDataExpwork } from '@/lib/data.d';

// Wrap LayoutCardExperience with memo
const MemoizedLayoutCardExperience = React.memo(LayoutCardExperience, (prevProps, nextProps) => {
  // Perform a shallow comparison of the 'items' prop
  return prevProps.items === nextProps.items;
});
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
      <section className='grid md:grid-cols-2 grid-cols-1 max-md:items-center max-md:justify-center px-5 md:px-10 py-10 gap-10 '>
        <MemoizedLayoutCardExperience items={PropsDataExpwork} subtitle='Experience' title='Work' key={"1"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />
        <MemoizedLayoutCardExperience items={PropsDataExpSchool} subtitle='Alumni' title='Academic' key={"1"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />

      </section>
    </div>
  )
}

export default Experience