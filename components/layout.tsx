import React from 'react'
import Navbar from './elemen/Navigation Bar/Navbar'
import ThemeButton from './elemen/button/ThemeButton'
import Footer from './elemen/footer/footer'

function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='fixed bottom-0 right-0 mr-10 mb-10 z-40'>
        <ThemeButton />
      </div>
      <div className='md:pt-28 pt-20'>

        {children}

      </div>
      <Footer />
    </>
  )
}

export default LayoutComponent