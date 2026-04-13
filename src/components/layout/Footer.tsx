import logo from '../../assets/logo-thinh-loc.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <img 
                src={logo} 
                alt="Thịnh Lộc Logo" 
                className="h-10 w-auto object-contain rounded brightness-0 invert" 
              />
              <span>Thịnh Lộc</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Kiến tạo những công trình bền vững cho tương lai với sự tận tâm và đổi mới không ngừng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Dự Án
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary-400 transition-colors">
                  Tin Tức
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Xây Dựng Dân Dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Xây Dựng Thương Mại
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Xây Dựng Công Nghiệp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Thiết Kế Kiến Trúc
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+84281234567" className="hover:text-primary-400 transition-colors">
                  +84 (028) 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:lienhe@thinhloc.com" className="hover:text-primary-400 transition-colors">
                  lienhe@thinhloc.com
                </a>
              </li>
              <li className="text-sm">
                123 Đường Xây Dựng, Quận 1<br/>
                TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-2xl h-64 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3919.460232428581!2d106.701755515334!3d10.776627192321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f468965f7c3%3A0x9d1a89c3683f124c!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2svn!4v1650000000000!5m2!1sen!2svn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sơ đồ vị trí Thịnh Lộc Construction"
          ></iframe>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Xây Dựng Thịnh Lộc. Bảo lưu mọi quyền.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Điều Khoản Dịch Vụ
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
