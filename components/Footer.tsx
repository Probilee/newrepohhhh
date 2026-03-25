import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-[-200px] left-1/4 w-[500px] h-[500px] bg-noble-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand - Span 4 cols */}
          <div className="md:col-span-4 space-y-8">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-noble-gold/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <span className="font-serif text-noble-gold text-sm italic">N</span>
                </div>
                <span className="font-serif text-2xl tracking-wide text-white">
                    Nobles Ziania
                </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
                The premier institution for advanced medical mastery. Defining the future standard of clinical excellence through heritage and innovation.
            </p>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2"></div>

          {/* Links - Span 2 cols each */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-8 text-noble-gold italic">Academy</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="/academy" className="hover:text-white transition-colors duration-300">Our Philosophy</Link></li>
                <li><Link to="/faculty" className="hover:text-white transition-colors duration-300">Leadership</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Press & Media</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-serif text-lg mb-8 text-noble-gold italic">Academics</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="/programs" className="hover:text-white transition-colors duration-300">All Programs</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Fellowships</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Research Grants</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Alumni Portal</a></li>
            </ul>
          </div>

          {/* Contact - Span 2 cols */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-8 text-noble-gold italic">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">admissions@noblesziania.edu</li>
                <li className="hover:text-white transition-colors cursor-pointer">+41 (0) 22 555 0123</li>
                <li className="pt-4 leading-relaxed opacity-60">
                    1200 Medical Center Dr,<br/>
                    Suite 100, Geneva, CH
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-600 font-sans tracking-widest uppercase">© 2024 Nobles Ziania Academy. All Rights Reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="text-[10px] text-gray-600 hover:text-white transition-colors tracking-widest uppercase">Privacy Policy</a>
                <a href="#" className="text-[10px] text-gray-600 hover:text-white transition-colors tracking-widest uppercase">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;