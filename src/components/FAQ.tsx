import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What should I expect during my first visit?',
      answer: 'During your first visit, you\'ll have a consultation with our wellness coordinator to discuss your needs and preferences. We\'ll create a personalized treatment plan and guide you through our facilities. Please arrive 15 minutes early to complete your intake forms and enjoy our relaxation lounge.'
    },
    {
      question: 'How far in advance should I book my appointment?',
      answer: 'We recommend booking at least 1-2 weeks in advance, especially for weekend appointments and popular treatments. However, we often have same-day availability for certain services. Call us or use our online booking system to check real-time availability.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for appointment changes or cancellations. Cancellations made less than 24 hours in advance will be charged 50% of the service cost. No-shows will be charged the full service amount. We understand emergencies happen and will work with you on a case-by-case basis.'
    },
    {
      question: 'Do you offer package deals or memberships?',
      answer: 'Yes! We offer various spa packages combining multiple services at discounted rates. Our monthly membership program provides significant savings for regular visitors, priority booking, and exclusive access to member-only events. Contact us to learn about current packages and membership benefits.'
    },
    {
      question: 'What should I wear and bring to my appointment?',
      answer: 'We provide everything you need including robes, slippers, and towels. For massage and body treatments, you\'ll undress to your comfort level. We recommend arriving makeup-free for facial treatments. Bring comfortable clothes to change into afterward and avoid scheduling important meetings immediately after treatments.'
    },
    {
      question: 'Are your products organic and safe for sensitive skin?',
      answer: 'We use premium, organic products from carefully selected brands known for their purity and effectiveness. Our therapists are trained to work with sensitive skin and will customize treatments accordingly. Please inform us of any allergies or skin sensitivities when booking or during your consultation.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about your spa experience
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-spa-beige-50 rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-spa-beige-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-spa-pink-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-spa-pink-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-spa-beige-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;