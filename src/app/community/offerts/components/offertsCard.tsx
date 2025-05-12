import ArrowUpRight from '@/assets/arrowUpright'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'
import React from 'react'
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
  // Formato de fechas
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

  // Fechas formateadas
  const fromDate = formatDate(validFrom)
  const untilDate = formatDate(validUntil)

  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} flex h-full w-[85%] flex-col rounded-lg bg-white pb-3 shadow-md md:w-[80%]`}
    >
      <div className='h-[200px] w-full overflow-hidden rounded-t-lg'>
        <Image
          className='w-full rounded-t-lg object-cover object-center shadow-[0px_25px_25px_rgba(0,0,0,0.10)]'
          src={image}
          alt={title}
          width={1000}
          height={200}
          style={{ height: '200px' }}
        />
      </div>
      <div className='flex flex-grow flex-col p-5'>
        <h1 className='pb-2 font-darker-grotesque text-[26px] font-darker-grotesque-700 leading-[30px] text-[#082965]'>
          {title}
        </h1>
        <h2 className='pb-3 font-darker-grotesque text-[20px] font-darker-grotesque-700 leading-[24px] text-[#082965]'>
          {discount}
        </h2>
        <div
          className='mb-4 font-karla text-[16px] font-karla-400 text-[#082965]'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className='mt-auto'>
          <p className='py-1 text-[#082965]'>
            <strong>Fechas:</strong> {fromDate} - {untilDate}
          </p>
          <p className='py-1 text-[#082965]'>
            <strong>Hora:</strong> {time}
          </p>
          <p className='py-1 text-[#082965]'>
            <strong>Lugar:</strong> {place}
          </p>
          <p className='py-1 text-[#082965]'>
            <strong>Dirigido a:</strong> {intendedFor}
          </p>
          <Link
            href={formatUrl(link)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='mt-4 flex flex-row items-center'>
              <ArrowUpRight className='text-[#082965]' />
              <button className='pb-2 font-darker-grotesque text-[24px] font-darker-grotesque-600 text-[#082965] hover:underline'>
                Inscribirse ahora
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
