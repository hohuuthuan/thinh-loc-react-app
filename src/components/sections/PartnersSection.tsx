import { motion } from 'framer-motion';
import { PARTNERS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
            Trusted by Industry Leaders
          </h2>
        </ScrollAnimation>

        {/* Partners Marquee */}
        <ScrollAnimation direction="up">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First set */}
              {PARTNERS.map((partner, index) => (
                <div
                  key={`${partner.name}-1-${index}`}
                  className="flex items-center justify-center min-w-max px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform mr-3">
                    {partner.logo}
                  </span>
                  <span className="text-lg font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {PARTNERS.map((partner, index) => (
                <div
                  key={`${partner.name}-2-${index}`}
                  className="flex items-center justify-center min-w-max px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform mr-3">
                    {partner.logo}
                  </span>
                  <span className="text-lg font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PartnersSection;
