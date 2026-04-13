import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollDirection } from '../../hooks';
import { Button } from '../ui/Button';

const NAV_LINKS = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasScrolled = scrollY > 50;
  const isHidden = scrollDirection === 'down' && scrollY > 200;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              BC
            </div>
            <span className={`text-xl font-bold hidden sm:inline ${hasScrolled ? 'text-dark-900' : 'text-white'}`}>
              BuildCo
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`text-sm font-semibold transition-colors ${
                  hasScrolled ? 'text-dark-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button label="Get a Quote" variant="primary" size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex flex-col space-y-1.5 ${hasScrolled ? 'text-dark-900' : 'text-white'}`}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current block transition-all"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-current block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current block transition-all"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${hasScrolled ? 'bg-white' : 'bg-dark-800'}`}
        >
          <div className="px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-semibold ${
                  hasScrolled ? 'text-dark-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Button label="Get a Quote" variant="primary" size="sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
