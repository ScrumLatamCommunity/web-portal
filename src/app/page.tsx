import ActivitiesHome from './home/components/ActivitiesHome'
import CommunityActivities from './home/components/CommunityActivities'
import CommunityMembers from './home/components/CommunityMembers'
import {
  WelcomeToCommunity,
  Reviews,
  FlagsCommunity,
  CounterToCommunity,
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
      <Sponsors />
      <JoinOurCommunity />
      <Reviews />
    </main>
  )
}
