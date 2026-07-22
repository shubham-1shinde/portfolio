import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { Layout, Server, Database, Wrench, Cloud, Bot } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'React Hook Form', level: 85 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Spring Boot', level: 65 },
    ],
  },
  {
    title: 'Database',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 85 },
      { name: 'Sequelize ORM', level: 80 },
      { name: 'Mongoose', level: 82 },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'PGAdmin', level: 80 },
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: 'Vercel', level: 88 },
      { name: 'Render', level: 82 },
      { name: 'Basic CI/CD', level: 75 },
    ],
  },
  {
    title: 'AI Integration',
    icon: <Bot className="w-5 h-5" />,
    skills: [
      { name: 'Gemini API', level: 85 },
      { name: 'RAG Concepts', level: 70 },
      { name: 'LangChain Basics', level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <SectionTitle
        tag="TECHNICAL_STACK"
        title="Technologies I Work With"
        subtitle="Languages, frameworks, databases, and developer tools I utilize daily."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <SkillCard key={cat.title} category={cat} skills={cat.skills} index={idx} />
        ))}
      </div>
    </section>
  );
}