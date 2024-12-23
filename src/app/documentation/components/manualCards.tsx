import { Manual } from '../interfaces/manualInterface'
import FolderIcon from '@/assets/FolderIcon'
import YoutubeIcon from '@/assets/YoutubeIcon'

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  youtube: YoutubeIcon,
  folder: FolderIcon,
}

const colorClassesMap: {
  [key: string]: { bgColor: string; textColor: string }
} = {
  folder: { bgColor: 'bg-[#FFEAE6]', textColor: 'text-[#FE2E00]' },
  youtube: { bgColor: 'bg-[#E6EAF0]', textColor: 'text-[#082965]' },
}

export default function ManualCards({ manual }: { manual: Manual }) {
  const IconComponent = iconMap[manual.icon]
  const colors = colorClassesMap[manual.icon] || {
    bgColor: 'bg-[#E6EAF0]',
    textColor: 'text-[#000000]',
  }

  return (
    <div className='px-6'>
      <div className='md-4 relative mx-auto flex w-[300px] flex-col overflow-hidden rounded-2xl bg-white shadow-md md:mb-2 md:w-[400px]'>
        {/* Ícono superpuesto */}
        {IconComponent && (
          <div
            className={`absolute left-4 top-4 z-10 flex items-center gap-2 rounded-xl px-3 py-1 ${colors.bgColor}`}
          >
            <IconComponent
              className={`text-12px h-6 w-6 ${colors.textColor}`}
            />
            <p
              className={`text-12px font-darker-grotesque font-bold ${colors.textColor}`}
            >
              {manual.type}
            </p>
          </div>
        )}
        {/* Imagen */}
        <img
          alt={manual.title}
          className='h-[250px] w-full object-cover'
          src={manual.image}
        />
        {/* Contenido */}
        <div className='flex flex-1 flex-col justify-between p-3'>
          <div className='pt-1'>
            <p className='mt-1 flex justify-end font-darker-grotesque text-sm text-[#061D48]'>
              {manual.date}
            </p>
            <h2 className='font-darker-grotesque text-2xl font-bold text-[#FE2E00]'>
              {manual.title}
            </h2>
            <p className='mt-2 h-[6rem] overflow-hidden font-karla text-[17px] leading-6 text-[#000000]'>
              {manual.description}
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between pb-[0.25rem] md:pb-6'>
            <a
              className='rounded-full bg-red-400 px-7 py-1 font-darker-grotesque text-white hover:bg-red-300'
              href={manual.link}
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
