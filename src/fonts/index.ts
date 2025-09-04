import { Darker_Grotesque, Karla, Roboto, Inter } from 'next/font/google'

export const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--darker-grotesque'
})
export const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--karla'
})
export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--roboto'
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--inter'
})
