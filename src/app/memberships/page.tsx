'use client'
import Image from 'next/image'
import React from 'react'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import chat from './imgs/chat.png'
import sobre from './imgs/sobre.png'
import ideas from './imgs/ideas.png'
import meeting from './imgs/meeting.png'
import { memberships } from '@/data/data'
import { benefits } from '@/data/data'

export default function Memberships() {
  return (
    <>
      <section className='flex flex-col items-center pt-12 md:pt-32'>
        <h1 className='pb-3 text-center text-16 text-3xl font-darker-grotesque-4 md:pb-6 md:text-4xl lg:text-5xl'>
          Nuestras Membresías
        </h1>
        <div
          style={{
            zIndex: '-1',
          }}
          className='absolute right-6 top-40 z-10 hidden h-[40dvw] w-[50dvw] rounded-full bg-red-300 opacity-20 blur-3xl md:block'
        ></div>
        <h2 className='font-darker-grotesque-2 mx-auto mb-12 h-[41px] w-[290px] text-center text-3 md:mb-40 md:h-auto md:w-auto md:text-3xl'>
          Únete a una comunidad especial y goza de multiples beneficios
        </h2>
        <div
          style={{
            zIndex: '-1',
            bottom: '-300px',
          }}
          className='absolute -bottom-0 left-8 z-20 hidden h-[30dvw] w-[20dvw] rounded-full bg-red-300 opacity-20 blur-3xl md:block'
        ></div>
        <div className='flex flex-col justify-center gap-6 md:flex-row md:flex-wrap'>
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
                      ? 'md:translate-y-10'
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
              className='h-[87px] w-[87px] md:h-[169px] md:w-[169px]'
              src={ideas}
              alt='ideas'
            />
            <p className='font-darker-grotesque-2 w-[184px] text-[12px] md:w-[310px] md:text-[18px]'>
              Contribuye en proyectos colaborativos y ayúdanos a crecer, ya sea
              facilitando sesiones o moderando foros, lo cual además potenciará
              tu perfil de liderazgo.
            </p>
          </div>
          <div className='flex-fil font-darker-grotesque-2 mb-12 flex items-center gap-6 md:mx-20 md:flex-col'>
            <Image
              className='h-[87px] w-[87px] md:h-[169px] md:w-[169px]'
              src={sobre}
              alt='sobre'
            />
            <p className='w-[184px] text-[12px] md:w-[310px] md:text-[18px]'>
              Obtén un distintivo digital que demuestra tu pertenencia a la
              comunidad, el cual puedes compartir en redes profesionales como
              LinkedIn.
            </p>
          </div>
          <div className='flex-fil font-darker-grotesque-2 mb-12 flex items-center gap-6 md:mx-20 md:flex-col'>
            <Image
              className='h-[87px] w-[87px] md:h-[169px] md:w-[169px]'
              src={chat}
              alt='chat'
            />
            <p className='w-[184px] text-[12px] md:w-[310px] md:text-[18px]'>
              Asiste a reuniones virtuales, foros y sesiones de preguntas y
              respuestas donde podrás interactuar con expertos y otros miembros
              para resolver dudas.
            </p>
          </div>
        </div>
      </section>
      <section className='flex-fil flex'>
        <div
          style={{
            background: 'linear-gradient(180deg, #FE2E00, #FCFCFC)',
            opacity: '0.8',
            transform: 'skewY(-4.52deg)',
            position: 'absolute',
            left: 0,
            height: '505.44px',
            zIndex: -1,
          }}
          className='top-[2300px] mt-72 flex w-screen flex-col items-center pt-44 md:top-[1800px]'
        ></div>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='flex-1 md:order-last md:mr-10'>
            <h1 className='mx-auto mt-40 w-full max-w-[283px] pb-6 text-center text-[32px] font-darker-grotesque-4 md:ml-0 md:mt-96 md:max-w-[620.02px] md:text-[48px]'>
              ¿Por qué unirse a nosotros?
            </h1>
            <p className='font-darker-grotesque-2 mx-auto w-[330px] text-center text-[16px] md:ml-0 md:w-[623px] md:max-w-[623px] md:text-[29px]'>
              Únete a Scrum Latam y transforma tu carrera junto a una comunidad
              que impulsa el cambio ágil en toda Latinoamérica. Aquí no solo
              aprendes frameworks; creces como líder, inspiras a otros, y eres
              parte de un movimiento que está revolucionando el trabajo en
              equipo y la entrega de valor. ¡Ven y marca la diferencia, donde
              cada interacción es una oportunidad para innovar y cada
              colaboración fortalece la agilidad de toda una región!
            </p>
          </div>
          <div className='md:order-first md:ml-10 md:mr-40'>
            <Image
              className='mx-auto ml-12 mt-8 w-full max-w-[280.49px] md:ml-0 md:mt-96 md:h-[422.37px] md:w-[564.23px] md:max-w-[564.23px]'
              style={{
                transform: 'rotate(1.21deg)',
              }}
              src={meeting}
              alt='meeting'
            />
          </div>
        </div>
      </section>
      <section className='mt-44 flex flex-col items-center'>
        <h1 className='mx-auto mb-10 w-full max-w-[300px] pb-6 text-center text-[24px] font-darker-grotesque-4 md:max-w-[620.02px] md:text-[48px]'>
          Nuestros Beneficios
        </h1>
        <div className='flex-fil mb-1 flex items-center gap-5 md:self-end'>
          <p className='ml-40 text-[14px] font-darker-grotesque-4 md:text-[29px]'>
            Gratuito
          </p>
          <p className='text-[14px] font-darker-grotesque-4 md:ml-52 md:text-[29px]'>
            Flex
          </p>
          <p className='text-[14px] font-darker-grotesque-4 md:ml-52 md:mr-16 md:text-[29px]'>
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
      </section>
    </>
  )
}
