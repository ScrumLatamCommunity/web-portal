import React from 'react'
import DottedOrange from '@/assets/dottedOrange'
import { ProductServiceFeatureInterface } from '../../interfaces/productServiceFeatureInterface'
import InstagramIcon from '@/assets/instagramIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import FacebookIcon from '@/assets/FacebookIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import { flags } from '@/data/data'

export default function ProductServiceFeature({
  description,
  image,
  flag,
  linkTitle,
  title,
  highlights,
  socialUrls
}: ProductServiceFeatureInterface) {
  const flagData = flags.find((item) => item.name === flag)
  const flagUrl = flagData ? flagData.flag : ''
  return (
    <>
      {/* 💻 Versión MD y mayores */}
      <section className='relative hidden h-dvh flex-col justify-between bg-[#FFEAE6] pb-12 md:flex md:h-[467px] md:max-w-[1980px] md:flex-row md:pb-0'>
        <DottedOrange className='absolute bottom-0 right-0 h-[250px] w-[250px] translate-y-1/2 md:h-[400px] md:w-[300px]' />

        {/* 📷 Imagen + Redes Sociales */}
        <div className='relative flex h-full flex-col items-center justify-between md:mx-14 md:mt-10 md:justify-center md:pl-14'>
          <div className='flex h-[250px] w-[250px] items-center justify-center'>
            <img
              alt={title}
              className='h-full w-full object-fill'
              src={image}
            />
          </div>

          {/* 🔗 Redes Sociales */}
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
                <FacebookIcon
                  className='text-[#345081]'
                  height={24}
                  width={24}
                />
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
                <LinkedInIcon
                  className='text-[#FE2E00]'
                  height={24}
                  width={24}
                />
              </a>
            )}
            {socialUrls?.phone && (
              <a href={`tel:${socialUrls.phone}`} title='Phone'>
                <PhoneIcon className='text-[#FE2E00]' height={24} width={24} />
              </a>
            )}
          </div>
        </div>

        {/* 📝 Contenido principal */}
        <div className='relative mx-6 flex h-full flex-1 flex-col md:mx-10 md:my-6 md:justify-between md:pl-4 md:pr-20'>
          <div className='mt-4 flex items-center gap-2'>
            <h1 className='font-darker-grotesque font-bold tracking-wide text-[#082965] md:text-[48px]'>
              {title}
            </h1>
            <img src={flagUrl} alt='Flag' className='h-6 w-8 md:h-8 md:w-10' />
          </div>

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

          <p className='mt-4 flex-grow font-karla text-lg leading-7 text-[#061D48] md:text-[25px]'>
            {description}
          </p>

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

      {/* 📱 Versión móvil (pantallas pequeñas) */}
      <section className='relative grid grid-cols-4 gap-4 bg-[#FFEAE6] p-6 shadow-lg md:hidden'>
        {/* 📷 Primera columna (1/4) - Imagen */}
        <div className='col-span-1 flex items-start justify-center'>
          <div className='flex h-[80px] w-[80px] items-start justify-center'>
            {image ? (
              React.isValidElement(image) ? (
                React.cloneElement(image as React.ReactElement, {
                  className: 'h-[80px] w-[80px] object-cover'
                })
              ) : typeof image === 'string' ? (
                <img
                  src={image}
                  alt='Product'
                  className='h-[80px] w-[80px] object-cover'
                />
              ) : (
                <p className='text-red-500'>Invalid Image</p>
              )
            ) : (
              <p className='text-red-500'>No image available</p>
            )}
          </div>
        </div>

        {/* 📝 Segunda columna (3/4) - Contenido */}
        <div className='col-span-3 flex flex-col justify-start pr-4'>
          <h1 className='inline font-darker-grotesque text-[35px] font-bold leading-tight text-[#061D48]'>
            {title}
            <span className='ml-2 inline-block align-baseline'>
              <img src={flag} alt='Flag' className='h-6 w-6' />
            </span>
          </h1>

          {/* 📌 Destacados */}
          <ul className='mt-2 flex flex-col gap-2 text-[12px] text-[#061D48]'>
            {highlights.map((highlight, index) => (
              <li key={index} className='font-roboto text-[#061D48]'>
                {highlight}
              </li>
            ))}
          </ul>

          {/* 🔗 Redes Sociales */}
          <div className='my-4 flex justify-start space-x-2 text-xl'>
            {socialUrls?.email && (
              <a href={`mailto:${socialUrls.email}`} title='Email'>
                <GlobeIcon className='text-[#FE2E00]' height={20} width={20} />
              </a>
            )}
            {socialUrls?.website && (
              <a href={socialUrls.website} title='Website'>
                <GlobeIcon className='text-[#FE2E00]' height={20} width={20} />
              </a>
            )}
            {socialUrls?.facebook && (
              <a href={socialUrls.facebook} title='Facebook'>
                <FacebookIcon
                  className='text-[#345081]'
                  height={20}
                  width={20}
                />
              </a>
            )}
            {socialUrls?.instagram && (
              <a href={socialUrls.instagram} title='Instagram'>
                <InstagramIcon
                  className='text-[#345081]'
                  height={20}
                  width={20}
                />
              </a>
            )}
            {socialUrls?.linkedin && (
              <a href={socialUrls.linkedin} title='LinkedIn'>
                <LinkedInIcon
                  className='text-[#FE2E00]'
                  height={20}
                  width={20}
                />
              </a>
            )}
            {socialUrls?.phone && (
              <a href={`tel:${socialUrls.phone}`} title='Phone'>
                <PhoneIcon className='text-[#FE2E00]' height={20} width={20} />
              </a>
            )}
          </div>

          {/* 📜 Descripción */}
          <p className='mt-2 font-karla text-[12px] text-[#061D48]'>
            {description}
          </p>

          {/* 🔘 Botón */}
          <div className='mt-4 flex justify-end'>
            <a
              href='#SQUAD'
              className='rounded-2xl bg-[#FE2E00] px-6 py-2 text-white'
            >
              {linkTitle}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
