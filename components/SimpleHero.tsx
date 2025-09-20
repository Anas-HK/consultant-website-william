'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

const SimpleHero: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-surface dark:to-gray-900" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className={`absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl ${isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'}`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl ${isTalsomTheme ? 'bg-accent-yellow' : 'bg-accent-gray'}`}
        />
      </div>

      <div className="relative z-10 section-padding py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-lg font-medium mb-6 ${isTalsomTheme ? 'text-primary-green' : 'text-primary-red'}`}
          >
            Strategic Excellence. Delivered.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 dark:text-white mb-8 leading-tight"
          >
            Transform Your
            <span className={`block mt-2 ${isTalsomTheme ? 'bg-gradient-to-r from-primary-green to-accent-yellow bg-clip-text text-transparent' : 'text-primary-red'}`}>
              Business Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We partner with ambitious leaders to unlock potential, drive innovation, 
            and create lasting impact through strategic consulting and digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className={`btn-primary ${isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'} hover:shadow-2xl transform transition-all duration-300`}
            >
              Contact Us Today
            </Link>
            
            <Link
              href="/#services"
              className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Clients Worldwide' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Industries Served' },
              { number: '1000+', label: 'Projects Delivered' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className={`font-display font-bold text-3xl md:text-4xl ${isTalsomTheme ? 'text-primary-green' : 'text-primary-red'}`}>
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleHero;
