import React from 'react';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#481e69] via-[#3b1557] to-[#24083d] text-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Headline & Claims */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="border border-white/40 text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">Parachute Advansed</span>
            <span className="text-xl font-serif italic text-cyan-300">Hydra Curls</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-serif italic font-normal tracking-wide text-white leading-tight">
            Hydra<br />Curls
          </h2>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <span className="text-2xl font-bold text-cyan-300">48 HOUR</span>
            <span className="text-xs uppercase tracking-wider text-purple-200">Hydration</span>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-1">
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Best of Hydrating Ingredients</p>
            <h3 className="text-3xl font-black tracking-wider uppercase text-white">HYALURON</h3>
            <p className="text-sm font-semibold tracking-widest uppercase text-purple-200">Coconut | Avocado</p>
            <p className="text-xs text-gray-300 pt-1">NO SLS, SILICONES, PARABENS</p>
          </div>
        </div>

        {/* Center/Right Product Range Mockup */}
        <div className="lg:col-span-8 flex flex-col items-center">
          <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-cyan-300 font-medium">Designed For</span>
              <h4 className="text-2xl font-serif italic text-white mt-1">Arab Curly, Coily & Wavy Hair</h4>
              <p className="text-xs text-purple-200 mt-2 max-w-sm">
                Formulated with deeply penetrating hyaluronic moisture locks tailored for thick curls.
              </p>
            </div>
            
            {/* Visual Bottles Stand-in */}
            <div className="flex -space-x-3 items-end">
              {['Shampoo', 'Conditioner', 'Mask', 'Cream', 'Gel'].map((item, idx) => (
                <div key={idx} className="w-14 h-36 bg-gradient-to-t from-cyan-500/30 to-purple-400/20 rounded-xl border border-white/20 flex items-center justify-center text-[10px] text-center font-medium shadow-lg hover:-translate-y-2 transition-transform duration-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};