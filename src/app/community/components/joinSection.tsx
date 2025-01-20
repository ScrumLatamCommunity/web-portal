import { JoinCommunityProps } from '../interfaces/joinInterface'
import GearIcon from '@/assets/gearIcon'
import TargetIcon from '@/assets/targetIcon'

export default function JoinCommunity({
  buttonText,
  callToAction,
  description,
  title,
}: JoinCommunityProps) {
  return (
    <div className='flex min-h-dvh w-full flex-col items-center justify-center bg-[#F15A2B] p-4 text-center md:h-[467px] md:min-h-0 md:max-w-[1980px]'>
      <div className='mb-6 md:relative'>
        <GearIcon className='h-8 w-8 md:absolute md:left-[-400px] md:h-16 md:w-16' />
      </div>

      <h1 className='mb-6 text-4xl font-bold text-[#1B264F]'>{title}</h1>

      <p className='mb-8 text-lg text-[#1B264F] md:w-[650px]'>{description}</p>

      <p className='mb-8 font-bold text-[#1B264F]'>{callToAction}</p>
      <div className='mb-6 md:relative'>
        <TargetIcon className='h-14 w-14 md:absolute md:right-[-400px] md:h-24 md:w-24' />
      </div>

      <button className='rounded-full border-2 border-[#1B264F] bg-transparent px-8 py-3 text-lg font-semibold text-[#1B264F] transition-colors duration-300 hover:bg-[#1B264F] hover:text-white'>
        {buttonText}
      </button>
    </div>
  )
}
