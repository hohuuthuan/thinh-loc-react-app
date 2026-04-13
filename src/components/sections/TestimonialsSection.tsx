import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their experiences
          </p>
        </ScrollAnimation>

        {/* Carousel */}
        <ScrollAnimation direction="up" className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {/* Testimonial Cards */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-2xl p-8 md:p-12"
            >
              <div className="mb-8">
                <div className="flex text-3xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 italic mb-6">
                  "{TESTIMONIALS[current].quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 border-t pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                  {TESTIMONIALS[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-dark-900">{TESTIMONIALS[current].author}</p>
                  <p className="text-sm text-gray-600">{TESTIMONIALS[current].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:translate-x-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-primary-600 w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
