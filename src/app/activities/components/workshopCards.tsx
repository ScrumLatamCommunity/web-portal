import { Workshop } from '../interfaces/workshopInterface'

export default function WorkshopCards({
  workshops,
}: {
  workshops: Array<Workshop>
}) {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {workshops.map((workshop) => (
        <div
          key={workshop.id}
          className='flex w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.05]'
        >
          <img
            src={workshop.image}
            alt={workshop.title}
            className='h-[250px] w-full object-cover'
          />
          <div className='flex flex-1 flex-col justify-between p-4'>
            {' '}
            {/* Distribución flexible */}
            <div>
              <h2 className='font-darker-grotesque text-xl font-bold text-[#FE2E00]'>
                {workshop.title}
              </h2>
              <p className='font-karla text-sm font-normal text-blue-6'>
                {workshop.leader}
              </p>
              <p className='mt-1 font-karla text-sm font-bold text-blue-6'>
                {workshop.schedule}
              </p>
              <p className='mt-1 flex items-center font-karla text-sm font-bold text-blue-6'>
                <span>{workshop.country}</span>
                <img
                  src={workshop.flag}
                  alt={`${workshop.country} flag`}
                  className='ml-2 h-4 w-6 object-cover'
                />
              </p>
              {/* Descripción truncada a 4 filas */}
              <p className='mt-2 line-clamp-4 font-karla text-[13px] leading-6 text-[#555]'>
                {workshop.description}
              </p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              {' '}
              {/* Botones alineados */}
              <a
                href={workshop.link}
                className='rounded-full bg-red-400 px-7 py-1 font-darker-grotesque text-white hover:bg-red-300'
              >
                Inscribirse
              </a>
              <a
                href={workshop.details}
                className='text-[#FE2E00] hover:underline'
              >
                Conocer más →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
