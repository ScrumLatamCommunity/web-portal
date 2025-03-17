'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import InstagramIconSponsors from '@/assets/InstagramIconSponsors'
import CategoriesDropdown from './categories-dropdown'
import TextEditor from './TextEditor'
import ImageUpload from './imageUpload'
import CountriesDropdown from './countries-dropdown'
import FacebookIcon from '@/assets/FacebookIcon'
import { getCountryFlag } from '@/utils/getFlags'
import { useAuth } from '@/app/context/AuthContext'

interface SponsorData {
  id: string
  userId: string
  status: string
  companyName: string
  specialization: string[]
  description: string
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  createdAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    country: string
  }
}

interface SponsorUpdateData {
  companyName: string
  specialization: string[]
  description: string
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  status: string
}

type EditSponsorProfileProps = {
  onEditComplete: () => void
  sponsorData: SponsorData
  onUpdate: () => Promise<void>
}

export default function EditSponsorProfile({
  onEditComplete,
  sponsorData,
  onUpdate
}: EditSponsorProfileProps) {
  const { token } = useAuth()
  const [formData, setFormData] = useState({
    ...sponsorData,
    logo: sponsorData.logo,
    bannerWeb: sponsorData.bannerWeb,
    bannerMobile: sponsorData.bannerMobile
  })
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cleanSponsorData = (data: typeof formData): SponsorUpdateData => {
    // Asegurarse de que los arrays no sean null
    const socials = Array.isArray(data.socials) ? data.socials : []
    const specialization = Array.isArray(data.specialization)
      ? data.specialization
      : []

    // Limpiar strings vacíos
    const cleanedData = {
      companyName: data.companyName?.trim() || '',
      specialization: specialization.filter(
        (item) => item && item.trim() !== ''
      ),
      description: data.description?.trim() || '',
      web: data.web?.trim() || '',
      phone: data.phone?.trim() || '',
      socials: socials.map((s) => s?.trim() || '').filter((s) => s !== ''),
      logo: data.logo || '',
      bannerWeb: data.bannerWeb || '',
      bannerMobile: data.bannerMobile || '',
      status: data.status || 'ACTIVE'
    }
    return cleanedData
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSpecializationChange = (specialization: string[]) => {
    setFormData((prev) => ({
      ...prev,
      specialization
    }))
  }

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({
      ...prev,
      description
    }))
  }

  const handleLogoChange = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      logo: imageUrl
    }))
  }

  const handleBannerWebChange = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      bannerWeb: imageUrl
    }))
  }

  const handleBannerMobileChange = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      bannerMobile: imageUrl
    }))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)
      setError(null)
      const cleanedData = cleanSponsorData(formData)
      // Validación básica de datos
      if (!cleanedData.companyName || cleanedData.companyName.trim() === '') {
        throw new Error('El nombre de la empresa es requerido')
      }

      if (
        !cleanedData.specialization ||
        cleanedData.specialization.length === 0
      ) {
        throw new Error('Debe seleccionar al menos una especialización')
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/${sponsorData.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(cleanedData)
        }
      )

      if (!response.ok) {
        // Intentar obtener el mensaje de error del servidor
        const errorData = await response.json().catch(() => null)
        console.error('Respuesta del servidor:', errorData)
        throw new Error(errorData?.message || 'Error al actualizar el perfil')
      }

      await onUpdate()
      onEditComplete()
    } catch (error) {
      console.error('Error saving profile:', error)
      setError(
        error instanceof Error ? error.message : 'Error al guardar los cambios'
      )
    } finally {
      setIsSaving(false)
    }
  }

  const handleDiscard = () => {
    onEditComplete()
  }
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left mb-5 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Perfil del Sponsor
      </h1>
      <div
        className={`w-screen rounded-[20px] border-[0.5px] border-black-13 py-4 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <h1
          className={`items-left mb-5 ml-8 max-w-[1980px] font-darker-grotesque text-[26px] font-darker-grotesque-700 text-[#082965]`}
        >
          Actualizar Información
        </h1>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-name'
            >
              Nombre de la empresa
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='companyName'
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder='Nombre de la empresa'
            />
          </div>
          <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='specialization'
            >
              Área de Especialización
            </label>
            <CategoriesDropdown
              value={formData.specialization}
              onChange={handleSpecializationChange}
            />
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='sponsor-date'
            >
              Fecha de ingreso
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='sponsor-date'
              type='date'
              value={
                new Date(sponsorData.createdAt).toISOString().split('T')[0]
              }
            />
          </div>
        </div>

        <div className={`flex flex-col`}>
          <div className='flex flex-row'>
            <div className='flex w-[85%] flex-col'>
              <div className={`flex flex-row`}>
                <div className='mx-[33px] mb-6 flex w-[40%] flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-mail'
                  >
                    Mail
                  </label>
                  <input
                    className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                    id='company-mail'
                    placeholder='ejemplo@scrumlatam.com'
                    value={sponsorData.user.email}
                  />
                </div>
                <div className='mx-[33px] flex flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-country'
                  >
                    País
                  </label>
                  <div className={'flex flex-row'}>
                    <Image
                      alt='flag'
                      className='my-2 mr-2 h-[21px] w-[38px] bg-[#D9D9D940]'
                      src={getCountryFlag(sponsorData.user.country)}
                      width={100}
                      height={100}
                    ></Image>
                    <CountriesDropdown
                      value={sponsorData.user.country}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className='mx-[33px] mb-6 flex flex-col gap-2'>
                <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
                  Descripción
                </label>
                <TextEditor
                  value={formData.description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
          </div>
          <div className='mx-[33px] flex w-[540px] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-web'
            >
              Web
            </label>
            <div className='flex flex-row'>
              <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='web'
                placeholder='www.ejemplo.com'
                value={formData.web}
                onChange={handleInputChange}
              />
            </div>
            <button className='self-end pr-3 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833]'>
              Actualizar link
            </button>
          </div>
          <div className='mx-[33px] my-6 flex w-[540px] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-wpp'
            >
              Whatsapp
            </label>
            <div className='flex flex-row'>
              <PhoneIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='phone'
                placeholder='+99 9999999999'
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <button className='self-end pr-3 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833]'>
              Actualizar teléfono
            </button>
          </div>
          <div className='mx-[33px] mb-6 flex w-[540px] flex-col gap-2'>
            <label
              className='mb-2 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-socials1'
            >
              Redes Sociales
            </label>
            <div className='flex flex-row'>
              <LinkedInIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='socials-linkedin'
                placeholder='https://www.linkedin.com/ejemplo'
                value={formData.socials[0]}
                onChange={(e) => {
                  const newSocials = [...formData.socials]
                  newSocials[0] = e.target.value
                  setFormData((prev) => ({
                    ...prev,
                    socials: newSocials
                  }))
                }}
              />
            </div>
            <div className='flex flex-row'>
              <InstagramIconSponsors className='my-2 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='socials-instagram'
                placeholder='https://www.instagram.com/ejemplo'
                value={formData.socials[1]}
                onChange={(e) => {
                  const newSocials = [...formData.socials]
                  newSocials[1] = e.target.value
                  setFormData((prev) => ({
                    ...prev,
                    socials: newSocials
                  }))
                }}
              />
            </div>
            <div className='flex flex-row'>
              <FacebookIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='socials-facebook'
                placeholder='https://www.facebook.com/ejemplo'
                value={formData.socials[2]}
                onChange={(e) => {
                  const newSocials = [...formData.socials]
                  newSocials[2] = e.target.value
                  setFormData((prev) => ({
                    ...prev,
                    socials: newSocials
                  }))
                }}
              />
            </div>
            <button className='self-end pr-3 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833]'>
              Actualizar link
            </button>
          </div>
          <div className='flex flex-col'>
            <label
              className='mb-2 pl-8 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-logo'
            >
              Cargar Logotipo
            </label>
            <p className='mb-6 ml-8 font-darker-grotesque text-[21px] text-[#000000]'>
              <strong>Formato recomendado:</strong> PNG o JPG. Medida máxima:
              200x200 px para una visualización óptima.
            </p>
            <div className='mb-6 ml-8 h-[230px] w-[230px]'>
              <ImageUpload
                onChange={handleLogoChange}
                initialImage={formData.logo}
              />
            </div>
            <label
              className='mb-3 pl-8 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-logo'
            >
              Cargar Banner Promocional.
            </label>
            <div className='mb-4 flex flex-row'>
              <div className='mr-6 flex flex-col'>
                <label
                  className='mb-8 pl-8 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla grande:</strong> 1440x440 px (ideal para
                  computadoras).
                </label>
                <div className='ml-8 mt-3 h-[280px] w-[560px]'>
                  <ImageUpload
                    onChange={handleBannerWebChange}
                    initialImage={formData.bannerWeb}
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label
                  className='w-[286px] pl-2 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla pequeña:</strong> 393x288 px (optimizado para
                  celulares).
                </label>
                <div className='mt-3 h-[280px] w-[314px]'>
                  <ImageUpload
                    onChange={handleBannerMobileChange}
                    initialImage={formData.bannerMobile}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${inter.variable} flex w-full flex-row`}>
          <button
            className='my-6 ml-12 h-[60px] w-[66%] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF] disabled:opacity-50'
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Guardando...' : 'Guardar Perfil'}
          </button>
          <button
            className='mx-12 my-6 h-[60px] w-[33%] rounded-[10px] border-2 border-[#FD3600] bg-[#FFFFFF] px-3 font-inter font-inter-400 text-[#FD3600]'
            onClick={handleDiscard}
            disabled={isSaving}
          >
            Descartar
          </button>
        </div>

        {error && (
          <div className='mx-12 mb-4 rounded bg-red-100 p-3 text-red-600'>
            {error}
          </div>
        )}
      </div>
    </section>
  )
}
