import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-dark-text">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <NavLink to="/" className="text-white text-3xl font-bold">
              Hey<span className="text-accent">Digitals</span>
            </NavLink>
            <p className="text-dark-text text-base">
              Crafting Digital Excellence. Your vision, our expertise. Let's build something amazing together.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/hey-digitals/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/heydigitals.agency?igsh=dGJldnBvaDhybWx0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary pt-8 text-center">
          <p className="text-base">
            © {new Date().getFullYear()} HeyDigitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
