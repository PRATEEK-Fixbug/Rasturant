import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-50 via-white to-orange-50 shadow-lg sticky top-0 z-50 border-b border-amber-100 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105">
          <UtensilsCrossed className="h-7 w-7 text-amber-600 group-hover:text-orange-500 transition-colors duration-200" />
          <span className="text-xl font-extrabold text-gray-800 group-hover:text-amber-600 transition-colors duration-200">Prateek's</span>
        </Link>
        
        {/* Navigation Buttons Grid */}
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-5 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-button px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-white/80 text-gray-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-amber-700 border border-gray-200 hover:border-amber-300 shadow-md hover:shadow-lg'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Placeholder for future actions */}
        <div className="w-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;

