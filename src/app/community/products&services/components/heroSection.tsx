import DottedOrange from '@/assets/dottedOrange'
import DottedBlue from '@/assets/dottedBlue'
import { HeroInterface } from '../../interfaces/heroInterface'

export default function HeroSection({
  description,
  image,
  linkTitle,
  title
}: HeroInterface) {
  return (
    <section className='relative flex w-screen flex-col items-center justify-center md:mt-[-100px] md:w-full md:justify-between md:overflow-hidden'>
      <DottedBlue className='absolute bottom-0 left-0 h-[600px] w-[400px] md:block md:h-[349px] md:w-[333px]' />
      <DottedOrange className='absolute right-[0rem] top-[-5rem] h-[500px] w-[400px] overflow-hidden md:right-[-5rem] md:top-[-10rem] md:h-[500px] md:w-[700px]' />
      <div className='flex flex-col md:mx-52 md:mt-[-10px] md:flex-row md:items-center md:justify-center'>
        <div className='relative m-6 flex h-full flex-col justify-center md:mt-20 md:w-[626px] md:px-6 md:pt-20'>
          <h1 className='pb-4 font-darker-grotesque text-[30px] font-bold leading-0 text-[#FE2E00] md:pb-6 md:text-[48px] md:leading-1'>
            {title}
          </h1>
          <p className='pb-0 font-karla text-[17px] text-[#061D48] md:text-[30px]'>
            {description}
          </p>
        </div>
        <div className='relative -mt-20 flex flex-col items-center justify-around pt-0 md:mt-[-50px] md:h-[550px]'>
          {image}
          <a
            className='pb-4 pt-4 font-darker-grotesque text-[20px] text-lg font-bold text-[#082965] md:mb-0 md:hidden md:text-[48px]'
            href='#SQUAD'
          >
            {linkTitle}
          </a>
        </div>
      </div>
      <a
        className='hidden font-darker-grotesque text-[20px] font-semibold text-[#082965] md:mb-12 md:mt-8 md:block md:text-[48px]'
        href='#SQUAD'
      >
        {linkTitle}
      </a>
    </section>
  )
}
