import { Event } from '../interfaces/eventInterface'

export default function EventCards({ events }: { events: Array<Event> }) {
  return (
    <div className='px-6'>
      {events.map((event) => (
        <div
          className='mx-auto flex w-[300px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.05] md:w-[400px]'
          key={event.id}
        >
          <img
            alt={event.title}
            className='h-[250px] w-full object-cover'
            src={event.image}
          />
          <div className='flex flex-1 flex-col justify-between p-4'>
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
              <p className='mt-2 h-[6rem] overflow-hidden font-karla text-[13px] leading-6 text-[#555]'>
                {event.description}
              </p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              <a
                className='rounded-full bg-red-400 px-7 py-1 font-darker-grotesque text-white hover:bg-red-300'
                href={event.link}
              >
                Inscribirse
              </a>
              <a
                className='text-[#FE2E00] hover:underline'
                href={event.details}
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
