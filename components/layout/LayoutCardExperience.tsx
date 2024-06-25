import React from 'react'
import CardComponentsExp, { CardComponentsExpProps } from '../elemen/card/CardComponentsExp'

const LayoutCardExperience = ({ title, subtitle, className, items }: { items: CardComponentsExpProps[], title: string, subtitle: string, className?: string, }) => {
  return (
    <div className='w-full'>
      <div className='text-center'>
        <h1 className='font-extrabold font-raleway dark:text-gray-300 text-gray-700 text-xl'>{title}</h1>
        <p className='font-raleway dark:text-gray-300 text-gray-700'>{subtitle}</p>
      </div>
      <div className='grid gap-8 mt-10'>
        {items.map(item => (
          <CardComponentsExp className={className} key={item.title} date={item.date} minute={item.minute} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  )
}

export default LayoutCardExperience