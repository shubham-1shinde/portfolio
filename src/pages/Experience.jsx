import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';

const EXPERIENCE_DATA = [
  {
    company: 'Careasa Healthcare Private Limited',
    role: 'Full Stack Web Developer Intern',
    duration: '1 Month (Online Internship)',
    description: 'Worked on healthcare technology products connecting psychology doctors and patients.',
    contributions: [
      'Developed responsive frontend interfaces for patient onboarding and scheduling',
      'Worked on CRM features for healthcare administrative workflows',
      'Built UI components for the TheraSim doctor training platform',
      'Developed the Doctors listing page with filtering and search features',
      'Implemented Forgot Password functionality and secure session handling',
      'Implemented subscription package selection flow with dynamic UI updates',
      'Worked with MERN stack initially and transitioned to PostgreSQL, Express, React, Node.js (PERN stack)',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS'],
  },
];

export default function Experience() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <SectionTitle
        tag="CAREER_PATH"
        title="Work Experience"
        subtitle="Practical development experience building production-ready web features."
      />

      <div className="space-y-8">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </div>
  );
}