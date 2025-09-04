import { flags } from '@/data/data'

export function getCountryFlag(country?: string | string[]) {
  if (!country) return '/default-flag.png'
  const countryName = Array.isArray(country) ? country[0] : country
  const flag = flags.find((f) => f.name === countryName)

  return flag?.flag || '/default-flag.png'
}
