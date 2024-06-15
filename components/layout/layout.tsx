import React from 'react'
import Navbar from '../elemen/Navigation Bar/Navbar'
import ThemeButton from '../elemen/button/ThemeButton'
import Footer from '../elemen/footer/footer'

function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className='dark:bg-black bg-white'>
      <Navbar />
   
        <ThemeButton className='fixed bottom-0 right-0 mr-10 mb-10 z-40' />
   
      <div className='md:pt-28 pt-20'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default LayoutComponent