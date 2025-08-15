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
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mx-auto max-w-md pb-16 pt-6 lg:max-w-5xl`}
    >
      {/* Título */}
      <h1 className='text-center text-3xl font-bold text-[#FE2E00]'>
        Mi Perfil Sponsor
      </h1>

      {/* Botón editar */}
      <button
        onClick={() => setIsEditing(true)}
        className='mx-auto my-2 flex flex-row items-center text-lg text-[#FE2E00] underline'
      >
        <Edit2 className='mx-2' /> Editar perfil
      </button>

      {/* Logo */}
      <div className='my-4 flex justify-center'>
        <ImageWithFallback
          src={sponsorData?.logo}
          alt='logo'
          className='h-auto max-w-full object-contain lg:h-56 lg:w-96'
        />
      </div>

      {/* Información general */}
      <div className='flex flex-col items-start gap-6 lg:pl-10'>
        <label className='text-xl font-bold text-[#FE2E00]'>
          Información general
        </label>

        <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
          {/* Nombre empresa */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Nombre de la empresa
            </label>
            <input
              type='text'
              value={sponsorData?.companyName}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] px-4 text-[14px] text-[#8C8C8C] focus:outline-none'
            />
          </div>

          {/* País */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              País
            </label>
            <div className='relative flex h-[44px] w-full items-center rounded-[10px] border border-[#C1CCF4] px-3'>
              {sponsorData?.user?.country?.length ? (
                <>
                  <Image
                    src={getCountryFlag(sponsorData.user.country[0])}
                    alt='flag'
                    width={28}
                    height={20}
                    className='mr-2 h-[20px] w-[28px] rounded-[3px] object-cover'
                  />
                  <span className='flex-1 text-[14px] text-[#8C8C8C]'>
                    {sponsorData.user.country.join(', ')}
                  </span>
                </>
              ) : (
                <span className='flex-1 text-[14px] text-[#8C8C8C]'>
                  No hay país
                </span>
              )}
              <ChevronDown size={18} className='text-[#9CA3AF]' />
            </div>
          </div>

          {/* Fecha inicio */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Fecha de inicio
            </label>
            <div className='relative w-full'>
              <Calendar
                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'
                size={25}
              />
              <input
                type='text'
                value={formatDate(sponsorData?.createdAt)}
                readOnly
                className='h-[44px] w-full rounded-md border border-gray-300 pl-5 pr-3 text-sm text-[#8C8C8C] focus:outline-none focus:ring-2 focus:ring-[#FE2E00]'
              />
            </div>
          </div>

          {/* Correo */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Correo electrónico
            </label>
            <input
              type='text'
              value={sponsorData?.user?.email}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] px-4 text-[14px] text-[#9CA3AF] focus:outline-none'
            />
          </div>

          {/* Áreas */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Áreas de especialización
            </label>
            <div className='flex flex-wrap gap-2 rounded-[10px] border border-[#C1CCF4] bg-white px-4 py-2'>
              {sponsorData?.specialization.map((area, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-2 rounded-md bg-[#F0F0F0] px-3 py-1 text-[#8C8C8C]'
                >
                  <span className='text-sm'>{area}</span>
                  <X size={16} className='cursor-pointer' />
                </div>
              ))}
            </div>
          </div>

          {/* Sitio web */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Sitio web
            </label>
            <input
              type='text'
              value={sponsorData?.web}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] px-4 text-[14px] text-[#9CA3AF] focus:outline-none'
            />
          </div>

          {/* Contacto */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Contacto de Whatsapp
            </label>
            <input
              type='text'
              value={sponsorData?.phone}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] px-4 text-[14px] text-[#9CA3AF] focus:outline-none'
            />
          </div>

          {/* Mensaje */}
          <div className='flex min-w-[250px] flex-1 flex-col'>
            <label className='font-darker-grotesque text-[21px] text-[#141414]'>
              Mensaje de Whatsapp
            </label>
            <input
              type='text'
              value={sponsorData?.wppMessage}
              readOnly
              className='h-[44px] w-full rounded-[8px] border border-[#C1CCF4] px-4 text-[14px] text-[#8C8C8C] focus:outline-none'
            />
          </div>
        </div>

        {/* Redes sociales */}
        <div className='mt-6 w-full space-y-3'>
          <label className='text-xl font-bold text-[#FE2E00]'>
            Redes Sociales
          </label>
          {isLoading ? (
            <Skeleton className='h-[39px] w-full' />
          ) : sponsorData?.socials?.length ? (
            sponsorData.socials.map((url, index) => (
              <div
                key={index}
                className='flex w-full items-center gap-2 sm:w-80'
              >
                {getSocialIcon(url)}
                <input
                  type='text'
                  value={url}
                  readOnly
                  className='flex-1 rounded-[8px] border border-[#C1CCF4] px-4 py-2 text-[14px] text-[#8C8C8C] focus:outline-none'
                />
              </div>
            ))
          ) : (
            <p>No hay redes sociales</p>
          )}
        </div>

        {/* Descripciones */}
        <div className='mt-6 w-full space-y-4'>
          <h2 className='text-xl font-bold text-[#FE2E00]'>Sobre nosotros</h2>
          {isLoading ? (
            <Skeleton className='h-[39px] w-full' />
          ) : (sponsorData?.descriptions?.length ?? 0) > 0 ? (
            <div className='flex flex-wrap gap-4'>
              {sponsorData?.descriptions.map((desc, index) => (
                <div
                  key={index}
                  className='min-w-[250px] max-w-80 flex-1 space-y-3'
                >
                  <div>
                    <label className='text-black block text-[18px] font-medium'>
                      Título {index + 1}
                    </label>
                    <div className='mt-1 rounded-[10px] border border-[#C1CCF4] px-4 py-3 text-[#8C8C8C]'>
                      {desc.title}
                    </div>
                  </div>
                  <div>
                    <label className='text-black block text-[18px] font-medium'>
                      Párrafo {index + 1}
                    </label>
                    <div className='mt-1 rounded-[10px] border border-[#C1CCF4] px-4 py-3 text-[#8C8C8C]'>
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

        {/* Certificaciones */}
        <div className='my-4 mb-8 mt-6'>
          <h2 className='mb-4 text-[18px] font-bold text-[#FE2E00]'>
            Nuestras certificaciones
          </h2>
          <div className='flex flex-wrap gap-6'>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (sponsorData?.certificates?.length ?? 0) > 0 ? (
              sponsorData?.certificates?.map((cert, idx) => (
                <div
                  key={idx}
                  className='flex min-w-[250px] flex-1 flex-col items-center gap-3 sm:max-w-[300px]'
                >
                  <Image
                    src={cert.title}
                    alt={`cert-${idx}`}
                    width={200}
                    height={200}
                    className='aspect-square rounded-lg object-fill'
                  />
                  <label className='text-[14px] font-medium text-[#000]'>
                    Link
                  </label>
                  <input
                    type='text'
                    value={cert.url}
                    readOnly
                    className='w-full rounded-[8px] border border-[#C1CCF4] px-4 py-2 text-center text-[14px] text-[#8C8C8C] focus:outline-none'
                  />
                </div>
              ))
            ) : (
              <p className='text-gray-500'>
                No hay certificaciones disponibles.
              </p>
            )}
          </div>
        </div>

        {/* Botón guardar */}
        <div className='flex justify-center py-5 lg:justify-end'>
          <button className='w-full rounded-md bg-[#A0A0A0] px-4 py-3 text-sm font-medium text-white sm:w-80'>
            Guardar cambios
          </button>
        </div>
      </div>
    </section>
  )
}
