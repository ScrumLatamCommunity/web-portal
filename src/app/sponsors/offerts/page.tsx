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
    if (status === 'ACTIVE') return 'bg-green-100 text-green-800'
    if (status === 'INACTIVE') return 'bg-red-100 text-red-800'
    return 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status: string) => {
    if (status === 'ACTIVE') return 'Publicado'
    if (status === 'INACTIVE') return 'Inactivo'
    return status
  }

  const getButtonStyle = (status: string) => {
    return status === 'ACTIVE'
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-[#FD3600] hover:bg-[#E62E00]'
  }

  const getButtonText = (status: string) => {
    return status === 'ACTIVE' ? 'Desactivar' : 'Activar'
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

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8 max-w-[2180px]`}
    >
      <h1 className='font-darker-grotesque text-[30px] font-bold text-[#FE2E00]'>
        Mis Publicaciones
      </h1>

      {/* Sección de Posts */}
      <div className='mt-8'>
        <h2 className='font-darker-grotesque text-2xl font-semibold'>Posts</h2>

        <div className='mt-4 rounded-[10px] bg-[#FFEAE6] p-2 py-4'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-5 text-center font-darker-grotesque text-[18px] font-bold'>
              Título
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Categoría
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Fechas
            </div>
            <div className='col-span-1 text-center font-darker-grotesque text-[18px] font-bold'>
              Estado
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Acciones
            </div>
          </div>
        </div>

        <div className='custom-scrollbar max-h-[500px] overflow-y-auto'>
          {sponsorData?.posts && sponsorData.posts.length > 0 ? (
            sponsorData.posts.map((post) => (
              <div
                key={post.id}
                className='grid grid-cols-12 items-center gap-4 border-b border-gray-200 p-3 py-4 hover:bg-gray-50'
              >
                <div className='col-span-5'>
                  <div className='flex items-center'>
                    {post.imageWeb ? (
                      <img
                        src={post.imageWeb}
                        alt={post.title}
                        className='mr-3 h-16 w-16 rounded-md object-cover'
                      />
                    ) : (
                      <div className='mr-3 h-16 w-16 rounded-md bg-gray-200' />
                    )}
                    <div>
                      <h3 className='font-semibold'>{post.title}</h3>
                      <p className='line-clamp-1 text-sm text-gray-600'>
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-span-2 text-center'>
                  <span className='rounded-full bg-gray-100 px-3 py-1 text-sm'>
                    {post.category}
                  </span>
                </div>

                <div className='col-span-2 text-center text-sm'>
                  <div>{new Date(post.validFrom).toLocaleDateString()}</div>
                  <div className='text-gray-500'>a</div>
                  <div>{new Date(post.validUntil).toLocaleDateString()}</div>
                </div>

                <div className='col-span-1 text-center'>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(post.status)}`}
                  >
                    {getStatusText(post.status)}
                  </span>
                </div>

                <div className='col-span-2 text-center'>
                  <button
                    onClick={() =>
                      handleStatusChangeConfirm(
                        post.id,
                        'post',
                        post.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
                      )
                    }
                    className={`rounded px-4 py-2 text-white transition-colors ${getButtonStyle(post.status)}`}
                  >
                    {getButtonText(post.status)}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className='p-6 text-center text-gray-500'>
              No hay posts creados
            </div>
          )}
        </div>
      </div>

      {/* Sección de Ofertas */}
      <div className='mt-12'>
        <h2 className='font-darker-grotesque text-2xl font-semibold'>
          Ofertas
        </h2>

        <div className='mt-4 rounded-[10px] bg-[#FFEAE6] p-2 py-4'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-5 text-center font-darker-grotesque text-[18px] font-bold'>
              Título
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Categoría
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Fechas
            </div>
            <div className='col-span-1 text-center font-darker-grotesque text-[18px] font-bold'>
              Estado
            </div>
            <div className='col-span-2 text-center font-darker-grotesque text-[18px] font-bold'>
              Acciones
            </div>
          </div>
        </div>

        <div className='custom-scrollbar max-h-[500px] overflow-y-auto'>
          {sponsorData?.offers && sponsorData.offers.length > 0 ? (
            sponsorData.offers.map((offer) => (
              <div
                key={offer.id}
                className='grid grid-cols-12 items-center gap-4 border-b border-gray-200 p-3 py-4 hover:bg-gray-50'
              >
                <div className='col-span-5'>
                  <div className='flex items-center'>
                    {offer.image ? (
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className='mr-3 h-16 w-16 rounded-md object-cover'
                      />
                    ) : (
                      <div className='mr-3 h-16 w-16 rounded-md bg-gray-200' />
                    )}
                    <div>
                      <h3 className='font-semibold'>{offer.title}</h3>
                      <p className='line-clamp-1 text-sm text-gray-600'>
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-span-2 text-center'>
                  <span className='rounded-full bg-gray-100 px-3 py-1 text-sm'>
                    {offer.category}
                  </span>
                </div>

                <div className='col-span-2 text-center text-sm'>
                  <div>{new Date(offer.validFrom).toLocaleDateString()}</div>
                  <div className='text-gray-500'>a</div>
                  <div>{new Date(offer.validUntil).toLocaleDateString()}</div>
                </div>

                <div className='col-span-1 text-center'>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(offer.status)}`}
                  >
                    {getStatusText(offer.status)}
                  </span>
                </div>

                <div className='col-span-2 text-center'>
                  <button
                    onClick={() =>
                      handleStatusChangeConfirm(
                        offer.id,
                        'offer',
                        offer.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
                      )
                    }
                    className={`rounded px-4 py-2 text-white transition-colors ${getButtonStyle(offer.status)}`}
                  >
                    {getButtonText(offer.status)}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className='p-6 text-center text-gray-500'>
              No hay ofertas creadas
            </div>
          )}
        </div>
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
