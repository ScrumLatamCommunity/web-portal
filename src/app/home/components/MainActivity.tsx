import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  if (!activity) return null

  return (
    <div
      className='relative flex h-[250px] w-full flex-col rounded-[30px] shadow-2xl md:h-[500px]'
      style={{ cursor: 'pointer' }}
      onClick={() => router.push('/activities')}
    >
      <Image
        alt='homeActivity'
        className='h-full w-full rounded-[30px] object-fill'
        height={1200}
        src={activity.image}
        width={1000}
      />
      <div className='absolute bottom-0 left-0 w-full rounded-b-[30px] bg-[#082965] px-6 py-3 opacity-70 md:p-6'>
        <h1 className='font-darker-grotesque text-[18px] font-bold text-white md:text-[24px]'>
          {activity.type}
        </h1>
        <h2 className='pb-1 font-darker-grotesque text-[16px] font-bold text-white md:pb-4 md:text-[24px]'>
          {activity.title}
        </h2>
        <p className='hidden pb-2 font-darker-grotesque text-[14px] leading-[20px] text-white md:block md:pb-6 md:text-[20px]'>
          {activity.description}
        </p>
      </div>
    </div>
  )
}
