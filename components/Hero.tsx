import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import AbstractAnatomy from './AbstractAnatomy';
import CourseCard from './CourseCard';
import { Course } from '../types';
import { Link } from 'react-router-dom';

const SAMPLE_COURSES: Course[] = [
    {
        id: '1',
        title: 'Advanced Neuro-Architecture',
        category: 'Neurology',
        duration: '12 Weeks',
        level: 'Mastery'
    },
    {
        id: '2',
        title: 'Molecular Oncology Principles',
        category: 'Oncology',
        duration: '8 Weeks',
        level: 'Advanced'
    }
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors duration-500">
      
      {/* --- Atmospheric Fog Layers --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Blue Drift */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-50/60 dark:bg-blue-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-drift-1 opacity-60"></div>
        {/* Gold Glow Drift */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-noble-gold/5 dark:bg-noble-gold/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-drift-2 opacity-60"></div>
        {/* White Mist Overlay - Adjusted for Dark Mode */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/40 dark:bg-white/5 rounded-full blur-[100px] mix-blend-soft-light dark:mix-blend-overlay animate-pulse-subtle"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content - Left Side */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-10 animate-float-slow" style={{ animationDuration: '10s' }}>
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/10 backdrop-blur-md shadow-sm group cursor-default transition-colors hover:bg-white/80 dark:hover:bg-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-noble-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-noble-gold"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-noble-charcoal/70 dark:text-gray-300">
              Admissions Open 2024
            </span>
          </div>

          <h1 className="font-editorial text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-noble-black dark:text-white text-balance drop-shadow-sm tracking-tight">
            Empowering the <br/>
            <span className="font-serif italic text-noble-charcoal/60 dark:text-gray-400 font-light">Next Generation</span> of <br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-noble-black to-noble-charcoal/80 dark:from-white dark:to-gray-400 pb-2">
                Medical Excellence
                {/* Refined Underline */}
                <div className="absolute bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-noble-gold/0 via-noble-gold/50 to-noble-gold/0"></div>
            </span>
          </h1>

          <p className="font-sans text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed text-balance font-light">
            Nobles Ziania bridges the gap between theoretical mastery and clinical artistry. Join an elite cadre of physicians shaping the future of global healthcare.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link to="/admissions" className="group relative px-10 py-5 bg-noble-black dark:bg-white text-white dark:text-noble-black rounded-full overflow-hidden transition-all hover:shadow-gold-glow w-full sm:w-auto hover:-translate-y-0.5">
              <span className="absolute inset-0 bg-[linear-gradient(110deg,#000000,45%,#333333,55%,#000000)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#e5e5e5,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-3 font-medium tracking-wider text-sm">
                Apply for Access
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <button className="px-10 py-5 rounded-full border border-gray-200 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-sm text-noble-charcoal dark:text-white text-sm font-medium hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto group hover:-translate-y-0.5 hover:shadow-lg">
              <span className="w-6 h-6 rounded-full border border-noble-charcoal/20 dark:border-white/20 flex items-center justify-center group-hover:border-noble-gold transition-colors">
                 <Play size={8} fill="currentColor" className="ml-0.5 text-noble-black dark:text-white group-hover:text-noble-gold transition-colors" />
              </span>
              <span>Watch Keynote</span>
            </button>
          </div>

          <div className="pt-10 flex items-center gap-12 border-t border-gray-200/50 dark:border-white/10 w-full max-w-lg">
             <div>
                <p className="font-editorial text-4xl text-noble-black dark:text-white">98<span className="font-serif text-2xl text-noble-gold/80 italic">%</span></p>
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mt-1 font-semibold">Pass Rate</p>
             </div>
             <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>
             <div>
                <p className="font-editorial text-4xl text-noble-black dark:text-white">12<span className="font-serif text-2xl text-noble-gold/80 italic">k</span></p>
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mt-1 font-semibold">Global Alumni</p>
             </div>
          </div>
        </div>

        {/* Visual Content - Right Side */}
        <div className="lg:col-span-6 relative h-[700px] w-full flex items-center justify-center">
            
            {/* The Central Abstract Element */}
            <div className="relative z-10 scale-125 lg:translate-x-12">
                <AbstractAnatomy />
            </div>

            {/* Floating Glass Cards */}
            <CourseCard 
                course={SAMPLE_COURSES[0]} 
                positionClass="top-[calc(50%-200px)] -translate-y-1/2 right-0 lg:-right-8 z-0 scale-95" 
                delay="1s"
            />
            
            <CourseCard 
                course={SAMPLE_COURSES[1]} 
                positionClass="bottom-32 left-0 md:left-10 lg:-left-12 z-20 scale-105" 
                delay="2.5s"
            />

            {/* Decorative Glass Pane Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-gradient-to-tr from-white/40 to-white/10 dark:from-white/10 dark:to-transparent backdrop-blur-[6px] rounded-[4rem] -z-10 transform -rotate-3 border border-white/20 dark:border-white/5 shadow-2xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;