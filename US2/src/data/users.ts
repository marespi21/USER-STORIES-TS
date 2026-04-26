import { User } from '../interfaces/User';

// Array de usuarios mock para simular una base de datos
export const mockUsers: User[] = [
  {
    id: 1,
    fullName: 'Ana García',
    email: 'ana@email.com',
    password: '1234',
    isActive: true,
    role: 'admin',
    createdAt: '2023-06-01',
    phone: '3001234567',
  },
  {
    id: 2,
    fullName: 'Carlos Martínez',
    email: 'carlos@email.com',
    password: '5678',
    isActive: true,
    role: 'customer',
    createdAt: '2023-08-15',
  },
  {
    id: 3,
    fullName: 'María López',
    email: 'maria@email.com',
    password: 'abcd',
    isActive: true,
    role: 'editor',
    createdAt: '2023-09-20',
  },
];