import { requireAuth } from '@/lib/auth'

export default async function DashboardPage() {
  await requireAuth()
  return (
    <div>
      <h1>Bienvenido, panel administrador</h1>
    </div>
  )
}
