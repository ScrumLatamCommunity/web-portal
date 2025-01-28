'use client'
import { CheckBox } from '@mui/icons-material'
import { darkerGrotesque } from '@/fonts'

interface BenefitsInterface {
  text: string
  checkFree: boolean
  checkFlex: boolean
  checkPremium: boolean
}

export default function Benefits({
  text,
  checkFree,
  checkFlex,
  checkPremium
}: BenefitsInterface) {
  return (
    <main className={`${darkerGrotesque.variable}`}>
      <div className='flex w-[335px] flex-col md:w-[1326px]'>
        <div className='w-full border-t-2 border-gray-600 md:my-2'></div>
        <div className='flex-fil flex'>
          <p className='pd:ml-8 my-3 mr-2 w-[180px] min-w-[158px] text-[10px] font-darker-grotesque-600 md:mr-[258px] md:h-[48px] md:w-[304px] md:text-[18px]'>
            {text}
          </p>
          <div className='mb-4 flex flex-row pt-3 md:pt-5'>
            <div className='scale-75 md:scale-110'>
              <CheckBox
                sx={{
                  color: '#FD3600',
                  visibility: checkFree ? 'visible' : 'hidden'
                }}
              />
            </div>
            <div className='ml-8 scale-75 md:ml-[288px] md:scale-110'>
              <CheckBox
                sx={{
                  color: '#FD3600',
                  visibility: checkFlex ? 'visible' : 'hidden'
                }}
              />
            </div>
            <div className='ml-8 mr-2 scale-75 md:ml-[298px] md:mr-0 md:scale-110'>
              <CheckBox
                sx={{
                  color: '#FD3600',
                  visibility: checkPremium ? 'visible' : 'hidden'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
