import LayoutComponent from '@/components/layout/layout'
import dynamic from 'next/dynamic'
const DynamicFormAction = dynamic(() => import('./_section/FormAction'), { loading: () => <p>Loading...</p> })
export default function page() {
  return (
    <>
      <LayoutComponent>
        <section className="w-full pt-14 pb-52">
          <DynamicFormAction />
        </section>
      </LayoutComponent>
    </>
  )
}
