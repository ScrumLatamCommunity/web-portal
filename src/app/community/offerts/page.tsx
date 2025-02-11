'use client'

import FacebookIcon from '@/assets/FacebookIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import InstagramIcon from '@/assets/instagramIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import MailIcon from '@/assets/MailIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import { darkerGrotesque, karla, roboto } from '@/fonts'
import Image from 'next/image'
import React, { useState, useEffect } from 'react' // Importa useEffect
import OffertCard from './components/offertsCard'
import { flags } from '@/data/data'
import { Pagination } from '@/app/home//components/Pagination'

const offerts = [
  {
    offertImage:
      'https://s3-alpha-sig.figma.com/img/a260/4e27/5558b571c8524f3b9ff2fa0541318698?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F45S0DbGJqjarOkajsVGYXmr5UeBX7d4Q8qDsKEl-BOHpJHwGH2ngSfzVQvQagBil-3MO3KHs3-7kD9vwihLDtHN9GREyWNiLjkTp1UzxR5BvSY8pqlEMisnPBu9irDWVruN83UXNjp9AlMD56x3viLRq5sQV3akblR7aHDojcdbRka54uAF3kWpXuEOlP0KtQC6jQWEumeONhiE0LERrt-mCvmZ-9fvAc-hqYQylEh~4wsqHTs23zaKnme24bDr9ltb3f~5FUrC9rI~F8LLi365elFT4Z4p2Ll0m7zL-jw4v3Tdxd550gniWiEEur3AYbrwUPU90c-z~noVxTWagw__',
    offertTitle: 'Curso de Desarrollo Web',
    offertDescription:
      'Aprende a crear aplicaciones web con HTML, CSS, y JavaScript.',
    offertDate: '12 de Febrero, 2025',
    offertTime: '18:00',
    offertPlace: 'Salón de Conferencias, Edificio A',
    offertGoTo: 'Desarrolladores novatos y profesionales'
  },
  {
    offertImage:
      'https://s3-alpha-sig.figma.com/img/a260/4e27/5558b571c8524f3b9ff2fa0541318698?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F45S0DbGJqjarOkajsVGYXmr5UeBX7d4Q8qDsKEl-BOHpJHwGH2ngSfzVQvQagBil-3MO3KHs3-7kD9vwihLDtHN9GREyWNiLjkTp1UzxR5BvSY8pqlEMisnPBu9irDWVruN83UXNjp9AlMD56x3viLRq5sQV3akblR7aHDojcdbRka54uAF3kWpXuEOlP0KtQC6jQWEumeONhiE0LERrt-mCvmZ-9fvAc-hqYQylEh~4wsqHTs23zaKnme24bDr9ltb3f~5FUrC9rI~F8LLi365elFT4Z4p2Ll0m7zL-jw4v3Tdxd550gniWiEEur3AYbrwUPU90c-z~noVxTWagw__',
    offertTitle: 'Taller de React.js',
    offertDescription: 'Domina React y construye interfaces interactivas.',
    offertDate: '15 de Febrero, 2025',
    offertTime: '10:00',
    offertPlace: 'Sala 305, Campus B',
    offertGoTo: 'Desarrolladores interesados en React'
  },
  {
    offertImage:
      'https://s3-alpha-sig.figma.com/img/a260/4e27/5558b571c8524f3b9ff2fa0541318698?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F45S0DbGJqjarOkajsVGYXmr5UeBX7d4Q8qDsKEl-BOHpJHwGH2ngSfzVQvQagBil-3MO3KHs3-7kD9vwihLDtHN9GREyWNiLjkTp1UzxR5BvSY8pqlEMisnPBu9irDWVruN83UXNjp9AlMD56x3viLRq5sQV3akblR7aHDojcdbRka54uAF3kWpXuEOlP0KtQC6jQWEumeONhiE0LERrt-mCvmZ-9fvAc-hqYQylEh~4wsqHTs23zaKnme24bDr9ltb3f~5FUrC9rI~F8LLi365elFT4Z4p2Ll0m7zL-jw4v3Tdxd550gniWiEEur3AYbrwUPU90c-z~noVxTWagw__',
    offertTitle: 'Junta sobre Agilidad',
    offertDescription: 'Domina React y construye interfaces interactivas.',
    offertDate: '15 de Febrero, 2025',
    offertTime: '10:00',
    offertPlace: 'Sala 305, Campus B',
    offertGoTo: 'Desarrolladores interesados en React'
  }
]

