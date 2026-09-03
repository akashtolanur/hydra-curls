import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col justify-between items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 50% 48%, rgba(249, 248, 249, 0.85) 0%, rgba(159, 117, 196, 0.95) 45%, #24083d 100%),
          #1f0535
        `,
      }}
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#1b032e] via-transparent to-[#10031d] opacity-60" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 max-w-4xl mx-auto my-auto">
        
        {/* Brand Badge */}
        <div className="flex items-center space-x-2.5 mb-8">
          <div className="border border-white/40 rounded px-1.5 py-0.5 text-left text-white leading-none">
            <span className="block text-[7px] tracking-wider opacity-80 uppercase">Parachute</span>
            <span className="block text-[9px] font-bold tracking-widest uppercase">Advansed</span>
          </div>
          <span className="text-2xl md:text-3xl font-serif italic text-white tracking-wide">
            Hydra <span className="font-normal font-sans text-cyan-300">Curls</span>
          </span>
        </div>

        {/* Script Slogan Headline */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-serif italic tracking-wide text-[#230438] leading-[1.25] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] select-none"
          style={{ fontFamily: '"Playfair Display", "Baskerville", cursive, serif' }}
        >
          Pure ingredients. Real results.<br />
          <span className="block mt-1">Every drop matters.</span>
        </h1>

        {/* Subtle Wave Motif Under Slogan */}
        <svg
          className="w-48 h-6 mt-6 opacity-30 text-white fill-none stroke-current stroke-2"
          viewBox="0 0 200 24"
        >
          <path d="M0,12 Q25,0 50,12 T100,12 T150,12 T200,12" />
        </svg>

        {/* Down Chevron Indicator */}
        <a href="#launch" className="mt-8 text-white/50 hover:text-white transition-colors duration-200">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Horizon Shelf / Floor Line */}
      <div className="w-full relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="w-full h-12 bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      {/* Bottom Organic Cyan Wave */}
      <div className="w-full relative z-20 leading-none">
        <svg
          className="w-full h-12 md:h-20 block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,45 C320,85 540,10 900,45 C1200,75 1360,25 1440,35 L1440,80 L0,80 Z"
            fill="#00c3e3"
          />
        </svg>
      </div>
    </section>
  );
};