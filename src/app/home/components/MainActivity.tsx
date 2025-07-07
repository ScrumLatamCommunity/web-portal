import Image from 'next/image'

interface ActivityProps {
  activity: {
    title: string
    description: string
    date: string
    time: string[]
    recurrency: string
    image: string
    type: string
    link: string
  } | null
}

export default function MainActivity({ activity }: ActivityProps) {
  if (!activity) return null // o un skeleton/loading

  return (
    <div className='relative flex h-[500px] w-full flex-col rounded-[30px] shadow-2xl'>
      <Image
        alt='homeActivity'
        className='h-full w-full rounded-[30px] object-cover'
        height={1200}
        src={activity.image}
        width={1000}
      />
      <div className='absolute bottom-0 left-0 w-full rounded-b-[30px] bg-[#082965] p-6 opacity-70'>
        <h1 className='font-darker-grotesque text-[24px] font-bold text-white'>
          {activity.type}
        </h1>
        <h2 className='pb-4 font-darker-grotesque text-[24px] font-bold text-white'>
          {activity.title}
        </h2>
        <p className='pb-6 font-darker-grotesque text-[20px] leading-[20px] text-white'>
          {activity.description}
        </p>
      </div>
    </div>
  )
}
