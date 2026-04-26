import { User, NewUser } from '../interfaces/User';
import { mockUsers } from '../data/users';
import { withDefaults } from './decorators';

export class UserStore {
  // Copia del array de usuarios — así no modificamos el original
  private users: User[] = [...mockUsers];
  private nextId: number = mockUsers.length + 1;

  // GET — Listar todos los usuarios
  list(): User[] {
    console.log('📡 [GET] /api/users — Obteniendo todos los usuarios');
    console.table(this.users);
    return this.users;
  }

  // GET — Buscar por nombre (búsqueda parcial, sin importar mayúsculas)
  findByName(name: string): User | undefined {
    console.log(`📡 [GET] /api/users?name=${name} — Buscando usuario`);
    const found = this.users.find((u) =>
      u.fullName.toLowerCase().includes(name.toLowerCase())
    );
    console.log(' Resultado:', found || 'No encontrado');
    return found;
  }

  // POST — Crear nuevo usuario (el decorador agrega role, createdAt, isActive)
  
  create(newUser: NewUser): User {
    console.log('📡 [POST] /api/users — Creando usuario:', newUser);
    const user: User = {
      id: this.nextId++,
      fullName: newUser.fullName,
      email: newUser.email,
      password: newUser.password,
      phone: newUser.phone,
      // Estas propiedades las agrega el decorador antes de llegar aquí:
      isActive: (newUser as any).isActive,
      role: (newUser as any).role,
      createdAt: (newUser as any).createdAt,
    };
    this.users.push(user);
    console.log('Usuario creado:', user);
    return user;
  }

  // PATCH — Actualizar campos de un usuario existente
  update(id: number, changes: Partial<User>): User | null {
    console.log(`📡 [PATCH] /api/users/${id} — Actualizando usuario`);
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      console.log('Usuario no encontrado');
      return null;
    }
    // Spread: combina el usuario existente con los cambios
    this.users[index] = { ...this.users[index], ...changes };
    console.log(' Usuario actualizado:', this.users[index]);
    return this.users[index];
  }

  // DELETE — Eliminar un usuario por id
  remove(id: number): boolean {
    console.log(`[DELETE] /api/users/${id} — Eliminando usuario`);
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      console.log(' Usuario no encontrado');
      return false;
    }
    this.users.splice(index, 1);
    console.log(` Usuario id:${id} eliminado`);
    return true;
  }
}