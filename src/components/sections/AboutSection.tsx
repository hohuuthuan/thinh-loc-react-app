import { motion } from 'framer-motion';
import { ScrollAnimation } from '../ui/Badge';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <ScrollAnimation direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop"
                  alt="Công trường xây dựng"
                  loading="lazy"
                  className="w-full rounded-lg shadow-xl object-cover h-[300px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                  alt="Đội ngũ kỹ sư"
                  loading="lazy"
                  className="w-full rounded-lg shadow-xl object-cover h-[200px]"
                />
              </div>
              <div className="pt-8">
                <img
                  src="https://images.unsplash.com/photo-1481026469463-66327c86e544?w=600&h=900&fit=crop"
                  alt="Kiến trúc hiện đại"
                  loading="lazy"
                  className="w-full rounded-lg shadow-xl object-cover h-[450px]"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right">
            <div>
              <h2 className="section-title mb-6 text-dark-900">Thịnh Lộc Construction</h2>
              <p className="text-gray-600 text-lg mb-4">
                Với hơn 25 năm kinh nghiệm trong ngành, Thịnh Lộc đã khẳng định vị thế là đối tác tin cậy hàng đầu trong lĩnh vực thiết kế và thi công xây dựng. Chúng tôi kết hợp giữa tinh hoa kiến trúc truyền thống và công nghệ hiện đại để tạo nên những công trình vượt thời gian.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Sứ mệnh của chúng tôi không chỉ là xây dựng những tòa nhà, mà là kiến tạo nên những tổ ấm hạnh phúc và các không gian kinh doanh thịnh vượng. Chất lượng, an toàn và sự hài lòng của khách hàng là kim chỉ nam cho mọi hoạt động của chúng tôi.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {[
                  'Đội ngũ kiến trúc sư và kỹ sư chuyên môn cao',
                  'Quy trình thi công an toàn, thân thiện môi trường',
                  'Áp dụng công nghệ xây dựng tiên tiến nhất',
                  'Cam kết minh bạch về tiến độ và chi phí',
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
