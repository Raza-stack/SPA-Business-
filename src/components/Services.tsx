import React from 'react';
import { Sparkles, Heart, Flower, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Signature Massages',
      description: 'Indulge in our therapeutic massage treatments designed to melt away stress and tension.',
      image: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg',
      treatments: ['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'],
      duration: '60-90 min',
      price: 'From $120'
    },
    {
      icon: Heart,
      title: 'Luxury Facials',
      description: 'Rejuvenate your skin with our customized facial treatments using premium organic products.',
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
      treatments: ['HydraFacial', 'Anti-Aging', 'Brightening', 'Sensitive Skin'],
      duration: '75-90 min',
      price: 'From $150'
    },
    {
      icon: Flower,
      title: 'Body Treatments',
      description: 'Luxurious body wraps and scrubs to nourish and revitalize your entire body.',
      image: 'https://images.pexels.com/photos/3188444/pexels-photo-3188444.jpeg',
      treatments: ['Body Wraps', 'Salt Scrubs', 'Mud Therapy', 'Detox Treatments'],
      duration: '60-120 min',
      price: 'From $100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Signature Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our carefully curated treatments designed to restore balance and enhance your well-being
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-spa-pink-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Treatment List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Treatments:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.treatments.map((treatment) => (
                      <span
                        key={treatment}
                        className="bg-spa-pink-100 text-spa-pink-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-semibold text-spa-pink-600">{service.price}</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-spa-pink-600 hover:bg-spa-pink-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-spa-pink-600 text-spa-pink-600 hover:bg-spa-pink-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;