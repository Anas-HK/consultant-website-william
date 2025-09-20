'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FiCalendar, FiClock, FiArrowRight, FiTrendingUp } from 'react-icons/fi';

interface Insight {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
  stats?: {
    growth: string;
    impact: string;
  };
}

const Insights: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  const insights: Insight[] = [
    {
      category: "Digital Transformation",
      title: "How AI is Revolutionizing Supply Chain Management",
      excerpt: "Discover how leading companies are leveraging artificial intelligence to optimize their supply chains and reduce costs by up to 30%.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=smart",
      readTime: "8 min read",
      date: "March 15, 2024",
      featured: true,
      stats: {
        growth: "+45%",
        impact: "Efficiency Gain"
      }
    },
    {
      category: "Strategy",
      title: "Building Resilient Organizations in Uncertain Times",
      excerpt: "Learn the key strategies that help organizations thrive during economic uncertainty and market volatility.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=smart",
      readTime: "6 min read",
      date: "March 10, 2024",
      stats: {
        growth: "+200%",
        impact: "Risk Reduction"
      }
    },
    {
      category: "Case Study",
      title: "Global Retailer Achieves 3x Revenue Growth",
      excerpt: "How we helped a major retail chain transform their digital presence and triple their online revenue in 18 months.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=smart",
      readTime: "10 min read",
      date: "March 5, 2024",
      featured: true,
      stats: {
        growth: "3x",
        impact: "Revenue Growth"
      }
    },
    {
      category: "Innovation",
      title: "The Future of Work: Hybrid Models That Actually Work",
      excerpt: "Insights from our research on successful hybrid work implementations across Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop&crop=smart",
      readTime: "7 min read",
      date: "February 28, 2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="insights" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
            Insights & Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our latest thinking, case studies, and research on the trends 
            shaping the future of business.
          </p>
        </motion.div>

        {/* Featured Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
  {(() => {
            const featuredInsight = insights.find(i => i.featured);
            return featuredInsight && (
            <div className="relative group bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={featuredInsight.image}
                    alt={featuredInsight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {featuredInsight.stats && (
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                          <p className="text-white text-2xl font-bold">{featuredInsight.stats.growth}</p>
                          <p className="text-white/80 text-sm">{featuredInsight.stats.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isTalsomTheme 
                        ? 'bg-primary-green/10 text-primary-green' 
                        : 'bg-primary-red/10 text-primary-red'
                    }`}>
                      {featuredInsight.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isTalsomTheme 
                        ? 'bg-accent-yellow/20 text-yellow-800 dark:text-yellow-200' 
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                    {featuredInsight.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {featuredInsight.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {featuredInsight.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-4 h-4" />
                        {featuredInsight.readTime}
                      </span>
                    </div>

                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 font-medium ${
                        isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                      } hover:underline group`}
                    >
                      Read More
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )})()}
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insights.filter(i => !i.featured).map((insight, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isTalsomTheme 
                      ? 'bg-primary-green text-white' 
                      : 'bg-primary-red text-white'
                  }`}>
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                {insight.stats && (
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <FiTrendingUp className={isTalsomTheme ? 'text-primary-green' : 'text-primary-red'} />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {insight.stats.growth}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {insight.stats.impact}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>

                  <a
                    href="#"
                    className={`${
                      isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                    } hover:underline font-medium text-sm group flex items-center gap-1`}
                  >
                    Read
                    <FiArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className={`inline-flex items-center px-8 py-4 rounded-full font-semibold border-2 ${
              isTalsomTheme 
                ? 'border-primary-green text-primary-green hover:bg-primary-green hover:text-white' 
                : 'border-primary-red text-primary-red hover:bg-primary-red hover:text-white'
            } transition-all duration-300`}
          >
            View All Insights
            <FiArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
