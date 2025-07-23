import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Tess02.png" 
                alt="Tess' Corner" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Tess' Corner</h3>
                <p className="text-sm text-gray-400">Your one-stop shop for everyday wear!</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the latest trends in clothing, shoes, skincare, makeup, and accessories. 
              Quality products at affordable prices, right in the heart of Nakuru.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-rose-300" />
                <span className="text-sm text-gray-400">Mawanga, Nakuru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-rose-300" />
                <span className="text-sm text-gray-400">254000000007</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-rose-300" />
                <span className="text-sm text-gray-400">africt355@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-rose-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-rose-300 transition-colors"
              >
                <div className="h-4 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm"></div>
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-rose-300 transition-colors"
              >
                <div className="h-4 w-4 bg-blue-600 rounded-sm"></div>
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-rose-300 transition-colors"
              >
                <div className="h-4 w-4 bg-black rounded-sm"></div>
                <span className="text-sm">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tess' Corner. All rights reserved. | Coordinates: 0°15'58"S 36°06'36"E
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;