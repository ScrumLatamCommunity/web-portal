import { Intro, MisionVision, Timeline } from './components/index'
import { darkerGrotesque, karla, roboto } from '@/fonts'

export default function History() {
  return (
    <main
      className={`mx-auto max-w-screen-2xl ${darkerGrotesque.variable} ${karla.variable} ${roboto.variable}`}
    >
      <Intro />
      <MisionVision />
      <Timeline />
    </main>
  )
}
