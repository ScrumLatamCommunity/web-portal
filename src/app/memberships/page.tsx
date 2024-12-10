'use client'
import Image from 'next/image'
import React from 'react'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import chat from './imgs/chat.png'
import sobre from './imgs/sobre.png'
import ideas from './imgs/ideas.png'
import meeting from './imgs/meeting.png'
import { darkerGrotesque, karla } from '@/fonts'
import { memberships } from '@/data/data'
import { benefits } from '@/data/data'

export default function Memberships() {
  return (
    <main className={`${darkerGrotesque.variable} ${karla.variable}`}>
      <section className='flex flex-col items-center pt-12 font-darker-grotesque md:pt-32'>
        <h1
          className={`pb-3 text-center text-[30px] font-darker-grotesque-700 md:mr-0 md:pb-6 md:text-[48px]`}
        >
          Nuestras Membresías
        </h1>
        <div className='absolute right-6 top-40 -z-[1] hidden h-[40dvw] w-[50dvw] rounded-full bg-red-300 opacity-20 blur-3xl md:block'></div>
        <h2
          className={`mb-12 h-[41px] w-[290px] text-center text-3 font-darker-grotesque-600 md:mb-40 md:mr-0 md:h-auto md:w-auto md:text-3xl`}
        >
          Únete a una comunidad especial y goza de multiples beneficios
        </h2>
        <div className='absolute -z-[1] hidden rounded-full bg-red-300 opacity-20 blur-3xl md:-bottom-[300px] md:left-8 md:block md:h-[30dvw] md:w-[20dvw]'></div>
        <div className='flex flex-col items-center gap-6 md:flex-row md:flex-wrap'>
          {memberships.map((membership, index) => {
            const isLeft = index === 0
            const isMiddle = index === Math.floor(memberships.length / 2)
            const isRight = index === memberships.length - 1
            return (
              <div
                key={membership.id}
                className={`${
                  isMiddle
                    ? 'md:-translate-y-12'
                    : isLeft
                      ? 'md:translate-y-0'
                      : isRight
                        ? 'md:translate-y-0'
                        : ''
                }`}
              >
                <Plans
                  title={membership.title}
                  price={membership.price}
                  description1={membership.description1}
                  description2={membership.description2}
                  description3={membership.description3}
                />
              </div>
            )
          })}
        </div>
        <div className='mt-20 flex flex-col items-center gap-6 md:mt-96 md:flex-row'>
          <div className='flex-fil mb-12 flex items-center gap-6 md:mx-20 md:flex-col'>
            <Image
              alt='ideas'
              className='h-[87px] w-[87px] md:mb-2 md:mt-8 md:h-[169px] md:w-[169px]'
              src={ideas}
            />
            <p className='w-[184px] text-[12px] font-darker-grotesque-600 md:w-[310px] md:text-[18px]'>
              Contribuye en proyectos colaborativos y ayúdanos a crecer, ya sea
              facilitando sesiones o moderando foros, lo cual además potenciará
              tu perfil de liderazgo.
            </p>
          </div>
          <div className='flex-fil mb-12 flex items-center gap-6 md:mx-20 md:flex-col'>
            <Image
              alt='sobre'
              className='h-[87px] w-[87px] md:h-[169px] md:w-[169px]'
              src={sobre}
            />
            <p className='w-[184px] text-[12px] font-darker-grotesque-600 md:w-[310px] md:text-[18px]'>
              Obtén un distintivo digital que demuestra tu pertenencia a la
              comunidad, el cual puedes compartir en redes profesionales como
              LinkedIn.
            </p>
          </div>
          <div className='flex-fil mb-12 flex items-center gap-6 md:mx-20 md:flex-col'>
            <Image
              alt='chat'
              className='h-[87px] w-[87px] md:h-[169px] md:w-[169px]'
              src={chat}
            />
            <p className='w-[184px] text-[12px] font-darker-grotesque-600 md:w-[310px] md:text-[18px]'>
              Asiste a reuniones virtuales, foros y sesiones de preguntas y
              respuestas donde podrás interactuar con expertos y otros miembros
              para resolver dudas.
            </p>
          </div>
        </div>
      </section>
      <section
        className={`flex-fil flex ${darkerGrotesque.variable} ${karla.variable} `}
      >
        <div className='absolute left-0 top-[2300px] -z-10 mt-72 flex h-[505.44px] w-screen skew-y-[-4.52deg] flex-col items-center bg-gradient-to-b from-[#FE2E00] to-[#FCFCFC] pt-44 opacity-80 md:top-[1800px]'></div>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='flex-1 md:order-last md:mr-10'>
            <div className='font-darker-grotesque'>
              <h1 className='mx-auto mt-40 w-full max-w-[283px] pb-6 text-center text-[32px] font-darker-grotesque-700 md:ml-0 md:mt-96 md:max-w-[620.02px] md:text-[48px]'>
                ¿Por qué unirse a nosotros?
              </h1>
            </div>
            <div className='font-karla'>
              <p className='mx-auto w-[330px] text-center text-[16px] font-karla-400 md:ml-0 md:w-[599px] md:max-w-[623px] md:text-[27px]'>
                Únete a Scrum Latam y transforma tu carrera junto a una
                comunidad que impulsa el cambio ágil en toda Latinoamérica. Aquí
                no solo aprendes frameworks; creces como líder, inspiras a
                otros, y eres parte de un movimiento que está revolucionando el
                trabajo en equipo y la entrega de valor. ¡Ven y marca la
                diferencia, donde cada interacción es una oportunidad para
                innovar y cada colaboración fortalece la agilidad de toda una
                región!
              </p>
            </div>
          </div>
          <div className='md:order-first md:ml-10 md:mr-40'>
            <Image
              alt='meeting'
              className='mx-auto mt-8 w-full max-w-[280.49px] rotate-[1.21deg] md:ml-0 md:mt-96 md:h-[422.37px] md:w-[564.23px] md:max-w-[564.23px]'
              src={meeting}
            />
          </div>
        </div>
      </section>
      <section className='mt-12 flex flex-col items-center md:mt-44'>
        <div className='font-darker-grotesque'>
          <h1 className='mx-auto mb-4 w-full max-w-[300px] pb-6 text-center text-[24px] font-darker-grotesque-700 md:mb-10 md:max-w-[620.02px] md:text-[48px]'>
            Nuestros Beneficios
          </h1>
        </div>
        <div className='mx-auto items-center font-darker-grotesque'>
          <div className='flex-fil mb-1 flex items-center gap-5 md:self-end'>
            <p className='ml-[172px] text-[15px] font-darker-grotesque-700 md:ml-[515px] md:text-[32px] md:font-darker-grotesque-700'>
              Gratuito
            </p>
            <p className='text-[15px] font-darker-grotesque-700 md:ml-[220px] md:text-[32px] md:font-darker-grotesque-700'>
              Flex
            </p>
            <p className='text-[15px] font-darker-grotesque-700 md:ml-[220px] md:mr-2 md:text-[32px] md:font-darker-grotesque-700'>
              Premium
            </p>
          </div>
          <div className='mb-32 flex flex-col md:mb-56'>
            {benefits.map((benefit) => (
              <Benefits
                key={benefit.id}
                text={benefit.text}
                checkFree={benefit.checkFree}
                checkFlex={benefit.checkFlex}
                checkPremium={benefit.checkPremium}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
