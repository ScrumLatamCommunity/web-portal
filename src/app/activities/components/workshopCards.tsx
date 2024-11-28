import { Workshop } from '../interfaces/workshopInterface'

export default function WorkshopCards({ workshop }: { workshop: Workshop }) {
  return (
    <div className='px-6'>
      {/* Padding horizontal entre las tarjetas y el contenedor */}
      <div className='mx-auto flex w-[300px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.05] md:w-[400px]'>
        <img
          src={workshop.image}
          alt={workshop.title}
          className='h-[250px] w-full object-cover'
        />
        <div className='flex flex-1 flex-col justify-between p-4'>
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
            {/* Ajuste para garantizar que no se corte la cuarta línea */}
            <p className='mt-2 h-[6rem] overflow-hidden font-karla text-[13px] leading-6 text-[#555]'>
              {workshop.description}
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
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
    </div>
  )
}
