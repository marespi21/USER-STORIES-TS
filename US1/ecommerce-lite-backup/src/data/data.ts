import { Product } from '../interfaces/Product';
import { User } from '../interfaces/User';

export const products: Product[] = [
  {
    sku: 'P-001',
    name: 'Mouse inalambrico',
    brand: 'TechBasic',
    quantity: 20,
    price: 25,
    isActive: true,
    category: 'Accesorios',
    imageUrl: 'https://via.placeholder.com/200?text=Mouse',
    createdAt: new Date('2026-01-01'),
    tags: ['mouse', 'oficina']
  },
  {
    sku: 'P-002',
    name: 'Teclado USB',
    brand: 'TechBasic',
    quantity: 15,
    price: 35,
    isActive: true,
    category: 'Accesorios',
    imageUrl: 'https://via.placeholder.com/200?text=Teclado',
    createdAt: new Date('2026-01-02')
  },
  {
    sku: 'P-003',
    name: 'Monitor 24 pulgadas',
    brand: 'ViewOne',
    quantity: 10,
    price: 180,
    isActive: true,
    category: 'Monitores',
    imageUrl: 'https://via.placeholder.com/200?text=Monitor',
    createdAt: new Date('2026-01-03'),
    dimensions: { width: 54, height: 32, depth: 8 }
  },
  {
    sku: 'P-004',
    name: 'Laptop 14 pulgadas',
    brand: 'NoteFast',
    quantity: 8,
    price: 650,
    isActive: true,
    category: 'Computadoras',
    imageUrl: 'https://via.placeholder.com/200?text=Laptop',
    createdAt: new Date('2026-01-04'),
    description: 'Laptop para tareas diarias'
  },
  {
    sku: 'P-005',
    name: 'Webcam HD',
    brand: 'CamLite',
    quantity: 25,
    price: 40,
    isActive: true,
    category: 'Accesorios',
    imageUrl: 'https://via.placeholder.com/200?text=Webcam',
    createdAt: new Date('2026-01-05')
  },
  {
    sku: 'P-006',
    name: 'Audifonos bluetooth',
    brand: 'SoundGo',
    quantity: 30,
    price: 55,
    isActive: true,
    category: 'Audio',
    imageUrl: 'https://via.placeholder.com/200?text=Audifonos',
    createdAt: new Date('2026-01-06')
  },
  {
    sku: 'P-007',
    name: 'Parlante portatil',
    brand: 'SoundGo',
    quantity: 12,
    price: 60,
    isActive: true,
    category: 'Audio',
    imageUrl: 'https://via.placeholder.com/200?text=Parlante',
    createdAt: new Date('2026-01-07')
  },
  {
    sku: 'P-008',
    name: 'Disco SSD 1TB',
    brand: 'MemoryPlus',
    quantity: 18,
    price: 95,
    isActive: true,
    category: 'Almacenamiento',
    imageUrl: 'https://via.placeholder.com/200?text=SSD',
    createdAt: new Date('2026-01-08')
  },
  {
    sku: 'P-009',
    name: 'Memoria RAM 16GB',
    brand: 'MemoryPlus',
    quantity: 22,
    price: 70,
    isActive: true,
    category: 'Componentes',
    imageUrl: 'https://via.placeholder.com/200?text=RAM',
    createdAt: new Date('2026-01-09')
  },
  {
    sku: 'P-010',
    name: 'Silla de oficina',
    brand: 'HomeWork',
    quantity: 6,
    price: 120,
    isActive: true,
    category: 'Muebles',
    imageUrl: 'https://via.placeholder.com/200?text=Silla',
    createdAt: new Date('2026-01-10')
  },
  {
    sku: 'P-011',
    name: 'Escritorio simple',
    brand: 'HomeWork',
    quantity: 5,
    price: 140,
    isActive: true,
    category: 'Muebles',
    imageUrl: 'https://via.placeholder.com/200?text=Escritorio',
    createdAt: new Date('2026-01-11')
  },
  {
    sku: 'P-012',
    name: 'Router WiFi',
    brand: 'NetHome',
    quantity: 14,
    price: 80,
    isActive: true,
    category: 'Redes',
    imageUrl: 'https://via.placeholder.com/200?text=Router',
    createdAt: new Date('2026-01-12')
  },
  {
    sku: 'P-013',
    name: 'Smartphone 128GB',
    brand: 'CellNow',
    quantity: 11,
    price: 300,
    isActive: true,
    category: 'Telefonos',
    imageUrl: 'https://via.placeholder.com/200?text=Phone',
    createdAt: new Date('2026-01-13')
  },
  {
    sku: 'P-014',
    name: 'Tablet 10 pulgadas',
    brand: 'CellNow',
    quantity: 9,
    price: 220,
    isActive: true,
    category: 'Tablets',
    imageUrl: 'https://via.placeholder.com/200?text=Tablet',
    createdAt: new Date('2026-01-14')
  },
  {
    sku: 'P-015',
    name: 'Power bank',
    brand: 'EnergyBox',
    quantity: 20,
    price: 30,
    isActive: true,
    category: 'Accesorios',
    imageUrl: 'https://via.placeholder.com/200?text=PowerBank',
    createdAt: new Date('2026-01-15')
  }
];

export const users: User[] = [
  {
    id: 'U-001',
    fullName: 'Ana Perez',
    email: 'ana.perez@example.com',
    isActive: true,
    role: 'customer',
    address: {
      street: 'Calle 10',
      city: 'Bogota',
      country: 'Colombia'
    },
    createdAt: new Date('2026-02-01'),
    tags: ['nuevo']
  },
  {
    id: 'U-002',
    fullName: 'Luis Gomez',
    email: 'luis.gomez@example.com',
    isActive: true,
    role: 'admin',
    address: {
      street: 'Avenida 7',
      city: 'Medellin',
      country: 'Colombia'
    },
    createdAt: new Date('2026-02-02')
  },
  {
    id: 'U-003',
    fullName: 'Carla Ruiz',
    email: 'carla.ruiz@example.com',
    isActive: true,
    role: 'customer',
    address: {
      street: 'Carrera 15',
      city: 'Cali',
      country: 'Colombia'
    },
    createdAt: new Date('2026-02-03'),
    description: 'Cliente frecuente'
  },
  {
    id: 'U-004',
    fullName: 'Miguel Torres',
    email: 'miguel.torres@example.com',
    isActive: true,
    role: 'support',
    address: {
      street: 'Calle 4',
      city: 'Barranquilla',
      country: 'Colombia'
    },
    createdAt: new Date('2026-02-04')
  },
  {
    id: 'U-005',
    fullName: 'Sofia Martinez',
    email: 'sofia.martinez@example.com',
    isActive: true,
    role: 'customer',
    address: {
      street: 'Calle 99',
      city: 'Bucaramanga',
      country: 'Colombia'
    },
    createdAt: new Date('2026-02-05')
  }
];
