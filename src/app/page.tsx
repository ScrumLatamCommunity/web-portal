import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
  FlagsCommunity,
  CounterToCommunity,
} from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'
export default function Home() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <WelcomeToCommunity />
      <FlagsCommunity />
      <CounterToCommunity />
      <Reviews />
      <DiscoverCommunity />
    </main>
  )
}
