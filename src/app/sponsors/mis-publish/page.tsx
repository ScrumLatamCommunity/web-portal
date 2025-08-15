'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useEffect, useState } from 'react'
import { EyeOff } from 'react-feather'

interface Course {
  id: string
  title: string
  validFrom: string
  status: 'ACTIVE' | 'INACTIVE'
}

export default function CoursePublications() {
  const { user, token } = useAuth()
  const [filterPublished, setFilterPublished] = useState(true)
  const [filterNotPublished, setFilterNotPublished] = useState(true)
  const [courses, setCourses] = useState<Course[]>([])
  const [sponsorId, setSponsorId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchSponsorId = async () => {
      try {
        if (!user?.sub || !token) return
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}sponsors/user/${user.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )
        if (!res.ok) throw new Error('No se pudo obtener el sponsor')
        const data = await res.json()
        setSponsorId(data.id)
      } catch (err) {
        setError('Error al obtener el sponsor')
      }
    }

    fetchSponsorId()
  }, [user, token])

  useEffect(() => {
    if (!sponsorId) return

    const fetchCourses = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}sponsors/${sponsorId}/posts`
        )
        const data = await res.json()
        setCourses(data)
      } catch (err) {
        setError('Error al obtener los cursos')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [sponsorId])

  const togglePublication = async (course: Course) => {
    const newStatus = course.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}switchOffertStatus/${course.id}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus })
        }
      )

      if (!res.ok) throw new Error('Error actualizando el estado del post')

      setCourses((prev) =>
        prev.map((c) => (c.id === course.id ? { ...c, status: newStatus } : c))
      )
    } catch (err) {
      console.error(err)
    }
  }

  const filteredCourses = courses.filter((course) => {
    if (filterPublished && filterNotPublished) return true
    if (!filterPublished && !filterNotPublished) return true
    if (filterPublished && course.status === 'ACTIVE') return true
    if (filterNotPublished && course.status === 'INACTIVE') return true
    return false
  })

  return (
    <div className='mx-auto max-w-[1200px] rounded-lg p-4 pb-20 lg:p-12'>
      <h1 className='mb-6 text-xl font-bold text-[#FE2E00] sm:text-2xl'>
        Panel de publicaciones de cursos
      </h1>

      {/* Filtros */}
      <div className='mb-6 rounded-lg p-4'>
        <h2 className='mb-2 font-medium text-[#000000]'>Aplicar filtros:</h2>
        <div className='flex flex-row gap-2 sm:space-x-6'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-4 w-4 rounded text-[#FD3600]'
              checked={filterPublished}
              onChange={() => setFilterPublished(!filterPublished)}
            />
            <span className='ml-1'>Publicado</span>
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-4 w-4 rounded text-[#FD3600]'
              checked={filterNotPublished}
              onChange={() => setFilterNotPublished(!filterNotPublished)}
            />
            <span className='ml-1'>No Publicado</span>
          </label>
        </div>
      </div>

      {/* Tabla */}
      <div className='-mx-4 overflow-x-auto sm:mx-0'>
        <table className='w-full table-auto divide-y divide-gray-200'>
          <thead className='bg-[#FFEAE6]'>
            <tr>
              <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#04122D]'>
                Título del curso
              </th>
              <th className='hidden px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#04122D] lg:table-cell'>
                Fecha de inicio
              </th>
              <th className='px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#04122D]'>
                Estado
              </th>
              <th className='px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#04122D]'>
                Más
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {filteredCourses.map((course) => (
              <tr key={course.id} className='hover:bg-gray-50'>
                <td className='max-w-[300px] break-words px-4 py-4 text-sm font-medium text-gray-900'>
                  {course.title}
                </td>
                <td className='hidden whitespace-nowrap px-4 py-4 text-center text-sm text-gray-500 lg:table-cell'>
                  {new Date(course.validFrom).toLocaleDateString()}
                </td>
                <td className='px-4 py-4 text-center text-sm'>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${
                      course.status === 'ACTIVE'
                        ? 'bg-[#345081] text-white'
                        : 'bg-[#FE2E00] text-white'
                    }`}
                  >
                    {course.status === 'ACTIVE' ? 'Publicado' : 'No Publicado'}
                  </span>
                </td>
                <td className='px-4 py-4 text-center text-sm font-medium'>
                  <button
                    onClick={() => togglePublication(course)}
                    className={`flex w-full max-w-[100px] items-center justify-center rounded-[15px] border border-[#FFBEB0] bg-[#FFEAE6] px-4 py-[5px] text-xs text-[#000000] transition-colors hover:bg-[#E62E00] hover:text-white`}
                  >
                    {course.status === 'ACTIVE' ? (
                      <div className='flex items-center'>
                        <EyeOff className='w-4 pr-1' />
                        Ocultar
                      </div>
                    ) : (
                      'Activar'
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isLoading && (
        <>
          {courses.length === 0 ? (
            <div className='py-10 text-center'>
              <div className='mb-2 text-gray-500'>
                Aún no tienes publicaciones creadas.
              </div>
              <div className='text-sm text-gray-400'>
                Puedes agregar nuevos publicaciones desde tu panel de
                administración.
              </div>
            </div>
          ) : (
            filteredCourses.length === 0 && (
              <div className='py-10 text-center'>
                <div className='mb-2 text-gray-500'>
                  No hay publicaciones que coincidan con los filtros
                  seleccionados
                </div>
                <button
                  className='font-medium text-[#FD3600] hover:text-[#E62E00]'
                  onClick={() => {
                    setFilterPublished(true)
                    setFilterNotPublished(true)
                  }}
                >
                  Mostrar todos los publicaciones
                </button>
              </div>
            )
          )}
        </>
      )}
    </div>
  )
}
