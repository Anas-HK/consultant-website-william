'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook, 
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp
} from 'react-icons/fi';

const Footer: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  const footerLinks = {
    services: [
      { name: 'AI & Machine Learning', href: '#' },
      { name: 'Data Analytics', href: '#' },
      { name: 'Digital Transformation', href: '#' },
      { name: 'Strategic Consulting', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    insights: [
      { name: 'Case Studies', href: '#insights' },
      { name: 'Blog', href: '#' },
      { name: 'Research', href: '#' },
      { name: 'Whitepapers', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FiLinkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <FiFacebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <FiInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="section-padding py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className={`w-10 h-10 ${
                isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
              } rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                Consult<span className={isTalsomTheme ? 'text-primary-green' : 'text-primary-red'}>Pro</span>
              </span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
              Transforming businesses through strategic consulting and innovative solutions. 
              Your partner in building a sustainable competitive advantage.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isTalsomTheme 
                      ? 'bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white' 
                      : 'bg-primary-red/10 text-primary-red hover:bg-primary-red hover:text-white'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Insights</h3>
            <ul className="space-y-3">
              {footerLinks.insights.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <FiMapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@consultpro.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  hello@consultpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for insights and industry updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red"
              />
              <button
                type="submit"
                className={`px-6 py-2 rounded-full font-medium text-white transition-all duration-300 ${
                  isTalsomTheme 
                    ? 'bg-primary-green hover:bg-green-700' 
                    : 'bg-primary-red hover:bg-red-700'
                }`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 ConsultPro. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isTalsomTheme 
                  ? 'bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white' 
                  : 'bg-primary-red/10 text-primary-red hover:bg-primary-red hover:text-white'
              }`}
              aria-label="Back to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
