import './App.css';
import ProductCard from './components/ProductCard';
import { products } from './data/data';

function App() {
  return (
    <main>
      <h1>Ecommerce Lite</h1>
      <p>Listado basico de productos con React y TypeScript.</p>

      {/* Recorremos el array products con map para pintar tarjetas */}
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </main>
  );
}

export default App;
