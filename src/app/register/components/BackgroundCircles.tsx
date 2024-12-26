export function BackgroundCircles() {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='absolute left-10 top-40 h-48 w-48 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-40 blur-3xl md:left-10 md:top-20'></div>
      <div className='absolute right-10 top-10 h-48 w-48 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-30 blur-3xl md:right-60 md:top-32'></div>
      <div className='absolute left-40 top-80 h-36 w-36 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-20 blur-3xl md:left-40 md:top-60'></div>
    </div>
  )
}
