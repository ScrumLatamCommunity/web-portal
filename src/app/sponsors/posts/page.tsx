'use client'
import React, { useState } from 'react'
import TextEditor from '../components/TextEditor'
import { darkerGrotesque, inter, karla } from '@/fonts'
import CategoriesDropdown from '../components/categories-dropdown'
import OffertDropdown from '../components/offert-dropdown'
import GlobeIcon from '@/assets/GlobeIcon'
import ImageUpload from '../components/imageUpload'
import PostPublished from '../components/published'

export default function SponsorPosts() {
  const [showPopup, setShowPopup] = useState(false)

  const handlePublished = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8 w-auto max-w-[1980px] items-center overflow-hidden`}
    >
      <h1
        className={`items-left mb-0 font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Publica tu contenido
      </h1>
      <h2
        className={`items-left mb-4 font-karla text-[18px] font-karla-400 text-[#141414]`}
      >
        Llena este formulario para compartir tus noticias con nuestra comunidad.
      </h2>
      <div
        className={`mb-8 w-screen rounded-[20px] border-[0.5px] border-black-13 py-6 pr-8 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-title'
            >
              Título
            </label>
            <input
              className='ml-2 h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='post-title'
              placeholder='Título de la publicacion'
              type='text'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[19px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-date'
            >
              Fecha de validez
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='post-date'
              placeholder='22/01/2025'
              type='date'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='w-[150px] font-darker-grotesque text-[19px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-date-end'
            >
              Fecha de caducidad
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='post-date-end'
              placeholder='23/01/2025'
              type='date'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-category'
            >
              Categoría
            </label>
            <CategoriesDropdown />
          </div>
        </div>
        <div className={`mb-6 mt-6 flex flex-col`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Descripción
            </label>
            <TextEditor />
          </div>
          <div className='mx-[33px] my-6 flex w-[540px] flex-col gap-2'>
            <p className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Ingresar link y/o web
            </p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <div className='flex flex-row'>
              <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='company-web'
                placeholder='www.ejemplo.com'
                type='text'
              />
            </div>
            <button className='self-end pr-3 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833]'>
              Actualizar link
            </button>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='mb-2 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-img'
            >
              Imagen destacada
            </label>
            <div className='mb-4 flex flex-row'>
              <div className='mr-6 flex flex-col'>
                <label
                  className='mb-8 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla grande:</strong> 650x550 px (ideal para
                  computadoras).
                </label>
                <div className='mt-3 h-[280px] w-[560px]'>
                  <ImageUpload />
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
                  <ImageUpload />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button className='h-[48px] w-[150px] rounded-[10px] bg-[#FFFFFF] px-3 font-inter text-[18px] font-inter-400 text-[#FD3600]'>
            Vista previa
          </button>
          <button
            className='h-[48px] w-[207px] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF]'
            onClick={handlePublished}
          >
            Publicar
          </button>
        </div>
      </div>
      <h1
        className={`items-left mb-0 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Ofertas para la Comunidad
      </h1>
      <h2
        className={`items-left mb-4 max-w-[1980px] font-karla text-[18px] font-karla-400 text-[#141414]`}
      >
        Llena este formulario para compartir tus beneficios u ofertas con
        nuestra comunidad.
      </h2>
      <div
        className={`mb-8 w-screen rounded-[20px] border-[0.5px] border-black-13 py-6 pr-8 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <div className={`mb-8 flex flex-row`}>
          <div className='mx-[33px] flex w-[40%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-name'
            >
              Título
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='offer-name'
              placeholder='Título de la oferta'
              type='text'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-date'
            >
              Fecha de validez
            </label>
            <input
              className='h-[39px] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='offer-date'
              placeholder='22/01/2025'
              type='date'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-date-end'
            >
              Fecha de caducidad
            </label>
            <input
              className='h-[39px] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='offer-date-end'
              placeholder='23/01/2025'
              type='date'
            ></input>
          </div>
        </div>
        <div className={`mb-8 flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <p className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Categoría
            </p>
            <label className='mb-3' htmlFor='offer-category'>
              Inserte el tipo de oferta.
            </label>
            <OffertDropdown />
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <p className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Ingresar link y/o web
            </p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <div className='mt-3 flex flex-row'>
              <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[555px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='post-web'
                placeholder='www.ejemplo.com'
                type='text'
              ></input>
            </div>
            <button className='self-end pr-3 font-darker-grotesque text-[18px] font-darker-grotesque-600 text-[#FE5833]'>
              Actualizar link
            </button>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <div className='mx-[33px] mb-10 flex flex-col gap-2'>
            <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Descripción
            </label>
            <TextEditor />
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-img'
            >
              Imagen destacada
            </label>
            <div className='mb-4 flex flex-row'>
              <div className='flex flex-col'>
                <label
                  className='mb-[8px] w-[500px] font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Usa formatos PNG o JPG para mejor calidad: </strong>{' '}
                  412x300 px
                </label>
                <div className='mt-3 h-[280px] w-[314px]'>
                  <ImageUpload />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button className='h-[48px] w-[150px] rounded-[10px] bg-[#FFFFFF] px-3 font-inter text-[18px] font-inter-400 text-[#FD3600]'>
            Vista previa
          </button>
          <button
            className='h-[48px] w-[207px] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF]'
            onClick={handlePublished}
          >
            Publicar
          </button>
        </div>
      </div>
      {showPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black-8 opacity-75'
            onClick={handleClosePopup}
          ></div>
          <div className='relative z-10'>
            <PostPublished onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </section>
  )
}
