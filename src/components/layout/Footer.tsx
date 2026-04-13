export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">
                BC
              </div>
              <span>BuildCo</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Building strong foundations for the future with expertise and innovation.
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
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Industrial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@buildco.com" className="hover:text-primary-400 transition-colors">
                  info@buildco.com
                </a>
              </li>
              <li className="text-sm">
                123 Construction Ave.<br/>
                Building City, BC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} BuildCo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
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
