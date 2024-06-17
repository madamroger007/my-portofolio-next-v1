import { TitleCard } from '@/components/elemen/card/TitleCard'
import TitleLiner from '@/components/elemen/text/TitleLiner'
import React from 'react'
import { TiFlowChildren } from 'react-icons/ti'

const Certification = () => {
    return (
        <div>
          <section className='flex flex-col items-center gap-5 '>
            <TitleCard >
              <TiFlowChildren />
              <h1>Flow</h1>
            </TitleCard>
            <TitleLiner title='Certifications' />
          </section>
          
        </div>
      )
}

export default Certification