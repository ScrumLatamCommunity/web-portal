'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React from 'react'
import { flags } from '@/data/data'
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

type Flag = {
  id: number
  name: string
  flag: string
}

type EditSponsorProfileProps = {
  onEditComplete: () => void
}

export default function EditProfile() {
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left mb-5 max-w-[1980px] text-[28px] font-darker-grotesque-700 text-[#082965]`}
      >
        Agregar nuevo perfil
      </h1>
      <div
        className={`w-[1000px] rounded-[20px] border-[0.5px] border-black-13 py-4`}
      >
        <div className={`flex flex-row`}>
          <div className='mx-[33px] mb-6 flex flex-col gap-2'>
            <label className='font-darker-grotesque-700' htmlFor='company-name'>
              Nombre de la empresa
            </label>
            <input
              className='h-[39px] w-[325px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='company-name'
              placeholder='Nombre de la empresa'
            />
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque-700'
              htmlFor='specialization'
            >
              Área de Especialización
            </label>
            <CategoriesDropdown />
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='font-darker-grotesque-700' htmlFor='sponsor-date'>
              Fecha de ingreso
            </label>
            <input
              className='h-[39px] w-[150px] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='sponsor-date'
              type='date'
            />
          </div>
        </div>
        <div className={`flex flex-row`}>
          <div className={`flex flex-col`}>
            <div className='flex flex-row'>
              <div className=''>
                <div className={`flex flex-row`}>
                  <div className='mx-[33px] mb-6 flex flex-col gap-2'>
                    <label
                      className='font-darker-grotesque-700'
                      htmlFor='company-mail'
                    >
                      Mail
                    </label>
                    <input
                      className='h-[39px] w-[325px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                      id='company-mail'
                      placeholder='ejemplo@scrumlatam.com'
                    />
                  </div>
                  <div className='mx-[33px] flex flex-col gap-2'>
                    <label
                      className='font-darker-grotesque-700'
                      htmlFor='company-country'
                    >
                      País
                    </label>
                    <div className={'flex flex-row'}>
                      <Image
                        alt='flag'
                        className='my-2 mr-2 h-[21px] w-[38px] bg-[#D9D9D940]'
                        src={
                          flags.find((flag) => flag.name === 'Colombia')
                            ?.flag || '/default-flag.png'
                        }
                        width={100}
                        height={100}
                      ></Image>
                      <CountriesDropdown />
                    </div>
                  </div>
                </div>
                <div className='mx-[33px] mb-6 flex flex-col gap-2'>
                  <label className='font-darker-grotesque-700'>
                    Breve Descripción
                  </label>
                  <TextEditor />
                </div>
              </div>
            </div>
            <div className='mx-[33px] flex w-[540px] flex-col gap-2'>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-web'
              >
                Web/Redes sociales
              </label>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-web'
              >
                Ingresar link web
              </label>
              <div className='flex flex-row'>
                <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <input
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                  id='company-web'
                  placeholder='www.ejemplo.com'
                />
              </div>
              <button className='self-end pr-3 text-[15px] font-darker-grotesque-600 text-[#FE5833]'>
                Actualizar link
              </button>
            </div>
            <div className='mx-[33px] my-6 flex w-[540px] flex-col gap-2'>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-wpp'
              >
                Whatsapp
              </label>
              <div className='flex flex-row'>
                <PhoneIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <input
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                  id='company-wpp'
                  placeholder='+99 9999999999'
                />
              </div>
              <button className='self-end pr-3 text-[15px] font-darker-grotesque-600 text-[#FE5833]'>
                Actualizar teléfono
              </button>
            </div>
            <div className='mx-[33px] mb-6 flex w-[540px] flex-col gap-2'>
              <label
                className='mb-2 font-darker-grotesque-700'
                htmlFor='company-socials1'
              >
                Redes Sociales
              </label>
              <div className='flex flex-row'>
                <LinkedInIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <input
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                  id='company-socials1'
                  placeholder='https://www.linkedin.com/ejemplo'
                />
              </div>
              <div className='flex flex-row'>
                <InstagramIconSponsors className='my-2 mr-2 stroke-[#FE2E00]' />
                <input
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                  id='company-socials2'
                  placeholder='https://www.instagram.com/ejemplo'
                />
              </div>
              <div className='flex flex-row'>
                <FacebookIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <input
                  className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                  id='company-socials3'
                  placeholder='https://www.facebook.com/ejemplo'
                />
              </div>
              <button className='self-end pr-3 text-[15px] font-darker-grotesque-600 text-[#FE5833]'>
                Actualizar link
              </button>
            </div>
            <div className='flex flex-col'>
              <label
                className='mb-2 pl-8 font-darker-grotesque-700'
                htmlFor='company-logo'
              >
                Cargar Logotipo
              </label>
              <p className='mb-6 ml-8'>
                <strong>Formato recomendado:</strong> PNG o JPG. Medida máxima:
                200x200 px para una visualización óptima.
              </p>
              <div className='mb-6 ml-8 h-[230px] w-[230px]'>
                <ImageUpload />
              </div>
              <label
                className='mb-3 pl-8 font-darker-grotesque-700'
                htmlFor='company-logo'
              >
                Cargar Banner Promocional.
              </label>
              <div className='mb-4 flex flex-row'>
                <div className='mr-6 flex flex-col'>
                  <label
                    className='mb-8 pl-8 font-darker-grotesque-400'
                    htmlFor='company-logo'
                  >
                    <strong>Pantalla grande:</strong> 1440x440 px (ideal para
                    computadoras).
                  </label>
                  <div className='ml-8 mt-3 h-[280px] w-[560px]'>
                    <ImageUpload />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label
                    className='mb-[8px] w-[286px] pl-2 font-darker-grotesque-400'
                    htmlFor='company-logo'
                  >
                    <strong>Pantalla pequeña:</strong> 393x288 px (optimizado
                    para celulares).
                  </label>
                  <div className='mt-3 h-[280px] w-[314px]'>
                    <ImageUpload />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${inter.variable} flex w-full flex-row`}>
          <button className='my-6 ml-12 h-[60px] w-[66%] rounded-[10px] bg-[#FD3600] px-3 text-[#FFFFFF]'>
            Guardar Perfil
          </button>
          <button className='mx-12 my-6 h-[60px] w-[33%] rounded-[10px] border-2 border-[#FD3600] bg-[#FFFFFF] px-3 text-[#FD3600]'>
            Descartar
          </button>
        </div>
      </div>
    </section>
  )
}
