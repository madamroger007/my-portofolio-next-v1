import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import SkillField from './_section/SkillField'
import { skill } from '@/lib/data.d'

async function page() {
  const data =await skill
  return (
    <LayoutComponent>
      <section className='w-full pt-14 pb-52'>
        <SkillField items={data}/>
      </section>
    </LayoutComponent>
  )
}

export default page