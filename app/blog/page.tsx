'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FiCalendar, FiClock, FiArrowRight, FiTrendingUp, FiSearch, FiTag } from 'react-icons/fi';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  featured?: boolean;
  stats?: {
    growth: string;
    impact: string;
  };
  tags: string[];
}

const BlogPage: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      category: "Digital Transformation",
      title: "How AI is Revolutionizing Supply Chain Management",
      excerpt: "Discover how leading companies are leveraging artificial intelligence to optimize their supply chains and reduce costs by up to 30%.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=smart",
      readTime: "8 min read",
      date: "March 15, 2024",
      author: {
        name: "Dr. Emily Johnson",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        role: "Head of Innovation"
      },
      featured: true,
      stats: {
        growth: "+45%",
        impact: "Efficiency Gain"
      },
      tags: ["AI", "Supply Chain", "Technology", "Innovation"]
    },
    {
      id: '2',
      category: "Strategy",
      title: "Building Resilient Organizations in Uncertain Times",
      excerpt: "Learn the key strategies that help organizations thrive during economic uncertainty and market volatility.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=smart",
      readTime: "6 min read",
      date: "March 10, 2024",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "Chief Strategy Officer"
      },
      stats: {
        growth: "+200%",
        impact: "Risk Reduction"
      },
      tags: ["Strategy", "Resilience", "Leadership", "Crisis Management"]
    },
    {
      id: '3',
      category: "Case Study",
      title: "Global Retailer Achieves 3x Revenue Growth",
      excerpt: "How we helped a major retail chain transform their digital presence and triple their online revenue in 18 months.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=smart",
      readTime: "10 min read",
      date: "March 5, 2024",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2a7?w=100&h=100&fit=crop&crop=face",
        role: "CEO & Managing Partner"
      },
      featured: true,
      stats: {
        growth: "3x",
        impact: "Revenue Growth"
      },
      tags: ["Case Study", "Retail", "Digital Transformation", "Growth"]
    },
    {
      id: '4',
      category: "Innovation",
      title: "The Future of Work: Hybrid Models That Actually Work",
      excerpt: "Insights from our research on successful hybrid work implementations across Fortune 500 companies.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop&crop=smart",
      readTime: "7 min read",
      date: "February 28, 2024",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "Global Operations Director"
      },
      tags: ["Future of Work", "Hybrid", "Innovation", "HR"]
    },
    {
      id: '5',
      category: "Technology",
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential strategies for protecting your organization's data and systems in a distributed work environment.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=smart",
      readTime: "5 min read",
      date: "February 20, 2024",
      author: {
        name: "Dr. Emily Johnson",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        role: "Head of Innovation"
      },
      tags: ["Cybersecurity", "Remote Work", "Technology", "Risk Management"]
    },
    {
      id: '6',
      category: "Leadership",
      title: "Leading Through Change: A Framework for Success",
      excerpt: "A comprehensive guide to leading organizational change initiatives with confidence and clarity.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=smart",
      readTime: "9 min read",
      date: "February 15, 2024",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "Chief Strategy Officer"
      },
      tags: ["Leadership", "Change Management", "Strategy", "Culture"]
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-surface dark:to-dark-bg">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Insights & 
              <span className={`block mt-2 ${
                isTalsomTheme 
                  ? 'bg-gradient-to-r from-primary-green to-accent-yellow bg-clip-text text-transparent' 
                  : 'text-primary-red'
              }`}>
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our latest thinking, case studies, and research on the trends 
              shaping the future of business and technology.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? isTalsomTheme
                            ? 'bg-primary-green text-white'
                            : 'bg-primary-red text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="section-padding">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="relative group bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {featuredPost.stats && (
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                          <p className="text-white text-2xl font-bold">{featuredPost.stats.growth}</p>
                          <p className="text-white/80 text-sm">{featuredPost.stats.impact}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isTalsomTheme 
                          ? 'bg-primary-green/10 text-primary-green' 
                          : 'bg-primary-red/10 text-primary-red'
                      }`}>
                        {featuredPost.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isTalsomTheme 
                          ? 'bg-accent-yellow/20 text-yellow-800 dark:text-yellow-200' 
                          : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        Featured
                      </span>
                    </div>
                    
                    <h2 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{featuredPost.author.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${
                        isTalsomTheme 
                          ? 'bg-primary-green text-white hover:bg-blue-700'
                          : 'bg-primary-red text-white hover:bg-red-700'
                      } transition-all duration-300 group`}>
                        Read Full Article
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
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
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  {post.stats && (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <FiTrendingUp className={isTalsomTheme ? 'text-primary-green' : 'text-primary-red'} />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {post.stats.growth}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.stats.impact}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                      >
                        <FiTag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <button className={`${
                      isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                    } hover:underline font-medium text-sm group flex items-center gap-1`}>
                      Read
                      <FiArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No insights found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className={`mt-4 px-6 py-3 rounded-full font-medium ${
                  isTalsomTheme 
                    ? 'bg-primary-green text-white hover:bg-blue-700'
                    : 'bg-primary-red text-white hover:bg-red-700'
                } transition-colors duration-200`}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
