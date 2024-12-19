'use client'
import { PrimaryButton } from '@/core/PrimaryButton'
import { images } from '@/data/images_url'
import useIsLargeScreen from '@/hooks'

export const JoinOurCommunity = () => {
  const isLargeScreen = useIsLargeScreen(1300)

  const joinUsImage = isLargeScreen
    ? images.joinSectionDesktop
    : images.joinSectionMobile

  return (
    <div className='relative m-auto flex max-w-screen-2xl flex-col items-center px-12 pb-9'>
      <div className='z-0 flex flex-col items-center overflow-hidden rounded-xl bg-black-4 shadow-xl md:flex-row-reverse'>
        <div className='flex h-full w-[160%]'>
          <img
            alt=''
            className='flex h-full'
            height={600}
            src={joinUsImage}
            width={550}
          />
        </div>

        <div className='m-0 flex flex-col items-center gap-[2vw] bg-transparent pb-10 pt-[2rem] md:items-start md:pl-[4rem]'>
          <h3 className='m-0 -mb-4 text-center font-darker-grotesque text-[6dvw] font-extrabold text-blue-6 md:mb-0 md:flex md:flex-col md:text-start md:leading-[65px] lg:text-[82px]'>
            ¿POR QUÉ UNIRSE
          </h3>
          <p className='m-0 text-center font-darker-grotesque text-[6dvw] font-extrabold text-red-400 md:flex md:flex-col md:text-start md:leading-8 lg:text-[5dvw]'>
            A NOSOTROS?
          </p>
          <p className='w-[80%] text-center font-karla text-[3.5dvw] font-medium leading-3 text-blue-6 md:flex md:text-start md:text-12 md:leading-9 lg:pt-10'>
            Conéctate con profesionales ágiles de toda Latinoamérica, accede a
            recursos exclusivos, y participa en eventos y webinars que
            impulsarán tu crecimiento.{' '}
          </p>
          <p className='w-[80%] text-center font-karla font-bold leading-3 text-blue-6 md:text-start md:text-12 md:leading-9'>
            ¡Regístrate hoy y sé parte de nuestra transformación ágil!
          </p>
          <div className='mt-3 flex items-center justify-center'>
            <PrimaryButton className='w-[160px]' label='Beneficios' />
          </div>
        </div>
      </div>
    </div>
  )
}
