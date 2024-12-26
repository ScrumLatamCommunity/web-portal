'use client'

import Link from 'next/link'
import { BorderLinearProgress } from '@/app/home/components/progressBar'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useState } from 'react'

interface ListaItem {
  isActive: boolean
  label: string
}

const Lista = () => {
  const [expanded, setExpanded] = useState(true)
  const listaItems: ListaItem[] = [
    { label: 'Bienvenida', isActive: true },
    { label: 'Términos y condiciones', isActive: true },
  ]

  const handleToggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='mx-6 h-3/6 max-h-[450px]'>
      <div className='flex items-center justify-between bg-[#FFBEB0] p-4'>
        <div className='h-6 min-h-[24px] w-6 min-w-[24px] rounded-full border border-gray-300 bg-white' />
        <h2 className='text-xl font-medium'>Conociendo a la comunidad</h2>
        {expanded ? (
          <ChevronUp onClick={handleToggleExpanded} />
        ) : (
          <ChevronDown onClick={handleToggleExpanded} />
        )}
      </div>
      {expanded && (
        <ul className='max-h-[200px] overflow-y-auto bg-[#FFBEB0] px-4'>
          {listaItems.map((item, index) => (
            <li key={index} className='flex items-center py-1'>
              <div
                className={`size-6 min-h-[24px] min-w-[24px] rounded-full ${
                  item.isActive ? 'bg-[#061D48]' : 'bg-white'
                } border border-gray-300`}
              />
              <span className='ml-4 text-lg'>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Travel() {
  const [showNextModuleButton] = useState(false)
  const [checkedA, setCheckedA] = useState(false)
  const [checkedB, setCheckedB] = useState(false)
  const value = 15

  return (
    <div className='relative flex h-[70vh] max-h-[450px] w-screen'>
      <div className='h-full max-h-[400px] w-2/6 min-w-[240px]'>
        <div className='h-1.5/6 mx-6 mb-6 mt-10 bg-[#FFBEB0]'>
          <h1 className='p-4 text-3xl font-medium'>Onboarding</h1>
          <div className='px-5 py-1'>
            <BorderLinearProgress variant='determinate' value={value} />
            <p>{value}%&nbsp;&nbsp;Completado</p>
          </div>
        </div>
        <Lista />
        {showNextModuleButton && (
          <a
            className='mx-6 mb-6 rounded-md bg-[#FD3600] p-2 font-bold text-white'
            href='terms'
          >
            Siguiente módulo
          </a>
        )}
      </div>
      <div className='relative ml-6 mt-10 h-[85%] w-4/6 overflow-x-auto overflow-y-auto'>
        <p className='mb-5 whitespace-pre-line'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id illo
          quisquam quae qui deserunt dolor voluptas maiores quia. Doloremque
          sequi accusamus est nesciunt obcaecati nostrum. Cum distinctio quam
          similique sit ad non magni voluptates molestias optio, iure ex
          placeat, impedit sint sequi nulla ducimus voluptatum perferendis neque
          atque ipsam saepe nesciunt doloremque quasi. Hic libero eligendi
          reiciendis tempore quidem nisi quisquam, voluptatum eum et eaque, non
          voluptates expedita alias exercitationem fugiat molestias accusamus
          quam! Libero minima ipsa sit pariatur voluptatibus commodi illum ut ab
          magnam nam saepe obcaecati delectus nulla animi aspernatur aperiam,
          quo impedit necessitatibus deserunt dolor praesentium dolores ad. Quod
          et sint, nihil obcaecati dolorum ea hic expedita pariatur quos eaque
          itaque at, placeat, asperiores praesentium error dolorem perspiciatis
          labore assumenda? Iusto aliquam quibusdam earum adipisci culpa
          perspiciatis, illo unde reiciendis sint incidunt rem porro
          praesentium? Quasi porro ratione labore iure tenetur? Esse,
          praesentium quas! Sit consectetur delectus sequi expedita.
          Perspiciatis ullam vero obcaecati aliquam, nulla illo iste assumenda
          eaque dolores explicabo quas consequatur quo facere, qui nesciunt
          voluptatum nobis autem. Libero expedita quo atque ipsa similique
          placeat corporis a assumenda quas impedit, dolorum tempora voluptatem
          quidem molestiae nostrum repellendus temporibus consequatur. Fugiat
          perspiciatis repellat impedit atque, eaque rerum nam. Ipsam aut
          recusandae, sed ipsum mollitia earum eligendi ex pariatur repellendus
          eveniet quidem nam veniam veritatis quas laborum maiores beatae ab
          repellat, aperiam, fugiat itaque. Nobis sequi sint ratione dicta nemo
          veritatis soluta ullam praesentium culpa quae hic, dolor, et amet
          ipsum architecto labore sapiente, eaque iure reprehenderit qui libero
          explicabo inventore consequuntur. Sunt odio, debitis necessitatibus
          animi sed veniam eius quam explicabo laborum nulla maxime deleniti
          itaque consectetur error dignissimos a quasi doloremque ducimus
          quisquam amet! Ratione quae nostrum porro dolorem neque facere
          reprehenderit inventore harum odio laborum illum totam doloremque
          facilis quibusdam quasi, fugiat obcaecati provident ad sit tempora,
          ipsa corrupti! Tempora odio ad molestias, porro numquam minima
          repellat laboriosam libero provident ipsam, tempore doloremque
          asperiores, dolor debitis optio labore nam? Rerum expedita, eaque
          minima, magnam facere accusantium, autem voluptates labore ea quaerat
          deserunt! Sapiente accusantium magni molestias. Ad reprehenderit et
          quod at deserunt neque nam expedita omnis quos fuga, nesciunt
          doloribus incidunt dicta dolorum dolor hic? Facere et, veritatis
          impedit aliquam nemo, ipsum alias rerum quisquam ratione recusandae
          temporibus maiores assumenda quasi tenetur, ex eveniet? Cumque
          mollitia et accusantium molestiae blanditiis impedit vel. Suscipit
          voluptatibus, excepturi obcaecati laboriosam animi natus blanditiis
          quam illum facilis quisquam dolorem corporis quasi aliquam possimus
          dolore vero eius? Cumque, vero animi ut voluptate illum autem odio qui
          officia laudantium modi praesentium deleniti nihil possimus omnis
          recusandae quae incidunt similique facere necessitatibus non commodi
          ad pariatur at nisi. Ut alias repudiandae eum dolore soluta harum
          ratione, itaque qui enim tempore et, officia quos necessitatibus esse
          in perspiciatis laudantium reiciendis a atque, eaque beatae ipsa
          libero! Provident reprehenderit nam exercitationem quos suscipit
          corrupti accusantium iusto, amet reiciendis expedita sint ut commodi,
          quod blanditiis pariatur sed quia totam quisquam magni alias adipisci
          tenetur? Eius, quo ut. Earum, maiores voluptatum officiis dolores in
          consectetur.
        </p>
        {checkedA && checkedB ? (
          <Link
            className='mb-4 rounded-md bg-[#FD3600] p-2 font-bold text-white'
            href='/'
          >
            Siguiente módulo
          </Link>
        ) : (
          <div className='mt-4'>
            <label>
              <input
                checked={checkedA}
                onChange={(e) => setCheckedA(e.target.checked)}
                type='checkbox'
              />
              Acepto los términos y condiciones
            </label>
            <br />
            <label>
              <input
                checked={checkedB}
                onChange={(e) => setCheckedB(e.target.checked)}
                type='checkbox'
              />
              Estoy de acuerdo con la política de privacidad
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
