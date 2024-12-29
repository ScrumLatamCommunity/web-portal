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
    <section className='relative flex flex-col items-center justify-center md:mt-2 md:max-w-screen-2xl md:justify-between'>
      <DottedBlue className='absolute bottom-0 left-0 h-[600px] w-[400px] md:block md:h-[349px] md:w-[333px]' />
      <DottedOrange className='absolute right-[0rem] top-[-5rem] h-[500px] w-[400px] md:right-[-5rem] md:top-[-10rem] md:h-[500px] md:w-[700px]' />
      <div className='flex flex-col md:mx-52 md:flex-row md:items-center md:justify-center'>
        <div className='relative m-6 flex h-full flex-col justify-center md:w-[626px]'>
          <h1 className='pb-4 font-darker-grotesque text-3xl font-semibold text-[#FE2E00] md:pb-6 md:text-4xl'>
            {title}
          </h1>
          <p className='pb-0 font-karla text-[#061D48] md:text-10'>
            {description}
          </p>
        </div>
        <div className='relative flex flex-col items-center justify-around md:h-[550px]'>
          {image}
          <a
            className='mt-4 pb-4 font-darker-grotesque text-lg font-bold text-[#082965] md:mb-0 md:mt-8 md:hidden'
            href='#SQUAD'
          >
            {linkTitle}
          </a>
        </div>
      </div>
      <a
        className='hidden font-darker-grotesque text-4xl font-semibold text-[#082965] md:mb-12 md:mt-8 md:block'
        href='#SQUAD'
      >
        {linkTitle}
      </a>
    </section>
  )
}
