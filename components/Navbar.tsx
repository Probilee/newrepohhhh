import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const NAV_ITEMS: NavItem[] = [
  { label: 'Academy', href: '/academy' },
  { label: 'Programs', href: '/programs' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Admissions', href: '/admissions' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 md:px-12 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <nav 
        className={`
          max-w-6xl mx-auto rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled 
            ? 'bg-white/80 dark:bg-noble-black/80 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-glass px-6 py-3' 
            : 'bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/5 backdrop-blur-lg px-8 py-4'}
          flex items-center justify-between
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border border-noble-gold/40 overflow-hidden flex items-center justify-center bg-white/40 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-noble-gold group-hover:scale-110 shadow-sm">
             <img 
               src="https://files.catbox.moe/bjvayy.jpg" 
               alt="Nobles Ziania Logo" 
               className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
             />
          </div>
          <span className="font-serif text-lg tracking-wide text-noble-black dark:text-white group-hover:text-noble-gold transition-colors duration-300">
            Nobles Ziania
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className={`text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 relative group py-2 ${
                location.pathname === item.href ? 'text-noble-gold' : 'text-noble-charcoal/70 dark:text-gray-300 hover:text-noble-black dark:hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-noble-gold transform origin-left transition-transform duration-300 ${location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
             {/* Theme Toggle */}
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-noble-charcoal dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button className={`
                px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500
                bg-noble-black dark:bg-white text-white dark:text-noble-black hover:bg-noble-gold dark:hover:bg-noble-gold hover:shadow-lg hover:shadow-noble-gold/20
            `}>
                Portal
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme}
                className="text-noble-black dark:text-white"
            >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
                className="text-noble-black dark:text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="absolute top-24 left-4 right-4 p-8 glass-panel-heavy rounded-3xl md:hidden animate-float-fast shadow-2xl flex flex-col gap-6 items-center z-50 border border-white/60 dark:border-white/10">
               {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="text-2xl font-serif text-noble-black dark:text-white hover:text-noble-gold italic"
                >
                  {item.label}
                </Link>
              ))}
              <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>
              <button className="text-sm font-bold uppercase tracking-widest text-noble-charcoal dark:text-gray-300">
                  Portal Login
              </button>
          </div>
      )}
    </header>
  );
};

export default Navbar;