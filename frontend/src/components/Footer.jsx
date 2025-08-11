import { Link } from 'react-router-dom';
import { UtensilsCrossed, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Restaurant Info */}
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <UtensilsCrossed className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">Prateek's Restaurant</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Experience the finest dining with our authentic cuisine and warm hospitality.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-amber-500 transition-colors">Menu</Link></li>
              <li><Link to="/reservation" className="text-gray-300 hover:text-amber-500 transition-colors">Reservation</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2"><Phone className="h-5 w-5 text-amber-500" /><span className="text-gray-300">+1 (555) 123-4567</span></div>
              <div className="flex items-center justify-center space-x-2"><Mail className="h-5 w-5 text-amber-500" /><span className="text-gray-300">info@prateeks.com</span></div>
              <div className="flex items-center justify-center space-x-2"><MapPin className="h-5 w-5 text-amber-500" /><span className="text-gray-300">123 Main Street, City, State 12345</span></div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2"><Clock className="h-5 w-5 text-amber-500" /><span className="text-gray-300">Mon-Fri: 11:00 AM - 10:00 PM</span></div>
              <div className="flex items-center justify-center space-x-2"><Clock className="h-5 w-5 text-amber-500" /><span className="text-gray-300">Sat-Sun: 10:00 AM - 11:00 PM</span></div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 Prateek's Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

