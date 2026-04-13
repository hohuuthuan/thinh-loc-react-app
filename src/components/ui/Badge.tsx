import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success';
}

export const Badge = ({ text, variant = 'primary' }: BadgeProps) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
  };

  return (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${variantClasses[variant]}`}>
      {text}
    </span>
  );
};

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollAnimationProps) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [ref]);

  const directionVariants = {
    up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  };

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={setRef}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Badge;
