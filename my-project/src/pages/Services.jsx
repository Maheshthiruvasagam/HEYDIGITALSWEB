import React from 'react';
import { FaLaptopCode, FaShopify, FaPaintBrush, FaVideo, FaFileAlt, FaSearchDollar } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-accent text-5xl mb-6" />,
    title: 'Custom Web Development',
    description: 'We build high-performance, custom websites from scratch. Our solutions are tailored to your business logic, ensuring a unique digital presence that is secure, scalable, and perfectly aligned with your brand identity. We utilize modern frameworks like React.js to create dynamic and interactive user experiences.'
  },
  {
    icon: <FaShopify className="text-accent text-5xl mb-6" />,
    title: 'Shopify E-commerce Solutions',
    description: 'Launch your online store with a powerful, feature-rich Shopify site. We handle everything from theme customization and app integration to payment gateway setup, creating a seamless and high-converting shopping experience for your customers that drives sales and boosts your brand.'
  },
  {
    icon: <FaSearchDollar className="text-accent text-5xl mb-6" />,
    title: 'Digital Marketing & SEO',
    description: 'Increase your online visibility and attract your target audience with our comprehensive digital marketing strategies. We specialize in Search Engine Optimization (SEO), content marketing, and social media campaigns designed to generate leads and grow your business.'
  },
  {
    icon: <FaVideo className="text-accent text-5xl mb-6" />,
    title: 'Professional Video Editing',
    description: 'Engage your audience with compelling visual stories. Our video editing services transform raw footage into polished, professional videos for marketing campaigns, social media content, corporate presentations, and more. We focus on storytelling that captures attention.'
  },
  {
    icon: <FaPaintBrush className="text-accent text-5xl mb-6" />,
    title: 'Thumbnail & Graphic Design',
    description: 'First impressions matter. We design eye-catching thumbnails and graphics that increase click-through rates and make your content stand out. Our designs are creative, on-brand, and optimized for platforms like YouTube, Instagram, and more.'
  },
  {
    icon: <FaFileAlt className="text-accent text-5xl mb-6" />,
    title: 'Expert Resume Building',
    description: 'Land your dream job with a professionally crafted resume. We create compelling, modern resumes that highlight your skills and experience, tailored to the specific job you are applying for. Our resumes are designed to pass through applicant tracking systems and impress hiring managers.'
  },
]

const Services = () => {
  return (
    <div className="py-16 bg-primary text-light-text">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-lg text-dark-text max-w-3xl mx-auto">
            We offer a complete suite of digital services to empower your brand. From development to marketing, we are your dedicated partners in growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col text-center transform hover:-translate-y-2 transition-transform duration-300">
              {service.icon}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-dark-text flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;