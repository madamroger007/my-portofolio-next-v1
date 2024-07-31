import LayoutComponent from '@/components/layout/layout'
import React from 'react'
import ProjectCardSection from './_section/ProjectCardSection'
import { projectItem } from '@/lib/data.d'
import Videoproject from './_section/Videoproject'
import PaginationControls from '@/components/elemen/pagination/PaginationControls'

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...

  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = projectItem.map(item => ({
    ...item,
    items: item.items.slice(start, end)
  }))

  const itemproject = projectItem.map(item => item.items)
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

