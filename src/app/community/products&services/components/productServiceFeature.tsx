import React from 'react'
import { ProductServiceFeatureInterface } from '../../interfaces/productServiceFeatureInterface'
import InstagramIcon from '@/assets/instagramIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import FacebookIcon from '@/assets/FacebookIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import MailIcon from '@/assets/MailIcon'
import { flags } from '@/data/data'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import Image from 'next/image'

export default function ProductServiceFeature({
  sponsorId,
  description,
  image,
  flag,
  title,
  highlights,
  socialUrls
}: ProductServiceFeatureInterface) {
  const { setSelectedSponsorId } = useAuth()
  const flagData = flags.find((item) => item.name === flag)
  const flagUrl = flagData ? flagData.flag : ''
  const router = useRouter()

  const handleClick = () => {
    if (sponsorId) {
      setSelectedSponsorId(sponsorId)
      router.push(`/community/offerts/${sponsorId}`)
    }
  }

  return (
    <>
      {/* 💻 Versión MD y mayores */}
      <section className='hidden justify-between bg-[#FFEAE6] px-16 py-14 md:flex md:max-w-[1980px]'>
        {/* 📷 Imagen + Redes Sociales */}
        <div className='flex h-full min-h-80 w-1/3 flex-col items-center justify-between'>
          <div className='flex h-[200px] w-[200px] place-content-center items-center justify-center rounded-full bg-white'>
            <Image alt={title} height={176} src={image} width={176} />
          </div>

          {/* 🔗 Redes Sociales */}
          <div className='flex space-x-4 text-2xl'>
            {socialUrls?.email && (
              <a href={`mailto:${socialUrls.email}`} title='Email'>
                <MailIcon className='text-[#FE2E00]' height={24} width={24} />
              </a>
            )}
            {socialUrls?.website && (
              <a href={socialUrls.website} title='Website'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <GlobeIcon
                    className='text-[#FE2E00]'
                    height={24}
                    width={24}
                  />
                </div>
              </a>
            )}
            {socialUrls?.facebook && (
              <a href={socialUrls.facebook} title='Facebook'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <FacebookIcon
                    className='text-[#345081]'
                    height={24}
                    width={24}
                  />
                </div>
              </a>
            )}
            {socialUrls?.instagram && (
              <a href={socialUrls.instagram} title='Instagram'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <InstagramIcon
                    className='text-[#345081]'
                    height={24}
                    width={24}
                  />
                </div>
              </a>
            )}
            {socialUrls?.linkedin && (
              <a href={socialUrls.linkedin} title='LinkedIn'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <LinkedInIcon
                    className='text-[#FE2E00]'
                    height={24}
                    width={24}
                  />
                </div>
              </a>
            )}
            {socialUrls?.phone && (
              <a href={`tel:${socialUrls.phone}`} title='Phone'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <PhoneIcon
                    className='text-[#FE2E00]'
                    height={24}
                    width={24}
                  />
                </div>
              </a>
            )}
          </div>
        </div>

        {/* 📝 Contenido principal */}
        <div className='relative mx-6 flex min-h-80 w-2/3 flex-1 flex-col justify-between'>
          <div className='flex flex-col pb-12'>
            <div className='mt-4 flex items-center gap-4'>
              <h1 className='font-darker-grotesque font-bold tracking-wide text-[#082965] md:text-[48px]'>
                {title}
              </h1>
              <img
                src={flagUrl}
                alt='Flag'
                className='h-6 w-8 md:h-8 md:w-10'
              />
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
          </div>

          <div className='flex w-full items-end justify-end'>
            <button
              onClick={handleClick}
              className='rounded-2xl bg-[#FE2E00] px-10 py-3 font-darker-grotesque text-lg text-[#FFFFFF]'
            >
              Conocer Ofertas
            </button>
          </div>
        </div>
      </section>

      {/* 📱 Versión móvil (pantallas pequeñas) */}
      <section className='relative mb-16 grid grid-cols-4 gap-4 bg-[#FFEAE6] p-6 shadow-lg md:hidden'>
        {/* 📷 Primera columna (1/4) - Imagen */}
        <div className='col-span-1 flex items-start justify-center'>
          <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white'>
            {image ? (
              React.isValidElement(image) ? (
                React.cloneElement(image as React.ReactElement, {
                  className: 'object-cover'
                })
              ) : typeof image === 'string' ? (
                <img src={image} alt='Product' className='object-cover' />
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
              <img src={flagUrl} alt='Flag' className='h-6 w-6' />
            </span>
          </h1>

          {/* 📌 Destacados */}
          <ul className='mt-2 flex flex-col gap-2 text-[12px] text-[#061D48]'>
            {highlights.map((highlight, index) => (
              <li key={index} className='font-roboto text-0 text-[#061D48]'>
                {highlight}
              </li>
            ))}
          </ul>

          {/* 🔗 Redes Sociales */}
          <div className='my-4 flex justify-start space-x-2 text-xl'>
            {socialUrls?.email && (
              <a href={`mailto:${socialUrls.email}`} title='Email'>
                <div className='h-8 w-8 rounded-2xl bg-white'>
                  <MailIcon className='text-[#FE2E00]' height={20} width={20} />
                </div>
              </a>
            )}
            {socialUrls?.website && (
              <a href={socialUrls.website} title='Website'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <GlobeIcon
                    className='text-[#FE2E00]'
                    height={20}
                    width={20}
                  />
                </div>
              </a>
            )}
            {socialUrls?.facebook && (
              <a href={socialUrls.facebook} title='Facebook'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <FacebookIcon
                    className='text-[#345081]'
                    height={20}
                    width={20}
                  />
                </div>
              </a>
            )}
            {socialUrls?.instagram && (
              <a href={socialUrls.instagram} title='Instagram'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <InstagramIcon
                    className='text-[#345081]'
                    height={20}
                    width={20}
                  />
                </div>
              </a>
            )}
            {socialUrls?.linkedin && (
              <a href={socialUrls.linkedin} title='LinkedIn'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <LinkedInIcon
                    className='text-[#FE2E00]'
                    height={20}
                    width={20}
                  />
                </div>
              </a>
            )}
            {socialUrls?.phone && (
              <a href={`tel:${socialUrls.phone}`} title='Phone'>
                <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-white'>
                  <PhoneIcon
                    className='text-[#FE2E00]'
                    height={20}
                    width={20}
                  />
                </div>
              </a>
            )}
          </div>

          {/* 📜 Descripción */}
          <p className='mt-2 font-karla text-[12px] text-[#061D48]'>
            {description}
          </p>

          {/* 🔘 Botón */}
          <div className='w-30 mt-4 flex h-8 items-center justify-end'>
            <a
              href='#SQUAD'
              className='rounded-xl bg-[#FE2E00] px-6 py-2 text-2 text-white'
            >
              Conocer Ofertas
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
