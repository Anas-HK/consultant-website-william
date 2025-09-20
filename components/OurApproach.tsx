'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  FiSearch, 
  FiLayers, 
  FiTool, 
  FiCheckCircle, 
  FiArrowRight 
} from 'react-icons/fi';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const OurApproach: React.FC = () => {
  const { colorScheme } = useTheme();
  const isTalsomTheme = colorScheme === 'talsom';

  const steps: Step[] = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your unique challenges and opportunities through comprehensive analysis.",
      icon: <FiSearch className="w-6 h-6" />,
      details: [
        "Stakeholder interviews",
        "Market research",
        "Current state assessment",
        "Opportunity identification"
      ]
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "We develop tailored strategies that align with your business objectives and market dynamics.",
      icon: <FiLayers className="w-6 h-6" />,
      details: [
        "Goal setting & KPIs",
        "Roadmap development",
        "Resource planning",
        "Risk assessment"
      ]
    },
    {
      number: "03",
      title: "Implementation",
      description: "We work alongside your team to execute the strategy with precision and agility.",
      icon: <FiTool className="w-6 h-6" />,
      details: [
        "Project management",
        "Change management",
        "Team enablement",
        "Continuous optimization"
      ]
    },
    {
      number: "04",
      title: "Results & Scale",
      description: "We measure impact, celebrate wins, and identify opportunities for scaling success.",
      icon: <FiCheckCircle className="w-6 h-6" />,
      details: [
        "Performance tracking",
        "ROI measurement",
        "Success replication",
        "Long-term support"
      ]
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white dark:bg-dark-surface">
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
            Our Proven Approach
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a systematic methodology that ensures consistent delivery of exceptional results
            while adapting to your unique context and needs.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-24 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                )}

                {/* Step Card */}
                <div className="relative bg-gray-50 dark:bg-dark-bg rounded-2xl p-6 lg:p-8 group hover:shadow-xl transition-all duration-300 min-h-[420px] flex flex-col">
                  {/* Step Number Circle */}
                  <div className={`relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full ${
                    isTalsomTheme ? 'bg-primary-green' : 'bg-primary-red'
                  } text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="font-display font-bold text-2xl">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`absolute top-8 right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${
                    isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                  }`}>
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-16 h-16" })}
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 mt-auto">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isTalsomTheme ? 'bg-accent-yellow' : 'bg-gray-400'
                          } mr-3 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                      <div className={`w-12 h-12 rounded-full bg-white dark:bg-dark-surface shadow-lg flex items-center justify-center ${
                        isTalsomTheme ? 'text-primary-green' : 'text-primary-red'
                      }`}>
                        <FiArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-dark-bg rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how our proven approach can drive meaningful results for your organization.
            </p>
            <a
              href="/contact"
              className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-white ${
                isTalsomTheme ? 'bg-primary-green hover:bg-green-700' : 'bg-primary-red hover:bg-red-700'
              } transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
            >
              Start Your Journey
              <FiArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
