import { HeroInterface } from '../../interfaces/heroInterface'

export default function HeroSection({
  children,
  image,
  title
}: HeroInterface & { children?: React.ReactNode }) {
  return (
    <section className='relative flex w-screen flex-col items-center justify-center md:w-full md:justify-between md:overflow-hidden'>
      <div className='flex flex-col md:mx-52 md:mt-[-10px] md:flex-row md:items-center md:justify-center'>
        <div className='relative m-6 flex h-full flex-col justify-center md:mt-20 md:w-[626px] md:px-6 md:pt-20'>
          <h1 className='pb-4 font-darker-grotesque text-[30px] font-bold leading-0 text-[#082965] md:pb-6 md:text-[48px] md:leading-1'>
            {title}
          </h1>
          <p className='pb-0 font-karla text-[17px] text-[#061D48] md:text-[25px]'>
            {children}
          </p>
        </div>
        <div className='relative -mt-20 flex flex-col items-center justify-around pt-0 md:mt-[-50px] md:h-[550px]'>
          {image}
        </div>
      </div>
    </section>
  )
}
