'use client'
import { PrimaryButton } from '@/core/PrimaryButton'
import { images, vectors } from '@/data/images_url'
import useIsLargeScreen from '@/hooks'

export const JoinOurCommunity = () => {
  const isLargeScreen = useIsLargeScreen(768)

  const vectorligth = isLargeScreen
    ? vectors.vectorDesktopJoin2
    : vectors.vector_horizontal2
  const vectorDark = isLargeScreen
    ? vectors.vectorDesktopJoin1
    : vectors.vector_horizontal1

  return (
    <div className='relative m-auto flex max-w-screen-2xl flex-col items-center px-12 pb-9'>
      <div className='z-0 flex flex-col items-center overflow-hidden rounded-xl bg-black-4 shadow-xl md:flex-row-reverse'>
        <picture className='relative'>
          <img
            className='absolute -bottom-[.59rem] left-[-3.5%] top-[-7.5%] -z-10'
            src={vectorligth}
            alt=''
          />
          <img
            className='absolute -bottom-[1.4rem] left-[-3.5%] top-0 -z-10 w-[33.85vw]'
            src={vectorDark}
            alt=''
          />
          <img
            alt='Join Us'
            className='relative z-20 w-fit'
            src={
              isLargeScreen
                ? images.joinSectionDesktop
                : images.joinSectionMobile
            }
          />
        </picture>
        <div className='m-0 flex flex-col items-center gap-[2vw] bg-transparent pb-10 pt-[2rem] md:items-start md:pl-[4rem]'>
          <h3 className='m-0 text-center font-darker-grotesque text-[6dvw] font-extrabold leading-8 text-blue-6'>
            ¿POR QUÉ UNIRSE <p className='m-0 text-red-400'>A NOSOTROS?</p>
          </h3>
          <p className='w-[80%] text-center font-karla text-[3.5dvw] font-medium leading-3 text-blue-6'>
            Conéctate con profesionales ágiles de toda Latinoamérica, accede a
            recursos exclusivos, y participa en eventos y webinars que
            impulsarán tu crecimiento.{' '}
          </p>
          <p className='w-[80%] text-center font-karla font-bold leading-3 text-blue-6'>
            ¡Regístrate hoy y sé parte de nuestra transformación ágil!
          </p>
          <div className='mt-3'>
            <PrimaryButton label='Beneficios' />
          </div>
        </div>
      </div>
    </div>
  )
}
