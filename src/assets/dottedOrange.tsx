export default function DottedOrange({
  className,
  height,
  width,
}: {
  className?: string
  height?: number
  width?: number
}) {
  return (
    <svg
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 309 405'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <ellipse
        cx='202.524'
        cy='202.69'
        rx='201.943'
        ry='201.528'
        transform='rotate(61.4584 202.524 202.69)'
        fill='url(#paint0_radial_3_24378)'
        fillOpacity='0.4'
      />
      <defs>
        <radialGradient
          id='paint0_radial_3_24378'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(202.524 202.69) rotate(90) scale(201.528 201.943)'
        >
          <stop stopColor='#FE7354' stopOpacity='0.5' />
          <stop offset='1' stopColor='#FE4218' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  )
}
