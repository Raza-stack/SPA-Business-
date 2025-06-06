import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
// import { Flower2} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-spa-pink-100 p-2 rounded-full group-hover:bg-spa-pink-200 transition-colors duration-300">
              {/* <Flower2 className="h-6 w-6 text-spa-pink-600" /> */}
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">Logo</h1>
              {/* <p className="text-xs text-spa-pink-600 -mt-1">Luxury & Wellness</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-spa-pink-600 ${
                  location.pathname === item.href
                    ? 'text-spa-pink-600 border-b-2 border-spa-pink-600 pb-1'
                    : isScrolled
                    ? 'text-gray-700 hover:text-spa-pink-600'
                    : 'text-white hover:text-spa-pink-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-spa-pink-600 hover:bg-spa-pink-50 rounded-md ${
                    location.pathname === item.href
                      ? 'text-spa-pink-600 bg-spa-pink-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-4 bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;