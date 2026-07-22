import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="px-4 max-w-5xl mx-auto py-12">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Image with Location Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 relative group"
        >
          {/* Subtle Ambient Glow behind the photo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
          
          {/* Main Photo Card Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 shadow-2xl">
            <img
              src="/profile.png" 
              alt="Shubham Shinde"
              className="w-full h-[380px] object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Location Pill Overlay (Bottom Right) */}
            <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono text-slate-300 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pune, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 flex flex-col justify-center space-y-6"
        >
          {/* Tag */}
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            ABOUT ME
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Code-driven, system-focused.
          </h2>

          {/* Bio Description */}
          <p className="text-slate-300 text-base leading-relaxed">
          I'm a final year Computer Science undergraduate at MIT Art, Design and Technology University, Pune, passionate about software engineering and building full-stack web applications with a focus on clean, scalable code and real-world impact.

          My core stack is the MERN ecosystem — MongoDB, Express, React, and Node — paired with Tailwind CSS for building responsive, user-friendly interfaces. I also work with Java, Spring Boot, and SQL databases like MySQL and PostgreSQL.

          I've interned as a Web Development Intern at Careasa Healthcare, where I worked on responsive web applications and collaborated cross-functionally to debug, optimize, and deliver reliable features.

          Always learning, always building — open to conversations about code, products, and ideas worth creating.

          </p>

          {/* Bottom Badges / Action Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Email Pill */}
            <a
              href="mailto:shubhamshinde0225@gmail.com"
              className="px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>shubhamshinde0225@gmail.com</span>
            </a>

            {/* Role / Status Pill */}
            <div className="px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2 shadow-sm">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}