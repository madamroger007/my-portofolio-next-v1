import React, { ReactNode } from 'react'


const LayoutCardProject = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full flex flex-wrap justify-center gap-5 items-center px-5 py-10'>
      {children}
    </div>
  )
}

export default LayoutCardProject