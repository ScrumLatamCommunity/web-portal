'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React from 'react'
import { flags } from '@/data/data'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import PhoneIcon from '@/assets/PhoneIcon'

type Flag = {
  id: number
  name: string
  flag: string
}

export default function SponsorProfile() {
  // const [FlagCompany, setCompanyFlag] = useState<Flag[]>([])
  // useEffect(() => {
  //   setCompanyFlag(flags)
  // }, [])

  return (
    <section className={`${darkerGrotesque.variable} ${karla.variable}`}>
      <h1
        className={`items-left ml-12 max-w-[1980px] text-[28px] font-darker-grotesque-700 text-[#082965]`}
      >
        Perfil del Sponsor
      </h1>
      <div
        className={`w-[1000px] rounded-[20px] border-[0.5px] border-black-13 py-4`}
      >
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='font-darker-grotesque-700' htmlFor='company-name'>
              Nombre de la empresa
            </label>
            <p
              className='h-[39px] w-[325px] rounded-[10px] bg-[#D9D9D940] py-2'
              id='company-name'
            >
              Nombre de la empresa
            </p>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque-700'
              htmlFor='specialization'
            >
              Área de Especialización
            </label>
            <p
              className='h-[39px] w-[325px] rounded-[10px] bg-[#D9D9D940]'
              id='specialization'
            >
              Área de Especialización
            </p>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='font-darker-grotesque-700' htmlFor='sponsor-date'>
              Fecha de ingreso
            </label>
            <p
              className='h-[39px] w-[120px] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='sponsor-date'
            >
              22/01/2025
            </p>
          </div>
        </div>
        <div className={`flex flex-row`}>
          <div className={`flex flex-col`}>
            <div className='flex flex-row'>
              <div className=''>
                <div className={`flex flex-row`}>
                  <div className='mx-[33px] flex flex-col gap-2'>
                    <label
                      className='font-darker-grotesque-700'
                      htmlFor='company-mail'
                    >
                      Mail
                    </label>
                    <p
                      className='h-[39px] w-[325px] rounded-[10px] bg-[#D9D9D940]'
                      id='company-mail'
                    >
                      ejemplo@scrumlatam.com
                    </p>
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
                      <p
                        className='h-[39px] w-[209px] rounded-[10px] bg-[#D9D9D940] py-2'
                        id='company-country'
                      >
                        Colombia
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mx-[33px] flex flex-col gap-2'>
                  <label
                    className='font-darker-grotesque-700'
                    htmlFor='company-description'
                  >
                    Descripción
                  </label>
                  <p
                    className='h-auto w-[497px] rounded-[10px] bg-[#D9D9D940]'
                    id='company-description'
                  >
                    Acá va un texto de ejemplo. Acá va un texto de ejemplo. Acá
                    va un texto de ejemplo. Acá va un texto de ejemplo. Acá va
                    un texto de ejemplo. Acá va un texto de ejemplo.
                  </p>
                </div>
              </div>
              <div>
                <label
                  className='font-darker-grotesque-700'
                  htmlFor='company-logo'
                >
                  Logotipo
                </label>
                <img
                  alt='company-logo'
                  className='h-[200px] w-[233px]'
                  src='https://s3-alpha-sig.figma.com/img/de3b/8047/1394f75f44b738546ad5200e89dce3c5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwlmJSg9vPyNSDEM5GiE-zPQpxFErf7y3xKmnRG491bjAkHx0iDs4iNueNpHWR2uD8W5el6NVzZyCCSAQbNdCtWMaL~FQtjEES1TsOBEPX~z-KWGQgCxGEbZ7D2sy8PZbhle26-y7YghQMcGRoO~H6Glc2dOuSFlj9aK5NvJovbzJMUePIZTbIzsI9uidR8ktm-slepaM770BsatO6R3u3FEBY9luPaigl7ZeUnSHF674YRHuacMIOIGhPtHpz~QDYWjGdprL15T5jYebm4BpGrtdHGqPzD828-mdC9TNWlKcnRvlFqUNk60ZZZaHF1dPejKSMmEJVo~Dz3vMYv2Vg__'
                ></img>
              </div>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-web'
              >
                Web
              </label>
              <div className='flex flex-row'>
                <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <p
                  className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940]'
                  id='company-web'
                >
                  www.ejemplo.com
                </p>
              </div>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-wpp'
              >
                Whatsapp
              </label>
              <div className='flex flex-row'>
                <PhoneIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                <p
                  className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940]'
                  id='company-wpp'
                >
                  +99 9999999999
                </p>
              </div>
            </div>
            <div className='mx-[33px] flex flex-col gap-2'>
              <label
                className='font-darker-grotesque-700'
                htmlFor='company-socials1'
              >
                Redes Sociales
              </label>
              <p
                className='h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940]'
                id='company-socials1'
              >
                https://www.linkedin.com/ejemplo
              </p>
              <p
                className='h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940]'
                id='company-socials2'
              >
                https://www.instagram.com/ejemplo
              </p>
              <p
                className='h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940]'
                id='company-socials3'
              >
                https://www.facebook.com/ejemplo
              </p>
            </div>
            <label
              className='pl-8 font-darker-grotesque-700'
              htmlFor='company-logo'
            >
              Banner Promocional
            </label>
            <img
              className='h-[210px] w-[530px] pl-8'
              alt='company-banner'
              src='https://s3-alpha-sig.figma.com/img/6949/fcd6/a60860f289f270b2d24b6422f720e098?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C8~40cv4zNHSPUsnxyqChV4aPCQTCS7DyafOxv9hLFVvSOhN22dMpQX3JcJLSKvxLZRbQHJfLuWdgbTyqdVgBHKWeqq7goij2WBsVcCgxYk27AAbcFB1ho9mNU0YKRhTYMspiWa6prMDxBE8JJL3XTB9PbqpOmnrDAzsJicO5ba61P-6vgT8SH~JF2m0Wj1mEb4QjfJdcaRNk1IHi~wfjhJlHWtBlRGFYzcMj3OeGzGcHiHYbHrEgA7qRPh3LrZb0JOHld1CfpnrkVsX3UxY2hUFYb~YZusA7nJBmLfpHag9gL7j4bo81QX4NASl3jGoCPI2Bzf1hRIhgqNC09XiLA__'
            ></img>
          </div>
        </div>
        <div className={`${inter.variable} flex w-full flex-row justify-end`}>
          <button className='mx-12 my-6 h-[39px] w-[auto] rounded-[10px] bg-[#FD3600] px-3 text-[#FFFFFF]'>
            Editar Información
          </button>
        </div>
      </div>
    </section>
  )
}
