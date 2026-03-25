import React from 'react';

const AbstractAnatomy: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none perspective-1000">
      {/* Background Glows */}
      {/* Reduced sizes by 10%: 425px -> ~382px */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[382px] h-[382px] bg-noble-gold/10 rounded-full blur-[100px] animate-pulse-subtle" />
      
      {/* Reduced sizes by 10% + another 10%: 255px -> 230px -> ~207px */}
      {/* This layer is z-positioned right under the photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[207px] h-[207px] bg-blue-100/20 rounded-full blur-[80px]" />

      {/* Main Image Replacement */}
      {/* Moved 20px further left by increasing right margin from mr-[37px] to mr-[57px] */}
      <div 
        className="relative z-10 w-[500px] h-[500px] md:w-[605px] md:h-[605px] flex items-center justify-center animate-float-slow mt-16 mr-[57px]"
        style={{ animationDuration: '20s' }}
      >
         <img 
            src="https://files.catbox.moe/jod6y1.png" 
            alt="Anatomy Visualization" 
            className="w-full h-full object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700"
         />
      </div>
    </div>
  );
};

export default AbstractAnatomy;