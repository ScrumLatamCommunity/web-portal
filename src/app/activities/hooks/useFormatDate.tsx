'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useState, useEffect } from 'react'
import { UserData } from '@/interfaces'
import { Activity } from '../interfaces/activityInterface'

const countryNameToIsoMap: { [key: string]: string } = {
  argentina: 'AR',
  chile: 'CL',
  colombia: 'CO',
  españa: 'ES',
  peru: 'PE',
  ecuador: 'EC',
  guatemala: 'GT',
  panama: 'PA',
  panamá: 'PA',
  'costa rica': 'CR',
  nicaragua: 'NI',
  'el salvador': 'SV',
  honduras: 'HN',
  méxico: 'MX',
  mexico: 'MX',
  venezuela: 'VE',
  bolivia: 'BO',
  paraguay: 'PY',
  brasil: 'BR',
  canada: 'CA',
  canadá: 'CA',
  'estados unidos': 'US'
}

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

export const useTimeConverter = (activity: Activity) => {
  const { user, token } = useAuth()
  const { date: activityDate, time: timeArray } = activity

  const [formattedTime, setFormattedTime] = useState('Calculando...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!Array.isArray(timeArray) || timeArray.length !== 2) {
      setFormattedTime('Formato de tiempo inválido')
      setIsLoading(false)
      return
    }

    const [startTimeOriginal, endTimeOriginal] = timeArray
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
          const normalized = userCountryName.toLowerCase().trim()
          const isoCode = countryNameToIsoMap[normalized]

          if (isoCode && countryTimeZoneMap[isoCode]) {
            userTimeZone = countryTimeZoneMap[isoCode]
            displayCountryCode = isoCode
          }
        }

        const convertTime = (
          time: string,
          fromTZ: string,
          toTZ: string
        ): string => {
          const dateStr =
            typeof activityDate === 'string'
              ? activityDate
              : activityDate.toISOString().split('T')[0]
          const isoString = `${dateStr}T${time}:00`

          const localDate = new Date(
            new Date(isoString).toLocaleString('en-US', {
              timeZone: fromTZ
            })
          )

          return new Intl.DateTimeFormat('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: toTZ,
            hour12: false
          }).format(localDate)
        }

        const convertedStart = convertTime(
          startTimeOriginal,
          DEFAULT_TIMEZONE,
          userTimeZone
        )
        const convertedEnd = convertTime(
          endTimeOriginal,
          DEFAULT_TIMEZONE,
          userTimeZone
        )

        setFormattedTime(
          `${convertedStart} a ${convertedEnd} (${displayCountryCode})`
        )
      } catch (err) {
        console.error('Error al convertir hora:', err)
        setFormattedTime(originalFormattedWithCountry)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAndConvert()
  }, [user, token, activityDate, timeArray])

  return { formattedTime, isLoading }
}
