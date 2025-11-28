import LayoutComponent from '@/components/layout/layout'
import Introduction from './_section/Introduction'
import { Metadata } from 'next'
import Experience from './_section/Experience'
import Certification from './_section/Certification'
import { getCertification, getExperience,getProject } from '@/utils/getApiRequest'

export const metadata: Metadata = {
  title: "about"
}
async function page() {
  const dataExperience = await getExperience()
  const dataCertification = await getCertification()

  return (
    <>
      <LayoutComponent>
        <section className="w-full pt-14 pb-52 flex flex-col gap-52">
          <Introduction />
          <Experience items={dataExperience} />
          <Certification items={dataCertification} />
        </section>
      </LayoutComponent>
    </>
  )
}

export default page