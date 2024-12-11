import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInView from '../components/animations/FadeInView';
import { useQuery } from 'react-query';
import axios from 'axios';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { data: products, isLoading } = useQuery('products', async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
  });

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products?.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <FadeInView>
          <h1 className="text-4xl font-bold text-center mb-16">Our Products</h1>
        </FadeInView>

        {/* Product Categories */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filteredProducts?.map((product, index) => (
              <FadeInView key={product._id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </span>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;