import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Swedish Massage',
    'Deep Tissue Massage',
    'Hot Stone Massage',
    'HydraFacial',
    'Anti-Aging Facial',
    'Body Wrap',
    'Salt Scrub',
    'Spa Package',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-beige-100 to-spa-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Book Your
              <span className="block text-spa-pink-600">Perfect Escape</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the ultimate in relaxation and wellness? Contact us to schedule your personalized spa experience.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-spa-pink-100 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-spa-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-spa-pink-100 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-spa-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@serenityspa.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-spa-pink-100 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-spa-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">123 Wellness Boulevard<br />Peaceful City, PC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-spa-pink-600" />
                      <div>
                        <p className="font-medium text-gray-900">Monday - Friday</p>
                        <p className="text-gray-600">9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-spa-pink-600" />
                      <div>
                        <p className="font-medium text-gray-900">Saturday - Sunday</p>
                        <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Location</h3>
                  <div className="bg-spa-beige-100 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-spa-pink-600 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive map would be integrated here</p>
                      <p className="text-sm text-gray-500 mt-2">123 Wellness Boulevard, Peaceful City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                  Book Your Appointment
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Preferred Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Special Requests or Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any special requests, health conditions, or preferences we should know about?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-spa-pink-600 hover:bg-spa-pink-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group"
                  >
                    <Send className="inline h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Booking Request
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <section className="py-20 bg-spa-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-spa-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-spa-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
              <p className="text-gray-600">Book online or call us directly. We'll confirm your appointment within 24 hours.</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-spa-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-spa-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Hours</h3>
              <p className="text-gray-600">Open 7 days a week with extended evening hours to fit your schedule.</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-spa-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-spa-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Service</h3>
              <p className="text-gray-600">Our team is always available to help you choose the perfect treatment for your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;