import ArrowUpRight from '@/assets/arrowUpright'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

interface Offert {
  id: string
  sponsorId: string
  status: string
  title: string
  discount: string
  validFrom: string
  validUntil: string
  description: string
  time: string
  place: string
  intendedFor: string
  link: string
  image: string
}

export default function OffertCard({
  title,
  discount,
  description,
  validFrom,
  validUntil,
  time,
  place,
  intendedFor,
  link,
  image
}: Offert) {
  const [expanded, setExpanded] = useState(false)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatUrl = (url: string) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `https://${url}`
  }

  const fromDate = formatDate(validFrom)
  const untilDate = formatDate(validUntil)
  const shortDescription =
    description.length > 200 ? description.slice(0, 200) + '...' : description

  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} flex w-full flex-col rounded-lg border border-[#E6EAF0] bg-white pb-3 shadow-[6px_8px_24px_0px_rgba(8,41,101,0.10)] transition-all duration-300`}
    >
      <div className='h-[200px] w-full overflow-hidden rounded-t-lg'>
        <Image
          className='w-full rounded-t-lg object-fill object-center shadow-[0px_25px_25px_rgba(0,0,0,0.10)]'
          src={image}
          alt={title}
          width={1000}
          height={200}
          style={{ height: '200px' }}
        />
      </div>
      <div className='flex flex-grow flex-col p-5'>
        <h1 className='pb-2 font-darker-grotesque text-[26px] font-darker-grotesque-600 leading-[30px] text-[#FE2E00]'>
          {title}
        </h1>
        <h2 className='pb-3 font-darker-grotesque text-[20px] font-darker-grotesque-600 leading-[24px] text-[#082965]'>
          {discount}
        </h2>
        <div
          className='mb-4 font-karla text-[16px] font-karla-300 text-[#082965]'
          dangerouslySetInnerHTML={{
            __html: expanded ? description : shortDescription
          }}
        />
        {!expanded && (
          <div className='flex justify-end'>
            <button
              className='flex items-center gap-1 font-semibold text-[#082965] hover:underline focus:outline-none'
              onClick={() => setExpanded(true)}
            >
              <ArrowUpRight className='h-4 w-4' />
              Saber más...
            </button>
          </div>
        )}
        {expanded && (
          <div className='animate-fadeInDown'>
            <div className='mt-2'>
              <div className='flex flex-row items-center'>
                <p className='py-1 font-darker-grotesque-600 text-[#082965] md:text-base'>
                  Fechas:
                </p>
                <p className='ml-1 text-[14px] font-karla-300 text-[#082965] md:text-base'>
                  {fromDate} - {untilDate}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='py-1 font-darker-grotesque-600 text-[#082965]'>
                  Hora:
                </p>
                <p className='ml-1 text-[14px] font-karla-300 text-[#082965] md:text-base'>
                  {time}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='py-1 font-darker-grotesque-600 text-[#082965]'>
                  Lugar:
                </p>
                <p className='ml-1 text-[14px] font-karla-300 text-[#082965] md:text-base'>
                  {place}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='py-1 font-darker-grotesque-600 text-[#082965]'>
                  Dirigido a:
                </p>
                <p className='ml-1 text-[14px] font-karla-300 text-[#082965] md:text-base'>
                  {intendedFor}
                </p>
              </div>
            </div>
            <div className='mt-4 flex flex-row items-center justify-between gap-4'>
              <a
                href={formatUrl(link)}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-lg font-bold text-[#082965] hover:underline'
              >
                Inscribirse ahora
                <ArrowUpRight className='text-[#082965]' />
              </a>
              <button
                className='flex items-center gap-1 font-semibold text-[#082965] hover:underline focus:outline-none'
                onClick={() => setExpanded(false)}
              >
                <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 15l-6-6-6 6'
                  />
                </svg>
                Ocultar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
