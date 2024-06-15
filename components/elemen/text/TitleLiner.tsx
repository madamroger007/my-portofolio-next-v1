import React from 'react'

const TitleLiner = ({title}:{title:string}) => {
  return (
    <div className='max-w-[200px] flex flex-col gap-3'>
        <h1 className='font-raleway font-extrabold text-3xl dark:text-gray-300 text-gray-700'>{title}</h1>
        <div className='bg-[#7456FF] w-full h-1.5 rounded-md'></div>
    </div>
  )
}

export default TitleLiner