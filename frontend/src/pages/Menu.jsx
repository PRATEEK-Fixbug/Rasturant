import { useState } from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: 'Bruschetta',
      description: 'Toasted bread topped with fresh tomatoes, basil, and garlic',
      price: 12.99,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a64e546?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '10 min'
    },
    {
      id: 2,
      name: 'Spinach Artichoke Dip',
      description: 'Creamy dip with spinach, artichokes, and melted cheese',
      price: 14.99,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '15 min'
    },
    {
      id: 3,
      name: 'Calamari',
      description: 'Crispy fried squid served with marinara sauce',
      price: 16.99,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '12 min'
    },

    // Main Courses
    {
      id: 4,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs and lemon butter sauce',
      price: 28.99,
      category: 'main-courses',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '25 min'
    },
    {
      id: 5,
      name: 'Beef Tenderloin',
      description: 'Premium cut beef with red wine reduction and roasted vegetables',
      price: 34.99,
      category: 'main-courses',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '30 min'
    },
    {
      id: 6,
      name: 'Chicken Marsala',
      description: 'Pan-seared chicken in marsala wine sauce with mushrooms',
      price: 24.99,
      category: 'main-courses',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '20 min'
    },
    {
      id: 7,
      name: 'Vegetarian Pasta',
      description: 'Fresh pasta with seasonal vegetables and basil pesto',
      price: 18.99,
      category: 'main-courses',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '18 min'
    },

    // Desserts
    {
      id: 8,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: 12.99,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '5 min'
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 14.99,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '8 min'
    },
    {
      id: 10,
      name: 'New York Cheesecake',
      description: 'Creamy cheesecake with berry compote',
      price: 11.99,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '5 min'
    },

    // Beverages
    {
      id: 11,
      name: 'Fresh Lemonade',
      description: 'Homemade lemonade with fresh lemons and mint',
      price: 4.99,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '3 min'
    },
    {
      id: 12,
      name: 'Craft Beer Selection',
      description: 'Local and imported craft beers',
      price: 6.99,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: true,
      prepTime: '2 min'
    },
    {
      id: 13,
      name: 'House Wine',
      description: 'Premium selection of red and white wines',
      price: 8.99,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      popular: false,
      prepTime: '2 min'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Menu</h1>
          <p className="section-subtitle">
            Discover our carefully crafted dishes made with the finest ingredients 
            and prepared by our expert chefs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.prepTime}
                </div>
              </div>
              
              <div className="menu-item-content">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center gap-1 text-amber-600 font-bold">
                    <DollarSign className="h-4 w-4" />
                    {item.price}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {item.category.replace('-', ' ')}
                  </span>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Menu Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Allergen Information</h4>
                <p className="text-gray-600">
                  We accommodate dietary restrictions. Please inform our staff of any allergies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Seasonal Menu</h4>
                <p className="text-gray-600">
                  Our menu changes seasonally to feature the freshest ingredients available.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Chef's Specials</h4>
                <p className="text-gray-600">
                  Ask your server about our daily chef's specials and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

