import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

const SKILLS_DATA = [
  // Frontend (FE)
  { name: 'HTML5', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React.js', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev' },
  { name: 'Redux', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', url: 'https://redux.js.org' },
  { name: 'Tailwind', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com' },
  { name: 'Vite', category: 'FE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', url: 'https://vitejs.dev' },

  // Backend & Programming Languages (BE)
  { name: 'Node.js', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
  { name: 'Express.js', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', url: 'https://expressjs.com', invert: true },
  { name: 'Python', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org' },
  { name: 'Java', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://www.java.com' },
  { name: 'C++', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org' },
  { name: 'C', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', url: 'https://en.cppreference.com/w/c' },
  { name: 'Spring Boot', category: 'BE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },

  // Database (DB)
  { name: 'PostgreSQL', category: 'DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org' },
  { name: 'MySQL', category: 'DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com' },
  { name: 'MongoDB', category: 'DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },

  // Tools, Cloud & Design (TL)
  { name: 'Git', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com' },
  { name: 'GitHub', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com', invert: true },
  { name: 'Postman', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', url: 'https://www.postman.com' },
  { name: 'VS Code', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com' },
  { name: 'Figma', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', url: 'https://www.figma.com' },
  { name: 'Canva', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', url: 'https://www.canva.com' },
  { name: 'Vercel', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', url: 'https://vercel.com', invert: true },
  { name: 'Render', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', url: 'https://render.com' },
  { name: 'Azure', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com' },
  { name: 'GCP', category: 'TL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', url: 'https://cloud.google.com' },

  // AI Integration (AI)
  { name: 'Gemini API', category: 'AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', url: 'https://ai.google.dev' },
];

export default function Skills() {
  return (
    <div className="px-4 max-w-5xl mx-auto">
      <SectionTitle
        tag="TECHNICAL_STACK"
        title="Technologies I Work With"
        subtitle="Full-stack engineering matrix across frontend, backend, databases, and modern cloud ecosystem."
      />

      {/* Cyberpunk Icon Grid Matrix */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
        {SKILLS_DATA.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </div>
  );
}