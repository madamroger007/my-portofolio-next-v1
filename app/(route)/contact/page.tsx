import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import { FormAction } from './_section/FormAction'

export default function page() {
    return (
        <LayoutComponent>
        <section className="w-full pt-14 pb-52">
          <FormAction/>
        </section>
      </LayoutComponent>
    )
}
