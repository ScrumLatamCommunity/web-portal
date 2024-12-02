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
      <section className='flex flex-col items-center pt-32'>
        <h1
          style={{
            fontSize: '48px',
          }}
          className='pb-6 text-16 font-darker-grotesque-4'
        >
          Nuestras Membresías
        </h1>
        <div
          style={{
            zIndex: '-1',
          }}
          className='absolute right-6 top-40 z-10 hidden h-[40dvw] w-[50dvw] rounded-full bg-red-300 opacity-20 blur-3xl md:block'
        ></div>
        <h2
          style={{
            fontSize: '30px',
          }}
          className='font-darker-grotesque-2 mb-40 text-10'
        >
          Únete a una comunidad especial y goza de multiples beneficios
        </h2>
        <div
          style={{
            zIndex: '-1',
            bottom: '-300px',
          }}
          className='absolute -bottom-0 left-8 z-20 hidden h-[30dvw] w-[20dvw] rounded-full bg-red-300 opacity-20 blur-3xl md:block'
        ></div>
        <div className='flex flex-wrap justify-center gap-6'>
          {memberships.map((membership, index) => {
            const isLeft = index === 0
            const isMiddle = index === Math.floor(memberships.length / 2)
            const isRight = index === memberships.length - 1
            return (
              <div
                key={membership.id}
                style={{
                  transform: isMiddle
                    ? 'translateY(-50px)'
                    : isLeft
                      ? 'translateY(40px)'
                      : isRight
                        ? 'translateY(0px)'
                        : 'none',
                }}
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
        <div className='flex-fil mt-96 flex gap-6'>
          <div className='mx-20 flex flex-col items-center gap-6'>
            <Image src={ideas} alt='ideas' width={185} height={169} />
            <p
              style={{
                width: '310px',
                fontSize: '18px',
              }}
            >
              Contribuye en proyectos colaborativos y ayúdanos a crecer, ya sea
              facilitando sesiones o moderando foros, lo cual además potenciará
              tu perfil de liderazgo.
            </p>
          </div>
          <div className='mx-20 flex flex-col items-center gap-6'>
            <Image src={sobre} alt='sobre' width={169} height={169} />
            <p
              style={{
                width: '310px',
                fontSize: '18px',
              }}
            >
              Obtén un distintivo digital que demuestra tu pertenencia a la
              comunidad, el cual puedes compartir en redes profesionales como
              LinkedIn.
            </p>
          </div>
          <div className='mx-20 flex flex-col items-center gap-6'>
            <Image src={chat} alt='chat' width={169} height={169} />
            <p
              style={{
                width: '310px',
                fontSize: '18px',
              }}
            >
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
            top: 1800,
            left: 0,
            height: '505.44px',
            zIndex: -1,
          }}
          className='mt-72 flex w-screen flex-col items-center pt-44'
        ></div>
        <Image
          className='mt-96'
          style={{
            transform: 'rotate(1.21deg)',
          }}
          src={meeting}
          alt='meeting'
          width={564.23}
          height={422.37}
        />
        <div>
          <h1
            style={{
              fontSize: '48px',
            }}
            className='ml-96 mt-96 pb-6 text-16 font-darker-grotesque-4'
          >
            ¿Por qué unirse a nosotros?
          </h1>
          <p
            style={{
              fontSize: '29px',
              width: '620px',
              textAlign: 'center',
            }}
            className='font-darker-grotesque-2 ml-96 text-10'
          >
            Únete a Scrum Latam y transforma tu carrera junto a una comunidad
            que impulsa el cambio ágil en toda Latinoamérica. Aquí no solo
            aprendes frameworks; creces como líder, inspiras a otros, y eres
            parte de un movimiento que está revolucionando el trabajo en equipo
            y la entrega de valor. ¡Ven y marca la diferencia, donde cada
            interacción es una oportunidad para innovar y cada colaboración
            fortalece la agilidad de toda una región!
          </p>
        </div>
      </section>
      <section className='mt-44 flex flex-col items-center'>
        <h1
          style={{
            fontSize: '48px',
          }}
          className='mb-10 pb-6 text-16 font-darker-grotesque-4'
        >
          Nuestros Beneficios
        </h1>
        <div className='flex-fil flex self-end'>
          <p
            style={{
              fontSize: '29px',
            }}
            className='text-10 font-darker-grotesque-4'
          >
            Gratuito
          </p>
          <p
            style={{
              fontSize: '29px',
            }}
            className='ml-56 text-10 font-darker-grotesque-4'
          >
            Flex
          </p>
          <p
            style={{
              fontSize: '29px',
            }}
            className='ml-60 mr-40 text-10 font-darker-grotesque-4'
          >
            Premium
          </p>
        </div>
        <div className='mb-56 flex flex-col'>
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
