import React from 'react';
import { Shield, BookOpen, Globe, Award, Users, Landmark } from 'lucide-react';
import GlassCard from './GlassCard';
import { ContainerScroll } from './ui/container-scroll-animation';

const Academy: React.FC = () => {
  return (
    <div className="pt-32 pb-0 relative overflow-hidden">
       {/* --- Atmospheric Background --- */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-noble-gold/5 dark:bg-noble-gold/10 rounded-full blur-[150px] animate-drift-3"></div>
          <div className="absolute bottom-20 left-10 w-[40vw] h-[40vw] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] animate-drift-2"></div>
      </div>

      {/* Page Header */}
      <section className="px-6 md:px-12 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-noble-gold/10 border border-noble-gold/20 text-noble-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">About The Academy</span>
            <h1 className="font-serif text-5xl md:text-6xl text-noble-black dark:text-white mb-6 drop-shadow-sm">Excellence by Tradition</h1>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Founded on the principles of integrity, innovation, and impact, Nobles Ziania stands as a beacon for the future of medical leadership.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl text-noble-black dark:text-white leading-[1.2]">
              Cultivating the <span className="italic text-noble-gold relative">
                Art
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-noble-gold/20 -z-10 blur-[2px]"></span>
              </span> of <br />
              Modern Healing
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-noble-gold to-transparent"></div>
            <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-balance">
              At Nobles Ziania, we believe medicine is not merely a science, but a high discipline requiring intellectual rigor and ethical clarity. Our curriculum is designed for the few who seek to transcend standard practice.
            </p>
            <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded by a consortium of world-renowned specialists, the Academy serves as a sanctuary for advanced learning, where traditional bedside wisdom meets cutting-edge biotechnology.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                    <span className="block text-4xl font-serif text-noble-black dark:text-white mb-1">1892</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">Founding Year</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-noble-black dark:text-white mb-1">42</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">Global Partners</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-noble-gold/30 to-transparent hidden md:block"></div>

            {[
              {
                icon: Shield,
                title: 'Uncompromised Ethics',
                desc: 'Instilling a moral compass that guides every clinical decision.'
              },
              {
                icon: BookOpen,
                title: 'Rigorous Scholarship',
                desc: 'A curriculum that demands depth, precision, and critical analysis.'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                desc: 'Connecting practitioners across continents to share breakthrough methodologies.'
              }
            ].map((item, index) => (
              <GlassCard key={index} className="relative md:ml-16 group hover:border-noble-gold/30 dark:hover:border-noble-gold/30 transition-colors bg-white/40 dark:bg-white/5 !backdrop-blur-xl" hoverEffect={true}>
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 border border-white dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-noble-gold group-hover:text-white group-hover:border-noble-gold transition-all duration-500 shadow-sm text-noble-black dark:text-white">
                        <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-serif text-xl text-noble-black dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Campus Scroll Section */}
      <section className="relative w-full z-20 -mt-20">
         <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] dark:from-[#0A0A0A] via-transparent to-[#F8F9FA] dark:to-[#0A0A0A] z-0 pointer-events-none h-[200px]"></div>
         <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-3xl md:text-5xl font-editorial text-noble-black dark:text-white mb-2">
                  The <span className="font-serif italic text-noble-gold">Digital</span> Athenaeum
                </h2>
                <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                    Our proprietary learning interface provides real-time access to 3D anatomical models, live surgical feeds, and a global repository of peer-reviewed research.
                </p>
              </>
            }
          >
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2664&auto=format&fit=crop"
              alt="Medical Digital Interface"
              className="mx-auto rounded-2xl object-cover h-full w-full object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
              draggable={false}
            />
          </ContainerScroll>
      </section>

      {/* History / Timeline Section */}
      <section className="relative py-24 px-6 md:px-12 border-t border-white/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-sm -mt-20">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="font-serif text-3xl text-noble-black dark:text-white mb-4">A Legacy of Innovation</h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">From our inaugural lecture hall in Vienna to our modern digital campus.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/60 dark:border-white/10 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1 group">
                      <Landmark className="w-8 h-8 text-noble-gold mb-6" />
                      <h4 className="font-serif text-xl mb-3 text-noble-black dark:text-white">The Foundation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Established to provide advanced surgical training to the elite physicians of Europe.</p>
                  </div>
                   <div className="p-8 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/60 dark:border-white/10 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1 group">
                      <Users className="w-8 h-8 text-noble-gold mb-6" />
                      <h4 className="font-serif text-xl mb-3 text-noble-black dark:text-white">The Expansion</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Opening doors to international fellows and establishing the Research Wing in 1950.</p>
                  </div>
                   <div className="p-8 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/60 dark:border-white/10 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1 group">
                      <Award className="w-8 h-8 text-noble-gold mb-6" />
                      <h4 className="font-serif text-xl mb-3 text-noble-black dark:text-white">Modern Era</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Integrating AI and genomics into the core curriculum, setting new standards for the 21st century.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Academy;