import React from 'react';
import { Clock, Star, ArrowRight, Sparkles, Heart, Flower, Droplets, Sun, Zap } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: 'Signature Massages',
      description: 'Therapeutic and relaxation massages tailored to your needs',
      color: 'spa-pink',
      services: [
        {
          name: 'Swedish Relaxation Massage',
          duration: '60/90 min',
          price: '$120/$180',
          description: 'Gentle, flowing strokes to promote deep relaxation and stress relief'
        },
        {
          name: 'Deep Tissue Massage',
          duration: '60/90 min',
          price: '$140/$200',
          description: 'Intensive therapy targeting chronic tension and muscle knots'
        },
        {
          name: 'Hot Stone Massage',
          duration: '90 min',
          price: '$210',
          description: 'Heated basalt stones combined with massage for ultimate relaxation'
        },
        {
          name: 'Prenatal Massage',
          duration: '60 min',
          price: '$135',
          description: 'Specialized massage for expecting mothers to ease pregnancy discomfort'
        }
      ]
    },
    {
      icon: Heart,
      title: 'Luxury Facials',
      description: 'Advanced skincare treatments for radiant, healthy skin',
      color: 'spa-sage',
      services: [
        {
          name: 'HydraFacial MD',
          duration: '75 min',
          price: '$200',
          description: 'Medical-grade facial with instant results and no downtime'
        },
        {
          name: 'Anti-Aging Facial',
          duration: '90 min',
          price: '$180',
          description: 'Peptide-infused treatment to reduce fine lines and boost collagen'
        },
        {
          name: 'Brightening Facial',
          duration: '75 min',
          price: '$165',
          description: 'Vitamin C treatment to even skin tone and add luminosity'
        },
        {
          name: 'Sensitive Skin Facial',
          duration: '60 min',
          price: '$150',
          description: 'Gentle treatment designed for reactive and delicate skin types'
        }
      ]
    },
    {
      icon: Flower,
      title: 'Body Treatments',
      description: 'Luxurious full-body therapies for ultimate pampering',
      color: 'spa-beige',
      services: [
        {
          name: 'Detoxifying Body Wrap',
          duration: '90 min',
          price: '$190',
          description: 'Mineral-rich clay wrap to purify and smooth the skin'
        },
        {
          name: 'Himalayan Salt Scrub',
          duration: '60 min',
          price: '$140',
          description: 'Exfoliating treatment followed by nourishing body butter'
        },
        {
          name: 'Aromatherapy Body Ritual',
          duration: '120 min',
          price: '$250',
          description: 'Complete sensory experience with scrub, wrap, and massage'
        },
        {
          name: 'Sunless Tanning',
          duration: '45 min',
          price: '$85',
          description: 'Professional spray tan for a natural, streak-free glow'
        }
      ]
    }
  ];

  const addOnServices = [
    { icon: Droplets, name: 'Aromatherapy Enhancement', price: '+$15' },
    { icon: Sun, name: 'Vitamin D Boost', price: '+$20' },
    { icon: Zap, name: 'CBD Infusion', price: '+$25' },
    { icon: Heart, name: 'Eye Treatment Add-on', price: '+$30' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-pink-100 to-spa-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Signature
              <span className="block text-spa-pink-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive menu of luxury treatments designed to rejuvenate your mind, body, and spirit
            </p>
            <button className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Book Your Treatment
            </button>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className={`bg-${category.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <category.icon className={`h-8 w-8 text-${category.color}-600`} />
              </div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <div className="text-right">
                      <div className="flex items-center text-spa-pink-600 font-semibold">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button className={`w-full bg-${category.color}-600 hover:bg-${category.color}-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group`}>
                    Book This Treatment
                    <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-On Services */}
      <section className="py-20 bg-spa-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Enhancement Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elevate your treatment with these luxurious enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-spa-sage-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="h-6 w-6 text-spa-sage-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-spa-sage-600">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Spa Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combine multiple treatments for the ultimate spa experience and save
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Serenity Escape',
                duration: '3 hours',
                price: '$299',
                originalPrice: '$350',
                treatments: ['60-min Swedish Massage', 'HydraFacial', 'Himalayan Salt Scrub'],
                popular: false
              },
              {
                name: 'Ultimate Luxury',
                duration: '4 hours',
                price: '$425',
                originalPrice: '$500',
                treatments: ['90-min Hot Stone Massage', 'Anti-Aging Facial', 'Aromatherapy Body Ritual'],
                popular: true
              },
              {
                name: 'Couples Retreat',
                duration: '2.5 hours',
                price: '$550',
                originalPrice: '$650',
                treatments: ['Couples Massage (60 min)', 'Side-by-side Facials', 'Champagne & Chocolates'],
                popular: false
              }
            ].map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up ${
                  pkg.popular ? 'ring-2 ring-spa-pink-600' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-spa-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-spa-pink-600">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.treatments.map((treatment) => (
                    <div key={treatment} className="flex items-center">
                      <Star className="h-4 w-4 text-spa-pink-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{treatment}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
                  pkg.popular
                    ? 'bg-spa-pink-600 hover:bg-spa-pink-700 text-white'
                    : 'bg-gray-100 hover:bg-spa-pink-600 hover:text-white text-gray-900'
                }`}>
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-600 to-spa-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your appointment today and discover why Serenity Spa is the premier destination for luxury wellness treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-spa-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                Book Online
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-spa-pink-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;