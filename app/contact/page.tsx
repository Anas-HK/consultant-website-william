'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend } from 'react-icons/fi';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${isTalsomTheme ? 'bg-gradient-to-br from-primary-green/10 via-transparent to-accent-yellow/10' : 'bg-gradient-to-br from-primary-red/10 via-transparent to-accent-gray/10'}`} />
        </div>
        
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Let's Talk
              <span className={`block mt-2 ${isTalsomTheme ? 'text-primary-green' : 'text-primary-red'}`}>
                Business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to transform your business? We're here to help you unlock new opportunities and drive exceptional results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-xl"
            >
              <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-8">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="organizational-design">Organizational Design</option>
                    <option value="global-expansion">Global Expansion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-red focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className={`group w-full px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 ${
                    isTalsomTheme 
                      ? 'bg-primary-green hover:bg-green-700' 
                      : 'bg-primary-red hover:bg-red-700'
                  }`}
                >
                  Send Message
                  <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-8">
                  Get in touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Ready to start your transformation journey? Our experts are standing by to discuss your unique challenges and opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl border-l-4 bg-gray-50 dark:bg-dark-surface ${isTalsomTheme ? 'border-primary-green' : 'border-primary-red'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isTalsomTheme ? 'bg-primary-green/10 text-primary-green' : 'bg-primary-red/10 text-primary-red'}`}>
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-890</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border-l-4 bg-gray-50 dark:bg-dark-surface ${isTalsomTheme ? 'border-primary-green' : 'border-primary-red'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isTalsomTheme ? 'bg-primary-green/10 text-primary-green' : 'bg-primary-red/10 text-primary-red'}`}>
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">hello@consultpro.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border-l-4 bg-gray-50 dark:bg-dark-surface ${isTalsomTheme ? 'border-primary-green' : 'border-primary-red'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isTalsomTheme ? 'bg-primary-green/10 text-primary-green' : 'bg-primary-red/10 text-primary-red'}`}>
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Business Ave, Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl ${isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'} text-white`}>
                <h3 className="font-display font-bold text-2xl mb-4">
                  Ready to get started?
                </h3>
                <p className="mb-6 opacity-90">
                  Schedule a free consultation to discuss your business goals and how we can help achieve them.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors duration-300"
                >
                  Call Now
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
