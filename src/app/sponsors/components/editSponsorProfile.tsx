'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import CategoriesDropdown from './categories-dropdown'
import TextEditor from './TextEditor'
import CountriesDropdown from './countries-dropdown'
import { getCountryFlag } from '@/utils/getFlags'
import { useAuth } from '@/app/context/AuthContext'
import { SponsorData, UpdateSponsorInput } from '@/interfaces'
import ImageUpload from '@/app/editor/components/imgs/imageUpload'

interface SponsorUpdateData {
  companyName: string
  specialization: string[]
  descriptions: {
    title: string
    description: string
  }[]
  web: string
  phone: string
  wppMessage: string
  socials: string[]
  logo: string
  status: string
  country: string[]
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
    bannerWeb: sponsorData.bannerWeb,
    bannerMobile: sponsorData.bannerMobile,
    user: { ...sponsorData.user },
    logo: sponsorData.logo
  })
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cleanSponsorData = (data: typeof formData): UpdateSponsorInput => {
    return {
      companyName: data.companyName?.trim() || '',
      specialization: Array.isArray(data.specialization)
        ? data.specialization.filter((item) => item && item.trim() !== '')
        : [],
      descriptions: (data.descriptions || []).map((d) => ({
        title: d.title?.trim() || '',
        description: d.description?.trim() || ''
      })),
      web: data.web?.trim() || '',
      phone: data.phone?.trim() || '',
      socials: (Array.isArray(data.socials) ? data.socials : [])
        .map((s) => s?.trim() || '')
        .filter(Boolean),
      logo: data.logo || '',
      wppMessage: data.wppMessage?.trim() || '',
      status: data.status || 'ACTIVE',
      country: data.user?.country || [],
      certificatesSponsor: (data.certificates || []).map((c) => ({
        title: c.title,
        url: c.url
      })),
      bannerWeb: data.bannerWeb || '',
      bannerMobile: data.bannerMobile || ''
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target

    if (id === 'email') {
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          email: value
        }
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value
      }))
    }
  }

  useEffect(() => {
    console.log('formData actualizado:', formData)
  }, [formData])

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

  const handleCountryChange = (countries: string[]) => {
    setFormData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        country: countries
      }
    }))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)
      setError(null)
      const cleanedData = cleanSponsorData(formData)

      console.log('datos de envio')
      console.log(cleanedData)
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
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mx-auto w-full max-w-5xl px-4 pb-16 pt-6`}
    >
      <h1 className='text-center text-2xl font-bold text-[#FE2E00] sm:text-3xl'>
        Editar Perfil Sponsor
      </h1>

      {/* Logo */}
      <div className='my-4 flex justify-center'>
        <div className='flex h-40 w-full max-w-sm items-center justify-center rounded-md bg-gray-100 sm:h-56 sm:max-w-md'>
          <ImageUpload
            onChange={handleLogoChange}
            initialImage={formData.logo}
          />
        </div>
      </div>

      {/* Información general */}
      <div className='flex flex-col items-start gap-3 lg:pl-10'>
        <label className='text-lg font-bold text-[#FE2E00] sm:text-xl'>
          Información general
        </label>

        <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
          {/* Nombre de la empresa */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Nombre de la empresa
            </label>
            <input
              type='text'
              id='companyName'
              value={formData.companyName}
              onChange={handleInputChange}
              className='h-[44px] w-full rounded-lg border border-[#C1CCF4] bg-transparent px-4 text-sm font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none'
              placeholder='Nombre de la empresa'
            />
          </div>

          {/* País */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              País
            </label>
            <div className='relative flex w-full items-center rounded-lg border border-[#C1CCF4] bg-transparent px-3'>
              <Image
                src={getCountryFlag(formData.user.country[0])}
                alt='flag'
                width={28}
                height={20}
                className='mr-2 h-[20px] w-[28px] rounded-[3px] object-cover'
              />
              <CountriesDropdown
                value={formData.user.country}
                onChange={handleCountryChange}
              />
            </div>
          </div>

          {/* Fecha de inicio */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Fecha de inicio
            </label>
            <input
              type='date'
              id='sponsor-date'
              value={new Date(formData.createdAt).toISOString().split('T')[0]}
              className='h-[44px] w-full rounded-lg border border-gray-300 bg-transparent pl-5 pr-3 text-sm text-[#141414] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE2E00]'
            />
          </div>

          {/* Correo */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Correo electrónico
            </label>
            <input
              type='text'
              id='email'
              value={formData.user.email}
              readOnly
              className='h-[44px] w-full rounded-lg border border-[#C1CCF4] bg-transparent px-4 text-sm font-medium text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none'
            />
          </div>

          {/* Especialización */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Áreas de especialización
            </label>
            <div className='relative flex w-full items-center rounded-lg border border-[#C1CCF4] bg-transparent px-3'>
              <CategoriesDropdown
                value={formData.specialization}
                onChange={handleSpecializationChange}
              />
            </div>
          </div>

          {/* Sitio web */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Sitio web
            </label>
            <input
              type='text'
              id='web'
              value={formData.web}
              onChange={handleInputChange}
              className='h-[44px] w-full rounded-lg border border-[#C1CCF4] bg-transparent px-4 text-sm font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none'
              placeholder='www.ejemplo.com'
            />
          </div>

          {/* Teléfono */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Contacto de Whatsapp
            </label>
            <input
              type='text'
              id='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='h-[44px] w-full rounded-lg border border-[#C1CCF4] bg-transparent px-4 text-sm font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none'
              placeholder='+99 9999999999'
            />
          </div>

          {/* Mensaje de WhatsApp */}
          <div className='flex min-w-[200px] flex-1 flex-col'>
            <label className='text-base font-medium text-[#141414] sm:text-[21px]'>
              Mensaje de Whatsapp
            </label>
            <textarea
              id='wppMessage'
              value={formData.wppMessage}
              onChange={(e) => {
                if (e.target.value.length <= 500) handleInputChange(e)
              }}
              className='h-[150px] w-full resize-none rounded-lg border border-[#C1CCF4] bg-transparent px-4 py-2 text-sm font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none'
              placeholder='Mensaje de Whatsapp'
            />
            <span className='mt-1 text-sm text-gray-500'>
              {formData.wppMessage?.length || 0}/500 caracteres
            </span>
          </div>
        </div>

        <div className='mt-6 w-full space-y-3'>
          <label className='text-xl font-bold text-[#FE2E00]'>
            Redes Sociales
          </label>
          {formData.socials.length ? (
            <div className='flex flex-wrap lg:flex-row'>
              {formData.socials.map((social, index) => (
                <div
                  key={index}
                  className='mb-2 flex w-full items-center gap-2 px-3 lg:w-[300px]'
                >
                  <GlobeIcon height={30} width={30} />
                  <input
                    type='text'
                    value={social}
                    onChange={(e) => {
                      const newSocials = [...formData.socials]
                      newSocials[index] = e.target.value
                      setFormData((prev) => ({
                        ...prev,
                        socials: newSocials
                      }))
                    }}
                    className='flex-1 rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none'
                    placeholder='https://www.redsocial.com/ejemplo'
                  />
                  <button
                    onClick={() => {
                      const newSocials = formData.socials.filter(
                        (_, i) => i !== index
                      )
                      setFormData((prev) => ({
                        ...prev,
                        socials: newSocials
                      }))
                    }}
                    className='ml-2 text-[#FE2E00] hover:text-[#FE5833]'
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    socials: [...prev.socials, '']
                  }))
                }}
                className='w-full font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833] hover:text-[#FE2E00]'
              >
                + Agregar red social
              </button>
            </div>
          ) : (
            <p>No hay redes sociales</p>
          )}
        </div>

        <div className='mt-6 w-full space-y-4'>
          <h2 className='text-xl font-bold text-[#FE2E00]'>Sobre nosotros</h2>
          <div className='flex flex-col gap-3 lg:flex-row lg:flex-wrap'>
            {formData.descriptions && formData.descriptions.length > 0 ? (
              formData.descriptions.map((desc, index) => (
                <div
                  key={index}
                  className='mb-3 w-full space-y-3 rounded-md p-3 lg:w-[300px]'
                >
                  <div>
                    <label className='text-black block text-[18px] font-medium'>
                      Título {index + 1}
                    </label>
                    <textarea
                      value={desc.title}
                      maxLength={100}
                      onChange={(e) => {
                        const newDescs = [...formData.descriptions]
                        newDescs[index] = {
                          ...newDescs[index],
                          title: e.target.value
                        }
                        setFormData((prev) => ({
                          ...prev,
                          descriptions: newDescs
                        }))
                      }}
                      className='mt-1 w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
                      placeholder={`Título ${index + 1}`}
                      rows={2}
                    />
                    <span className='mt-1 text-sm text-gray-500'>
                      {desc.title?.length || 0}/100 caracteres
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-black block text-[18px] font-medium'>
                      Párrafo {index + 1}
                    </label>
                    <div className='flex flex-col'>
                      <textarea
                        value={desc.description}
                        maxLength={300}
                        onChange={(e) => {
                          const newDescs = [...formData.descriptions]
                          newDescs[index] = {
                            ...newDescs[index],
                            description: e.target.value
                          }
                          setFormData((prev) => ({
                            ...prev,
                            descriptions: newDescs
                          }))
                        }}
                        className='w-full resize-none rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
                        style={{ resize: 'none' }}
                        placeholder={`Párrafo ${index + 1}`}
                        rows={4}
                      />
                      <span className='mt-1 text-sm text-gray-500'>
                        {desc.description?.length || 0}/300 caracteres
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='mb-3 w-full space-y-3 rounded-md p-3 lg:w-[300px]'>
                <div>
                  <label className='text-black block text-[18px] font-medium'>
                    Título 1
                  </label>
                  <textarea
                    value={formData.descriptions?.[0]?.title || ''}
                    maxLength={100}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        descriptions: [
                          { ...prev.descriptions?.[0], title: e.target.value }
                        ]
                      }))
                    }}
                    className='mt-1 w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
                    placeholder='Título 1'
                    rows={2}
                  />
                  <span className='mt-1 text-sm text-gray-500'>
                    {formData.descriptions?.[0]?.title?.length || 0}/100
                    caracteres
                  </span>
                </div>
                <div className='flex flex-col'>
                  <label className='text-black block text-[18px] font-medium'>
                    Párrafo 1
                  </label>
                  <div className='flex flex-col'>
                    <textarea
                      value={formData.descriptions?.[0]?.description || ''}
                      maxLength={300}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          descriptions: [
                            {
                              ...prev.descriptions?.[0],
                              description: e.target.value
                            }
                          ]
                        }))
                      }}
                      className='w-full resize-none rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-[14px] font-medium text-[#141414] placeholder:text-[#9CA3AF] focus:outline-none lg:w-[300px]'
                      style={{ resize: 'none' }}
                      placeholder='Párrafo 1'
                      rows={4}
                    />
                    <span className='mt-1 text-sm text-gray-500'>
                      {formData.descriptions?.[0]?.description?.length || 0}/300
                      caracteres
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {formData.descriptions && formData.descriptions.length < 3 && (
            <button
              type='button'
              className='mt-2 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833] hover:text-[#FE2E00]'
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  descriptions: [
                    ...(prev.descriptions && prev.descriptions.length > 0
                      ? prev.descriptions
                      : []),
                    { id: '', sponsorId: prev.id, title: '', description: '' }
                  ]
                }))
              }}
            >
              + Agregar descripción
            </button>
          )}
        </div>

        {/* Sección de Certificados */}
        <div className='mt-8 w-full space-y-4'>
          <h2 className='text-xl font-bold text-[#FE2E00]'>
            Nuestras certificaciones
          </h2>
          <div className='flex flex-wrap lg:flex-row lg:space-x-3'>
            {formData.certificates && formData.certificates.length > 0 ? (
              formData.certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className='relative mb-4 flex flex-col items-center gap-3 lg:w-[300px]'
                >
                  <button
                    type='button'
                    className='absolute right-2 z-20 text-lg text-[#FE2E00] hover:text-[#FE5833]'
                    onClick={() => {
                      const newCerts = formData.certificates.filter(
                        (_, i) => i !== idx
                      )
                      setFormData((prev) => ({
                        ...prev,
                        certificates: newCerts
                      }))
                    }}
                  >
                    ×
                  </button>
                  <div className='flex aspect-square h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
                    <ImageUpload
                      onChange={(imgUrl) => {
                        const newCerts = [...formData.certificates]
                        newCerts[idx] = { ...newCerts[idx], title: imgUrl }
                        setFormData((prev) => ({
                          ...prev,
                          certificates: newCerts
                        }))
                      }}
                      initialImage={cert.title}
                      className='aspect-square rounded-lg object-cover'
                    />
                  </div>
                  <label className='text-[14px] font-medium text-[#000]'>
                    Link
                  </label>
                  <input
                    type='text'
                    value={cert.url}
                    onChange={(e) => {
                      const newCerts = [...formData.certificates]
                      newCerts[idx] = {
                        ...newCerts[idx],
                        url: e.target.value
                      }
                      setFormData((prev) => ({
                        ...prev,
                        certificates: newCerts
                      }))
                    }}
                    className='w-full rounded-[8px] border border-[#C1CCF4] bg-transparent px-4 py-2 text-center text-[14px] text-[#8C8C8C] focus:outline-none'
                    placeholder='Enlace del certificado'
                  />
                </div>
              ))
            ) : (
              <p className='text-gray-500'>No hay certificaciones agregadas.</p>
            )}
          </div>
          {(formData.certificates?.length ?? 0) >= 0 && (
            <button
              type='button'
              className='mt-2 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833] hover:text-[#FE2E00]'
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  certificates: [
                    ...(prev.certificates && prev.certificates.length > 0
                      ? prev.certificates
                      : []),
                    { id: '', title: '', url: '' }
                  ]
                }))
              }}
            >
              + Agregar certificado
            </button>
          )}
        </div>

        <div className='flex w-full flex-row items-center justify-end space-x-4 py-5 lg:py-10'>
          <button
            className='rounded-md bg-[#A0A0A0] px-4 py-3 text-sm font-medium text-white lg:w-[300px]'
            onClick={handleDiscard}
            disabled={isSaving}
          >
            Descartar
          </button>
          <button
            className='rounded-md bg-[#072356] px-4 py-3 text-sm font-medium text-white lg:w-[300px]'
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Guardando...' : 'Guardar Perfil'}
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
