'use client'
import React from 'react'
import { useState } from 'react'

export default function SponsorProfile() {
  return (
    <section>
      <h1 className={`items-left ml-12 max-w-[1980px]`}>
        Publica tu contenido
      </h1>
      <h2 className={`items-left ml-12 max-w-[1980px]`}>
        Llena este formulario para compartir tus noticias con nuestra comunidad.
      </h2>
      <div className={`w-[1200px] border-[0.5px] border-black-13 p-8`}>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='' htmlFor='post-title'>
              Título
            </label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='post-title'
              placeholder='Título de la publicacion'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-date'>Fecha de validez</label>
            <input
              className='h-[39px] w-[140px] bg-[#D9D9D940] p-[8px] text-center'
              type='text'
              id='post-date'
              placeholder='22/01/2025'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-date-end'>Fecha de caducidad</label>
            <input
              className='h-[39px] w-[140px] bg-[#D9D9D940] p-[8px] text-center'
              type='text'
              id='post-date-end'
              placeholder='23/01/2025'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-category'>Categoría</label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='post-category'
              placeholder='Noticias'
            ></input>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-description'>Descripción</label>
            <p
              className='h-[140px] w-[85%] bg-[#D9D9D940]'
              id='post-description'
            >
              Acá va un texto de ejemplo, acá va un texto de ejemplo, acá va
              texto de ejemplo. Acá va un texto de ejemplo, Acá va un texto de
              de ejemplo, Acá va un texto de ejemplo,
            </p>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <p>Ingresar link y/o web</p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='post-web'
              placeholder='www.ejemplo.com'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-img'>Imagen destacada</label>
            <div className='flex flex-row'>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='post-img'
                placeholder='Subir archivo'
              ></input>
              <button className='mx-4 h-[39px] w-[auto] bg-[#FD3600] px-3 text-[#FFFFFF]'>
                Subir Archivo
              </button>
            </div>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button className='h-[39px] w-[auto] bg-[#FFFFFF] px-3 text-[#FD3600]'>
            Vista previa
          </button>
          <button className='h-[39px] w-[auto] bg-[#FD3600] px-3 text-[#FFFFFF]'>
            Publicar
          </button>
        </div>
      </div>
      <h1 className={`items-left ml-12 max-w-[1980px]`}>
        Ofertas para la Comunidad
      </h1>
      <h2 className={`items-left ml-12 max-w-[1980px]`}>
        Llena este formulario para compartir tus beneficios u ofertas con
        nuestra comunidad.
      </h2>
      <div className={`w-[1200px] border-[0.5px] border-black-13 p-8`}>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='' htmlFor='offer-name'>
              Título
            </label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='offer-name'
              placeholder='Título de la oferta'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='offer-date'>Fecha de validez</label>
            <input
              className='h-[39px] w-[120px] bg-[#D9D9D940] p-[8px] text-center'
              type='text'
              id='offer-date'
              placeholder='22/01/2025'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='offer-date-end'>Fecha de caducidad</label>
            <input
              className='h-[39px] w-[120px] bg-[#D9D9D940] p-[8px] text-center'
              type='text'
              id='offer-date-end'
              placeholder='23/01/2025'
            ></input>
          </div>
        </div>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <p>Categoría</p>
            <label htmlFor='offer-category'>Inserte el tipo de oferta.</label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='offer-category'
              placeholder='Oferta'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <p>Ingresar link y/o web</p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='post-web'
              placeholder='www.ejemplo.com'
            ></input>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-description'>Descripción</label>
            <p
              className='h-[140px] w-[85%] bg-[#D9D9D940]'
              id='post-description'
            >
              Acá va un texto de ejemplo, acá va un texto de ejemplo, acá va
              texto de ejemplo. Acá va un texto de ejemplo, Acá va un texto de
              de ejemplo, Acá va un texto de ejemplo,
            </p>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='post-img'>Imagen destacada</label>
            <div className='flex flex-row'>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='post-img'
                placeholder='Subir archivo'
              ></input>
              <button className='mx-4 h-[39px] w-[auto] bg-[#FD3600] px-3 text-[#FFFFFF]'>
                Subir Archivo
              </button>
            </div>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button className='h-[39px] w-[auto] bg-[#FFFFFF] px-3 text-[#FD3600]'>
            Vista previa
          </button>
          <button className='h-[39px] w-[auto] bg-[#FD3600] px-3 text-[#FFFFFF]'>
            Publicar
          </button>
        </div>
      </div>
    </section>
  )
}
