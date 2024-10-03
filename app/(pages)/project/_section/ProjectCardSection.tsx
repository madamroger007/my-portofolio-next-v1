"use client"
import React, { useCallback, useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaLaptopCode, FaLink, FaRegImages, FaVideo } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Items, Project, ProjectItem } from '@/lib/data.d'
import LayoutCardProject from '@/components/layout/LayoutCardProject';
import { TitleCard } from '@/components/elemen/card/TitleCard';
import TitleLiner from '@/components/elemen/text/TitleLiner';
import CardProject from '@/components/elemen/card/CardProject';
type Card = {
  value: string,
  children: React.ReactNode
}
const CardSection: React.FC<Card> = ({ value, children }) => {
  return (
    <TabsTrigger value={value} className='flex gap-3 p-5 data-[state=active]:border data-[state=active]:rounded-md data-[state=active]:border-slate-400'>{children}</TabsTrigger>
  )
}

const ProjectCardSection = ({ items }: { items: Project[] }) => {
  const [activeTab, setActiveTab] = React.useState("apps" || "uiux" || "img" || "video");

  const handleTabChange = (value: React.SetStateAction<string>) => {
    setActiveTab(value);
  };
  const [item, setItem] = useState<Project[]>(items || []);



  return (
    <div>
      <section className='flex flex-col items-center gap-5 '>
        <TitleCard >
          <FaLink />
          <h1>Portofolio</h1>
        </TitleCard>
        <TitleLiner title='My Project' />
      </section>
      <Tabs defaultValue={activeTab} className="w-full" onValueChange={handleTabChange}>
        <TabsList className="bg-transparent  w-full">
          <ScrollArea className='md:w-full w-fit whitespace-nowrap px-2 py-4'>
            <div className='w-full flex justify-center items-center gap-10'>

              <CardSection value="apps" ><FaLaptopCode className='w-5 h-5' /> Application</CardSection>
              <CardSection value="uiapp"><MdOutlineSpaceDashboard className='w-5 h-5' /> UI / UX Application</CardSection>
              <CardSection value="img"><FaRegImages className='w-5 h-5' /> Image Design</CardSection>
              <CardSection value="video"><FaVideo className='w-5 h-5' /> Video Design</CardSection>
              <CardSection value="other"><RxDashboard className='w-5 h-5' /> Other</CardSection>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsList>
        <section>
          {item && item.length > 0 ? item.map((item, index) => (
            <div key={index}>
              <TabsContent value={activeTab}>
                <LayoutCardProject >
                  {item.name === activeTab ? item.items.map((item: ProjectItem, index: number) => (
                    <CardProject key={index} link={item.link} name={item.name} desc={item.desc} icon={item.icon} img={item.img} />
                  )) : (<div>Kosong</div>)}
                </LayoutCardProject>
              </TabsContent>

            </div>
          )) : <div>Kosong</div>}


        </section>
      </Tabs>
    </div>
  )
}
export default ProjectCardSection