export default function InstagramIcon({
  className,
  height,
  width,
}: {
  className?: string
  height: number
  width: number
}) {
  return (
    <svg
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 19 19'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.66075 0.162826C6.62185 0.118774 6.92819 0.108765 9.37547 0.108765C11.8232 0.108765 12.1291 0.119274 13.0897 0.162826C14.0492 0.206378 14.7045 0.359053 15.2777 0.581802C15.8788 0.808131 16.4234 1.16275 16.8735 1.62099C17.3318 2.07103 17.6864 2.61563 17.9127 3.2168C18.1354 3.78995 18.2876 4.4452 18.3316 5.40428C18.3757 6.36538 18.3857 6.67172 18.3857 9.119C18.3857 11.5663 18.3752 11.8726 18.3316 12.8338C18.2881 13.7928 18.1354 14.4481 17.9127 15.0212C17.6824 15.6134 17.374 16.1164 16.8735 16.617C16.4234 17.0753 15.8788 17.43 15.2777 17.6562C14.7045 17.8789 14.0492 18.0311 13.0902 18.0752C12.1291 18.1192 11.8227 18.1292 9.37547 18.1292C6.92819 18.1292 6.62185 18.1188 5.66075 18.0752C4.70167 18.0316 4.04642 17.8789 3.47327 17.6562C2.88109 17.426 2.37802 17.1176 1.87746 16.617C1.41914 16.167 1.06449 15.6223 0.838272 15.0212C0.615522 14.4481 0.463348 13.7928 0.419296 12.8338C0.375244 11.8726 0.365234 11.5668 0.365234 9.119C0.365234 6.67122 0.375744 6.36538 0.419296 5.40479C0.462848 4.4452 0.615522 3.78995 0.838272 3.2168C1.0646 2.61567 1.41922 2.0711 1.87746 1.62099C2.32749 1.16267 2.87209 0.808025 3.47327 0.581802C4.04642 0.359053 4.70167 0.206878 5.66075 0.162826ZM13.0166 1.78467C12.0665 1.74162 11.7812 1.73211 9.37547 1.73211C6.96974 1.73211 6.68442 1.74162 5.73434 1.78467C4.85584 1.82472 4.3788 1.97138 4.06143 2.09502C3.64096 2.25821 3.34061 2.45343 3.02525 2.76878C2.7104 3.08414 2.51468 3.38449 2.35149 3.80496C2.22785 4.12233 2.08119 4.59937 2.04114 5.47787C1.99809 6.42795 1.98858 6.71327 1.98858 9.119C1.98858 11.5247 1.99809 11.81 2.04114 12.7601C2.08119 13.6386 2.22785 14.1157 2.35149 14.4331C2.49584 14.8245 2.72607 15.1785 3.02525 15.4693C3.31596 15.7684 3.67003 15.9986 4.06143 16.143C4.3788 16.2667 4.85584 16.4133 5.73434 16.4533C6.68442 16.4964 6.96924 16.5059 9.37547 16.5059C11.7817 16.5059 12.0665 16.4964 13.0166 16.4533C13.8951 16.4133 14.3721 16.2667 14.6895 16.143C15.11 15.9798 15.4104 15.7846 15.7257 15.4693C16.0249 15.1786 16.2551 14.8245 16.3994 14.4331C16.5231 14.1157 16.6698 13.6386 16.7098 12.7601C16.7529 11.81 16.7624 11.5247 16.7624 9.119C16.7624 6.71327 16.7529 6.42795 16.7098 5.47787C16.6698 4.59937 16.5231 4.12233 16.3994 3.80496C16.2363 3.38449 16.0411 3.08414 15.7257 2.76878C15.4104 2.45393 15.11 2.25821 14.6895 2.09502C14.3721 1.97138 13.8951 1.82472 13.0166 1.78467ZM8.22503 11.8965C8.58978 12.0477 8.98066 12.1254 9.37547 12.1254C10.1729 12.1254 10.9375 11.8086 11.5013 11.2448C12.0652 10.6811 12.3819 9.91633 12.3819 9.119C12.3819 8.32168 12.0652 7.55696 11.5013 6.99314C10.9375 6.42933 10.1729 6.11258 9.37547 6.11258C8.98066 6.11258 8.58978 6.19035 8.22503 6.34143C7.8602 6.49252 7.52881 6.71397 7.24964 6.99314C6.97047 7.27231 6.74901 7.60373 6.59793 7.96848C6.44684 8.33323 6.36908 8.72419 6.36908 9.119C6.36908 9.51382 6.44684 9.90478 6.59793 10.2695C6.74901 10.6343 6.97047 10.9657 7.24964 11.2448C7.52881 11.524 7.8602 11.7455 8.22503 11.8965ZM6.1007 5.8442C6.96923 4.97567 8.14721 4.48773 9.37547 4.48773C10.6038 4.48773 11.7818 4.97567 12.6503 5.8442C13.5188 6.71273 14.0067 7.89074 14.0067 9.119C14.0067 10.3473 13.5188 11.5252 12.6503 12.3938C11.7818 13.2623 10.6038 13.7503 9.37547 13.7503C8.14721 13.7503 6.96923 13.2623 6.1007 12.3938C5.23217 11.5252 4.74424 10.3473 4.74424 9.119C4.74424 7.89074 5.23217 6.71273 6.1007 5.8442ZM15.0337 5.17774C15.2389 4.97243 15.3543 4.69398 15.3543 4.40364C15.3543 4.11329 15.2389 3.83484 15.0337 3.62954C14.8283 3.42424 14.5499 3.3089 14.2595 3.3089C13.9692 3.3089 13.6907 3.42424 13.4855 3.62954C13.2801 3.83484 13.1648 4.11329 13.1648 4.40364C13.1648 4.69398 13.2801 4.97243 13.4855 5.17774C13.6907 5.38305 13.9692 5.49839 14.2595 5.49839C14.5499 5.49839 14.8283 5.38305 15.0337 5.17774Z'
        fill='#FE2E00'
      />
    </svg>
  )
}