'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiTrendingUp,
  FiShield,
  FiZap
} from 'react-icons/fi';

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  const reasons: Reason[] = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Industry Leaders",
      description: "25+ years of experience delivering transformative results for Fortune 500 companies"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "500+ consultants with deep expertise across industries and technologies"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Offices in 30+ countries with local insights and global perspectives"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "Average 3x ROI for our clients with sustainable long-term impact"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Trusted Partner",
      description: "95% client retention rate with long-standing partnerships"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Innovation First",
      description: "Cutting-edge solutions leveraging the latest technologies and methodologies"
    }
  ];

  const stats = [
    { value: "500+", label: "Consultants" },
    { value: "30+", label: "Countries" },
    { value: "1000+", label: "Projects" },
    { value: "95%", label: "Client Retention" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-surface overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Why Choose
              <span className={`block mt-2 ${
                isTalsomTheme 
                  ? 'bg-gradient-to-r from-primary-green to-accent-yellow bg-clip-text text-transparent' 
                  : 'text-primary-red'
              }`}>
                ConsultPro
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're not just consultants – we're your strategic partners in transformation. 
              Our commitment to excellence and innovation has made us the trusted advisor 
              to industry leaders worldwide.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <h3 className={`font-display font-bold text-3xl md:text-4xl ${
                    isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                  }`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=smart"
                alt="Our Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium mb-1">Our Global Team</p>
                <p className="text-2xl font-display font-bold">Experts Who Care</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-dark-bg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isTalsomTheme 
                      ? 'bg-primary-green/10 text-primary-green' 
                      : 'bg-primary-red/10 text-primary-red'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-12">
            Our Core Values Drive Everything We Do
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Excellence', 'Innovation', 'Integrity', 'Partnership'].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`py-4 px-6 rounded-full font-medium text-white ${
                  isTalsomTheme 
                    ? (index % 2 === 0 ? 'bg-primary-green' : 'bg-accent-yellow text-gray-900')
                    : (index % 2 === 0 ? 'bg-primary-red' : 'bg-accent-gray')
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {value}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
