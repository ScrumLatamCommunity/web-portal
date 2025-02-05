import { z } from 'zod'

export const registerSchema = z
  .object({
    firstName: z.string().min(1, 'El nombre es obligatorio'),
    lastName: z.string().min(1, 'El apellido es obligatorio'),
    username: z
      .string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
    email: z.string().email('Correo electrónico inválido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string(),
    country: z.string().min(1, 'El país es obligatorio'),
    membership: z.string().min(1, 'La membresía es obligatoria')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })
