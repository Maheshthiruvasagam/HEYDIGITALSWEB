import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaShopify, FaBullhorn } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="text-light-text">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Creative Digital Solutions for a <span className="text-accent">Modern World</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-text max-w-3xl mx-auto mb-8">
            At HeyDigitals, we craft stunning websites and powerful marketing strategies that drive growth, engage audiences, and elevate your brand to new heights.
          </p>
          <div className="space-x-4">
            {/* This Link component has no 'hidden' classes, so it is ALWAYS visible. */}
            <Link to="/works" className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300">
              View Our Work
            </Link>
            <Link to="/contact" className="bg-secondary text-light-text font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2">What We Do</h2>
          <p className="text-dark-text mb-12">We specialize in a range of services designed to make your business succeed online.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-primary p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
              <FaLaptopCode className="text-accent text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Web Development</h3>
              <p className="text-dark-text">
                From sleek one-page sites to complex web applications, we build fast, responsive, and secure websites tailored to your specific needs.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
              <FaShopify className="text-accent text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Shopify Stores</h3>
              <p className="text-dark-text">
                We design and develop high-converting Shopify stores that provide a seamless shopping experience for your customers and drive sales.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
              <FaBullhorn className="text-accent text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-dark-text">
                Our strategic digital marketing campaigns increase your online visibility, attract qualified leads, and grow your brand's presence.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="text-dark-text max-w-2xl mx-auto mb-8">
                  Let's collaborate to create something extraordinary. We're here to turn your vision into a digital reality.
              </p>
              <Link to="/contact" className="bg-gray-800 text-white font-bold py-4 px-10 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300 text-lg">
                  Let's Talk
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;