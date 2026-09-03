import React from 'react';
import { Star } from 'lucide-react';

export const CommunityReviews: React.FC = () => {
  const hairTypes = [
    { title: 'wavy', type: 'Type 2A - 2C', desc: 'Weightless moisture to lift loose waves without flattening.' },
    { title: 'curly', type: 'Type 3A - 3C', desc: 'Moisture retention & spring definition for bouncy spirals.' },
    { title: 'coily', type: 'Type 4A - 4C', desc: 'Deep hydration penetration & seal for tight zigzag patterns.' },
  ];

  return (
    <section className="w-full bg-[#f0f9fd] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Testimonial Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md h-80 bg-slate-200 rounded-3xl border border-cyan-200 shadow-inner flex items-center justify-center text-gray-400 text-sm">
              Before / After Model Comparison
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">Real Women, Real Results</span>
            <h3 className="text-3xl font-serif font-bold text-[#1e0c38]">Hear from Our Community</h3>
            
            <div className="space-y-3 pt-2">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-cyan-100 shadow-sm">
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    "I've struggled with frizz my whole life. Hydra Curls is the first range that actually tamed my hair for more than a day! The 48-hour claim is real."
                  </p>
                  <p className="text-[11px] font-bold text-[#1e0c38] mt-2">Aisha K. — Dubai, UAE</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Hair Types Classification */}
        <div className="text-center pt-8">
          <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">Designed For You</span>
          <h3 className="text-3xl font-serif font-bold text-[#1e0c38] mt-1 mb-10">
            Perfect for Arab <span className="text-cyan-500">Curly, Coily & Wavy Hair</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hairTypes.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-full h-56 bg-gradient-to-b from-purple-900 to-indigo-950 rounded-xl mb-4 flex items-end p-4">
                    <span className="text-3xl font-serif italic text-white">{item.title}</span>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">{item.type}</span>
                  <h4 className="text-lg font-bold text-[#1e0c38] capitalize mt-1">{item.title} Hair</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};