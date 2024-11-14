import { ProfileCardProps } from '@/app/community/interfaces/profileCardInterface'
import GithubIcon from '@/assets/githubIcon'
import BehanceIcon from '@/assets/behanceIcon'
import InstagramIcon from '@/assets/instagramIcon'

export default function ProfileCard({
  behanceUrl,
  description,
  githubUrl,
  image,
  instagramUrl,
  name,
  title,
}: ProfileCardProps) {
  return (
    <div className='mx-auto flex min-h-[500px] max-w-[250px] flex-col items-center justify-center rounded-lg p-5 text-center font-sans'>
      <div className='mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full'>
        {image}
      </div>
      <h2 className='mb-1 text-xl font-semibold text-gray-900'>{name}</h2>
      <h3 className='mb-2 text-xl font-semibold text-gray-700'>{title}</h3>
      <p className='mb-5 text-wrap text-sm text-gray-600'>{description}</p>
      <div className='flex justify-center space-x-4'>
        {githubUrl && (
          <a
            className='text-red-600 transition-colors hover:text-red-800'
            href={githubUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <GithubIcon height={20} width={20} />
            <span className='sr-only'>GitHub</span>
          </a>
        )}
        {behanceUrl && (
          <a
            className='text-red-600 transition-colors hover:text-red-800'
            href={behanceUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <BehanceIcon height={20} width={20} />
            <span className='sr-only'>Behance</span>
          </a>
        )}
        {instagramUrl && (
          <a
            className='text-red-600 transition-colors hover:text-red-800'
            href={instagramUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <InstagramIcon height={20} width={20} />
            <span className='sr-only'>Instagram</span>
          </a>
        )}
      </div>
    </div>
  )
}
