import { motion } from 'framer-motion';
import { ScrollAnimation } from '../ui/Badge';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left">
            <img
              src="https://images.unsplash.com/photo-1504328213606-18bbc8c9d7d1?w=600&h=600&fit=crop"
              alt="About"
              loading="lazy"
              className="w-full rounded-lg shadow-2xl"
            />
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right">
            <div>
              <h2 className="section-title mb-6">About BuildCo</h2>
              <p className="text-gray-600 text-lg mb-4">
                With over 25 years of industry experience, BuildCo has established itself as a trusted leader in construction and development. We combine traditional craftsmanship with modern innovation to deliver exceptional results.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our commitment to quality, safety, and customer satisfaction has earned us the trust of hundreds of clients and the respect of our peers. Every project is an opportunity to build something extraordinary.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {[
                  'Expert team of architects and engineers',
                  'Sustainable and eco-friendly practices',
                  'Advanced construction technology',
                  'Transparent communication and reporting',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-dark-900 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
