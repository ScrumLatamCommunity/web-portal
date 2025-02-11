import { flags } from '@/data/data'

export function getCountryFlag(country?: string) {
  if (!country) return '/default-flag.png'
  const flag = flags.find((f) => f.name === country)

  return flag?.flag || '/default-flag.png'
}
