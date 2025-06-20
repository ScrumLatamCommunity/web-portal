import ActivitiesHome from './home/components/ActivitiesHome'
import CommunityActivities from './home/components/CommunityActivities'
import CommunityMembers from './home/components/CommunityMembers'
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
      className={`mx-auto w-full max-w-[1920px] overflow-x-hidden p-0 ${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <WelcomeToCommunity />
      <FlagsCommunity />
      <DataComunity />
      <CounterToCommunity />
      <CommunityActivities />
      <ActivitiesHome />
      <CommunityMembers />
      <News />
      <Reviews />
      <Sponsors />
      <DiscoverCommunity />
      <JoinOurCommunity />
    </main>
  )
}
