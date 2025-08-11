import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare } from 'lucide-react';
import axios from 'axios';

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateLoading, setDateLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Available time slots
  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30'
  ];

  // Guest options
  const guestOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // If date changes, fetch available times
    if (name === 'date' && value) {
      fetchAvailableTimes(value);
    }
  };

  const fetchAvailableTimes = async (date) => {
    if (!date) return;
    
    setDateLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/reservations/available-slots/${date}`);
      if (response.data.success) {
        setAvailableTimes(response.data.availableTimeSlots);
      }
    } catch (error) {
      console.error('Error fetching available times:', error);
      // Fallback to all time slots if API fails
      setAvailableTimes(timeSlots);
    } finally {
      setDateLoading(false);
    }
  };

  const validateForm = () => {
    const { name, email, phone, date, time, guests } = formData;
    
    if (!name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    
    if (!email.trim()) {
      toast.error('Please enter your email');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    
    if (!phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    
    if (!date) {
      toast.error('Please select a date');
      return false;
    }
    
    if (!time) {
      toast.error('Please select a time');
      return false;
    }
    
    if (!guests) {
      toast.error('Please select number of guests');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/reservations/create', formData);
      
      if (response.data.success) {
        toast.success('Reservation created successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          specialRequests: ''
        });
        setAvailableTimes([]);
        // Navigate to success page or home
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
      const errorMessage = error.response?.data?.message || 'Failed to create reservation. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title">Make a Reservation</h1>
            <p className="section-subtitle">
              Book your table at Prateek's Restaurant and experience exceptional dining
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="reservation-form">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-5 w-5 text-amber-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-amber-600" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-amber-600" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-amber-600" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={today}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.date || dateLoading}
                    >
                      <option value="">Select time</option>
                      {dateLoading ? (
                        <option disabled>Loading available times...</option>
                      ) : (
                        availableTimes.map(time => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="form-group">
                  <label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-600" />
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select number of guests</option>
                    {guestOptions.map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div className="form-group">
                  <label htmlFor="specialRequests" className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-amber-600" />
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special requests or dietary requirements..."
                    rows="4"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-large w-full"
                >
                  {loading ? 'Creating Reservation...' : 'Book Your Table'}
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-8">
              {/* Restaurant Info */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Restaurant Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium">Opening Hours</div>
                      <div className="text-gray-600">Mon-Fri: 11:00 AM - 10:00 PM</div>
                      <div className="text-gray-600">Sat-Sun: 10:00 AM - 11:00 PM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium">Contact</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">info@prateeks.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Tips */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Reservation Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Reservations are recommended for dinner service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Please arrive 5-10 minutes before your reservation time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    For groups of 8 or more, please call us directly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Cancellations must be made 24 hours in advance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    We accommodate dietary restrictions and allergies
                  </li>
                </ul>
              </div>

              {/* Special Offers */}
              <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Special Offers</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="font-medium text-amber-600">Happy Hour</div>
                    <div className="text-sm text-gray-600">50% off appetizers, Mon-Fri 3-6 PM</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="font-medium text-amber-600">Weekend Brunch</div>
                    <div className="text-sm text-gray-600">Free mimosa with any brunch entrée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

