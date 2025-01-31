import DottedOrange from '@/assets/dottedOrange'
// import DottedBlue from '@/assets/dottedBlue'
import { SquadFeatureInterface } from '../interfaces/squadFeatureInterface'

export default function SquadFeature({
  description,
  descriptionMiddle,
  image,
  linkTitle,
  title
}: SquadFeatureInterface) {
  return (
    <section className='relative flex h-dvh max-w-screen-2xl flex-1 flex-col justify-around bg-[#FFEAE6] pb-12 md:h-[467px] md:flex-row md:pb-0'>
      <DottedOrange className='absolute bottom-0 right-0 h-[250px] w-[250px] translate-y-1/2 md:h-[400px] md:w-[300px]' />
      <div className='relative flex h-full flex-col items-center justify-around md:mx-14 md:justify-center'>
        <a
          href='#SQUAD'
          className='mx-14 mb-0 mt-14 rounded-2xl bg-[#FE2E00] px-10 py-3 font-darker-grotesque text-lg text-[#FFFFFF]'
        >
          {linkTitle}
        </a>
        {/* <DottedBlue className='absolute left-0 top-[-40%] z-[-1] h-[240px] w-[240px]' /> */}
        {image}
      </div>
      <div className='relative mx-6 flex h-full flex-col md:m-12 md:justify-center'>
        <p className='font-karla text-lg leading-7 text-[#061D48] md:text-2xl'>
          {descriptionMiddle}
        </p>
        <h1 className='mt-4 font-karla text-10 font-semibold tracking-wide text-[#FE2E00]'>
          {title}
        </h1>
        <p className='font-karla text-lg leading-7 text-[#061D48] md:text-2xl'>
          {description}
        </p>
      </div>
    </section>
  )
}
