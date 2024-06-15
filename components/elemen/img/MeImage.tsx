import React from 'react'
import CardReviewer from '../card/CardReviewer'

export const MeImage = ({className}:{className:string}) => {
    return (
        <section className={"flex justify-center items-center w-full flex-col max-md:pt-14 relative "}>
            <div className={'flex justify-center '} ><img src="/src/img/bg/bg animation profile.png" alt="" className={'md:w-[400px] max-sm:w-[300px] rounded-[100px] '+className} />
            </div>
            <div className='bg-base-200 md:absolute md:left-0 md:bottom-[10%] '><CardReviewer className='bg-white dark:bg-gray-900' /></div>
            <img src="/src/img/icon programming/visual-basic.png" alt="" className='max-w-[60px] rounded-full bg-gray-800 absolute max-lg:left-[5%] max-sm:left-[5%] max-md:left-[13%] lg:left-[10%] xl:left-[13%] top-28 '/>
           <img src="/src/img/icon programming/programming.png" alt="" className='max-w-[60px] rounded-full bg-gray-800 absolute max-lg:right-[5%] max-sm:right-[15%] max-md:right-[18%] lg:right-[20%]  md:top-0 top-10 '/>
           <img src="/src/img/icon programming/visual-basic.png" alt="" className='max-w-[60px] rounded-full bg-gray-800 absolute max-lg:right-[5%] max-sm:right-[5%] max-md:right-[13%] lg:right-[10%] xl:right-[13%]  bottom-36 '/>

        </section>
    )
}
