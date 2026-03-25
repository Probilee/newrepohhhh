import React from 'react';
import GlassCard from './GlassCard';
import { Course } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  course: Course;
  delay?: string;
  positionClass?: string;
}

const CourseCard: React.FC<Props> = ({ course, delay = '0s', positionClass = '' }) => {
  return (
    <div className={`absolute ${positionClass}`}>
      <div className="animate-float-medium" style={{ animationDelay: delay }}>
        <GlassCard className="w-64 backdrop-blur-2xl bg-white/40 dark:bg-black/40 border border-white/60 dark:border-white/10 !p-5 group cursor-pointer hover:bg-white/60 dark:hover:bg-black/60 transition-colors">
          <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-noble-gold border border-noble-gold/30 px-2 py-0.5 rounded-full bg-noble-gold/5 dark:bg-noble-gold/10">
                  {course.level}
              </span>
              <div className="w-6 h-6 rounded-full bg-white dark:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <ArrowUpRight size={14} className="text-noble-black dark:text-white" />
              </div>
          </div>
          
          <h3 className="font-serif text-lg leading-tight text-noble-black dark:text-white mb-1">
              {course.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide mb-4">
              {course.category}
          </p>

          <div className="h-px w-full bg-gradient-to-r from-noble-gold/50 to-transparent mb-3"></div>

          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>{course.duration}</span>
              <span className="font-serif italic text-noble-black/70 dark:text-white/70">Enrolling now</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default CourseCard;