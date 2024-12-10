'use client'

import React from 'react'
import { RegisterComponent } from './components/RegisterComponent'

export default function Register() {
  const handleRegister = (formData: {
    name: string
    email: string
    password: string
  }) => {
    console.log('Datos de Registro:', formData)
  }

  return <RegisterComponent onRegister={handleRegister} />
}
