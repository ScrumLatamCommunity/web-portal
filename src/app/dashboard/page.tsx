import { requireAuth } from '@/lib/auth'
import { getCurrentUser } from '@/app/actions/auth'

export default async function DashboardPage() {
  await requireAuth()

  const user = await getCurrentUser()

  return (
    <div>
      <h1>Bienvenido, {user?.username}</h1>
    </div>
  )
}
