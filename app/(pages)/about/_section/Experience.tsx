"use client"
import { TitleCard } from '@/components/elemen/card/TitleCard'
import { TiFlowChildren } from "react-icons/ti";
import React from 'react'
import TitleLiner from '@/components/elemen/text/TitleLiner';
import dynamic from 'next/dynamic';
const LayoutCardExperience = dynamic(() => import('@/components/layout/LayoutCardExperience'), { ssr: false });
import { CardComponentsExpProps } from '@/components/elemen/card/CardComponentsExp';
import { getExperience } from '@/utils/getApiRequest';
import { Experience as ExperienceType } from '@/types/types';
// Wrap LayoutCardExperience with memo
const MemoizedLayoutCardExperience = React.memo(LayoutCardExperience, (prevProps, nextProps) => {
  // Perform a shallow comparison of the 'items' prop
  return prevProps.items === nextProps.items;
});
const Experience = () => {
  const [dataExperience, setDataExperience] = React.useState<ExperienceType[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getExperience()
      setDataExperience(data)
    }
    fetchData()
  }, []);

  const mapToCardProps = (item: ExperienceType): CardComponentsExpProps => ({
    name: item.title,
    institution: item.name_institution,
    description: item.description,
    start: item.time_start,
    end: item.time_end,
  });

  const workData = (dataExperience ?? [])
    .filter(item => item.category_name === "Work")
    .map(mapToCardProps);

  const schoolData = (dataExperience ?? [])
    .filter(item => item.category_name === "Academic")
    .map(mapToCardProps);


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
        <MemoizedLayoutCardExperience items={workData} subtitle='Experience' name='Work' key={"1"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />
        <MemoizedLayoutCardExperience items={schoolData} subtitle='Alumni' name='Academic' key={"2"} className='dark:hover:bg-[rgba(168,110,240,.2)] hover:bg-[rgb(229,220,240)] cursor-pointer' />

      </section>
    </div>
  )
}

export default Experience