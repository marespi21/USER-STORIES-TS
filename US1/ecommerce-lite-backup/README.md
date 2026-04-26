# Ecommerce Lite (React + TypeScript)

Proyecto muy basico para practicar React con TypeScript.

## Instalacion

1. Entra al proyecto:
   - `cd ecommerce-lite`
2. Instala dependencias:
   - `npm install`

## Ejecucion

1. Corre el proyecto:
   - `npm start`
2. Abre:
   - `http://localhost:3000`

## Carpetas principales (explicacion corta)

- `public`: archivos estaticos (por ejemplo, `index.html`).
- `src`: codigo fuente de la aplicacion.
- `src/components`: componentes reutilizables de React.
- `src/interfaces`: tipos e interfaces de TypeScript.
- `src/data`: datos de ejemplo (mock data).

## Archivos importantes

- `src/interfaces/Product.ts`: interfaces `Product` y `Dimensions`.
- `src/interfaces/User.ts`: interfaces `User` y `Address`.
- `src/data/data.ts`: 15 productos y 5 usuarios de ejemplo.
- `src/components/ProductCard.tsx`: tarjeta de producto con props tipadas.
- `src/App.tsx`: renderiza los productos usando `.map()`.
