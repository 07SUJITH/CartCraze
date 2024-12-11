import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui/card';

import electronics from '../../assets/electronics.jpg';
import jewelery from '../../assets/jewelery.jpg';
import mensClothing from '../../assets/men-s-clothing.jpg';
import womensClothing from '../../assets/women-s-clothing.jpg';

function LoadingProducts() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <Loader2 className="h-8 w-8 animate-spin text-[#6FC64F]" />
    </div>
  );
}

const CategoryGroup = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) {
    return <LoadingProducts />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
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
    </div>
  );
};

export default CategoryGroup;
