import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'Absolutely divine experience! The therapists at Serenity Spa are incredibly skilled and the atmosphere is so peaceful. I leave feeling completely rejuvenated every time.'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      rating: 5,
      text: 'As someone who works long hours, Serenity Spa has become my sanctuary. The deep tissue massage here is phenomenal and the staff truly cares about your wellness journey.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Yoga Instructor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      text: 'The attention to detail and personalized care at Serenity Spa is unmatched. Every treatment feels like a luxury retreat. I recommend it to all my students!'
    }
  ];

  return (
    <section className="py-20 bg-spa-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why hundreds of clients trust us with their wellness journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-spa-pink-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-spa-pink-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-spa-pink-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-spa-pink-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-spa-pink-600 mb-2">25+</div>
            <div className="text-gray-600">Expert Therapists</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;