import React from 'react';
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import TestimonialCard from '../components/Card';
import photo1 from '../assets/saravana.jpeg';
import photo2 from '../assets/mahesh.jpeg';

const AboutUs = () => {
    // Dummy data for testimonials
    const testimonials = [
        {
            name: 'John Doe',
            company: 'Innovate Inc.',
            quote: 'HeyDigitals transformed our online presence. Their team is professional, creative, and delivered beyond our expectations. Highly recommended!',
            image: 'https://i.pravatar.cc/150?img=12'
        },
        {
            name: 'Jane Smith',
            company: 'MarketPro',
            quote: 'Working with Saravana and Mahesh was a fantastic experience. They understood our vision perfectly and brought it to life with incredible skill.',
            image: 'https://i.pravatar.cc/150?img=47'
        },
        {
            name: 'Sam Wilson',
            company: 'E-Commerce Hub',
            quote: 'Our new Shopify store is a masterpiece. Sales have increased by 40% since the launch, all thanks to the expert team at HeyDigitals.',
            image: 'https://i.pravatar.cc/150?img=32'
        },
    ];

  return (
    <div className="py-16 bg-secondary text-light-text">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">About HeyDigitals</h1>
          <p className="text-lg text-dark-text max-w-3xl mx-auto">
            We are a passionate team of creators, thinkers, and developers dedicated to helping businesses thrive in the digital landscape. Our journey is fueled by collaboration and a commitment to excellence.
          </p>
        </div>

        {/* Founders Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Minds Behind the Magic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Saravana Perumal - Wrapped in an <a> tag */}
            <a 
              href="https://saravanaofficialpmv.github.io/mainportfolio1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-primary p-8 rounded-lg text-center transition-transform duration-300 transform hover:scale-105"
            >
              <img src={photo1} alt="Saravana Perumal" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent"/>
              <h3 className="text-2xl font-bold text-white">Saravana Perumal</h3>
              <p className="text-accent font-semibold mb-3">Founder</p>
              <p className="text-dark-text">
               Saravana is the strategic mind behind our agency's growth. With a keen eye for market trends and a client-first approach, he ensures every project aligns with business goals and delivers measurable results. He bridges the gap between creative ideas and business success.
              </p>
            </a>

            {/* Mahesh - Wrapped in an <a> tag */}
            <a 
              href="https://mahesh-web-craft.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-primary p-8 rounded-lg text-center transition-transform duration-300 transform hover:scale-105"
            >
              <img src={photo2} alt="Mahesh" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent"/>
              <h3 className="text-2xl font-bold text-white">Mahesh</h3>
              <p className="text-accent font-semibold mb-3">Co-Founder & CEO</p>
              <p className="text-dark-text">
                  With a deep passion for technology and a creative flair, Mahesh leads our development team. He specializes in building robust, scalable web solutions that are both functional and beautiful. His vision is the driving force behind our technical excellence.
              </p>
            </a>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Why Partner with HeyDigitals?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="text-center p-6">
                    <FaUsers className="text-accent text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Client-Centric Approach</h3>
                    <p className="text-dark-text">Your success is our success. We listen, we collaborate, and we tailor every solution to fit your unique needs. We believe in building lasting partnerships, not just projects.</p>
                </div>
                <div className="text-center p-6">
                    <FaLightbulb className="text-accent text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
                    <p className="text-dark-text">We stay ahead of the curve, utilizing the latest technologies and creative strategies to give you a competitive edge. Innovation is at the core of everything we do.</p>
                </div>
                <div className="text-center p-6">
                    <FaRocket className="text-accent text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Results-Driven Performance</h3>
                    <p className="text-dark-text">We are focused on delivering tangible results. From increased traffic and engagement to higher conversion rates, we measure our success by the value we create for your business.</p>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section>
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;