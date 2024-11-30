import { Workshop } from '../interfaces/workshopInterface'

export default function WorkshopCards({ workshop }: { workshop: Workshop }) {
  return (
    <div className='px-6'>
      {/* Padding horizontal entre las tarjetas y el contenedor */}
      <div className='mx-auto flex w-[300px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.05] md:w-[400px]'>
        <img
          alt={workshop.title}
          className='h-[250px] w-full object-cover'
          src={workshop.image}
        />
        <div className='flex flex-1 flex-col justify-between p-4'>
          <div>
            <h2 className='font-darker-grotesque text-xl font-bold text-[#FE2E00]'>
              {workshop.title}
            </h2>
            <p className='font-darker-grotesque text-sm font-normal text-[#072356]'>
              {workshop.leader}
            </p>
            <p className='mt-1 font-darker-grotesque text-sm font-bold text-[#072356]'>
              {workshop.schedule}
            </p>
            <p className='mt-1 flex items-center font-darker-grotesque text-sm font-bold text-[#072356]'>
              <span>{workshop.country}</span>
              <img
                alt={`${workshop.country} flag`}
                className='ml-2 h-4 w-6 object-cover'
                src={workshop.flag}
              />
            </p>
            {/* Ajuste para garantizar que no se corte la cuarta línea */}
            <p className='mt-2 h-[6rem] overflow-hidden font-karla text-[13px] leading-6 text-[#000000]'>
              {workshop.description}
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between pb-[0.25rem] md:pb-6'>
            <a
              className='rounded-full bg-red-400 px-7 py-1 font-darker-grotesque text-white hover:bg-red-300'
              href={workshop.link}
            >
              Inscribirse
            </a>
            <a
              className='font-darker-grotesque text-[#FE5833] hover:underline'
              href={workshop.details}
            >
              Conocer más →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
