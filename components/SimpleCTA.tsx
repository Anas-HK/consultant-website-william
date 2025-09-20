'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FiArrowRight, FiPhone, FiMail } from 'react-icons/fi';

const SimpleCTA: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${isTalsomTheme ? 'bg-gradient-to-br from-primary-green via-green-700 to-primary-green' : 'bg-gradient-to-br from-primary-red via-red-700 to-primary-red'}`} />
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-xl font-bold mb-6 uppercase tracking-wider ${isTalsomTheme ? 'text-accent-yellow' : 'text-white'}`}
          >
            Ready to Transform?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 leading-tight"
          >
            Let's Talk
            <span className={`block mt-2 ${isTalsomTheme ? 'text-accent-yellow' : 'text-white'}`}>
              Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with strategic consulting that delivers 
            <span className={`font-bold ${isTalsomTheme ? 'text-accent-yellow' : 'text-white'}`}> measurable results</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a 
              href="/contact"
              className={`group px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 flex items-center gap-3 ${isTalsomTheme ? 'bg-accent-yellow text-gray-900 hover:bg-yellow-300' : 'bg-white text-primary-red hover:bg-gray-50'}`}
            >
              Let's Talk
              <FiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a
              href="/#services"
              className="px-10 py-5 rounded-full font-bold text-lg bg-white/20 backdrop-blur-md text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70 transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <a 
              href="tel:+1234567890" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-white font-semibold"
            >
              <FiPhone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">+1 (234) 567-890</span>
            </a>
            <a 
              href="mailto:hello@consultpro.com" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-white font-semibold"
            >
              <FiMail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">hello@consultpro.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleCTA;
