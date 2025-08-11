import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Welcome to Prateek's Restaurant</h1>
            <p>
              Experience the finest dining with our authentic cuisine, warm hospitality, 
              and unforgettable flavors that will transport you to culinary paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation" className="btn btn-primary btn-large">
                Book a Table
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/menu" className="btn btn-secondary btn-large">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Prateek's?</h2>
          <p className="section-subtitle">
            We combine traditional recipes with modern culinary techniques to create 
            an exceptional dining experience.
          </p>
          
          <div className="grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients, carefully selected to ensure 
                every dish meets our high standards of quality and taste.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Daily</h3>
              <p className="text-gray-600">
                Our ingredients are sourced fresh daily, ensuring that every meal 
                is prepared with the highest quality and nutritional value.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Chefs</h3>
              <p className="text-gray-600">
                Our team of experienced chefs brings creativity and passion to every 
                dish, creating memorable culinary experiences for our guests.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
              <p className="text-gray-600">
                Recognized for excellence in cuisine and service, we take pride in 
                delivering exceptional dining experiences to our valued customers.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Flavors</h3>
              <p className="text-gray-600">
                Our recipes are passed down through generations, preserving the 
                authentic flavors and traditional cooking methods.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warm Hospitality</h3>
              <p className="text-gray-600">
                Our friendly staff ensures that every visit is memorable with 
                personalized service and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 items-center gap-12">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a passion for authentic cuisine, Prateek's Restaurant 
                has been serving our community with love and dedication for over 
                two decades. Our journey began with a simple dream: to create a 
                place where people could enjoy delicious food in a warm, welcoming atmosphere.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to honor our roots while embracing innovation, 
                offering a menu that celebrates both traditional flavors and modern 
                culinary trends. Every dish tells a story, every meal creates a memory.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            
            <div className="slide-in-right">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="font-bold text-amber-600">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Happy Customers</span>
                    <span className="font-bold text-amber-600">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dishes Served</span>
                    <span className="font-bold text-amber-600">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Awards Won</span>
                    <span className="font-bold text-amber-600">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table today and discover why Prateek's is the preferred choice 
            for discerning diners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation" className="btn bg-white text-amber-600 hover:bg-gray-100">
              Make a Reservation
            </Link>
            <Link to="/menu" className="btn border-2 border-white text-white hover:bg-white hover:text-amber-600">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

