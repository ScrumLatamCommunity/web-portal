import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
} from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'
export default function Home() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <WelcomeToCommunity />
      <DiscoverCommunity />
      <Reviews />
    </main>
  )
}
