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
      viewBox='0 0 291 445'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='68.5'
        cy='222.5'
        r='222.5'
        fill='url(#paint0_radial_3_24384)'
        fillOpacity='0.2'
      />
      <defs>
        <radialGradient
          id='paint0_radial_3_24384'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(68.5 222.5) rotate(90) scale(222.5)'
        >
          <stop stopColor='#345081' />
          <stop offset='1' stopColor='#1B6AF4' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  )
}
