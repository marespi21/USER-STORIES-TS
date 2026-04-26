import { Product } from '../interfaces/Product';

export interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      {/* Imagen del producto */}
      <img src={product.imageUrl} alt={product.name} width={200} height={200} />

      {/* Datos basicos del producto */}
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Categoria: {product.category}</p>
    </article>
  );
}

export default ProductCard;
