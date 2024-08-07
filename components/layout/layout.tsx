"use client"
import React, { Suspense } from 'react'
import Navbar from '../elemen/Navigation Bar/Navbar'
import ThemeButton from '../elemen/button/ThemeButton'
import Footer from '../elemen/footer/footer'
import LoadingBar from 'react-top-loading-bar'

function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = React.useState(0);


  React.useEffect(() => {
    const handleRouteChange = () => {
      setProgress(40);
      setTimeout(() => {
        setProgress(100);
      }, 1000); // Simulate loading time
    };

    // Trigger route change
    handleRouteChange();

    return () => {
      setProgress(0); // Reset progress on cleanup
    };
  }, []); // Listen to changes in pathname and searchParams

  return (
    <>
      <div className='dark:bg-black bg-white transition-colors duration-2000 '>
        <LoadingBar
          color="#4B70F5"
          className='shadow-lg shadow-slate-200'
          progress={progress}
          waitingTime={500}
          onLoaderFinished={() => {
            setProgress(0);
          }}
        />
        <Navbar />

        <ThemeButton className='fixed bottom-0 right-0 mr-10 mb-10 z-40' />

        <div className='md:pt-28 pt-20'>
          <Suspense fallback={<div>Kosong</div>}>
            {children}
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutComponent