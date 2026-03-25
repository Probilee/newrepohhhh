import React from 'react';
import GlassCard from './GlassCard';
import { CheckCircle2, Calendar, FileText, Send } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
         {/* Background Texture & Fog */}
         <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-noble-gold/10 rounded-full blur-[120px] animate-drift-2"></div>
             <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px] animate-drift-1"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-16">
                 <span className="inline-block px-4 py-1.5 rounded-full border border-noble-gold/30 text-noble-gold text-xs font-bold tracking-[0.15em] uppercase mb-8 bg-white/40 dark:bg-white/5 backdrop-blur-sm">
                    Admissions 2024-2025
                </span>
                <h1 className="font-serif text-5xl md:text-6xl text-noble-black dark:text-white mb-6">Begin Your Legacy</h1>
                <p className="font-sans text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Access to Nobles Ziania is selective. We invite qualified medical professionals to submit a prospectus request for the upcoming academic cohort.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Application Steps */}
                <div className="space-y-8">
                     <h3 className="font-serif text-3xl text-noble-black dark:text-white mb-8">The Selection Process</h3>
                     
                     {[
                        { icon: FileText, title: 'Submission', desc: 'Submit your CV, medical credentials, and statement of intent via our secure portal.' },
                        { icon: Calendar, title: 'Interview', desc: 'Selected candidates are invited for a panel interview with the Faculty Board.' },
                        { icon: CheckCircle2, title: 'Matriculation', desc: 'Successful applicants receive an offer of fellowship and access to the preparatory materials.' }
                     ].map((step, idx) => (
                         <GlassCard key={idx} className="flex gap-6 !p-6 !bg-white/40 dark:!bg-white/5 border border-white/60 dark:border-white/10 hover:!bg-white/70 dark:hover:!bg-white/10" hoverEffect={true}>
                             <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 flex items-center justify-center shrink-0 text-noble-black dark:text-white shadow-sm">
                                 <step.icon size={20} strokeWidth={1.5} />
                             </div>
                             <div>
                                 <h4 className="font-serif text-xl text-noble-black dark:text-white mb-2">{step.title}</h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                             </div>
                         </GlassCard>
                     ))}
                </div>

                {/* Form Card */}
                <div className="relative">
                    <div className="absolute inset-0 bg-noble-gold/20 blur-2xl rounded-3xl -z-10 transform translate-y-4"></div>
                    <GlassCard className="!p-8 md:!p-12 !bg-white/60 dark:!bg-black/40 !backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-2xl">
                        <h3 className="font-serif text-2xl text-noble-black dark:text-white mb-6">Request Prospectus</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 pl-1">First Name</label>
                                    <input type="text" className="w-full bg-white/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg px-4 py-3 text-noble-black dark:text-white focus:outline-none focus:border-noble-gold focus:bg-white dark:focus:bg-black/50 transition-all shadow-inner" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 pl-1">Last Name</label>
                                    <input type="text" className="w-full bg-white/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg px-4 py-3 text-noble-black dark:text-white focus:outline-none focus:border-noble-gold focus:bg-white dark:focus:bg-black/50 transition-all shadow-inner" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 pl-1">Email Address</label>
                                <input type="email" className="w-full bg-white/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg px-4 py-3 text-noble-black dark:text-white focus:outline-none focus:border-noble-gold focus:bg-white dark:focus:bg-black/50 transition-all shadow-inner" />
                            </div>
                             <div className="space-y-1">
                                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 pl-1">Area of Interest</label>
                                <select className="w-full bg-white/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg px-4 py-3 text-noble-black dark:text-white focus:outline-none focus:border-noble-gold focus:bg-white dark:focus:bg-black/50 transition-all shadow-inner">
                                    <option>Neurology</option>
                                    <option>Oncology</option>
                                    <option>Surgery</option>
                                    <option>Research</option>
                                </select>
                            </div>
                            
                            <button type="button" className="w-full py-4 bg-noble-black dark:bg-white text-white dark:text-noble-black font-medium rounded-lg hover:bg-noble-gold dark:hover:bg-noble-gold hover:shadow-lg hover:shadow-noble-gold/20 transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                                Submit Request <Send size={16} />
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
         </div>
    </div>
  );
};

export default Admissions;