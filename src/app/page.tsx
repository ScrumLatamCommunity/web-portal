import {
  WelcomeToCommunity,
  Reviews,
  DiscoverCommunity,
} from './home/components/index'
export default function Home() {
  return (
    <main>
      <h1>Hola</h1>
      <WelcomeToCommunity />
      <DiscoverCommunity />
      <Reviews />
    </main>
  )
}
