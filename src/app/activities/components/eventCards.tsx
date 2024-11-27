import { Event } from '../interfaces/eventInterface'

export default function EventCards({ events }: { events: Array<Event> }) {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {events.map((event) => (
        <div
          key={event.id}
          className='flex w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.05]'
        >
          <img
            src={event.image}
            alt={event.title}
            className='h-[250px] w-full object-cover'
          />
          <div className='flex flex-1 flex-col justify-between p-4'>
            {' '}
            {/* Contenedor flexible */}
            <div>
              <h2 className='font-darker-grotesque text-xl font-bold text-[#FE2E00]'>
                {event.title}
              </h2>
              <p className='font-karla text-sm font-normal text-blue-6'>
                {event.leader}
              </p>
              <p className='mt-1 font-karla text-sm font-bold text-blue-6'>
                {event.time}
              </p>
              <p className='mt-1 flex items-center font-karla text-sm font-bold text-blue-6'>
                <span>{event.date}</span>
              </p>
              {/* Descripción truncada a 4 líneas */}
              <p className='mt-2 line-clamp-4 font-karla text-[13px] leading-6 text-[#555]'>
                {event.description}
              </p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              {' '}
              {/* Botones alineados */}
              <a
                href={event.link}
                className='rounded-full bg-red-400 px-7 py-1 font-darker-grotesque text-white hover:bg-red-300'
              >
                Inscribirse
              </a>
              <a
                href={event.details}
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
