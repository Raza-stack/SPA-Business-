import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3188440/pexels-photo-3188440.jpeg"
          alt="Luxury spa treatment room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Star className="h-6 w-6 text-spa-pink-200" />
        </div>
      </div>
      <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
          <Star className="h-4 w-4 text-spa-pink-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-spa-pink-300">Inner Peace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
            Experience ultimate relaxation and rejuvenation at Serenity Spa, where luxury meets wellness in perfect harmony.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
              Book Your Experience
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              View Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm">5.0 Rating</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">500+</span> Happy Clients
            </div>
            <div className="text-sm">
              <span className="font-semibold">10+</span> Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;