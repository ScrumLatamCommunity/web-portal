import DottedOrange from '@/assets/dottedOrange'
// import DottedBlue from '@/assets/dottedBlue'
import { ProductServiceFeatureInterface } from '../../interfaces/productServiceFeatureInterface'

export default function ProductServiceFeature({
  description,
  image,
  flag,
  linkTitle,
  title,
  highlights,
  socialUrls
}: ProductServiceFeatureInterface) {
  return (
    <section className='relative flex h-dvh flex-1 flex-col justify-around bg-[#FFEAE6] pb-12 md:h-[467px] md:max-w-[1980px] md:flex-row md:pb-0'>
      <DottedOrange className='absolute bottom-0 right-0 h-[250px] w-[250px] translate-y-1/2 md:h-[400px] md:w-[300px]' />

      {/* Imagen + Iconos de Redes Sociales */}
      <div className='relative flex h-full flex-col items-center justify-around md:mx-14 md:justify-center'>
        {image}

        {/* Redes Sociales */}
        <div className='mt-4 flex space-x-4 text-2xl'>
          {socialUrls?.email && (
            <a href={`mailto:${socialUrls.email}`} title='Email'>
              📧
            </a>
          )}
          {socialUrls?.website && (
            <a href={socialUrls.website} title='Website'>
              🌍
            </a>
          )}
          {socialUrls?.facebook && (
            <a href={socialUrls.facebook} title='Facebook'>
              📘
            </a>
          )}
          {socialUrls?.instagram && (
            <a href={socialUrls.instagram} title='Instagram'>
              📸
            </a>
          )}
          {socialUrls?.linkedin && (
            <a href={socialUrls.linkedin} title='LinkedIn'>
              🔗
            </a>
          )}
          {socialUrls?.phone && (
            <a href={`tel:${socialUrls.phone}`} title='Phone'>
              📞
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className='relative mx-6 flex h-full flex-col md:m-12 md:justify-center'>
        {/* Título */}
        <h1 className='mt-4 font-darker-grotesque font-bold tracking-wide text-[#082965] md:text-[48px]'>
          {title}
        </h1>
        <img src={flag} alt='Flag' className='h-6 w-8 md:h-8 md:w-10' />
        {/* Highlights en fila */}
        <ul className='mt-2 flex flex-wrap gap-4 text-lg text-[#061D48] md:text-2xl'>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className='font-roboto text-[#082965] md:text-[20px]'
            >
              {highlight}
            </li>
          ))}
        </ul>

        {/* Descripción */}
        <p className='mt-4 font-karla text-lg leading-7 text-[#061D48] md:text-[25px]'>
          {description}
        </p>

        {/* Botón */}
        <div className='mt-4 flex justify-end'>
          <a
            href='#SQUAD'
            className='rounded-2xl bg-[#FE2E00] px-10 py-3 font-darker-grotesque text-lg text-[#FFFFFF]'
          >
            {linkTitle}
          </a>
        </div>
      </div>
    </section>
  )
}
