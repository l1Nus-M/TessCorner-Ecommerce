import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Footprints, Sparkles, Palette, Watch } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 8);
  
  const categories = [
    {
      name: 'Clothing',
      icon: Shirt,
      path: '/category/clothing',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Trendy outfits for every occasion'
    },
    {
      name: 'Shoes',
      icon: Footprints,
      path: '/category/shoes',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Step out in style'
    },
    {
      name: 'Skincare',
      icon: Sparkles,
      path: '/category/skincare',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Nourish your skin naturally'
    },
    {
      name: 'Makeup',
      icon: Palette,
      path: '/category/makeup',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Enhance your natural beauty'
    },
    {
      name: 'Accessories',
      icon: Watch,
      path: '/category/accessories',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete your perfect look'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-100 to-rose-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/Tess02.png" 
              alt="Tess' Corner" 
              className="h-20 w-20 mx-auto mb-6 object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to Tess' Corner
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Your one-stop shop for everyday wear!
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the latest trends in fashion, beauty, and accessories. 
              Quality products at affordable prices, right here in Nakuru.
            </p>
            <Link
              to="/category/clothing"
              className="inline-flex items-center bg-rose-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rose-400 transition-colors space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked favorites just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/category/clothing"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Store in Nakuru
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience our products in person at our location in Mawanga, Nakuru. 
            Our friendly staff is ready to help you find the perfect items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-rose-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-400 transition-colors"
            >
              Get Directions
            </Link>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;