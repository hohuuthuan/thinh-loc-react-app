import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Tin Tức & Sự Kiện</h2>
          <p className="section-subtitle">
            Cập nhật những xu hướng, kiến thức và dự án mới nhất từ đội ngũ chuyên gia của chúng tôi
          </p>
        </ScrollAnimation>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <ScrollAnimation
              key={post.id}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <motion.button
                    whileHover={{ gap: '0.5rem' }}
                    className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
                  >
                    Xem Thêm →
                  </motion.button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
