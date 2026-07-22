import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, GitBranch, Share2, Mail, Terminal, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full Stack Developer • PERN & MERN Stack</span>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Shubham Shinde</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8"
        >
          A passionate Full Stack Developer focused on building scalable web applications, modern user interfaces, and reliable backend systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12"
        >
          <Link
            to="/projects"
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/resume.pdf"
            download="Shubham_Shinde_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-all flex items-center gap-2 border border-slate-800"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-400 text-sm font-mono"
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <GitBranch className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Share2 className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:shubham@example.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}