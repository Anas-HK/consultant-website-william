'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, colorScheme, toggleTheme, toggleColorScheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Media', href: '/#insights' },
    { name: 'About Us', href: '/#about' },
  ];

  const ctaItem = { name: "Let's Talk", href: '/contact' };

  const isTalsomTheme = colorScheme === 'talsom';
  const primaryColor = isTalsomTheme ? 'primary-green' : 'primary-red';
  const accentColor = isTalsomTheme ? 'accent-yellow' : 'accent-gray';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 bg-${primaryColor} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
              Consult<span className={`text-${primaryColor}`}>Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Let's Talk CTA Button */}
            <Link
              href={ctaItem.href}
              className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                isTalsomTheme 
                  ? 'bg-primary-green hover:bg-green-700' 
                  : 'bg-primary-red hover:bg-red-700'
              }`}
            >
              {ctaItem.name}
            </Link>
            
            {/* Theme Controls */}
            <div className="flex items-center space-x-4 ml-6">
              <button
                onClick={toggleColorScheme}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isTalsomTheme 
                    ? 'bg-primary-green text-white' 
                    : 'bg-primary-red text-white'
                }`}
              >
                {isTalsomTheme ? 'Talsom' : 'Bain'} Theme
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-surface shadow-lg"
            >
              <div className="py-4 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Let's Talk CTA */}
                <Link
                  href={ctaItem.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block mt-4 px-6 py-3 rounded-full font-semibold text-white text-center transition-all duration-300 ${
                    isTalsomTheme 
                      ? 'bg-primary-green hover:bg-green-700' 
                      : 'bg-primary-red hover:bg-red-700'
                  }`}
                >
                  {ctaItem.name}
                </Link>
                
                <button
                  onClick={toggleColorScheme}
                  className={`mt-4 w-full px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isTalsomTheme 
                      ? 'bg-primary-green text-white' 
                      : 'bg-primary-red text-white'
                  }`}
                >
                  Switch to {isTalsomTheme ? 'Bain' : 'Talsom'} Theme
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
