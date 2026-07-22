import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const PROJECTS_DATA = [
  {
    name: 'GST Assistant',
    description: 'A GST compliance assistant platform designed for small businesses to simplify GST management and reduce manual calculations.',
    features: [
      'Sales and purchase invoice management',
      'Automatic CGST, SGST, IGST calculations',
      'Input Tax Credit (ITC) calculation & summary',
      'GST JSON export & due date compliance calendar',
      'AI-powered GST Tax Bot using Gemini API',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Redux Toolkit','Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Gemini API'],
    github: 'https://github.com/shubham-1shinde/gstassistant',
    live: 'https://www.gstassistant.online/',
    backend_framework: 'Express.js',
    database: 'MongoDB',
  },
  {
    name: 'SoleCraft',
    description: 'A modern footwear platform connecting sneaker enthusiasts with skilled cobblers and designers for shoe customization, restoration, exchange, and premium footwear shopping.',
    features: [
      'Premium footwear and accessories marketplace',
      'Custom sneaker designer with personalized colors, materials, and patterns',
      'Secure sneaker exchange and resale platform',
      'Shoe repair, restoration, cleaning, and polishing services',
      'Find and connect with local cobblers for expert craftsmanship',
      'Secure authentication and personalized user profiles',
    ],
    techStack: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
    ],
    github: 'https://github.com/shubham-1shinde/solecraft', 
    live: 'https://sole-craft.vercel.app/',
    backend_framework: 'Express.js',
    database: 'MongoDB',
  },
  {
    name: 'Smart Retail Connect',
    description: 'A smart retail management application providing digital solutions for retail businesses.',
    features: [
      'Product catalog & inventory management',
      'Retail workflow & order processing',
      'Dashboard analytics & sales metrics',
      'Fully responsive UI',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Redux Toolkit','Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/shubham-1shinde/smart-retail-connect',
    live: 'https://smart-retail-connect.vercel.app/',
    backend_framework: 'Express.js',
    database: 'MongoDB',
  },
  {
    name: 'StreamSphere',
    description: 'A full-stack social media platform that combines YouTube-style video sharing, X (Twitter)-style microblogging, and WhatsApp-inspired real-time messaging into a single seamless application.',
    features: [
      'JWT-based authentication and protected routes',
      'YouTube-style video upload and streaming',
      'X (Twitter)-style posts, likes, comments, and feeds',
      'WhatsApp-inspired real-time chat and messaging',
      'Image & video uploads using Multer and Cloudinary',
      'Centralized state management with Redux Toolkit',
    ],
    techStack: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Multer',
      'Cloudinary',
    ],
    github: 'https://github.com/shubham-1shinde/StreamSphere', 
    live: 'https://streamifyy-beta.vercel.app/', 
    backend_framework: 'Express.js',
    database: 'MongoDB',
  },
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Spring Boot and React, featuring secure authentication, product management, shopping cart, and order processing with a modern, responsive user interface.',
    features: [
      'JWT-based authentication with role-based access control',
      'Product catalog with search, filtering, and category management',
      'Shopping cart, wishlist, and secure checkout flow',
      'Order management with order history and status tracking',
      'Admin dashboard for product, inventory, and order management',
      'Responsive UI with Redux Toolkit for efficient state management',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Maven',
      'MySQL',
      'JPA/Hibernate',
      'JWT',
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'REST API'
    ],
    github: 'https://github.com/shubham-1shinde/ecommerse', 
    live: 'https://github.com/shubham-1shinde/ecommerse', 
    backend_framework: 'Spring Boot',
    database: 'MySQL',
  },
  {
    name: 'Uniconnect',
    description: 'A university communication platform that solves fragmented communication between students, faculty, and administrators.',
    features: [
      'Role-based access control (Student, Faculty, Admin)',
      'University blogging system & announcements',
      'Content management & approval flows',
      'Secure authentication & session state',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Appwrite'],
    github: 'https://github.com/shubham-1shinde/uniconnect',
    live: 'https://uniconnect-two.vercel.app/',
    backend_framework: 'Express.js',
    database: 'MongoDB',
  },
  
];

// Inside src/pages/Projects.jsx
export default function Projects() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <SectionTitle
        tag="FEATURED_SYSTEMS"
        title="Featured Projects"
        subtitle="End-to-end full stack web applications built with modern architectures."
      />

      {/* Changed to full-width stacked column for horizontal cards */}
      <div className="flex flex-col gap-6">
        {PROJECTS_DATA.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
}