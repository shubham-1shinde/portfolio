import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Code2, Briefcase, Cpu, Mail, FolderGit2 } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', path: '/', icon: Code2 },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Cpu },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
      <nav className="max-w-5xl mx-auto glass-panel rounded-2xl px-5 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-mono text-sm font-bold text-white group">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span>shubham<span className="text-indigo-400">.dev</span></span>
        </NavLink>

        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`
              }
            >
              <item.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}