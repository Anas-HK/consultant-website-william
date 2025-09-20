'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  FiTrendingUp, 
  FiCpu, 
  FiDatabase, 
  FiUsers, 
  FiTarget, 
  FiGlobe,
  FiBarChart,
  FiShield
} from 'react-icons/fi';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServicesGrid: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  const services: Service[] = [
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business operations and decision-making.",
      features: ["Predictive Analytics", "Process Automation", "Natural Language Processing"]
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics and visualization solutions.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics"]
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology infrastructure for the digital age.",
      features: ["Cloud Migration", "Legacy Modernization", "Digital Strategy"]
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Strategic Consulting",
      description: "Develop winning strategies that drive growth and competitive advantage.",
      features: ["Market Analysis", "Growth Strategy", "Competitive Positioning"]
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Organizational Design",
      description: "Build high-performing teams and optimize your organizational structure.",
      features: ["Change Management", "Leadership Development", "Culture Transformation"]
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Expansion",
      description: "Navigate international markets and scale your business globally.",
      features: ["Market Entry Strategy", "International Operations", "Cross-border M&A"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-bg">
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive consulting services that drive meaningful transformation 
            and deliver measurable results for your organization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${
                isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
              } opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
              } bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={isTalsomTheme ? 'text-primary-green' : 'text-primary-red'}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                      isTalsomTheme ? 'bg-accent-yellow' : 'bg-accent-gray'
                    } mt-2 mr-3 flex-shrink-0`} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link - Commented out for now 
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className={`inline-flex items-center ${
                    isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                  } font-medium hover:underline group`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              */}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Can't find what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-white ${
              isTalsomTheme ? 'bg-primary-green hover:bg-green-700' : 'bg-primary-red hover:bg-red-700'
            } transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
          >
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
