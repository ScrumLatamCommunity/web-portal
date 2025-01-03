import Founder from './components/Founder'
import {
  Intro,
  MisionVision,
  MobileValuesCulture,
  RegisterNow,
  Timeline,
} from './components/index'

export default function History() {
  return (
    <main>
      <Intro />
      <MisionVision />
      <MobileValuesCulture />
      <Timeline />
      <Founder />
      <RegisterNow />
    </main>
  )
}
