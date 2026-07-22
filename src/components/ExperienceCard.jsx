import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-6 md:pl-8 border-l border-slate-800 group"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300" />

      <div className="glass-card p-6 rounded-2xl group-hover:border-indigo-500/30 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>{exp.duration}</span>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>

        <div className="space-y-2 mb-6">
          {exp.contributions.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
          {exp.stack.map((tech) => (
            <span key={tech} className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}