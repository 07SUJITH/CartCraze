import { ChevronRight } from 'lucide-react';
// import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use as per your router setup

import { Button } from '@/components/ui/button'; // Adjust paths as per your project
import { Card, CardContent } from '@/components/ui/card';

import electronics from '../assets/electronics.jpg';
import jewelery from '../assets/jewelery.jpg';
import mensClothing from '../assets/men-s-clothing.jpg';
import womensClothing from '../assets/women-s-clothing.jpg';
import { Carousel } from './components/Carousel';
import ProductCard from './components/ProductCard';
// function LoadingProducts() {
//   return (
//     <div className="flex justify-center items-center min-h-[300px]">
//       <Loader2 className="h-8 w-8 animate-spin text-[#6FC64F]" />
//     </div>
//   );
// }

const carouselSlides = [
  {
    title: 'Best Delicious',
    subtitle: 'Fast Food',
    buttonText: 'Shop Now',
    bgColor: 'bg-[#E8F5E9]',
  },
  {
    title: 'New Summer',
    subtitle: 'Special Offers',
    buttonText: 'View Offers',
    bgColor: 'bg-[#E3F2FD]',
  },
  {
    title: 'Healthy',
    subtitle: 'Veggie Options',
    buttonText: 'Explore Menu',
    bgColor: 'bg-[#FFF3E0]',
  },
];
const slides = carouselSlides.map((slide, index) => (
  <div className="flex-[0_0_100%] transition-opacity  duration-500" key={index}>
    <section className={`relative ${slide.bgColor} py-16 `}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
            {slide.title}
            <span className="text-[#004D40] block">{slide.subtitle}</span>
          </h1>
          <Button
            size="lg"
            className="bg-[#004D40] hover:bg-[#00695C] animate-fadeIn animation-delay-300"
          >
            {slide.buttonText}
          </Button>
        </div>
        <div className="md:block w-[500px] h-[600px] animate-scaleIn animation-delay-500"></div>
      </div>
    </section>
  </div>
));

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const categoryImages: { [key: string]: string } = {
    electronics,
    jewelery,
    'men-s-clothing': mensClothing,
    'women-s-clothing': womensClothing,
  };

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      }
    }

    // Fetch products
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=3');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setFeaturedProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      }
    }

    fetchCategories();
    fetchProducts();
  }, []);

  // Error handling
  if (error) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Failed to load data
        </h1>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className=" ">
      {/* Hero Section */}
      <Carousel slides={slides} />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center  ">
            Shop by Categories
          </h2>
          <div className="">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[90%] mx-auto  gap-6">
              {categories.map((category) => {
                const formattedCategory = category
                  .replace(/[^a-zA-Z0-9]/g, '-')
                  .toLowerCase() as keyof typeof categoryImages;
                return (
                  <Link key={category} to={`/category/${category}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <img
                          src={categoryImages[formattedCategory]}
                          alt={category}
                          className="w-full lg:h-48 h-52 object-cover object-center  rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold text-center capitalize">
                          {category}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Special Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-3xl  font-bold ">Today's Special</h2>
            <Link
              to="/categories"
              className="text-[#004D40] hover:underline flex items-center"
            >
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 mx-auto w-[80%] md:w-[100%] lg:w-[90%]  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
