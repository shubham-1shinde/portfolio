import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Sparkles, Check } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full group"
      >
        {/* Header Preview Banner */}
        <div className="h-44 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
          <div className="flex justify-between items-start z-10">
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
              FULL_STACK_SYSTEM
            </span>
            <div className="flex gap-2">
              <a
                href={project.github || '#'}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-indigo-300 hover:bg-indigo-600/40 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white z-10 group-hover:text-indigo-300 transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Card Content Body */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="space-y-2 mb-6">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
            {project.techStack.map((tech) => (
              <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-950 text-indigo-300 border border-slate-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}