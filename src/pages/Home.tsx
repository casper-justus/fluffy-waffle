import { motion } from 'framer-motion';
import ParallaxSection from '../components/animations/ParallaxSection';
import FadeInView from '../components/animations/FadeInView';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection offset={-100}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-6xl font-bold mb-6">Future of Technology</h1>
            <p className="text-xl mb-8">Innovating for a better tomorrow</p>
            <Link 
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
            >
              Explore Products <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </ParallaxSection>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInView>
            <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
          </FadeInView>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInView key={feature.title} delay={index * 0.2}>
                <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInView>
              <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
              >
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </FadeInView>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
};

export default Home;