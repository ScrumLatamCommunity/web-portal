import DottedOrange from '@/assets/dottedOrange'
import DottedBlue from '@/assets/dottedBlue'
import { HeroInterface } from '../interfaces/heroInterface'

export default function HeroSection({
  description,
  image,
  linkTitle,
  title,
}: HeroInterface) {
  return (
    <section className='flex flex-col items-center justify-center md:h-dvh md:justify-between'>
      <div className='mx-52 flex flex-col gap-8 md:flex-row md:items-center md:justify-center'>
        <div className='relative m-6 flex h-full flex-col justify-center md:w-[626px]'>
          <DottedOrange className='absolute h-[300px] w-[300px] md:hidden' />
          <h1 className='m-6 text-12 text-[#FE2E00] md:text-16'>{title}</h1>
          <p className='md:text-10'>{description}</p>
        </div>
        <div className='relative flex min-h-[550px] flex-col items-center justify-around'>
          <DottedBlue className='absolute left-0 top-0 z-[-1] h-[249px] w-[233px] md:hidden' />
          {image}
          <a className='text-lg text-[#082965] md:hidden' href='#SQUAD'>
            {linkTitle}
          </a>
        </div>
      </div>
      <a
        className='hidden text-4xl font-semibold text-[#082965] md:m-12 md:block'
        href='#SQUAD'
      >
        {linkTitle}
      </a>
    </section>
  )
}
