'use client'

import React from 'react'
import { DesktopTimeline } from './DesktopTimeline'
import { MobileTimeline } from './MobileTimeline'
import useIsLargeScreen from '@/hooks'

export const Timeline = () => {
  const isLargeScreen = useIsLargeScreen(1024)
  return <div>{isLargeScreen ? <DesktopTimeline /> : <MobileTimeline />}</div>
}
