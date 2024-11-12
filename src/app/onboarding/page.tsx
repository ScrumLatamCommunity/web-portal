export default function Onboarding() {
  return (
    <div className='relative top-[-74px] flex h-screen w-screen items-center justify-center'>
      <div className='text-center text-3xl'>
        <h1 className='font-bold'>Onboarding</h1>
        <p className='mb-20 px-10 pt-4 text-2xl'>
          Inicia el recorrido de bienvenida para conocer aun mejor a la <br />
          comunidad. Tendrás acceso a todas las herramientas y recursos que{' '}
          <br />
          necesitas para sacarle el máximo provecho. Si tienes alguna pregunta o{' '}
          <br />
          necesitas ayuda en el camino, ¡no dudes en contactarnos!
        </p>
        <a
          className='rounded-full bg-red-500 px-10 py-2 text-xl font-bold text-white hover:bg-red-300'
          href='onboarding/travel'
        >
          Iniciar
        </a>
      </div>
    </div>
  )
}
