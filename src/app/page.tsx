import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
  FlagsCommunity,
  CounterToCommunity,
  DataComunity,
  JoinOurCommunity,
} from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'
export default function Home() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <WelcomeToCommunity />
      <FlagsCommunity />
      <DataComunity />
      <CounterToCommunity />
      <Reviews />
      <DiscoverCommunity />
      <JoinOurCommunity />
    </main>
  )
}
