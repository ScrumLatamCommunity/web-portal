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
    <section className='flex flex-col'>
      <div className='relative m-6 flex h-full flex-col justify-center'>
        <DottedOrange className='absolute right-0' height={400} width={400} />
        <h1 className='m-6 text-12 text-[#FE2E00]'>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='relative flex min-h-[550px] flex-col items-center justify-around'>
        <DottedBlue
          className='absolute left-0 top-[-40%] z-[-1]'
          height={425}
          width={425}
        />
        {image}
        <a href='#SQUAD' className='text-lg text-[#082965]'>
          {linkTitle}
        </a>
      </div>
    </section>
  )
}
