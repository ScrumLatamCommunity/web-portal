import { HeroInterface } from '../../interfaces/heroInterface'

export default function HeroSection({
  children,
  image,
  title
}: HeroInterface & { children?: React.ReactNode }) {
  return (
    <section className='mx-auto flex min-h-[250px] w-full max-w-[1920px] md:min-h-[350px] md:w-screen'>
      <div className='absolute left-0 top-0 z-0 flex w-full justify-center overflow-hidden'>
        <div className='w-full max-w-[1920px]'>{image}</div>
      </div>
      <div className='relative z-10 flex w-full max-w-[900px] flex-col items-start pl-6 pt-10 md:pl-24 md:pt-10 2xl:pl-[20%] 2xl:pt-16'>
        <h1 className='mb-4 font-darker-grotesque text-[2rem] font-bold leading-tight text-[#082965] md:mb-6 md:text-[2.8rem] 2xl:text-[3.2rem]'>
          {title}
        </h1>
        <p className='mb-6 font-karla text-[1.1rem] text-[#082965] md:text-[1.3rem]'>
          {children}
        </p>
      </div>
    </section>
  )
}