export default function Offerts() {
  const itemsPerPage = 1
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentItems = isMobile
    ? offerts.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : offerts

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${roboto.variable} ${karla.variable} flex w-full max-w-[1980px] flex-col`}
    >
      <div className=''>
        <Image
          className='w-full'
          src='https://s3-alpha-sig.figma.com/img/79d9/32c9/4e7041f25507be7e10f0bb0529a179b6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bz7ptBGX9VBVCfL~CapIUBoR~qw5EO-vjpPQb1iKUu9rUp4rw2UjwoRaUnAo7SStOKcXS320vBiQGUVaDhBQRQxj5jTkTXn6VDHWNuafLdG6N~ThN2sSv5oSNnadDeVhvYr7jNcsuFn7k8rgeYkcQTLJDJwkeB~ZoPkWy0oZr0mcvIOcTWkhUOU~why~IvCHqmeascu8DCWgal0Sjcxgkqxvb2VHikXtK1SqC8fRuDzrHBfk481v7N9dMbS0NA5eStu3gvOnI6QqpdRJel37BPbaRjh5l1t8mahkNEeiEum03KepB~lyJVoMDw04APRmAO2Y2mHy-8g0-4X8WR5S9w__'
          alt='Offerts'
          width={1200}
          height={540}
        />
      </div>
      <div className='flex flex-col bg-gradient-to-br from-[#e0eafc] to-[#1B6AF400] md:pt-10'>
        <div className='flex flex-row 2xl:ml-[280px]'>
          <div className='md:mr-8'>
            <Image
              className='m-4 object-fill md:h-[175px] md:w-[175px]'
              src='https://s3-alpha-sig.figma.com/img/7384/01ec/2c96a25e3686f2e1b090999f0a6da119?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q9axOfMXTsQJEm9trvgDM1s8iu-9ooJGXcm71hKtQuLME1Nq14GTYKKYF2~CCeY8nPOS8No-sgLdrMUCKhB2lWJIrTr8GbgvJtHhrsh7jQdMQJ9XcDPCN~Jddy0ywVX~dCMYeC556z5u7-7-GEOYKy~arhlMuGtQj-OMe-nFhlUwPFZgnnEwnxYObpi5Ozb~n6loB~-Rm492Ro~2BJ2iJolsU2qC-1eo1sgoLdCt0MEzQl9UP57AmcO4txGcyNBeWDXoBVpK2PI8yXNMaGq3m2Xd9AtNvk4-M-bqus~q5kZwT-kqAKNv1ygPu7K4CiHdSUqHMO5ZK8Smi4C2EEnEqQ__'
              alt='Offerts'
              width={80}
              height={80}
            />
          </div>
          <div className='mt-5 flex w-full flex-col pl-6'>
            <div className='flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[26px] font-extrabold md:mr-4 md:text-[56px]'>
                Aqui Nombre del Sponsor
              </h1>
              <Image
                className='h-[20px] md:mt-3 md:h-[30px] md:w-[50px]'
                src={flags[0].flag}
                alt={'flags'}
                width={30}
                height={10}
              />
            </div>
            <p className='mb-2 font-roboto text-[16px] font-normal md:mb-3 md:text-[26px]'>
              Aqui sus categorías
            </p>
            <div className='mb-6 flex flex-row gap-2 md:gap-4'>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <MailIcon />
              </div>

              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <GlobeIcon className='text-[#FE2E00]' />
              </div>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <FacebookIcon />
              </div>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <InstagramIcon height={20} width={20} />
              </div>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <LinkedInIcon height={20} width={20} />
              </div>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <PhoneIcon className='text-[#FE2E00]' height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
        <h2 className='w-full pb-5 text-center font-darker-grotesque text-[22px] font-darker-grotesque-700 text-[#082965] md:pb-10 md:pt-6 2xl:text-[40px]'>
          Nuestras Certificaciones, cursos y más
        </h2>
      </div>

      <div className='flex flex-col items-center bg-[#FFEAE6] pt-12'>
        {currentItems.map((offert, index) => (
          <OffertCard key={index} {...offert} />
        ))}

        {isMobile && (
          <Pagination
            currentIndex={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            totalItems={offerts.length}
          />
        )}
      </div>
    </section>
  )
}
