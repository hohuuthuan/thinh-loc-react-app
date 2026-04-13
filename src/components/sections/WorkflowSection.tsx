import { motion } from 'framer-motion';
import { WORKFLOW_STEPS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Our Process</h2>
          <p className="section-subtitle">
            A streamlined approach to delivering excellence from start to finish
          </p>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-600 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {WORKFLOW_STEPS.map((step, index) => (
              <ScrollAnimation
                key={step.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-start lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number / Connector */}
                  <div className="flex-shrink-0 lg:w-1/2 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    >
                      {step.id}
                    </motion.div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
