'use client'

import { useAuth } from '@/app/context/AuthContext'
import Skeleton from '../components/Skeleton'
import { useEffect, useState } from 'react'
import { darkerGrotesque, inter, karla } from '@/fonts'

interface Post {
  id: string
  sponsorId: string
  status: string
  title: string
  category: string
  validFrom: string
  validUntil: string
  description: string
  link: string
  imageWeb: string
  imageMobile: string
  createdAt: string
  updatedAt: string
}

interface Offer {
  id: string
  sponsorId: string
  status: string
  title: string
  category: string
  validFrom: string
  validUntil: string
  description: string
  link: string
  image: string
  createdAt: string
  updatedAt: string
}

interface SponsorData {
  id: string
  userId: string
  status: string
  companyName: string
  specialization: string
  description: string
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  createdAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    country: string
  }
  posts: Post[]
  offers: Offer[]
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className='bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50'>
      <div className='mx-4 w-full max-w-md rounded-lg bg-white p-6'>
        <h3 className='mb-4 text-xl font-bold'>{title}</h3>
        <p className='mb-6 text-gray-600'>{message}</p>
        <div className='flex justify-end space-x-4'>
          <button
            onClick={onClose}
            className='rounded bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-300'
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className='rounded bg-[#FD3600] px-4 py-2 text-white transition-colors hover:bg-opacity-90'
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MisPublish() {
  const { token, user } = useAuth()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [sponsorData, setSponsorData] = useState<SponsorData | null>(null)
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean
    itemId: string
    itemType: 'post' | 'offer'
    newStatus: string
  }>({
    isOpen: false,
    itemId: '',
    itemType: 'post',
    newStatus: ''
  })

  const fetchSponsorData = async () => {
    setIsLoading(true)
    try {
      if (!user?.sub || !token) {
        setError('No hay información de usuario disponible')
        return
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/user/${user.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data = await response.json()
      setSponsorData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSponsorData()
  }, [user, token])

  const handleStatusChangeConfirm = (
    id: string,
    type: 'post' | 'offer',
    newStatus: string
  ) => {
    setModalConfig({
      isOpen: true,
      itemId: id,
      itemType: type,
      newStatus
    })
  }

  const handleStatusChange = async () => {
    const { itemId, itemType } = modalConfig
    try {
      const endpoint =
        itemType === 'post'
          ? `${process.env.NEXT_PUBLIC_API_URL}sponsors/switchPostStatus/${itemId}`
          : `${process.env.NEXT_PUBLIC_API_URL}sponsors/switchOffertStatus/${itemId}`

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      await fetchSponsorData()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al actualizar el estado'
      )
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'ACTIVE'
      ? 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm'
      : 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm'
  }

  const getButtonStyle = (status: string) => {
    return status === 'ACTIVE'
      ? 'rounded bg-red-500 px-4 py-2 text-white hover:bg-opacity-90'
      : 'rounded bg-[#FD3600] px-4 py-2 text-white hover:bg-opacity-90'
  }

  if (isLoading) {
    return <Skeleton className='h-screen' />
  }

  if (error) {
    return (
      <div className='flex h-[50vh] flex-col items-center justify-center'>
        <div className='text-center'>
          <h2 className='mb-2 text-xl font-semibold text-gray-800'>
            ¡Ups! Algo salió mal
          </h2>
          <p className='text-gray-600'>
            No pudimos cargar tus publicaciones en este momento. Por favor,
            intenta nuevamente más tarde.
          </p>
          <button
            onClick={fetchSponsorData}
            className='mt-4 rounded bg-[#FD3600] px-4 py-2 text-white hover:bg-opacity-90'
          >
            Intentar nuevamente
          </button>
        </div>
      </div>
    )
  }

  console.log(sponsorData)

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8 w-auto max-w-[1980px] items-center overflow-hidden`}
    >
      <h1 className='mb-6 text-2xl font-bold'>Mis Publicaciones</h1>

      {/* Sección de Posts */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>Posts</h2>
        {sponsorData?.posts && sponsorData.posts.length > 0 ? (
          <div className='overflow-x-auto'>
            <table className='w-full rounded-lg border-2 border-[#FD3600]'>
              <thead className='bg-[#FD3600] text-white'>
                <tr>
                  <th className='p-3 text-left'>Título</th>
                  <th className='p-3 text-left'>Categoría</th>
                  <th className='p-3 text-left'>Válido Desde</th>
                  <th className='p-3 text-left'>Válido Hasta</th>
                  <th className='p-3 text-left'>Estado</th>
                  <th className='p-3 text-left'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sponsorData.posts.map((post) => (
                  <tr key={post.id} className='border-b border-gray-200'>
                    <td className='p-3'>{post.title}</td>
                    <td className='p-3'>{post.category}</td>
                    <td className='p-3'>
                      {new Date(post.validFrom).toLocaleDateString()}
                    </td>
                    <td className='p-3'>
                      {new Date(post.validUntil).toLocaleDateString()}
                    </td>
                    <td className='p-3'>
                      <span className={getStatusColor(post.status)}>
                        {post.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className='p-3'>
                      <button
                        onClick={() =>
                          handleStatusChangeConfirm(
                            post.id,
                            'post',
                            post.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
                          )
                        }
                        className={getButtonStyle(post.status)}
                      >
                        {post.status === 'ACTIVE' ? 'Desactivar' : 'Activar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className='text-gray-500'>No hay posts creados</p>
        )}
      </div>

      {/* Sección de Ofertas */}
      <div className='mt-4 space-y-4'>
        <h2 className='text-xl font-semibold'>Ofertas</h2>
        {sponsorData?.offers && sponsorData.offers.length > 0 ? (
          <div className='overflow-x-auto'>
            <table className='w-full rounded-lg border-2 border-[#FD3600]'>
              <thead className='bg-[#FD3600] text-white'>
                <tr>
                  <th className='p-3 text-left'>Título</th>
                  <th className='p-3 text-left'>Categoría</th>
                  <th className='p-3 text-left'>Válido Desde</th>
                  <th className='p-3 text-left'>Válido Hasta</th>
                  <th className='p-3 text-left'>Estado</th>
                  <th className='p-3 text-left'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sponsorData.offers.map((offer) => (
                  <tr key={offer.id} className='border-b border-gray-200'>
                    <td className='p-3'>{offer.title}</td>
                    <td className='p-3'>{offer.category}</td>
                    <td className='p-3'>
                      {new Date(offer.validFrom).toLocaleDateString()}
                    </td>
                    <td className='p-3'>
                      {new Date(offer.validUntil).toLocaleDateString()}
                    </td>
                    <td className='p-3'>
                      <span className={getStatusColor(offer.status)}>
                        {offer.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className='p-3'>
                      <button
                        onClick={() =>
                          handleStatusChangeConfirm(
                            offer.id,
                            'offer',
                            offer.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
                          )
                        }
                        className={getButtonStyle(offer.status)}
                      >
                        {offer.status === 'ACTIVE' ? 'Desactivar' : 'Activar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className='text-gray-500'>No hay ofertas creadas</p>
        )}
      </div>

      <ConfirmModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig((prev) => ({ ...prev, isOpen: false }))}
        onConfirm={handleStatusChange}
        title='Confirmar cambio de estado'
        message={`¿Estás seguro que deseas ${modalConfig.newStatus === 'ACTIVE' ? 'activar' : 'desactivar'} ${modalConfig.itemType === 'post' ? 'el post' : 'la oferta'}?`}
      />
    </section>
  )
}
