import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Mail, GitBranch, Share2, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="px-4 max-w-4xl mx-auto">
      <SectionTitle
        tag="GET_IN_TOUCH"
        title="Let's Build Something Together"
        subtitle="Have a project in mind or looking for a dedicated full-stack developer? Feel free to reach out."
      />

      <div className="grid md:grid-cols-12 gap-8">
        {/* Contact Meta Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="glass-card p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block">EMAIL</span>
              <a href="mailto:shubham@example.com" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                shubham@example.com
              </a>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block">LINKEDIN</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                linkedin.com/in/shubham
              </a>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block">GITHUB</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                github.com/shubham
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR_NAME</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR_EMAIL</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Message Sent Successfully</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}