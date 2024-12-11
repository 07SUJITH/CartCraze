import { ChevronRight, Loader2 } from 'lucide-react'; // Import Loader2
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Use for routing

import ProductCard from '../components/ProductCard';

function LoadingProducts() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <Loader2 className="h-8 w-8 animate-spin text-[#6FC64F]" />
    </div>
  );
}

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

function CategoryPage() {
  const { slug } = useParams(); // Retrieve dynamic category slug from URL
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${slug}`,
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [slug]);

  if (loading) {
    return <LoadingProducts />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700 capitalize">
          {slug?.replace(/-/g, ' ')}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
