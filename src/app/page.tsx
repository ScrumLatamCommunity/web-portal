import { Navbar, WelcomeToCommunity, Footer } from './home/components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'
export default function Home() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <Navbar />
      <WelcomeToCommunity />
      <Footer />
    </main>
  )
}
