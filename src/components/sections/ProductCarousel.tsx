import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { name: 'Hydrating Shampoo', desc: 'Deeply cleanses scalp & hydrates hair' },
  { name: 'Hydrating Conditioner', desc: 'Frizz taming & instant softness' },
  { name: 'Deep Moisture Mask', desc: 'Intensive weekly repair' },
  { name: 'Curl Defining Cream', desc: 'Hold without crunchy residue' },
  { name: 'Hydra Setting Gel', desc: 'All-day humidity guard' },
];

export const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full bg-gradient-to-b from-[#2e104d] via-[#481e69] to-[#2e104d] text-white py-24 px-6 overflow-hidden">

      {/* Bowl / Oval Backdrop */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">

        {/* Main Product Showcase Box */}
        <div className="relative flex items-center justify-center w-full my-6">
          <button
            onClick={prev}
            aria-label="Previous product"
            className="absolute left-2 sm:left-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 z-20"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="w-64 h-80 bg-white/10 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 backdrop-blur-md">
            <div className="w-24 h-48 bg-gradient-to-b from-purple-400/30 to-cyan-400/30 rounded-2xl border border-white/30 mb-4 flex items-center justify-center text-xs text-center px-2">
              Bottle Preview
            </div>
            <h4 className="text-base font-bold text-white">{products[currentIndex].name}</h4>
            <p className="text-[11px] text-purple-200 mt-1">{products[currentIndex].desc}</p>
          </div>

          <button
            onClick={next}
            aria-label="Next product"
            className="absolute right-2 sm:right-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 z-20"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex items-center gap-3 mt-6">
          {products.map((p, idx) => (
            <button
              key={idx}
              aria-label={p.name}
              onClick={() => setCurrentIndex(idx)}
              className={`w-10 h-10 rounded-full border transition-all ${idx === currentIndex
                ? 'border-cyan-400 bg-cyan-400/20 scale-110'
                : 'border-white/20 bg-white/5 hover:border-white/40'
                } flex items-center justify-center text-[10px]`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Cursive Tagline */}
        <p className="font-serif italic text-2xl md:text-3xl text-purple-200 mt-12 opacity-80">
          Experience the power of hydration in every drop.
        </p>
      </div>
    </section>
  );
};