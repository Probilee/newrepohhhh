import React from 'react';
import { Course } from '../types';
import { ArrowRight, Clock, BarChart } from 'lucide-react';
import GlassCard from './GlassCard';

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Neuro-Architecture',
    category: 'Neurology',
    duration: '12 Weeks',
    level: 'Mastery',
    description: 'Mapping the connectome for precision surgical intervention.'
  },
  {
    id: '2',
    title: 'Molecular Oncology Principles',
    category: 'Oncology',
    duration: '8 Weeks',
    level: 'Advanced',
    description: 'Targeted therapies and the future of personalized cancer treatment.'
  },
  {
    id: '3',
    title: 'Aesthetic Reconstruction',
    category: 'Plastic Surgery',
    duration: '16 Weeks',
    level: 'Mastery',
    description: 'Restoring form and function with minimal invasiveness.'
  },
  {
    id: '4',
    title: 'Pediatric Cardiology',
    category: 'Cardiology',
    duration: '10 Weeks',
    level: 'Intermediate',
    description: 'Congenital defect correction and long-term care strategies.'
  },
  {
    id: '5',
    title: 'Genomic Data Science',
    category: 'Research',
    duration: '6 Weeks',
    level: 'Advanced',
    description: 'Interpreting big data to drive clinical decision making.'
  },
  {
    id: '6',
    title: 'Executive Healthcare Leadership',
    category: 'Administration',
    duration: '4 Weeks',
    level: 'Intermediate',
    description: 'Navigating complex hospital systems with visionary leadership.'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
       {/* --- Fog --- */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[120px] animate-drift-1"></div>
          <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-noble-gold/5 dark:bg-noble-gold/10 rounded-full blur-[100px] animate-drift-2"></div>
       </div>

       <section className="px-6 md:px-12 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <span className="text-noble-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Academic Catalog</span>
                 <h1 className="font-serif text-5xl text-noble-black dark:text-white mb-6">Curriculum & Fellowships</h1>
                 <p className="text-gray-500 dark:text-gray-400 text-lg">Our programs are rigorously accredited and designed to accommodate the schedules of practicing physicians.</p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <button className="px-6 py-2.5 rounded-full bg-noble-black dark:bg-white text-white dark:text-noble-black text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">All Programs</button>
                <button className="px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-noble-gold dark:hover:border-noble-gold hover:text-noble-gold dark:hover:text-noble-gold transition-colors hover:bg-white/80 dark:hover:bg-white/10">Surgery</button>
                <button className="px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-noble-gold dark:hover:border-noble-gold hover:text-noble-gold dark:hover:text-noble-gold transition-colors hover:bg-white/80 dark:hover:bg-white/10">Research</button>
                <button className="px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-noble-gold dark:hover:border-noble-gold hover:text-noble-gold dark:hover:text-noble-gold transition-colors hover:bg-white/80 dark:hover:bg-white/10">Leadership</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map((course) => (
                    <div key={course.id} className="relative group h-full">
                         {/* Card Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-noble-gold/5 to-blue-50/5 dark:to-blue-900/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 blur-md"></div>
                        
                        <GlassCard className="h-full flex flex-col !bg-white/40 dark:!bg-white/5 !backdrop-blur-2xl hover:!bg-white/60 dark:hover:!bg-white/10 border border-white/50 dark:border-white/10" hoverEffect={true}>
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-noble-gold/90 bg-white/50 dark:bg-black/40 px-2 py-1 rounded border border-noble-gold/10">
                                    {course.category}
                                </span>
                                <span className="px-2 py-1 rounded border border-gray-200/50 dark:border-white/10 bg-gray-50/30 dark:bg-white/5 text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    {course.level}
                                </span>
                            </div>
                            
                            <h3 className="font-serif text-2xl text-noble-black dark:text-white mb-3 leading-tight group-hover:text-noble-gold transition-colors">
                                {course.title}
                            </h3>
                            
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 border-l-2 border-noble-gold/20 pl-4 flex-grow">
                                {course.description}
                            </p>

                            <div className="pt-6 border-t border-gray-200/30 dark:border-white/10 mt-auto">
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-noble-gold" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <BarChart size={14} className="text-noble-gold" />
                                        <span>On Campus</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 rounded-lg border border-noble-black/5 dark:border-white/10 bg-white/20 dark:bg-white/5 hover:bg-noble-black dark:hover:bg-white hover:text-white dark:hover:text-noble-black transition-all duration-300 text-noble-black dark:text-white text-sm font-medium flex items-center justify-center gap-2 group-hover:border-noble-black/0 dark:group-hover:border-white/0">
                                    View Details <ArrowRight size={14} />
                                </button>
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto rounded-2xl p-px bg-gradient-to-r from-white/20 via-noble-gold/40 to-white/20 dark:from-white/5 dark:via-noble-gold/20 dark:to-white/5">
            <div className="dark-glass-panel rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="p-10 text-center">
                      <h4 className="font-serif text-4xl text-noble-gold mb-2">1:4</h4>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Faculty to Fellow Ratio</p>
                  </div>
                  <div className="p-10 text-center">
                      <h4 className="font-serif text-4xl text-noble-gold mb-2">300+</h4>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Research Hours / Term</p>
                  </div>
                  <div className="p-10 text-center">
                      <h4 className="font-serif text-4xl text-noble-gold mb-2">Global</h4>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Accreditation Status</p>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Programs;