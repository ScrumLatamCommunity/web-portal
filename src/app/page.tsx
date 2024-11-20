import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
  FlagsCommunity,
  CounterToCommunity,
  DataComunity,
  JoinOurCommunity,
  Sponsors,
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
      <Sponsors />
      <DiscoverCommunity />
      <JoinOurCommunity />
    </main>
  )
}
