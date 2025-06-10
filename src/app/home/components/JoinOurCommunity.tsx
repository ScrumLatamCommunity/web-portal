'use client'
import { PrimaryButton } from '@/core/PrimaryButton'
import { images } from '@/data/images_url'
import useIsLargeScreen from '@/hooks'
import Link from 'next/link'

export const JoinOurCommunity = () => {
  const isLargeScreen = useIsLargeScreen(1300)

  const joinUsImage = isLargeScreen
    ? images.joinSectionDesktop
    : images.joinSectionMobile

  return (
    <div className='relative m-auto flex w-4/6 max-w-[1920px] flex-col items-center justify-center py-2 lg:mb-32'>
      <div className='z-0 flex flex-col items-center overflow-hidden rounded-xl bg-black-4 shadow-xl md:flex-row-reverse'>
        <div className='flex h-full'>
          <img
            alt=''
            className='flex h-full w-full'
            height={600}
            src={joinUsImage}
            width={600}
          />
        </div>
        <div className='m-0 flex flex-col items-center gap-[2vw] bg-transparent pb-10 pt-[2rem] sm:w-1/2 md:items-start md:pb-0 md:pl-14 lg:justify-center lg:gap-0 lg:py-8'>
          <p className='m-0 text-center font-darker-grotesque text-[5dvw] font-extrabold leading-8 text-blue-6 md:mb-0 md:flex md:flex-col md:text-start lg:text-15'>
            ¿POR QUÉ UNIRSE
          </p>
          <p className='m-0 text-center font-darker-grotesque text-[6dvw] font-extrabold leading-8 text-red-400 md:mt-2 md:flex md:flex-col md:text-start md:text-17 lg:text-17'>
            A NOSOTROS?
          </p>
          <p className='w-[80%] text-center font-karla text-[3.5dvw] font-medium leading-3 text-blue-6 md:flex md:text-start md:text-7 md:leading-9 lg:pt-10'>
            Conéctate con profesionales ágiles de toda Latinoamérica, accede a
            recursos exclusivos, y participa en eventos y webinars que
            impulsarán tu crecimiento.{' '}
          </p>
          <p className='w-[80%] text-center font-karla font-bold leading-3 text-blue-6 md:text-start md:text-7 md:leading-9'>
            ¡Regístrate hoy y sé parte de nuestra transformación ágil!
          </p>
          <Link href='/benefits'>
            <div className='mt-3 flex items-center justify-center'>
              <PrimaryButton className='w-[160px]' label='Beneficios' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
