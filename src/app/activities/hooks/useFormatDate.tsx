// app/hooks/useTimeConverter.ts
'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useState, useEffect } from 'react'
import { UserData } from '@/interfaces'

// MAPA 1: Nombre del país (en minúsculas) a su código ISO de 2 letras.
// *** Actualizado para coincidir exactamente con tu lista de países ***
const countryNameToIsoMap: { [key: string]: string } = {
  argentina: 'AR',
  chile: 'CL',
  colombia: 'CO',
  españa: 'ES',
  peru: 'PE',
  ecuador: 'EC',
  guatemala: 'GT',
  panama: 'PA',
  panamá: 'PA', // Variante con tilde
  'costa rica': 'CR',
  nicaragua: 'NI',
  'el salvador': 'SV',
  honduras: 'HN',
  méxico: 'MX',
  mexico: 'MX', // Variante sin tilde
  venezuela: 'VE',
  bolivia: 'BO',
  paraguay: 'PY',
  brasil: 'BR',
  canada: 'CA',
  canadá: 'CA', // Variante con tilde
  'estados unidos': 'US'
}

// MAPA 2: Código ISO de 2 letras a su zona horaria IANA.
// Este mapa ya es compatible con todos los códigos del mapa anterior.
const countryTimeZoneMap: { [key: string]: string } = {
  AR: 'America/Argentina/Buenos_Aires',
  CL: 'America/Santiago',
  CO: 'America/Bogota',
  ES: 'Europe/Madrid',
  PE: 'America/Lima',
  EC: 'America/Guayaquil',
  GT: 'America/Guatemala',
  PA: 'America/Panama',
  CR: 'America/Costa_Rica',
  NI: 'America/Managua',
  SV: 'America/El_Salvador',
  HN: 'America/Tegucigalpa',
  MX: 'America/Mexico_City',
  VE: 'America/Caracas',
  BO: 'America/La_Paz',
  PY: 'America/Asuncion',
  BR: 'America/Sao_Paulo',
  CA: 'America/Toronto',
  US: 'America/New_York'
}

const DEFAULT_TIMEZONE = 'America/Bogota'
const DEFAULT_COUNTRY_CODE = 'CO'

export const useTimeConverter = (
  eventDate: string | Date,
  timeRangeString: string
) => {
  const { user, token } = useAuth()

  const [formattedTime, setFormattedTime] = useState('Calculando...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeRegex = /(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/
    const match = timeRangeString.match(timeRegex)

    if (!match) {
      setFormattedTime(timeRangeString)
      setIsLoading(false)
      return
    }

    const startTimeOriginal = match[1]
    const endTimeOriginal = match[2]
    const originalFormatted = `${startTimeOriginal} a ${endTimeOriginal}`
    const originalFormattedWithCountry = `${originalFormatted} (${DEFAULT_COUNTRY_CODE})`

    if (!user || !token) {
      setFormattedTime(originalFormattedWithCountry)
      setIsLoading(false)
      return
    }

    const fetchAndConvert = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )

        if (!response.ok)
          throw new Error('No se pudo obtener la información del usuario')

        const userData: UserData = await response.json()

        const userCountryName = userData?.country?.[0]
        let userTimeZone = DEFAULT_TIMEZONE
        let displayCountryCode = DEFAULT_COUNTRY_CODE

        if (userCountryName) {
          const normalizedName = userCountryName.toLowerCase().trim()
          const isoCode = countryNameToIsoMap[normalizedName]

          if (isoCode) {
            userTimeZone = countryTimeZoneMap[isoCode] || DEFAULT_TIMEZONE
            displayCountryCode = isoCode
          }
        }

        const convertSingleTime = (time: string, timeZone: string): string => {
          const dateString =
            typeof eventDate === 'string'
              ? eventDate
              : eventDate.toISOString().split('T')[0]
          const dateTimeString = `${dateString}T${time}:00`

          const eventDateInOriginTZ = new Date(
            new Date(dateTimeString).toLocaleString('en-US', {
              timeZone: DEFAULT_TIMEZONE
            })
          )

          return new Intl.DateTimeFormat('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timeZone,
            hour12: false
          }).format(eventDateInOriginTZ)
        }

        const convertedStartTime = convertSingleTime(
          startTimeOriginal,
          userTimeZone
        )
        const convertedEndTime = convertSingleTime(
          endTimeOriginal,
          userTimeZone
        )

        setFormattedTime(
          `${convertedStartTime} a ${convertedEndTime} (${displayCountryCode})`
        )
      } catch (error) {
        console.error('Error convirtiendo la hora:', error)
        setFormattedTime(originalFormattedWithCountry)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAndConvert()
  }, [user, token, eventDate, timeRangeString])

  return { formattedTime, isLoading }
}
