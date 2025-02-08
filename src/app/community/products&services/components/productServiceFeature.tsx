import React from 'react'
import DottedOrange from '@/assets/dottedOrange'
import { ProductServiceFeatureInterface } from '../../interfaces/productServiceFeatureInterface'
import InstagramIcon from '@/assets/instagramIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import FacebookIcon from '@/assets/FacebookIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import PhoneIcon from '@/assets/PhoneIcon'

export default function ProductServiceFeature({
  description,
  image,
  flag,
  linkTitle,
  title,
  highlights,
  socialUrls
}: ProductServiceFeatureInterface) {
  return (
    <section className='relative flex h-dvh flex-col justify-between bg-[#FFEAE6] pb-12 md:h-[467px] md:max-w-[1980px] md:flex-row md:pb-0'>
      <DottedOrange className='absolute bottom-0 right-0 h-[250px] w-[250px] translate-y-1/2 md:h-[400px] md:w-[300px]' />

      {/* Imagen + Iconos de Redes Sociales */}
      <div className='relative flex h-full flex-col items-center justify-between md:mx-14 md:mt-10 md:justify-center md:pl-14'>
        <div className='flex h-[250px] w-[250px] items-center justify-center'>
          {React.cloneElement(image as React.ReactElement, {
            className: 'h-full w-full'
          })}
        </div>

        {/* Redes Sociales - Pegados abajo */}
        <div className='mb-10 mt-auto flex space-x-4 pb-10 text-2xl'>
          {socialUrls?.email && (
            <a href={`mailto:${socialUrls.email}`} title='Email'>
              <GlobeIcon className='text-[#FE2E00]' height={24} width={24} />
            </a>
          )}
          {socialUrls?.website && (
            <a href={socialUrls.website} title='Website'>
              <GlobeIcon className='text-[#FE2E00]' height={24} width={24} />
            </a>
          )}
          {socialUrls?.facebook && (
            <a href={socialUrls.facebook} title='Facebook'>
              <FacebookIcon className='text-[#345081]' height={24} width={24} />
            </a>
          )}
          {socialUrls?.instagram && (
            <a href={socialUrls.instagram} title='Instagram'>
              <InstagramIcon
                className='text-[#345081]'
                height={24}
                width={24}
              />
            </a>
          )}
          {socialUrls?.linkedin && (
            <a href={socialUrls.linkedin} title='LinkedIn'>
              <LinkedInIcon className='text-[#FE2E00]' height={24} width={24} />
            </a>
          )}
          {socialUrls?.phone && (
            <a href={`tel:${socialUrls.phone}`} title='Phone'>
              <PhoneIcon className='text-[#FE2E00]' height={24} width={24} />
            </a>
          )}
        </div>
      </div>

      {/* Contenido principal con botón al fondo */}
      <div className='relative mx-6 flex h-full flex-1 flex-col md:mx-10 md:my-6 md:justify-between md:pl-4 md:pr-20'>
        {/* Título + Bandera en la misma fila */}
        <div className='mt-4 flex items-center gap-2'>
          <h1 className='font-darker-grotesque font-bold tracking-wide text-[#082965] md:text-[48px]'>
            {title}
          </h1>
          <img src={flag} alt='Flag' className='h-6 w-8 md:h-8 md:w-10' />
        </div>

        {/* Lista de destacados */}
        <ul className='mt-2 flex flex-wrap gap-4 text-lg text-[#061D48] md:text-2xl'>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className='font-roboto text-[#082965] md:text-[20px]'
            >
              {highlight}
            </li>
          ))}
        </ul>

        {/* Descripción */}
        <p className='mt-4 flex-grow font-karla text-lg leading-7 text-[#061D48] md:text-[25px]'>
          {description}
        </p>

        {/* Botón - Pegado completamente al fondo */}
        <div className='absolute bottom-8 left-0 flex w-full justify-end p-4 md:pt-4'>
          <a
            href='#SQUAD'
            className='rounded-2xl bg-[#FE2E00] px-10 py-3 font-darker-grotesque text-lg text-[#FFFFFF]'
          >
            {linkTitle}
          </a>
        </div>
      </div>
    </section>
  )
}
