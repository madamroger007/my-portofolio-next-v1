  import React from 'react'

  const TitleLiner = ({ title }: { title: string }) => {
    return (
      <div className='max-w-[200px] flex flex-col gap-2 text-center'>
        <h1 className='font-raleway font-extrabold text-3xl dark:text-gray-300 text-gray-700'>{title}</h1>
        <div className='bg-[#3a2694] w-full h-[5.5px] rounded-md'></div>
      </div>
    )
  }

  export default TitleLiner