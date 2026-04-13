import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../utils/data';

export const StatsSection = () => {
  const [counters, setCounters] = useState<number[]>(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounters = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    STATS.forEach((stat, index) => {
      let currentFrame = 0;
      const timer = setInterval(() => {
        const progress = currentFrame / totalFrames;
        const value = Math.floor(stat.value * progress);
        setCounters((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });
        currentFrame++;

        if (currentFrame > totalFrames) {
          clearInterval(timer);
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = stat.value;
            return updated;
          });
        }
      }, frameRate);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <p className="text-white text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
