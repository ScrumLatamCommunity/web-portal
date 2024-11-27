import EventCards from './eventCards'
import { Event } from '../interfaces/eventInterface'

export default function EventFeature({ events }: { events: Array<Event> }) {
  return (
    <section className='mx-auto w-full max-w-screen-2xl bg-[#E6EAF0] py-12'>
      {/* Cards Section */}
      <div className='px-4 md:px-6 lg:px-10'>
        <EventCards events={events} />
      </div>
    </section>
  )
}
