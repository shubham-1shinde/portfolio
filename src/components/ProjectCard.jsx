import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check, Cpu, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";

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
    const rotateXValue = ((y - centerY) / centerY) * -4;
    const rotateYValue = ((x - centerX) / centerX) * 4;

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
      className="w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col md:flex-row w-full group"
      >
        {/* Left Side: Reordered Technical Blueprint Container */}
        <div className="md:w-5/12 min-h-[280px] p-6 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-800/80 shrink-0 bg-[#0c101d]">
          
          {/* Ambient Radial Gradient & Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950/80 to-slate-950" />
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(to right, #818cf8 1px, transparent 1px), linear-gradient(to bottom, #818cf8 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* 1. TOP SECTION: Project Title */}
          <div className="z-10 mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors drop-shadow-md">
              {project.name}
            </h3>
          </div>

          {/* 2. CENTER SECTION: Architecture Flow Visualizer */}
          <div className="my-auto py-2 z-10 space-y-3">
            <div className="p-3.5 rounded-xl border border-indigo-500/20 bg-slate-950/70 backdrop-blur-md shadow-lg group-hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5 border-b border-slate-800/80 pb-2">
                <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  ARCH_FLOW
                </span>
                <span className="text-emerald-400 text-[10px]">OPERATIONAL</span>
              </div>

              {/* Connected Flowchart Steps */}
              <div className="flex items-center justify-between text-[10px] font-mono gap-1 text-slate-300">
                <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
                  <span className="text-slate-500 text-[9px]">CLIENT</span>
                  <span className="text-indigo-300 font-semibold truncate w-full">React</span>
                </div>
                
                <ArrowRight className="w-3 h-3 text-indigo-500/60 shrink-0" />
                
                <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
                  <span className="text-slate-500 text-[9px]">FRAMEWORK</span>
                  <span className="text-sky-300 font-semibold truncate w-full">
                    {project.backend_framework || 'Express'}
                  </span>
                </div>

                <ArrowRight className="w-3 h-3 text-indigo-500/60 shrink-0" />

                <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
                  <span className="text-slate-500 text-[9px]">DATA</span>
                  <span className="text-emerald-300 font-semibold truncate w-full">
                    {project.database || 'PostgreSQL'}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Telemetry Bar */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-indigo-400" />
                  LATENCY
                </span>
                <span className="text-indigo-300 font-bold">32ms</span>
              </div>

              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  UPTIME
                </span>
                <span className="text-emerald-300 font-bold">99.9%</span>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM SECTION: System Tag & Action Links */}
          <div className="flex justify-between items-center z-10 pt-3 border-t border-slate-800/60 mt-auto">
            <span className="font-mono text-[10px] text-emerald-400 bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM_READY
            </span>
            
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View Source Code"
                  className="p-2 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-indigo-600/80 backdrop-blur-md border border-indigo-400/40 rounded-lg text-white hover:bg-indigo-500 transition-colors flex items-center gap-1.5 text-xs font-mono shadow-md"
                >
                  <span>Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Side: Content Details */}
        <div className="p-6 md:w-7/12 flex flex-col justify-between flex-grow">
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