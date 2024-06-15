import React from 'react'
export interface CardComponentsExpProps {
    title: string;
    desc: string;
    minute: string;
    date: string;
    className?:string;
  }
const CardComponentsExp:React.FC<CardComponentsExpProps> = ({title,desc,minute,date,className}) => {
  return (
    <div className={'border dark:border-blue-600 border-slate-400  p-5 rounded-2xl grid gap-4  ' + className}>
        <h1 className='dark:text-gray-300 text-gray-700 font-raleway font-bold'>{title}</h1>
        <p className='dark:text-gray-300 text-gray-700'>{desc}</p>
        <div className='flex justify-between'>
            <span className=' text-blue-600'>{minute}</span>
            <span className=' text-blue-400'>{date}</span>
        </div>
    </div>
  )
}

export default CardComponentsExp