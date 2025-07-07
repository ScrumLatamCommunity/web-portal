# Configuración de Axios

Este directorio contiene la configuración centralizada de Axios para el proyecto.

## Archivos

- `axios.setup.ts` - Configuración principal de Axios con interceptores

## Uso

### Para componentes del cliente (React)

```typescript
import { setupAxios } from '@/config/axios.setup'

// En un componente React
const MyComponent = () => {
  const fetchData = async () => {
    try {
      const axiosInstance = setupAxios({})
      const response = await axiosInstance.get('/api/endpoint')
      // Manejar respuesta
    } catch (error) {
      // Manejar error
    }
  }
}
```

### Para Server Actions

**NO uses `setupAxios` en server actions** porque accede a `localStorage` que no está disponible en el servidor.

En su lugar, usa `fetch`:

```typescript
'use server'

export async function myServerAction() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/endpoint`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // El token se manejará a través de cookies o headers del servidor
        },
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
```

## Características

### Interceptores automáticos

- **Request**: Agrega automáticamente el token de autenticación desde `localStorage`
- **Response**: Maneja errores 401 (token expirado) y redirige al login

### Manejo de errores

- Errores de red
- Errores de autenticación (401)
- Timeout de 10 segundos
- Logs detallados para debugging

### Seguridad

- Verificación de `window` antes de acceder a `localStorage`
- Manejo de errores al acceder a `localStorage`
- Timeout configurado para evitar requests colgados

## Variables de entorno

Asegúrate de tener configurada la variable de entorno:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Ejemplos de uso

### GET request

```typescript
const axiosInstance = setupAxios({})
const response = await axiosInstance.get('/users')
```

### POST request

```typescript
const axiosInstance = setupAxios({})
const response = await axiosInstance.post('/users', { name: 'John' })
```

### Con headers personalizados

```typescript
const axiosInstance = setupAxios({
  headers: {
    'Custom-Header': 'value'
  }
})
```

### Con timeout personalizado

```typescript
const axiosInstance = setupAxios({
  timeout: 5000 // 5 segundos
})
```
