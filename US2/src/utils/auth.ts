import { User } from '../interfaces/User';
import { mockUsers } from '../data/users';

// Función que recibe email y password, y devuelve el usuario si existe
// Devuelve el User encontrado, o null si no coincide
export function authenticate(email: string, password: string): User | null {
  // .find() busca el primer usuario que cumpla la condición
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  // Si encontró usuario, lo devuelve; si no, devuelve null
  return user || null;
}