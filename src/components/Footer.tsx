import React from 'react';
import { Flower2, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-spa-pink-600 p-2 rounded-full">
                <Flower2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Serenity Spa</h3>
                <p className="text-sm text-spa-pink-300">Luxury & Wellness</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience the ultimate in relaxation and wellness at Serenity Spa. Our expert therapists and luxurious treatments will rejuvenate your mind, body, and spirit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-spa-pink-600 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-spa-pink-600 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-spa-pink-600 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-spa-pink-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-spa-pink-400" />
                <span className="text-gray-300">hello@serenityspa.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-spa-pink-400 mt-1" />
                <span className="text-gray-300">123 Wellness Boulevard<br />Peaceful City, PC 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-spa-pink-400" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 9am - 8pm</p>
                  <p>Sat - Sun: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Serenity Spa. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-spa-pink-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-spa-pink-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-spa-pink-400 transition-colors duration-300">Gift Cards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;