"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TitleLiner from '@/components/elemen/text/TitleLiner'
import { TitleCard } from '@/components/elemen/card/TitleCard'
import { FaLink } from "react-icons/fa6";

const SkillField = () => {
    return (
        <div>
            <section className='flex flex-col items-center gap-5 '>
                <TitleCard >
                    <FaLink />
                    <h1>Portofolio</h1>
                </TitleCard>
                <TitleLiner title='My Skill' />
            </section>

            <Tabs defaultValue="desain" className="w-full py-10">
                <TabsList className=' bg-transparent w-full  justify-center items-center'>
                    <div className='max-md:carousel'>
                        <TabsTrigger value="desain" className=' max-md:carousel-item ' id="slide1">
                            <div className='mx-10 '>

                                <img src="/src/img/icon/desain.png" alt="a" className='w-[150px]' />
                                <h1>Desain Grafis</h1>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="webdev" className='max-md:carousel-item ' id="slide2">
                            <div className='mx-10 '>

                                <img src="/src/img/icon/web.png" alt="a" className='w-[150px]' />
                                <h1>Web Development</h1>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="android" className='max-md:carousel-item ' id="slide3">
                            <div className='mx-10 '>

                                <img src="/src/img/icon/android.png" alt="a" className='w-[150px]' />
                                <h1>Android Development</h1>
                            </div>
                        </TabsTrigger>
                    </div>
                </TabsList>
                <div className='relative '>

                    <TabsContent value="desain">Make changes to your account here.</TabsContent>
                    <TabsContent value="webdev">Change your password web.</TabsContent>
                    <TabsContent value="android">Change your password here.</TabsContent>
                </div>

            </Tabs>


        </div>
    )
}

export default SkillField