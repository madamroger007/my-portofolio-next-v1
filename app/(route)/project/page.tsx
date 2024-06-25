import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import ProjectCardSection from './_section/ProjectCardSection'
import {projectItem} from '@/lib/data.d'
import Videoproject from './_section/Videoproject'

function page() {
  return (
    <LayoutComponent>
    <section className="w-full pt-14 pb-52 flex flex-col gap-52">
      <ProjectCardSection items={projectItem}/>
      <Videoproject/>
    </section>
  </LayoutComponent>
  )
}

export default page