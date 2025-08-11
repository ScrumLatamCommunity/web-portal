'use client'

import { darkerGrotesque } from '@/fonts'
import Image from 'next/image'
import ImageTop from '@/assets/HistoryBannerTop.png'
import ImageBot from '@/assets/HistoryBannerBottom.png'
import React, { useState } from 'react'
import NewChevronLeft from '@/assets/NewChevronLeft'
import NewChevronRight from '@/assets/NewChevronRight'

export default function History() {
  const [currentCard, setCurrentCard] = useState(0)
  const cards = [
    {
      title: 'Misión',
      text: (
        <>
          <b>
            Impulsar el aprendizaje, la colaboración y la transformación ágil en
            Latinoamérica
          </b>
          , conectando personas que lideran el cambio desde su propósito, equipo
          u organización.
        </>
      )
    },
    {
      title: 'Visión',
      text: (
        <>
          <b>
            Ser la comunidad ágil más influyente y colaborativa de habla hispana
          </b>
          , que inspira, forma y empodera a profesionales para construir un
          futuro más humano, adaptativo y sostenible.
        </>
      )
    },
    {
      title: 'Propósito',
      text: (
        <>
          Inspirar y empoderar a personas y organizaciones en Latam a través de
          la <b>Agilidad</b> fomentando{' '}
          <b>aprendizaje continuo, colaboración y crecimiento</b>{' '}
          personal/profesional.
        </>
      )
    }
  ]

  const handlePrev = () => setCurrentCard((prev) => Math.max(prev - 1, 0))
  const handleNext = () =>
    setCurrentCard((prev) => Math.min(prev + 1, cards.length - 1))

  return (
    <div
      className={`${darkerGrotesque.variable} relative flex w-full max-w-[1980px] flex-col px-10 py-7 md:px-14 md:py-16`}
    >
      <section className='flex w-full flex-col items-center justify-center gap-8 md:px-10 2xl:px-20'>
        <h1 className='font-darker-grotesque text-[34px] font-bold text-[#FE2E00] md:mb-8 md:text-[42px]'>
          Nuestros Inicios
        </h1>
        <div className='flex flex-col gap-x-12 md:flex-row'>
          <div className='items-baseline rounded-lg border-[1.5px] border-[#d5dbe4] p-6 md:w-[50%] md:px-12 md:py-10'>
            <h1 className='flex font-darker-grotesque text-[26px] font-bold text-red-500 md:text-[28px]'>
              El Origen de Scrum Latam: Conectando Mentes Ágiles
            </h1>
            <p className='font-darker-grotesque text-[21px] text-blue-8 md:text-[24px]'>
              En enero de 2020, un grupo de entusiastas fundó{' '}
              <strong>Scrum Latam</strong>, comenzando como un simple grupo de
              WhatsApp. Durante la pandemia, crecimos rápidamente, evolucionando
              de encuentros semanales a{' '}
              <strong>webinars y charlas sobre metodologías ágiles.</strong>
            </p>
            <div className='md:mt-10'>
              <h1 className='mt-12 flex font-darker-grotesque text-[26px] font-bold text-red-500 md:mt-0'>
                Nuestra Filosofía y Expansión Global
              </h1>
              <p className='font-darker-grotesque text-[21px] text-blue-8'>
                En mayo de 2020, consolidamos un equipo internacional de
                delegados. Nuestra filosofía se basa en el{' '}
                <strong>
                  aprendizaje colaborativo, feedback profesional, trabajo en
                  equipo y transparencia.
                </strong>{' '}
                Hoy, conectamos a personas globalmente,
                <strong> transformando profesionales y organizaciones </strong>a
                través del intercambio de experiencias en agilidad.
              </p>
            </div>
          </div>
          <div className='mt-12 flex flex-col md:mt-0 md:w-[50%]'>
            <Image
              alt='history'
              className='h-[290px] w-[420px] rounded-t-2xl md:h-[270px] md:w-[700px]'
              width={1000}
              height={1000}
              src={ImageTop}
            />
            <Image
              alt='history'
              className='h-[290px] w-[420px] rounded-t-2xl md:h-[200px] md:w-[700px]'
              width={1000}
              height={1000}
              src={
                'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2Fimagenscrumlatam.png?alt=media&token=8cf7a6d6-c2aa-477c-bdee-ed6c0e0b95c7'
              }
            />
          </div>
        </div>
      </section>
      <section className='flex w-full flex-col items-center bg-white py-16'>
        <h2 className='mb-12 font-darker-grotesque text-[34px] font-bold text-[#FE2E00] md:mb-8 md:text-[42px]'>
          Quienes somos
        </h2>
        <div className='flex w-full items-center justify-center md:hidden'>
          <button
            onClick={handlePrev}
            disabled={currentCard === 0}
            className='p-2 text-[#082965]'
          >
            <NewChevronLeft className={currentCard === 0 ? 'opacity-30' : ''} />
          </button>
          <div className='mx-2 flex min-w-[270px] max-w-[370px] flex-1 flex-col items-center rounded-2xl border-[1.5px] border-[#d5dbe4] bg-white px-4 py-8 shadow-lg md:p-8'>
            <h3 className='mb-4 text-center text-xl font-bold text-[#FE2E00]'>
              {cards[currentCard].title}
            </h3>
            <p className='text-center text-[#082965]'>
              {cards[currentCard].text}
            </p>
          </div>
          <button
            onClick={handleNext}
            disabled={currentCard === cards.length - 1}
            className='p-2 text-[#082965]'
          >
            <NewChevronRight
              className={currentCard === cards.length - 1 ? 'opacity-30' : ''}
            />
          </button>
        </div>
        <div className='hidden w-full flex-col items-center gap-8 md:flex md:flex-row md:justify-center'>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className='flex h-[220px] max-w-[380px] flex-1 flex-col items-center rounded-2xl border-[1.5px] border-[#d5dbe4] bg-white px-4 py-8 shadow-lg md:p-8'
            >
              <h3 className='mb-4 text-center text-xl font-bold text-[#FE2E00]'>
                {card.title}
              </h3>
              <p className='text-center text-[#082965]'>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
