'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useEffect, useState } from 'react'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import InstagramIconSponsors from '@/assets/InstagramIconSponsors'
import CategoriesDropdown from '../../sponsors/components/categories-dropdown'
import TextEditor from '../../sponsors/components/TextEditor'
import CountriesDropdown from '../../sponsors/components/countries-dropdown'
import FacebookIcon from '@/assets/FacebookIcon'
import SponsorsList from './components/sponsorsList'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'
import XIcon from '@/assets/twitter-x'
import YoutubeIcon from '@/assets/YoutubeIcon'

interface Sponsor {
  id: number
  companyName: string
  createdAt: string
  web: string
  status: string
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES')
}

export default function AlliesPage() {
  const { token } = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string[]>([])
  const [description, setDescription] = useState('')
  const [web, setWeb] = useState('')
  const [phone, setPhone] = useState('')
  const [socials, setSocials] = useState<string[]>(['', '', ''])
  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
    setSelectedCategories([''])
    setSelectedCountry([])
    setDescription('')
    setWeb('')
    setPhone('')
    setSocials(['', '', ''])
  }

  const getSponsors = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors?order=desc`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (!response.ok) {
        throw new Error('Error al obtener sponsors')
      }

      const data = await response.json()

      setSponsors(data)
    } catch (error) {
      console.error('Error al obtener sponsors:', error)
    }
  }

  useEffect(() => {
    getSponsors()
  }, [setSponsors])

  const handleSave = async () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    const socialsArray = socials.filter(Boolean)

    const sponsorData = {
      firstName,
      lastName,
      username,
      email,
      password,
      companyName,
      specialization: selectedCategories,
      country: selectedCountry,
      membership: 'Premium',
      status: 'ACTIVE',
      description,
      web,
      phone,
      socials: socialsArray,
      logo: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203',
      bannerWeb:
        'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203',
      bannerMobile:
        'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203'
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/register/sponsor`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sponsorData)
        }
      )

      if (response.ok) {
        toast.success('Sponsor registrado correctamente!')
        resetForm()
        await getSponsors()
      } else {
        const errorData = await response.json()
        toast.error(`Error: ${errorData.message}`)
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error)
      alert('Error al enviar los datos')
    }
  }

  const handleDiscard = () => {
    resetForm()
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left mb-5 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Sponsors de la Comunidad
      </h1>
      <div
        className={`mb-6 w-full rounded-[20px] border-[0.5px] border-black-13 p-4`}
      >
        <div className='grid grid-cols-5 gap-4 rounded-[20px] border-[0.5px] border-black-9 p-2'>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Nombre
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Aliado desde
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Web
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Estado
          </button>
          <p className='flex items-center justify-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Acción
          </p>
        </div>
        <div className='custom-scrollbar h-[300px] overflow-y-scroll'>
          {sponsors.map((sponsor) => (
            <SponsorsList
              key={sponsor.id}
              name={sponsor.companyName}
              since={formatDate(sponsor.createdAt)}
              web={sponsor.web}
              status={sponsor.status}
            />
          ))}
        </div>
      </div>
      <div
        className={`w-full rounded-[20px] border-[0.5px] border-black-13 py-4`}
      >
        <h1
          className={`items-left mb-5 ml-8 max-w-[1980px] font-darker-grotesque text-[26px] font-darker-grotesque-700 text-[#082965]`}
        >
          Registrar un nuevo sponsor
        </h1>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='first-name'
            >
              Nombre personal del sponsor
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='first-name'
              placeholder='Nombre aquí'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='last-name'
            >
              Apellido personal del sponsor
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='last-name'
              placeholder='Apellido aquí'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='username'
            >
              Nombre de usuario
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='username'
              placeholder='Nombre usuario'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='email'
            >
              Mail del sponsor
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='email'
              placeholder='ejemplo@mail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='password'
              placeholder='Escriba la contraseña'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mx-[33px] mb-6 flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='confirm-password'
            >
              Confirmar Contraseña
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='confirm-password'
              placeholder='Confirma la contraseña'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
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
              id='company-name'
              placeholder='Nombre de la empresa'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
              value={selectedCategories}
              onChange={setSelectedCategories}
            />
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-country'
            >
              País
            </label>
            <CountriesDropdown
              value={selectedCountry}
              onChange={setSelectedCountry}
            />
          </div>
        </div>

        <div className={`flex flex-col`}>
          <div className='flex flex-row'>
            <div className='flex w-[85%] flex-col'>
              <div className='mx-[33px] mb-6 flex flex-col gap-2'>
                <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
                  Descripción
                </label>
                <TextEditor value={description} onChange={setDescription} />
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
              <GlobeIcon
                className='my-1 mr-2 text-[#FE2E00]'
                height={30}
                width={30}
              />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='company-web'
                placeholder='www.ejemplo.com'
                value={web}
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>
          </div>
          <div className='mx-[33px] my-6 flex w-[540px] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-wpp'
            >
              Whatsapp
            </label>
            <div className='flex flex-row'>
              <PhoneIcon
                className='my-1 mr-2 text-[#FE2E00]'
                height={30}
                width={30}
              />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='company-wpp'
                placeholder='+99 9999999999'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className='mx-[33px] mb-6 flex w-[540px] flex-col gap-2'>
            <label
              className='mb-2 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-socials1'
            >
              Redes Sociales
            </label>
            {socials.map((social, index) => {
              const icon = (() => {
                if (social.includes('linkedin'))
                  return (
                    <LinkedInIcon
                      className='my-1 mr-2 text-[#FE2E00]'
                      height={30}
                      width={30}
                    />
                  )
                if (social.includes('instagram'))
                  return (
                    <InstagramIconSponsors
                      className='my-1 mr-2 text-[#FE2E00]'
                      height={30}
                      width={30}
                    />
                  )
                if (social.includes('facebook'))
                  return (
                    <FacebookIcon
                      className='my-1 mr-2 text-[#FE2E00]'
                      height={30}
                      width={30}
                    />
                  )
                if (
                  social.includes('www.x.com') ||
                  social.includes('twitter.com')
                )
                  return (
                    <XIcon
                      className='my-1 mr-2 text-[#FE2E00]'
                      height={30}
                      width={30}
                    />
                  )
                if (social.includes('youtube'))
                  return (
                    <YoutubeIcon
                      className='my-1 mr-2 stroke-[#FE2E00] text-white'
                      height={30}
                      width={30}
                    />
                  )
                return (
                  <GlobeIcon
                    className='my-1 mr-2 text-[#FE2E00]'
                    height={30}
                    width={30}
                  />
                )
              })()

              return (
                <div key={index} className='flex flex-row items-center'>
                  <div className='my-1 mr-2 text-[#FE2E00]'>{icon}</div>
                  <input
                    className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                    placeholder={`https://www.redsocial.com/ejemplo`}
                    value={social}
                    onChange={(e) => {
                      const newSocials = [...socials]
                      newSocials[index] = e.target.value
                      setSocials(newSocials)
                    }}
                  />
                  <button
                    onClick={() => {
                      const newSocials = socials.filter((_, i) => i !== index)
                      setSocials(newSocials)
                    }}
                    className='ml-2 text-[#FE2E00] hover:text-[#FE5833]'
                  >
                    ✕
                  </button>
                </div>
              )
            })}
            <div className='flex justify-between'>
              <button
                onClick={() => {
                  setSocials([...socials, ''])
                }}
                className='font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833] hover:text-[#FE2E00]'
              >
                + Agregar red social
              </button>
            </div>
          </div>
        </div>

        <div className={`${inter.variable} flex w-full flex-row`}>
          <button
            className='mx-12 my-6 h-[60px] w-[33%] rounded-[10px] border-2 border-[#FD3600] bg-[#FFFFFF] px-3 font-inter font-inter-400 text-[#FD3600]'
            onClick={handleDiscard}
          >
            Descartar
          </button>
          <button
            className='my-6 mr-12 h-[60px] w-[66%] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF]'
            onClick={handleSave}
          >
            Registrarse
          </button>
        </div>
      </div>
    </section>
  )
}
