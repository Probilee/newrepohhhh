import React from 'react';
import { GlassCardProps } from '../types';

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl glass-panel transition-all duration-700 ease-out
        ${hoverEffect ? 'hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-glass-hover hover:-translate-y-1 hover:border-white/60 dark:hover:border-white/20' : ''}
        ${className}
      `}
    >
      {/* Specular Highlight - The "Cut Glass" edge effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70 dark:opacity-30"></div>
      
      {/* Subtle Inner Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/40 dark:bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;