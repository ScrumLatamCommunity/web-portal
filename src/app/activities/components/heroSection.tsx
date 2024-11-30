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
    <section className='relative flex flex-col items-center justify-center md:mt-24 md:max-w-screen-2xl md:justify-between'>
      {/* Dotted Blue: Inferior izquierda */}
      <DottedBlue className='absolute bottom-0 left-0 h-[600px] w-[400px] md:h-[349px] md:w-[333px]' />
      {/* Dotted Orange: Superior derecha */}
      <DottedOrange className='absolute right-[-5rem] top-[-5rem] h-[500px] w-[500px] md:right-[-5rem] md:top-[-10rem] md:h-[500px] md:w-[700px]' />
      <div className='flex flex-col gap-8 md:mx-52 md:flex-row md:items-center md:justify-center'>
        <div className='relative m-6 flex h-full flex-col justify-center md:w-[626px]'>
          <h1 className='m-6 font-darker-grotesque text-12 text-[#FE2E00] md:text-16'>
            {title}
          </h1>
          <p className='font-karla text-[#061D48] md:text-10'>{description}</p>
        </div>
        <div className='relative flex flex-col items-center justify-around'>
          {image}
          <a
            className='mt-4 pb-4 text-lg font-bold text-[#082965] md:mb-0 md:mt-8 md:hidden'
            href='#activities'
          >
            {linkTitle}
          </a>
        </div>
      </div>
      <a
        className='hidden font-darker-grotesque text-4xl font-semibold text-[#082965] md:mb-0 md:mt-8 md:block'
        href='#activities'
      >
        {linkTitle}
      </a>
    </section>
  )
}
