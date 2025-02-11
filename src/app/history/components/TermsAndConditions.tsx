import React, { useState } from 'react'

export const TermsAndConditions = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col justify-start gap-4 pt-4'>
      <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
        <strong>Bienvenida a SCRUM LATAM</strong>
      </p>
      <p className='flex flex-col text-start font-karla text-sm text-blue-8'>
        Estamos encantados de que te unas a nuestra comunidad. SCRUM LATAM es un
        espacio digital dedicado a la difusión y el aprendizaje en las buenas
        prácticas herramientas y técnicas en Agile. Aquí podrás compartir
        experiencias, recursos y conocimientos para fomentar el liderazgo ágil
        en las organizaciones.
        <button
          className={`ml-2 border-none pr-8 text-end font-darker-grotesque text-sm font-semibold text-red-400 ${open ? 'hidden' : ''}`}
          onClick={() => setOpen(!open)}
        >
          Leer más
        </button>
      </p>

      {open && (
        <div className='flex flex-col justify-start gap-4'>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            <strong>Nuestra Misión y Visión</strong>
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            <strong>Misión:</strong> Compartir y fomentar el mindset agile a
            través del intercambio de conocimiento y buenas prácticas en la
            comunidad LATAM.
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            <strong>Visión:</strong> Convertirnos en el principal espacio de
            aprendizaje y crecimiento en Latinoamérica, generando un impacto
            positivo en las organizaciones a través de nuestros miembros.
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            <strong>Compromiso de Participación</strong>
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            Al unirte a SCRUM LATAM, te comprometes a:
          </p>
          <ul className='list-disc space-y-2 pl-6 font-karla text-sm text-blue-8'>
            <li>
              Participar activamente y con respeto en todas las actividades,
              discusiones y eventos.
            </li>
            <li>
              Mantener un comportamiento cortés y profesional en tus
              interacciones.
            </li>
            <li>
              Compartir contenido relevante en Buenas prácticas en Agilidad.
            </li>
            <li>
              Respetar los derechos de autor y la privacidad de los demás
              miembros.
            </li>
          </ul>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            <strong>Privacidad y Protección de Datos</strong>
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-sm text-blue-8'>
            En SCRUM LATAM, valoramos tu privacidad. No compartiremos tus datos
            personales con terceros sin tu consentimiento.
          </p>
          <button
            className='ml-2 border-none pr-8 text-end font-darker-grotesque text-sm font-semibold text-red-400'
            onClick={() => setOpen(!open)}
          >
            Leer menos
          </button>
        </div>
      )}
    </div>
  )
}
