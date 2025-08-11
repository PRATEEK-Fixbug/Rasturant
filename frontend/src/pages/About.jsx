import { Award, Users, Clock, Heart, Star, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Prateek Sharma',
      position: 'Head Chef & Owner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 20 years of culinary experience, Chef Prateek brings passion and innovation to every dish.',
      specialties: ['Modern Cuisine', 'Fusion Dishes', 'Seasonal Menus']
    },
    {
      name: 'Sarah Johnson',
      position: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Specializing in French and Mediterranean cuisine with a focus on fresh, local ingredients.',
      specialties: ['French Cuisine', 'Pastry', 'Wine Pairing']
    },
    {
      name: 'Michael Chen',
      position: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Creating sweet masterpieces with artistic flair and attention to detail.',
      specialties: ['Desserts', 'Bread Making', 'Chocolate Work']
    },
    {
      name: 'Emma Rodriguez',
      position: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Ensuring exceptional service and memorable dining experiences for every guest.',
      specialties: ['Customer Service', 'Event Planning', 'Wine Selection']
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and attention to detail, ensuring an exceptional dining experience.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Quality Ingredients',
      description: 'We source only the finest, freshest ingredients from local suppliers and trusted partners.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focus',
      description: 'We\'re proud to be part of our local community and support local businesses and initiatives.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from food preparation to customer service.'
    }
  ];

  const achievements = [
    { year: '2023', title: 'Best Fine Dining Restaurant', organization: 'City Food Awards' },
    { year: '2022', title: 'Chef of the Year', organization: 'Culinary Excellence Awards' },
    { year: '2021', title: 'Excellence in Service', organization: 'Hospitality Association' },
    { year: '2020', title: 'Best Wine Selection', organization: 'Wine & Dine Magazine' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>About Prateek's Restaurant</h1>
            <p>
              A culinary journey that began with a dream and has evolved into one of the 
              most beloved dining destinations in our city.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2003 by Chef Prateek Sharma, our restaurant began as a small 
                family-owned establishment with a big dream: to create a dining experience 
                that combines traditional flavors with modern culinary techniques.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a modest 30-seat restaurant has grown into a beloved 
                culinary destination, serving over 10,000 satisfied customers annually. 
                Our commitment to quality, authenticity, and exceptional service has 
                remained unchanged throughout our journey.
              </p>
              <p className="text-gray-600">
                Today, we continue to honor our roots while embracing innovation, 
                offering a menu that celebrates both traditional recipes and contemporary 
                culinary trends. Every dish tells a story, every meal creates a memory.
              </p>
            </div>
            
            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-bold text-amber-600">2003</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Seating Capacity</span>
                    <span className="font-bold text-amber-600">120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Team Members</span>
                    <span className="font-bold text-amber-600">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Awards Won</span>
                    <span className="font-bold text-amber-600">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Happy Customers</span>
                    <span className="font-bold text-amber-600">10,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Prateek's Restaurant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="feature-icon mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented individuals who make Prateek's Restaurant exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">
              Celebrating our achievements and the recognition we've received
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{achievement.year}</div>
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Visit Us</h2>
              <p className="section-subtitle">
                We'd love to welcome you to Prateek's Restaurant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Main Street<br />
                  City, State 12345
                </p>
              </div>
              
              <div className="card text-center">
                <Clock className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Mon-Fri: 11:00 AM - 10:00 PM<br />
                  Sat-Sun: 10:00 AM - 11:00 PM
                </p>
              </div>
              
              <div className="card text-center">
                <Phone className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: +1 (555) 123-4567<br />
                  Email: info@prateeks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

