'use client'

import Link from 'next/link'

interface LogoScrumlatamProps {
  href?: string
  width?: number
  height?: number
}

export function MobileLogo({
  href = '/',
  width = 60,
  height = 38
}: LogoScrumlatamProps) {
  return (
    <Link href={href} className='flex flex-row justify-start'>
      <img
        alt='logo'
        width={width}
        height={height}
        className='h-12 w-auto'
        src='https://appwiseinnovations.dev/scrumlatam/logo_admins.png'
      />
    </Link>
  )
}
