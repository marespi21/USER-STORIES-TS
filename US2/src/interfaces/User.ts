// Interface principal del usuario
export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  role: 'admin' | 'customer' | 'editor';
  createdAt: string;
  phone?: string;
}

// Interface para crear un usuario (sin id ni createdAt, los genera el sistema)
export interface NewUser {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}