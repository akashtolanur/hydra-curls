import React from 'react';
import { Droplet, ShieldCheck } from 'lucide-react';

export const ClinicalProof: React.FC = () => {
  return (
    <section className="w-full bg-[#f0f9fd] py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Copy */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">The Hydra Curls Promise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e0c38]">
            Clinically Proven <span className="text-[#00c3e3]">48-Hour</span> Hydration
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Our advanced formula with Hyaluronic Acid doesn't just coat your hair; it penetrates the cuticle to lock in moisture from the inside out, providing continuous hydration for two full days.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                <Droplet className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#1e0c38]">Moisture Attraction</h5>
                <p className="text-xs text-gray-500 mt-0.5">
                  Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#1e0c38]">Strengthening Seal</h5>
                <p className="text-xs text-gray-500 mt-0.5">
                  Coconut & Avocado oils seal the hair cuticle, preventing moisture loss and adding strength.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 48-Hour Badge Graphic */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full border-4 border-cyan-300/40 bg-white shadow-xl flex flex-col items-center justify-center relative">
            <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-1">
              <div className="w-1 h-4 bg-cyan-500 rounded origin-bottom" />
            </div>
            <span className="text-7xl font-extrabold text-[#1e0c38] tracking-tight">48</span>
            <span className="bg-[#00c3e3] text-slate-900 font-bold text-xs uppercase px-3 py-1 rounded-full mt-1">
              Hours
            </span>
            <p className="text-[11px] text-gray-400 text-center mt-3 max-w-[180px]">
              of continuous curl hydration and frizz control.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};