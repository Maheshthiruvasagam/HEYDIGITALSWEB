import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, company, quote, image }) => {
  return (
    <div className="bg-primary p-8 rounded-lg shadow-lg flex flex-col h-full">
      <FaQuoteLeft className="text-accent text-3xl mb-4" />
      <p className="text-dark-text mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-accent" />
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-accent">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;