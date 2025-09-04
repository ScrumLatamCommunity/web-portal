import GlobeIcon from '@/assets/GlobeIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import InstagramIconSponsors from '@/assets/InstagramIconSponsors'
import FacebookIcon from '@/assets/FacebookIcon'
import XIcon from '@/assets/twitter-x'
import YoutubeIcon from '@/assets/YoutubeIcon'

const iconMap = [
  { pattern: /linkedin/, component: LinkedInIcon },
  { pattern: /instagram/, component: InstagramIconSponsors },
  { pattern: /facebook/, component: FacebookIcon },
  { pattern: /(www\.x\.com|twitter\.com)/, component: XIcon },
  { pattern: /youtube/, component: YoutubeIcon }
]

interface IconProps {
  className?: string
  height?: number
  width?: number
}

export const getSocialIcon = (social: string, defaultProps: IconProps = {}) => {
  const match = iconMap.find(({ pattern }) => pattern.test(social))
  const Icon = match?.component ?? GlobeIcon

  const iconProps = {
    className: defaultProps.className ?? 'my-1 mr-2 text-[#FE2E00]',
    height: defaultProps.height ?? 30,
    width: defaultProps.width ?? 30
  }

  if (Icon === YoutubeIcon) {
    return (
      <Icon
        {...iconProps}
        className={`${iconProps.className} stroke-[#FE2E00] text-white`}
      />
    )
  }

  return <Icon {...iconProps} />
}
