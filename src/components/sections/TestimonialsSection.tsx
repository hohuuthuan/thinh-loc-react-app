import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrent((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-primary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p className="section-subtitle">
            Những đánh giá chân thực từ các đối tác đã tin tưởng và đồng hành cùng Thịnh Lộc
          </p>
        </ScrollAnimation>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative px-12">
          <div
            className="relative h-[400px] md:h-[350px]"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full bg-white rounded-lg shadow-2xl p-8 md:p-12 flex flex-col justify-between"
              >
                <div>
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
            </AnimatePresence>

            {/* Navigation Buttons (Centered to Card Height) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-30 -mx-14 md:-mx-20">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#0284C7", color: "#ffffff", borderColor: "#0284C7" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-full bg-white text-[#0284C7] flex items-center justify-center transition-all shadow-lg pointer-events-auto border-2 border-[#0284C7]"
                aria-label="Previous testimonial"
              >
                <span className="text-2xl font-black leading-none flex items-center justify-center">❮</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#0284C7", color: "#ffffff", borderColor: "#0284C7" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-full bg-white text-[#0284C7] flex items-center justify-center transition-all shadow-lg pointer-events-auto border-2 border-[#0284C7]"
                aria-label="Next testimonial"
              >
                <span className="text-2xl font-black leading-none flex items-center justify-center">❯</span>
              </motion.button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDir = index > current ? 1 : -1;
                  setPage([page + (index - current), newDir]);
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
