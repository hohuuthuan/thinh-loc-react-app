import { motion } from 'framer-motion';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Hero Background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Xây Dựng Những Giá Trị Bền Vững Cho Tương Lai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Giải pháp thi công chuyên nghiệp, thiết kế tinh tế và cam kết chất lượng vượt trội từ chuyên gia hơn 25 năm kinh nghiệm.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 font-bold rounded-lg transition-all duration-300 shadow-xl text-lg flex items-center justify-center gap-2 group"
          >
            Dự án tiêu biểu 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white backdrop-blur-sm px-10 py-4 font-bold rounded-lg transition-all duration-300 text-lg"
          >
            Liên hệ ngay
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
