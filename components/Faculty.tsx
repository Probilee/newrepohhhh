import React from 'react';
import { FacultyMember } from '../types';

const FACULTY: FacultyMember[] = [
    {
        id: '1',
        name: 'Dr. Elena Voreakis',
        role: 'Dean of Neurology',
        specialty: 'Neurosurgery & Ethics',
    },
    {
        id: '2',
        name: 'Prof. Alistair Sterling',
        role: 'Chair of Oncology',
        specialty: 'Immunotherapy Research',
    },
    {
        id: '3',
        name: 'Dr. Julian Thorne',
        role: 'Senior Lecturer',
        specialty: 'Cardiothoracic Surgery',
    },
    {
        id: '4',
        name: 'Dr. Sarah Chen',
        role: 'Research Director',
        specialty: 'Biomedical Innovation',
    },
    {
        id: '5',
        name: 'Dr. Marcus Webb',
        role: 'Fellow',
        specialty: 'Orthopedic Reconstruction',
    },
    {
        id: '6',
        name: 'Prof. Amara Okafor',
        role: 'Visiting Scholar',
        specialty: 'Public Health Policy',
    }
];

const Faculty: React.FC = () => {
  return (
    <div className="min-h-screen bg-noble-black text-white pt-32 pb-24 relative overflow-hidden">
        {/* Dark Ambient Background */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-noble-gold/10 rounded-full blur-[180px] animate-drift-1"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] animate-drift-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20 space-y-4">
                <span className="text-noble-gold text-xs font-bold tracking-[0.2em] uppercase">Mentorship</span>
                <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-2xl">Distinguished Faculty</h1>
                <p className="font-sans text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
                    Learn from the architects of modern medicine. Our faculty are active pioneers, bringing real-world breakthroughs directly into the lecture hall.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {FACULTY.map((member) => (
                    <div key={member.id} className="group relative dark-glass-panel rounded-2xl p-6 hover:bg-white/10 transition-colors duration-500">
                        <div className="aspect-square bg-gradient-to-b from-gray-800 to-noble-black rounded-xl overflow-hidden relative mb-6 border border-white/5 transition-all duration-500 group-hover:border-noble-gold/30">
                            {/* Abstract Placeholder for Portrait */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                             {/* Subtle lighting effect in portrait */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-noble-gold/5 blur-3xl rounded-full"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif text-9xl text-white/5 italic select-none group-hover:text-noble-gold/10 transition-colors duration-500 transform group-hover:scale-110">
                                    {member.name.charAt(4)}
                                </span>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-noble-gold text-xs uppercase tracking-wider font-semibold mb-2 opacity-80 group-hover:opacity-100">
                                {member.role}
                            </p>
                            <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-noble-gold transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-400 font-light">
                                {member.specialty}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote Section */}
            <div className="border-t border-white/10 pt-20 text-center relative">
                 <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-noble-gold/5 blur-[50px] rounded-full"></div>
                 <blockquote className="relative font-serif text-3xl md:text-4xl leading-relaxed text-gray-300 italic max-w-4xl mx-auto mb-8">
                    "We do not teach you what to think, but how to perceive the patient in their totality—biological, psychological, and human."
                 </blockquote>
                 <cite className="text-noble-gold not-italic text-sm font-bold tracking-widest uppercase">— Dr. Elena Voreakis, Dean</cite>
            </div>
        </div>
    </div>
  );
};

export default Faculty;