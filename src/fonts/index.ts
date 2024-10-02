import { Darker_Grotesque, Karla, Roboto } from 'next/font/google'

export const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--darker-grotesque',
})
export const karla = Karla({
  subsets: ['latin'],
  variable: '--karla',
})
export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--roboto',
})
