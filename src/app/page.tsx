import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
  FlagsCommunity,
  CounterToCommunity,
  News,
  DataComunity,
  JoinOurCommunity,
  Sponsors
} from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'

export default function Home() {
  return (
    <main
      className={`mx-auto max-w-screen-2xl ${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <WelcomeToCommunity />
      <FlagsCommunity />
      <DataComunity />
      <CounterToCommunity />
      <News />
      <Reviews />
      <Sponsors />
      <DiscoverCommunity />
      <JoinOurCommunity />
    </main>
  )
}
