import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ skill, index }) {
  const categoryConfig = {
    FE: { label: 'FE', color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10 shadow-cyan-500/20' },
    BE: { label: 'BE', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10 shadow-emerald-500/20' },
    DB: { label: 'DB', color: 'border-amber-500/40 text-amber-400 bg-amber-500/10 shadow-amber-500/20' },
    TL: { label: 'TL', color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10 shadow-indigo-500/20' },
    AI: { label: 'AI', color: 'border-rose-500/40 text-rose-400 bg-rose-500/10 shadow-rose-500/20' },
  };

  const cat = categoryConfig[skill.category] || categoryConfig.FE;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -4 }}
      className="w-full aspect-square"
    >
      <a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-full rounded-xl bg-[#0b0e17]/90 border border-slate-800/80 p-3 flex flex-col justify-between items-center group cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 overflow-hidden block"
      >
        {/* Background Micro Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '12px 12px'
          }}
        />

        {/* Top Header Row */}
        <div className="w-full flex justify-between items-center z-10">
          <span className="font-mono text-[9px] font-bold text-slate-500 tracking-wider">
            {cat.label}
          </span>
          <span className={`w-1.5 h-1.5 rounded-full border ${cat.color}`} />
        </div>

        {/* Center Circle with Icon */}
        <div className="relative my-auto z-10 flex items-center justify-center">
          <div className={`w-14 h-14 rounded-full bg-slate-950/80 border ${cat.color} border-opacity-30 group-hover:border-opacity-100 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-105 shadow-inner`}>
            {skill.icon ? (
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={`w-full h-full object-contain filter transition-all group-hover:brightness-110 ${
                  ['Express.js', 'GitHub', 'Vercel'].includes(skill.name) ? 'brightness-0 invert' : ''
                }`}
              />
            ) : (
              <span className="font-mono text-xs font-bold text-slate-300">
                {skill.name.substring(0, 3).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Label */}
        <div className="w-full text-center z-10">
          <span className="font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-300 uppercase transition-colors block truncate">
            {skill.name}
          </span>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#00f0ff]" />
      </a>
    </motion.div>
  );
}