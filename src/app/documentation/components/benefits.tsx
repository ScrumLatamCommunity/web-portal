import { BenefitsProps } from '../interfaces/benefitsInterface'
import GearIcon from '@/assets/gearIcon'
import TargetIcon from '@/assets/targetIcon'

export default function Benefits({
  buttonText,
  description,
  title
}: BenefitsProps) {
  return (
    <div className='flex min-h-[40dvh] w-full flex-col items-center justify-center bg-[#F15A2B] p-4 text-center md:h-[367px] md:min-h-0 md:max-w-[1980px]'>
      <div className='mb-6 md:relative'>
        <GearIcon className='hidden h-8 w-8 md:absolute md:left-[-400px] md:h-16 md:w-16' />
      </div>

      <h1 className='mb-6 text-3xl font-bold text-[#1B264F] md:text-4xl'>
        {title}
      </h1>

      <p className='mb-2 text-lg text-[#1B264F] md:mb-8 md:w-[650px]'>
        {description}
      </p>

      <div className='mb-6 md:relative'>
        <TargetIcon className='hidden h-14 w-14 md:absolute md:right-[-400px] md:h-24 md:w-24' />
      </div>

      <button className='rounded-full border-2 border-[#1B264F] bg-transparent px-8 py-3 text-lg font-semibold text-[#1B264F] transition-colors duration-300 hover:bg-[#1B264F] hover:text-white'>
        {buttonText}
      </button>
    </div>
  )
}
