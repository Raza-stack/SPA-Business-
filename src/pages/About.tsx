import React from 'react';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Your health and well-being are at the center of everything we do. We believe in holistic healing that nurtures mind, body, and spirit.'
    },
    {
      icon: Users,
      title: 'Expert Care',
      description: 'Our certified therapists bring years of experience and continuous education to provide you with the highest quality treatments.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in service, cleanliness, and customer satisfaction, earning recognition as the premier spa in the area.'
    },
    {
      icon: Leaf,
      title: 'Natural Approach',
      description: 'We use only premium, organic products and natural healing techniques to ensure your treatments are both effective and safe.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Spa Director & Wellness Expert',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      bio: 'With over 15 years in wellness and spa management, Dr. Mitchell leads our team with a passion for holistic healing.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Senior Massage Therapist',
      image: 'https://images.pexels.com/photos/8436717/pexels-photo-8436717.jpeg',
      bio: 'Certified in multiple massage techniques, Maria specializes in deep tissue and therapeutic massage treatments.'
    },
    {
      name: 'James Chen',
      role: 'Esthetician & Facial Specialist',
      image: 'https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg',
      bio: 'James brings expertise in advanced skincare treatments and has helped hundreds of clients achieve glowing skin.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-beige-100 to-spa-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Our Story of
                <span className="block text-spa-pink-600">Wellness & Care</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2014, Serenity Spa was born from a simple belief: everyone deserves a sanctuary where they can escape, rejuvenate, and rediscover their inner peace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small wellness center has grown into the area's premier destination for luxury spa treatments, while maintaining our core commitment to personalized care and authentic healing experiences.
              </p>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg"
                alt="Spa interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape every experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-spa-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-spa-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-spa-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certified professionals are dedicated to providing you with exceptional care and transformative experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-spa-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              "To create a sanctuary where wellness meets luxury, providing personalized treatments that restore balance, enhance beauty, and nurture the soul."
            </p>
            <button className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Experience Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;