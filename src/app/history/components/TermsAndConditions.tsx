import React, { useState } from 'react'

export const TermsAndConditions = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col justify-start gap-4 pt-4'>
      <p className='flex flex-col items-baseline text-start font-karla text-xl text-blue-8'>
        <strong>
          Bienvenido a la comunidad Scrum LATAM. A continuación, se detallan los
          términos y condiciones que regulan el uso de nuestro sitio web y
          servicios. Al acceder o utilizar nuestra plataforma, acepten cumplir
          con estos términos y condiciones.
        </strong>
      </p>
      <p className='flex flex-col items-baseline text-start font-karla text-xl text-blue-8'>
        <strong>1. Participación Activa y Respeto:</strong>
      </p>
      <p className='flex flex-col text-start font-karla text-xl text-blue-8 first:items-baseline'>
        Los miembros de la comunidad Scrum Latam se comprometen a participar de
        manera activa y respetuosa en todas las actividades, discusiones y
        eventos. Se espera que los participantes contribuyan con sus
        conocimientos y experiencias de manera constructiva, y que respeten las
        opiniones y perspectivas de los demás miembros. Cualquier comportamiento
        irrespetuoso, ofensivo o que no esté alineado con los valores de la
        comunidad podrá resultar en la exclusión de las actividades y la
        comunidad.
        <button
          className={`ml-2 border-none pr-8 text-end font-darker-grotesque text-sm font-semibold text-red-400 ${open ? 'hidden' : ''}`}
          onClick={() => setOpen(!open)}
        >
          Leer más
        </button>
      </p>
      {open && (
        <div className='flex flex-col justify-start gap-4 pt-4'>
          <p className='flex flex-col items-baseline text-start font-karla text-xl text-blue-8'>
            <strong>2. Confidencialidad y Uso de Información:</strong>
          </p>
          <p className='flex flex-col items-baseline text-start font-karla text-xl text-blue-8'>
            Los miembros de Scrum Latam acuerdan mantener la confidencialidad de
            cualquier información sensible o privada compartida dentro de la
            comunidad.Esto incluye, pero no se limita a, estrategias
            empresariales, desafíos específicos de proyectos y cualquier otro
            contenido que los miembros decidan compartir de manera
            confidencial.La información obtenida a través de la comunidad no
            debe ser utilizada para fines comerciales o de competencia sin el
            consentimiento explícito de las partes involucradas.
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
