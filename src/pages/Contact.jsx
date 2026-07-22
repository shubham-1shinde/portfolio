import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formData = new FormData(e.target);
    // Directly target your Gmail address
    formData.append("access_key", "796f7b91-354d-455d-820e-fbaf72d596f7"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset(); // Clear form fields
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please check your network.");
    } finally {
      setLoading(false);
    }
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
              <a href="mailto:shubhamshinde0225@gmail.com" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                shubhamshinde0225@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <FaLinkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block">LINKEDIN</span>
              <a href="https://www.linkedin.com/in/shubham1shinde/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                linkedin.com/in/shubham1shinde/
              </a>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block">GITHUB</span>
              <a href="https://github.com/shubham-1shinde" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                github.com/shubham-1shinde
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl space-y-4">
            
            {/* Subject for the email */}
            <input type="hidden" name="subject" value="New Portfolio Message from Shubham's Website" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR_NAME</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR_EMAIL</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <p className="text-xs font-mono text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-200" />
                  <span>Sending Message...</span>
                </>
              ) : submitted ? (
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