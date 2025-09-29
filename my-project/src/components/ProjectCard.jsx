import React from 'react';

const ProjectCard = ({ title, category, description, imageUrl, liveLink }) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-accent text-sm font-semibold mb-2">{category}</p>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-dark-text mb-6">{description}</p>
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;