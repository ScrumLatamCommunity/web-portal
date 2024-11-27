import { Workshop } from '../interfaces/workshopInterface'
import WorkshopCards from './workshopCards' // Importa el componente de las tarjetas

export default function WorkshopFeature({
  workshops,
}: {
  workshops: Array<Workshop>
}) {
  return (
    <section className='mx-auto w-full max-w-screen-2xl bg-[#FFEAE6] py-12'>
      {/* Cards Section */}
      <div className='px-4 md:px-6 lg:px-10'>
        <WorkshopCards workshops={workshops} />
      </div>
    </section>
  )
}
