/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { icon } from '@/lib/data.d'
import { Card } from '@/types/types'

const CardReviewer:React.FC<Card> = ({className}) => {
  return (
    <div className={'p-5 grid grid-cols-2  shadow-lg dark:shadow-blue-600 shadow-slate-400 transition-colors duration-1000  max-w-[320px] ' + className}>
    <h6 className='font-poppins mb-5 text-[14px] dark:text-gray-300 text-gray-700'>Program Language</h6>
    <div className='ml-7 mb-5  text-[14px]'>⭐⭐⭐⭐⭐</div>
    <div className='flex '>
    {Object.entries(icon).slice(0, 7).map(([key, value]) => (
        <div className='rounded-full shadow-sm shadow-slate-700 -ml-2 bg-white dark:bg-gray-200' key={key}>

          <img  src={value} alt={key} className='w-7 h-7 ' />
        </div>
        ))}
        
    </div>
    <div className='ml-7'><h1 className='dark:text-gray-300 text-gray-700'>4.9</h1></div>
    </div>
  )
}
export default React.memo(CardReviewer)
