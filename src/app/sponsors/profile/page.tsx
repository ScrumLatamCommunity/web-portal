import React from 'react'

export default function SponsorProfile() {
  return (
    <section>
      <h1 className={`items-left ml-12 max-w-[1980px]`}>Perfil del Sponsor</h1>
      <div className={`w-[1000px] border-[0.5px] border-black-13 p-8`}>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='' htmlFor='company-name'>
              Nombre de la empresa
            </label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='company-name'
              placeholder='Nombre de la empresa'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='specialization'>Área de Especialización</label>
            <input
              className='h-[39px] w-[325px] bg-[#D9D9D940]'
              type='text'
              id='specialization'
              placeholder='Área de Especialización'
            ></input>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label htmlFor='sponsor-date'>Fecha de ingreso</label>
            <input
              className='h-[39px] w-[120px] bg-[#D9D9D940] p-[8px] text-center'
              type='text'
              id='sponsor-date'
              placeholder='22/01/2025'
            ></input>
          </div>
        </div>
        <div className={`flex flex-row`}>
          <div className={`flex flex-col`}>
            <div className={`flex flex-row`}>
              <div className='mx-[33px] flex flex-col gap-2'>
                <label htmlFor='company-mail'>Mail</label>
                <input
                  className='h-[39px] w-[325px] bg-[#D9D9D940]'
                  type='text'
                  id='company-mail'
                  placeholder='ejemplo@scrumlatam.com'
                ></input>
              </div>
              <div className='mx-[33px] flex flex-col gap-2'>
                <label htmlFor='company-country'>País</label>
                <input
                  className='h-[39px] w-[325px] bg-[#D9D9D940]'
                  type='text'
                  id='company-country'
                  placeholder='Colombia'
                ></input>
              </div>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label htmlFor='company-description'>Descripción</label>
              <p
                className='h-[140px] w-[500px] bg-[#D9D9D940]'
                id='company-description'
              >
                Acá va un texto de ejemplo, acá va un texto de ejemplo, acá va
                un texto de ejemplo. Acá va un texto de ejemplo, Acá va un texto
                de ejemplo, Acá va un texto de ejemplo,
              </p>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label htmlFor='company-web'>Web</label>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='company-web'
                placeholder='www.ejemplo.com'
              ></input>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label htmlFor='company-wpp'>Whatsapp</label>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='company-wpp'
                placeholder='+99 9999999999'
              ></input>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label htmlFor='company-socials1'>Redes Sociales</label>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='company-socials1'
                placeholder='https://www.linkedin.com/ejemplo'
              ></input>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='company-socials2'
                placeholder='https://www.instagram.com/ejemplo'
              ></input>
              <input
                className='h-[39px] w-[325px] bg-[#D9D9D940]'
                type='text'
                id='company-socials3'
                placeholder='https://www.facebook.com/ejemplo'
              ></input>
            </div>
            <label htmlFor='company-logo'>Banner Promocional</label>
            <img alt='company-banner'></img>
          </div>
          <div>
            <label htmlFor='company-logo'>Logotipo</label>
            <img alt='company-logo'></img>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button className='h-[39px] w-[auto] bg-[#FD3600] px-3 text-[#FFFFFF]'>
            Editar Información
          </button>
        </div>
      </div>
    </section>
  )
}
