import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, CheckCircle2, Briefcase, ExternalLink } from 'lucide-react';

export default function ExperienceCard({ exp, index }) {
  const isCurrent = exp.period?.toLowerCase().includes('present');

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-6 md:pl-10 border-l border-slate-800/80 group"
    >
      {/* Glow Connector Line on Hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_#6366f1]" />

      {/* Cyberpunk Timeline Node */}
      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-emerald-400 group-hover:shadow-[0_0_10px_#34d399] transition-all duration-300 flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-emerald-400 transition-colors" />
      </div>

      {/* Card Container */}
      <div className="glass-card p-6 md:p-7 rounded-2xl border border-slate-800/80 bg-[#0c101d]/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group/card">
        
        {/* Background Grid Accent */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Top Header: Role, Company & Status Tag */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
                <Briefcase className="w-3 h-3" />
                {exp.type || 'FULL_STACK'}
              </span>
              
              {isCurrent ? (
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE
                </span>
              ) : (
                <span className="font-mono text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-md">
                  COMPLETED
                </span>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white group-hover/card:text-indigo-300 transition-colors tracking-tight">
              {exp.role}
            </h3>

            {/* Clickable Company Badge */}
            <div className="flex items-center gap-2 text-sm text-slate-300 mt-1 font-medium">
              <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
              {exp.link || exp.companyUrl ? (
                <a
                  href={exp.link || exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 underline underline-offset-4 decoration-slate-700 hover:decoration-cyan-400 transition-colors flex items-center gap-1 group/link"
                >
                  <span>{exp.company}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                </a>
              ) : (
                <span>{exp.company}</span>
              )}
            </div>
          </div>

          {/* Period Badge */}
          {exp.period && (
            <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>{exp.period}</span>
            </div>
          )}
        </div>

        {/* Experience Overview Description */}
        {exp.description && (
          <p className="text-slate-300 text-sm mb-5 leading-relaxed relative z-10">
            {exp.description}
          </p>
        )}

        {/* Contributions List */}
        {exp.contributions && exp.contributions.length > 0 && (
          <div className="space-y-2.5 mb-6 relative z-10">
            {exp.contributions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300/90 group/item">
                <div className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5 group-hover/item:text-emerald-400 group-hover/item:border-emerald-500/30 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="leading-normal">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack Tags */}
        {exp.stack && exp.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 relative z-10">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-950 text-indigo-300 border border-slate-800 group-hover/card:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
}