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
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Gemini API'],
    github: 'https://github.com',
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
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize'],
    github: 'https://github.com',
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
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <SectionTitle
        tag="FEATURED_SYSTEMS"
        title="Featured Projects"
        subtitle="End-to-end full stack web applications built with modern architectures."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
}