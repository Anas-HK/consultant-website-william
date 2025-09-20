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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=smart"
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

        {/* Bottom Section - Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Industry experts with decades of combined experience driving transformation across global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Managing Partner",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c2a7?w=400&h=400&fit=crop&crop=face",
                expertise: "Digital Transformation"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Strategy Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                expertise: "Strategic Planning"
              },
              {
                name: "Dr. Emily Johnson",
                role: "Head of Innovation",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
                expertise: "AI & Machine Learning"
              },
              {
                name: "David Kim",
                role: "Global Operations Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                expertise: "Operational Excellence"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-surface rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${
                    isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
                  } border-4 border-white dark:border-dark-surface`} />
                </div>

                {/* Member Info */}
                <h4 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className={`font-medium mb-3 ${
                  isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                }`}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.expertise}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4">
                  <div className={`w-8 h-8 rounded-full ${
                    isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
                  } bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors duration-200 cursor-pointer`}>
                    <div className={`w-4 h-4 ${
                      isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                    }`}>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
