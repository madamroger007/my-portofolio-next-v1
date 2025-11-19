import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import Introduction from './_section/Introduction'
import { Metadata } from 'next'
import Experience from './_section/Experience'
import Certification from './_section/Certification'

export const metadata: Metadata = {
  title: "about"
}
function page() {
  return (
    <>
      <LayoutComponent>
        <section className="w-full pt-14 pb-52 flex flex-col gap-52">
          <Introduction />
          <Experience />
          <Certification />
        </section>
      </LayoutComponent>
    </>
  )
}

export default page