import DottedOrange from '@/assets/dottedOrange'
import DottedBlue from '@/assets/dottedBlue'
import { SquadFeatureInterface } from '../interfaces/squadFeatureInterface'

export default function SquadFeature({
  description,
  descriptionMiddle,
  image,
  linkTitle,
  title,
}: SquadFeatureInterface) {
  return (
    <section className='flex h-dvh flex-1 flex-col justify-around bg-[#FFEAE6]'>
      <div className='relative flex h-full flex-col items-center justify-around'>
        <a
          href='#SQUAD'
          className='mx-14 mb-0 mt-14 rounded-2xl bg-[#FE2E00] px-10 py-3 text-lg text-white'
        >
          {linkTitle}
        </a>
        <DottedBlue
          className='absolute left-0 top-[-40%] z-[-1]'
          height={249}
          width={233}
        />
        {image}
      </div>
      <div className='relative mx-6 flex h-full flex-col'>
        <DottedOrange className='absolute right-0' height={400} width={400} />
        <p className='text-lg leading-7'>{descriptionMiddle}</p>
        <h1 className='mt-4 text-10 font-semibold tracking-wide text-[#FE2E00]'>
          {title}
        </h1>
        <p className='text-lg leading-7'>{description}</p>
      </div>
    </section>
  )
}
