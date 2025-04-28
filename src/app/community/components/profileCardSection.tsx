import { ProfileCardProps } from '@/app/community/interfaces/profileCardInterface'
import LinkedInIcon from '@/assets/LinkedinIcon'
import Image from 'next/image'

export default function ProfileCard({
  linkedinUrl,
  description,
  imageUrl,
  name,
  title
}: ProfileCardProps) {
  return (
    <div className='mx-auto flex min-h-[500px] w-fit max-w-[250px] flex-col items-center justify-center rounded-lg p-5 text-center font-sans'>
      <div className='mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full'>
        <Image src={imageUrl} alt='Foto perfil' width={144} height={144} />
      </div>
      <h2 className='mb-1 font-darker-grotesque text-xl font-semibold text-[#072356]'>
        {name}
      </h2>
      <h3 className='mb-2 font-darker-grotesque text-xl font-semibold text-[#072356]'>
        {title}
      </h3>
      <p className='mb-5 text-wrap font-darker-grotesque text-sm text-[#072356]'>
        {description}
      </p>
      <div className='flex justify-center space-x-4'>
        {linkedinUrl && (
          <a
            className='text-[#FE2E00] transition-colors hover:text-red-800'
            href={linkedinUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <LinkedInIcon height={20} width={20} />
            <span className='sr-only'>Behance</span>
          </a>
        )}
      </div>
    </div>
  )
}
