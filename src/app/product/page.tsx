import { ChevronRight, Loader2 } from 'lucide-react'; // Consolidated imports
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // For routing

import AddToCartButton from '../components/AddToCartButton';

// Define a type for the product
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function LoadingProducts() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <Loader2 className="h-8 w-8 animate-spin text-[#6FC64F]" />
    </div>
  );
}

function ProductPage() {
  const { id } = useParams(); // Retrieve dynamic product ID from URL

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch product details by ID
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data: Product = await res.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }

    fetchProduct();
  }, [id]);

  // Handle loading and errors
  if (error) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Failed to load product
        </h1>
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-16 text-center">
        <LoadingProducts />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to={`/category/${product.category}`}>{product.category}</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="truncate">{product.title}</span>
      </div>

      {/* Product Details */}
      <div className="lg:flex lg:justify-center ">
        <div className="grid md:grid-cols-2 gap-8 lg:max-w-[80%] lg:gap-2">
          {/* Product Image */}
          <div className="relative flex justify-center items-center h-[400px] max-w-[400px]">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-full w-full"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="text-2xl font-bold text-[#004D40] mb-4">
              ₹{product.price.toFixed(2)}
            </div>
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                In-Stock
              </span>
            </div>
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Details and Specifications
              </h2>
              <p>{product.description}</p>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
