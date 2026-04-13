import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '../ui/Badge';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung tin nhắn';

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <ScrollAnimation direction="left">
            <div>
              <h2 className="section-title mb-6">Liên Hệ Với Chúng Tôi</h2>
              <p className="text-gray-600 text-lg mb-8">
                Bạn đã sẵn sàng cho dự án tiếp theo? Hãy liên hệ với chúng tôi ngay hôm nay để thảo luận về cách chúng tôi có thể giúp hiện thực hóa tầm nhìn của bạn.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: '📞',
                    label: 'Điện thoại',
                    value: '+84 (028) 123 4567',
                    href: 'tel:+84281234567',
                  },
                  {
                    icon: '✉️',
                    label: 'Email',
                    value: 'lienhe@thinhloc.com',
                    href: 'mailto:lienhe@thinhloc.com',
                  },
                  {
                    icon: '📍',
                    label: 'Địa chỉ',
                    value: '123 Đường Xây Dựng, Quận 1, TP. Hồ Chí Minh',
                    href: '#',
                  },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group hover:translate-x-2 transition-transform"
                  >
                    <span className="text-3xl mt-1">{item.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
                <h4 className="font-bold text-dark-900 mb-3">Giờ Làm Việc</h4>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>Thứ Hai - Thứ Sáu: 8:00 AM - 6:00 PM</p>
                  <p>Thứ Bảy: 9:00 AM - 3:00 PM</p>
                  <p>Chủ Nhật: Nghỉ</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Contact Form */}
          <ScrollAnimation direction="right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-semibold"
                >
                  ✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất có thể.
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary-600'
                    } focus:outline-none`}
                    placeholder="Nhập họ tên của bạn"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary-600'
                    } focus:outline-none`}
                    placeholder="vidu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-900 mb-2">
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary-600'
                    } focus:outline-none`}
                    placeholder="09xx xxx xxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 resize-none transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary-600'
                    } focus:outline-none`}
                    placeholder="Mô tả dự án hoặc yêu cầu của bạn..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary py-4 font-bold text-lg"
                >
                  Gửi Yêu Cầu
                </motion.button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
