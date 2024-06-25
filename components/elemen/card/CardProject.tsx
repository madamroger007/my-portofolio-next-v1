import { IconProject } from '@/lib/data.d'
import React from 'react'
interface Props {
  title:string,
  desc:string,
  icon:IconProject[],
  img:string
}
const CardProject: React.FC<Props> = ({ title,desc,icon,img }) => {
  return (
<div className="card md:w-96 dark:bg-gray-800  shadow-xl  transition-colors duration-1000 ">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='truncate ... hover:overflow-visible hover:text-wrap'>{desc}</p>
    <div className="card-actions justify-end flex pt-5" >
    {icon.map((icon:IconProject) => (
      <img src={icon.icon} alt="" className="badge bg-transparent  border-transparent" key={icon.name}/> 
      ))}
      </div>
  </div>
</div>

  )
}

export default CardProject