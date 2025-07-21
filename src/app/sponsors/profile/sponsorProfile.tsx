'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import InstagramIconSponsors from '@/assets/InstagramIconSponsors'
import FacebookIcon from '@/assets/FacebookIcon'
import XIcon from '@/assets/twitter-x'
import YoutubeIcon from '@/assets/YoutubeIcon'
import EditSponsorProfile from '../components/editSponsorProfile'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from '../components/Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { SponsorData } from '@/interfaces'
import { Calendar, ChevronDown, Edit2, X } from 'react-feather'

export default function SponsorProfile() {
  const { user, token } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [sponsorData, setSponsorData] = useState<SponsorData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No hay fecha de ingreso'
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const cleanHtml = (html?: string) => {
    if (!html) return ''
    const doc = new DOMParser().parseFromString(html, 'text/html')
    const cleanText = doc.body.textContent || ''
    return cleanText
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/[)(/)]/g, '')
      .trim()
  }

  const fetchSponsorData = async () => {
    setIsLoading(true)
    try {
      if (!user?.sub || !token) {
        setError('No hay información de usuario disponible')
        return
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/user/${user.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }
      const data = await response.json()
      setSponsorData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSponsorData()
  }, [user, token])

  const handleEditComplete = () => {
    setIsEditing(false)
  }

  const ImageWithFallback = ({
    src,
    alt,
    className
  }: {
    src: string | undefined
    alt: string
    className: string
  }) => {
    if (isLoading) return <Skeleton className={className} />
    if (!src)
      return (
        <div
          className={`${className} flex items-center justify-center bg-gray-100`}
        >
          <span className='text-gray-400'>Sin imagen</span>
        </div>
      )
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={100}
        height={100}
        unoptimized
      />
    )
  }

  const getSocialIcon = (url: string) => {
    if (url.includes('linkedin'))
      return <LinkedInIcon className='text-[#082965]' width={24} height={24} />
    if (url.includes('instagram'))
      return (
        <InstagramIconSponsors
          className='text-[#082965]'
          width={24}
          height={24}
        />
      )
    if (url.includes('facebook'))
      return <FacebookIcon className='text-[#082965]' width={24} height={24} />
    if (url.includes('x.com'))
      return <XIcon className='text-[#082965]' width={24} height={24} />
    if (url.includes('youtube'))
      return <YoutubeIcon className='stroke-[#082965]' width={24} height={24} />
    return <span className='h-[24px] w-[24px] rounded-full bg-[#ccc]' />
  }

  if (error) return <div className='p-4 text-red-500'>Error: {error}</div>
  if (isEditing && sponsorData) {
    return (
      <EditSponsorProfile
        onEditComplete={handleEditComplete}
        sponsorData={sponsorData}
        onUpdate={fetchSponsorData}
      />
    )
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mx-auto max-w-md px-4 pb-16 pt-6 lg:max-w-5xl`}
    >
      <h1 className='text-center text-3xl font-bold text-[#FE2E00]'>
        Mi Perfil Sponsor
      </h1>
      <button
        onClick={() => setIsEditing(true)}
        className='mx-auto my-2 flex flex-row items-center text-lg text-[#FE2E00] underline'
      >
        <Edit2 className='mx-2' /> Editar perfil
      </button>

      <div className='my-4 flex justify-center'>
        <ImageWithFallback
          src={sponsorData?.logo}
          alt='logo'
          className='h-56 w-96 object-contain'
        />
      </div>
      <div className='flex flex-col items-start gap-3 lg:pl-10'>
        <label className='text-xl font-bold text-[#FE2E00]' htmlFor='title'>
          Información general
        </label>
        <div className='flex flex-col gap-3 lg:flex-row lg:flex-wrap'>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Nombre de la empresa
            </label>
            <input
              type='text'
              value={sponsorData?.companyName}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 text-[14px] font-medium text-[#8C8C8C] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
            />
          </div>
          <div className='flex w-full flex-col lg:w-[300px]'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              País
            </label>
            <div className='relative mt-1 flex h-[44px] w-full items-center rounded-[10px] border border-[#C1CCF4] bg-transparent px-3 lg:mt-0 lg:w-[300px]'>
              {sponsorData?.user?.country?.length ? (
                <>
                  <Image
                    src={getCountryFlag(sponsorData.user.country[0])}
                    alt='flag'
                    width={28}
                    height={20}
                    className='mr-2 h-[20px] w-[28px] rounded-[3px] object-cover'
                  />
                  <span className='flex-1 text-[14px] font-medium text-[#8C8C8C]'>
                    {sponsorData.user.country.join(', ')}
                  </span>
                </>
              ) : (
                <span className='flex-1 text-[14px] font-medium text-[#8C8C8C]'>
                  No hay país
                </span>
              )}
              <ChevronDown size={18} className='text-[#9CA3AF]' />
            </div>
          </div>
          <div>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Fecha de inicio
            </label>
            <div className='relative w-full lg:w-[300px]'>
              <Calendar
                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'
                size={25}
              />
              <input
                type='text'
                value={formatDate(sponsorData?.createdAt)}
                readOnly
                className='h-[44px] w-full rounded-md border border-gray-300 bg-transparent pl-5 pr-3 text-sm text-[#8C8C8C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE2E00]'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Correo electrónico
            </label>
            <input
              type='text'
              value={sponsorData?.user?.email}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 text-[14px] font-medium text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Áreas de especialización
            </label>
            <div className='flex flex-wrap gap-2 rounded-[10px] border border-[#C1CCF4] bg-white px-6 py-2 lg:w-auto'>
              {sponsorData?.specialization.map((area, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-2 rounded-md bg-[#F0F0F0] px-3 py-1 text-[#8C8C8C]'
                >
                  <span className='text-sm'>{area}</span>
                  <X size={16} className='cursor-pointer' />
                </div>
              ))}
            </div>{' '}
          </div>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Sitio web
            </label>
            <input
              type='text'
              value={sponsorData?.web}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 text-[14px] font-medium text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Contacto de Whatsapp
            </label>
            <input
              type='text'
              value={sponsorData?.phone}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 text-[14px] font-medium text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-500 text-[#141414]'
              htmlFor='company-country'
            >
              Mensaje de Whatsapp
            </label>
            <input
              type='text'
              value={sponsorData?.wppMessage}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 text-[14px] font-medium text-[#8C8C8C] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
            />
          </div>
        </div>

        <div className='mt-6 w-full space-y-3'>
          <label
            className='text-xl font-bold text-[#FE2E00]'
            htmlFor='company-country'
          >
            Redes Sociales
          </label>
          {isLoading ? (
            <Skeleton className='flex h-[39px] w-full flex-wrap lg:flex-col' />
          ) : sponsorData?.socials?.length ? (
            sponsorData.socials.map((url, index) => (
              <div
                key={index}
                className='mb-2 flex items-center gap-2 lg:w-[300px]'
              >
                {getSocialIcon(url)}
                <input
                  type='text'
                  value={url}
                  readOnly
                  className='flex-1 rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#8C8C8C] placeholder:text-[#9CA3AF] focus:outline-none'
                />
              </div>
            ))
          ) : (
            <p>No hay redes sociales</p>
          )}
        </div>

        <div className='mt-6 w-full space-y-4'>
          <h2 className='text-xl font-bold text-[#FE2E00]'>Sobre nosotros</h2>

          {isLoading ? (
            <Skeleton className='h-[39px] w-full' />
          ) : (sponsorData?.descriptions?.length ?? 0) > 0 ? (
            <div className='flex flex-wrap lg:flex-row lg:space-x-3'>
              {sponsorData?.descriptions.map((desc, index) => (
                <div key={desc.id} className='space-y-3 lg:w-[300px]'>
                  <div>
                    <label className='text-black block text-[18px] font-medium'>
                      Título {index + 1}
                    </label>
                    <div className='mt-1 rounded-[10px] border border-[#C1CCF4] bg-transparent px-4 py-3 text-[#8C8C8C]'>
                      {desc.title}
                    </div>
                  </div>
                  <div>
                    <label className='text-black block text-[18px] font-medium'>
                      Párrafo {index + 1}
                    </label>
                    <div className='mt-1 rounded-[10px] border border-[#C1CCF4] bg-transparent px-4 py-3 text-[#8C8C8C]'>
                      {desc.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-gray-500'>No hay descripciones disponibles.</p>
          )}
        </div>

        <div className='my-4 mb-8 mt-6'>
          <h2 className='mb-4 text-[18px] font-bold text-[#FE2E00]'>
            Nuestras certificaciones
          </h2>

          <div className='space-y-6'>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (sponsorData?.certificates?.length ?? 0) > 0 ? (
              <div className='flex flex-wrap lg:flex-row lg:space-x-3'>
                {sponsorData?.certificates?.map((cert, idx) => (
                  <div
                    key={idx}
                    className='flex flex-col items-center gap-3 lg:w-[300px]'
                  >
                    <Image
                      src={cert.title}
                      alt={`cert-${idx}`}
                      width={120}
                      height={120}
                      className='aspect-square rounded-lg object-cover'
                    />
                    <label className='text-[14px] font-medium text-[#000]'>
                      Link
                    </label>
                    <input
                      type='text'
                      value={cert.url}
                      readOnly
                      className='w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-center text-[14px] text-[#8C8C8C] focus:outline-none'
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-500'>
                No hay certificaciones disponibles.
              </p>
            )}
          </div>
          <div className='flex flex-row items-center justify-center py-5 lg:justify-end lg:py-10'>
            <button className='w-96 rounded-md bg-[#A0A0A0] px-4 py-3 text-sm font-medium text-white lg:w-[300px]'>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
