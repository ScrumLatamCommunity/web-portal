import { Navbar, WelcomeToCommunity } from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'
export default function Home() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <h1>Hola</h1>
      <Navbar />
      <WelcomeToCommunity />
    </main>
  )
}
