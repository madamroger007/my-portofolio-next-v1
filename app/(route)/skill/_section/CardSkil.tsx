import { CardSkillComponent } from '@/components/elemen/card/CardSkillComponent'
import TitleLiner from '@/components/elemen/text/TitleLiner'
import { Items } from '@/lib/data.d'
import React from 'react'
import { MdDoNotDisturbAlt } from "react-icons/md";
const CardSkil = ({ items }: { items: Items[] }) => {
    return (
        <div className='w-full grid gap-28 '>
            {items.map((item) => (
                <div key={item.name} className='flex flex-col w-full items-center justify-center gap-5 px-5'>
                    <TitleLiner title={item.name} />
                    <div className='flex md:gap-8 gap-5 justify-start items-center flex-wrap'>
                        {item.tech.length === 0 ? <>UnAvailable</> : item.tech.map((tech, index) => (
                            <React.Fragment key={index}>
                                {tech.icon === "" || tech.url === "" ? (<div></div>) : (
                                    <CardSkillComponent key={index} items={tech} className='' />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CardSkil