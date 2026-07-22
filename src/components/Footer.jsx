import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500">
      <p>© {new Date().getFullYear()} Shubham Shinde. Built with React, Tailwind CSS & Framer Motion.</p>
    </footer>
  );
}