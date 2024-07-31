/* eslint-disable react/no-unescaped-entities */

import CardReviewer from '@/components/elemen/card/CardReviewer'
import { CardSocialMedia } from '@/components/elemen/card/CardSocialMedia'
import { IconHero } from '@/components/elemen/img/Icon'
import { ManRounded } from '@/components/elemen/img/ManRounded'


const BgHeroSection = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 w-full '>
            <div className="w-full flex lg:justify-center max-lg:pl-5">
                <div>
                    <h3 className='text-3xl font-bubblegum dark:text-gray-300 text-gray-700'>Hy! I'm</h3>
                    <h1 className='text-4xl font-poppins font-bold dark:text-blue-500 text-blue-600'>adam Setiadi</h1>
                </div>
            </div>
            <div className="row-span-5 flex justify-center max-lg:mt-20">
                <ManRounded/>
                </div>
            <div className="w-full">
                
                <div className='flex justify-center  max-lg:pt-10'>
                <h2 className='font-poppins text-center dark:text-gray-300 text-gray-700'>I am an app developer, marketing and designer</h2></div></div>
            <div className="col-3">
            </div>
            <div className="flex items-center justify-center ">
                <CardReviewer  className='mt-20'/>
            </div>
            <div className=" flex items-center justify-center  ">
                <CardSocialMedia className='mt-20' />
            </div>
            <div className="w-full">
                <div className='flex justify-center items-start '>
                    <div className='-mt-20 flex items-center flex-col'>
                        <IconHero className='w-[140px]' />
                        <div className='-mt-52 text-center'>
                            <h1 className=' font-poppins font-bold text-2xl uppercase text-black dark:text-white'>Madamroger</h1>
                            <h4 className='text-black dark:text-white'>Full Stack Developer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BgHeroSection