import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import ProjectCardSection from './_section/ProjectCardSection'
// import { projectItem } from '@/lib/data.d'
import PaginationControls from '@/components/elemen/pagination/PaginationControls'
import { getProject } from '@/utils/getApiRequest'
export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const getDataProject = await getProject();
 
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...

  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = getDataProject.slice(start, end)


  const itemproject = getDataProject.map(item => item)
  
  return (
    <LayoutComponent>
      <section className="w-full pt-14 pb-52 flex flex-col gap-52">
        <ProjectCardSection items={entries} />
        <PaginationControls
          hasNextPage={end < itemproject.length}
          hasPrevPage={start > 0}
        />
      </section>
    </LayoutComponent>
  )
}

