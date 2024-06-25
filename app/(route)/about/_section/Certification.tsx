import CardSertification from '@/components/elemen/card/CardSertification'
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
          <section className='grid md:grid-cols-2 grid-cols-1 px-5 md:px-10 py-10 gap-10'>
            <CardSertification title='Learn Fundamental DevOps (DevOps and Back-End Developer Scholarship Program)' date='januari 3/0/2002' name_company='Dicoding Indonesia' minute='3 minute' url='/certification/dicoding' />
            <CardSertification title='Learn Fundamental DevOps (DevOps and Back-End Developer Scholarship Program)' date='januari 3/0/2002' name_company='Dicoding Indonesia' minute='3 minute' url='/certification/dicoding' />
            <CardSertification title='Learn Fundamental DevOps (DevOps and Back-End Developer Scholarship Program)' date='januari 3/0/2002' name_company='Dicoding Indonesia' minute='3 minute' url='/certification/dicoding' />
            <CardSertification title='Learn Fundamental DevOps (DevOps and Back-End Developer Scholarship Program)' date='januari 3/0/2002' name_company='Dicoding Indonesia' minute='3 minute' url='/certification/dicoding' />
            <CardSertification title='Learn Fundamental DevOps (DevOps and Back-End Developer Scholarship Program)' date='januari 3/0/2002' name_company='Dicoding Indonesia' minute='3 minute' url='/certification/dicoding' />
          
          </section>
        </div>
      )
}

export default Certification