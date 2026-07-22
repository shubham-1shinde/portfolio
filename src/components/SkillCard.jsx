import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ category, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
          {category.icon}
        </div>
        <h3 className="font-mono text-lg font-bold text-white">{category.title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <span className="text-xs font-semibold text-slate-200 mb-2">{skill.name}</span>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}