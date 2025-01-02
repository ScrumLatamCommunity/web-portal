'use client'

import React from 'react'
import { DesktopMisionVision } from './DesktopMisionVision'
import { MobileMisionVision } from './MobileMisionVision'
import useIsLargeScreen from '@/hooks'

export const MisionVision = () => {
  const isLargeScreen = useIsLargeScreen(680)
  return (
    <div>
      {isLargeScreen ? <DesktopMisionVision /> : <MobileMisionVision />}
    </div>
  )
}
