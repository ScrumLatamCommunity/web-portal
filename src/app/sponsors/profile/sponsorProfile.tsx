'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import InstagramIconSponsors from '@/assets/InstagramIconSponsors'
import FacebookIcon from '@/assets/FacebookIcon'
import EditSponsorProfile from '../components/editSponsorProfile'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from '../components/Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { SponsorData } from '@/interfaces'

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

    // Crear un elemento temporal
    const doc = new DOMParser().parseFromString(html, 'text/html')
    // Obtener el texto sin HTML
    const cleanText = doc.body.textContent || ''
    // Decodificar caracteres especiales
    return cleanText
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/[)(/)]/g, '') // Remover caracteres especiales como )(/))
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

  if (error) {
    return <div className='p-4 text-red-500'>Error: {error}</div>
  }

  if (isEditing && sponsorData) {
    return (
      <EditSponsorProfile
        onEditComplete={handleEditComplete}
        sponsorData={sponsorData}
        onUpdate={fetchSponsorData}
      />
    )
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
    if (isLoading) {
      return <Skeleton className={className} />
    }

    if (!src) {
      return (
        <div
          className={`${className} flex items-center justify-center bg-gray-100`}
        >
          <span className='text-gray-400'>Sin imagen</span>
        </div>
      )
    }

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

  return (
    <section className={`${darkerGrotesque.variable} ${karla.variable} mb-8`}>
      <h1
        className={`items-left mb-6 ml-4 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Perfil del Sponsor
      </h1>
      <div
        className={`w-screen rounded-[20px] border-[0.5px] border-black-13 py-4 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <div className={`flex flex-row`}>
          <div className='mx-[33px] mb-6 flex w-[28%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-name'
            >
              Nombre de la empresa
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                id='company-name'
              >
                {sponsorData?.companyName || 'No hay nombre de la empresa'}
              </p>
            )}
          </div>
          <div className='mx-[33px] flex w-[36%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='specialization'
            >
              Área de Especialización
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='min-h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                id='specialization'
              >
                {Array.isArray(sponsorData?.specialization)
                  ? sponsorData.specialization.join(', ')
                  : sponsorData?.specialization ||
                    'No hay área de especialización'}
              </p>
            )}
          </div>
          <div className='mx-[33px] flex w-[20%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='sponsor-date'
            >
              Fecha de ingreso
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='h-[39px] w-[80%] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
                id='sponsor-date'
              >
                {sponsorData?.createdAt
                  ? formatDate(sponsorData?.createdAt)
                  : 'No hay fecha de ingreso'}
              </p>
            )}
          </div>
        </div>

        <div className={`flex flex-col`}>
          <div className='flex flex-row'>
            <div className='w-[100%]'>
              <div className={`flex w-full flex-row`}>
                <div className='mx-[33px] mb-6 flex w-[40%] flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-mail'
                  >
                    Mail
                  </label>
                  {isLoading ? (
                    <Skeleton className='h-[39px] w-full' />
                  ) : (
                    <p
                      className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                      id='company-mail'
                    >
                      {sponsorData?.user?.email || 'No hay correo electrónico'}
                    </p>
                  )}
                </div>
                <div className='mx-[33px] flex w-[33%] flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-country'
                  >
                    País
                  </label>
                  <div className={'flex flex-row'}>
                    <ImageWithFallback
                      src={getCountryFlag(sponsorData?.user?.country)}
                      alt='flag'
                      className='my-2 mr-2 h-[21px] w-[38px] bg-[#D9D9D940]'
                    />
                    {isLoading ? (
                      <Skeleton className='h-[39px] w-full' />
                    ) : (
                      <p
                        className='h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                        id='company-country'
                      >
                        {sponsorData?.user?.country || 'No hay país'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='mx-[33px] mb-6 flex flex-col gap-2'>
                <label
                  className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                  htmlFor='company-description'
                >
                  Descripción
                </label>
                {isLoading ? (
                  <Skeleton className='h-auto w-[497px]' />
                ) : (
                  <p
                    className='h-auto w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                    id='company-description'
                  >
                    {cleanHtml(sponsorData?.description) ||
                      'No hay descripción'}
                  </p>
                )}
              </div>
            </div>
            <div className='flex w-[30%] flex-col'>
              <label
                className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                htmlFor='company-logo'
              >
                Logotipo
              </label>
              <ImageWithFallback
                src={sponsorData?.logo}
                alt='company-logo'
                className='h-[200px] w-[200px] object-fill'
              />
            </div>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-web'
            >
              Web
            </label>
            <div className='mb-6 flex flex-row'>
              <GlobeIcon
                className='my-1 mr-2 stroke-[#FE2E00]'
                height={30}
                width={30}
              />
              {isLoading ? (
                <Skeleton className='h-[39px] w-[461px]' />
              ) : (
                <p
                  className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                  id='company-web'
                >
                  {sponsorData?.web || 'No hay web'}
                </p>
              )}
            </div>
          </div>
          <div className='mx-[33px] mb-6 flex flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-wpp'
            >
              Whatsapp
            </label>
            <div className='flex flex-row'>
              <PhoneIcon
                className='my-1 mr-2 stroke-[#FE2E00]'
                height={30}
                width={30}
              />
              {isLoading ? (
                <Skeleton className='h-[39px] w-[461px]' />
              ) : (
                <p
                  className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                  id='company-wpp'
                >
                  {sponsorData?.phone || 'No hay whatsapp'}
                </p>
              )}
            </div>
          </div>
          <div className='mx-[33px] mb-6 flex flex-col gap-2'>
            <label
              className='mb-2 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-socials1'
            >
              Redes Sociales
            </label>
            <div className='flex flex-row'>
              <LinkedInIcon
                className='my-1 mr-2 text-[#FE2E00]'
                height={30}
                width={30}
              />
              {isLoading ? (
                <Skeleton className='h-[39px] w-[497px]' />
              ) : (
                <p
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                  id='company-socials1'
                >
                  {sponsorData?.socials[0] || 'No hay redes sociales'}
                </p>
              )}
            </div>
            <div className='flex flex-row'>
              <InstagramIconSponsors
                className='my-1 mr-2 text-[#FE2E00]'
                height={30}
                width={30}
              />
              {isLoading ? (
                <Skeleton className='h-[39px] w-[497px]' />
              ) : (
                <p
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                  id='company-socials2'
                >
                  {sponsorData?.socials[1] || 'No hay redes sociales'}
                </p>
              )}
            </div>
            <div className='flex flex-row'>
              <FacebookIcon
                className='my-1 mr-2 text-[#FE2E00]'
                height={30}
                width={30}
              />
              {isLoading ? (
                <Skeleton className='h-[39px] w-[497px]' />
              ) : (
                <p
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                  id='company-socials3'
                >
                  {sponsorData?.socials[2] || 'No hay redes sociales'}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <label
              className='mb-3 pl-8 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-logo'
            >
              Banner Promocional.
            </label>
            <div className='flex flex-row'>
              <div className='mr-12 flex flex-col'>
                <label
                  className='mb-8 pl-8 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla grande:</strong> 1440x440 px (ideal para
                  computadoras).
                </label>
                <ImageWithFallback
                  src={sponsorData?.bannerWeb}
                  alt='company-banner'
                  className='h-[210px] w-[530px] object-fill pl-8'
                />
              </div>
              <div className='flex flex-col'>
                <label
                  className='mb-[10px] w-[286px] pl-8 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla pequeña:</strong> 393x288 px (optimizado para
                  celulares).
                </label>
                <ImageWithFallback
                  src={sponsorData?.bannerMobile}
                  alt='company-banner'
                  className='h-[210px] w-[286px] object-fill pl-8'
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${inter.variable} flex w-full flex-row justify-end`}>
          <button
            className='mx-16 mb-6 mt-12 h-[60px] w-[300px] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF]'
            onClick={() => setIsEditing(true)}
          >
            Editar Perfil
          </button>
        </div>
      </div>
    </section>
  )
}
