import React from 'react';
import ProjectCard from '../components/ProjectCard';
import project2 from '../assets/project2.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.jpeg';

const projects = [
  {
    title: 'Luxe Fashion Shopify Store',
    category: 'Shopify Development',
    description:
      'A high-end fashion brand needed a sleek, minimalist Shopify store. We developed a custom theme with advanced filtering, quick-view functionality, and a seamless checkout process, resulting in a 35% increase in conversions.',
    imageUrl: project2,
    liveLink: '#',
  },
  {
    title: 'TechSphere Corporate Website',
    category: 'Web Development',
    description:
      'A complete website overhaul for a B2B tech company. We built a fast, modern site using React and Tailwind CSS, featuring interactive animations, a content management system, and lead generation forms.',
    imageUrl: project4,
    liveLink: '#',
  },
  {
    title: 'Artisan Coffee Roasters',
    category: 'Shopify Development',
    description:
      'An e-commerce platform for a specialty coffee brand. The project included a subscription model integration, product customization options, and a blog for coffee enthusiasts. The site now enjoys a 50% repeat customer rate.',
    imageUrl: project5,
    liveLink: '#',
  },
  {
    title: 'RealtyConnect Real Estate Platform',
    category: 'Web Development',
    description:
      'A web application for a real estate agency, featuring advanced property search, map integration, and agent profiles. Built with a robust backend to handle thousands of listings.',
    imageUrl: project6,
    liveLink: '#',
  },
  {
    title: 'FitLife Fitness App Landing Page',
    category: 'Web Development',
    description:
      'A vibrant and energetic landing page for a new fitness mobile app. The page was designed to maximize app downloads, featuring engaging animations, user testimonials, and clear calls-to-action.',
    imageUrl: project7,
    liveLink: '#',
  },
];

const OurWorks = () => {
  return (
    <div className="py-16 bg-secondary text-light-text">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Our Works</h1>
          <p className="text-lg text-dark-text max-w-3xl mx-auto">
            We are proud of the work we do. Explore a selection of our recent projects that showcase our commitment to quality, creativity, and results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
