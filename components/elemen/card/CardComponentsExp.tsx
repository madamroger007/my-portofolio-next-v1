import React from 'react'
import { formatDate } from '@/utils/DateTime';
export interface CardComponentsExpProps {
  name: string;
  institution: string;
  description: string | null;
  start: string;
  end: string;
  className?: string;
}
const CardComponentsExp: React.FC<CardComponentsExpProps> = ({ name, institution, description, start, end, className }) => {
  return (
    <div className={'border dark:border-blue-600 border-slate-400  p-5 rounded-2xl grid gap-4  ' + className}>
      <h1 className='dark:text-gray-300 text-gray-700 font-raleway font-bold'>{institution}</h1>
      <h1 className='dark:text-gray-300 text-gray-700 font-raleway font-semibold'>{name}</h1>

      <p className='dark:text-gray-300 text-gray-700'>{description}</p>
      <div className='flex justify-between'>
        <span className=' text-blue-600'>{formatDate(start)}</span>
        <span className=' text-blue-400'>{formatDate(end)}</span>
      </div>
    </div>
  )
}

export default CardComponentsExp