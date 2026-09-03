import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GuideBlockProps {
    bgImageCol: string;
    bgTextCol: string;
    imagePlaceholderText: string;
    title: string;
    description: string;
    reverse?: boolean;
}

const GuideBlock: React.FC<GuideBlockProps> = ({
    bgImageCol,
    bgTextCol,
    imagePlaceholderText,
    title,
    description,
    reverse = false,
}) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[380px] w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>

            {/* Image Half */}
            <div className={`${bgImageCol} ${reverse ? 'lg:order-2' : 'lg:order-1'} flex items-center justify-center p-8 relative overflow-hidden`}>
                <div className="w-64 h-72 rounded-2xl bg-black/10 backdrop-blur-xs border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-white/80 font-medium text-xs uppercase tracking-wider">
                        {imagePlaceholderText}
                    </span>
                </div>
            </div>

            {/* Text / CTA Half */}
            <div className={`${bgTextCol} ${reverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center items-center text-center p-10 text-white`}>
                <div className="max-w-md space-y-3">
                    <span className="font-serif italic text-lg text-white/90 block">
                        Expert Guide
                    </span>
                    <div className="w-12 h-0.5 bg-white/40 mx-auto" />
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white pt-1">
                        {title}
                    </h4>
                    <p className="text-xs text-white/80 leading-relaxed max-w-sm mx-auto">
                        {description}
                    </p>
                    <div className="pt-3">
                        <a
                            href="#explore"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white hover:text-cyan-200 transition-colors"
                        >
                            Explore Now <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export const JourneySection: React.FC = () => {
    const stats = [
        { value: '48h', label: 'Hydration' },
        { value: '05', label: 'Products' },
        { value: '3', label: 'Hair Types' },
        { value: '0', label: 'Sulfates' },
    ];

    return (
        <section className="w-full bg-[#f0f9fd]">

            {/* 1. Header Intro */}
            <div className="text-center pt-20 pb-14 px-6 max-w-3xl mx-auto">
                <span className="font-serif italic text-sm text-gray-500 block mb-1">
                    Learn & Grow
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a082e] tracking-tight">
                    Your Curly Hair <br />
                    <span className="text-[#00c3e3]">Journey Starts Here</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 italic mt-3 font-serif">
                    Access expert guides, styling tips, and a community of women who celebrate their natural curls.
                </p>
            </div>

            {/* 2. Three Alternating Guide Blocks */}
            <div className="w-full flex flex-col shadow-inner">
                {/* Block 1: Cyan Image / Blue-Violet Content */}
                <GuideBlock
                    bgImageCol="bg-[#48d6d2]"
                    bgTextCol="bg-[#4f5bd5]"
                    imagePlaceholderText="Model with Playful Curls"
                    title="Curly Girl Method Guide"
                    description="Complete guide to the CGM with washboards, tips, and step-by-step instructions designed specifically for Arab hair."
                />

                {/* Block 2: Deep Violet Content / Warm Rose Image (Reversed) */}
                <GuideBlock
                    bgImageCol="bg-[#f6b1b8]"
                    bgTextCol="bg-[#784384]"
                    imagePlaceholderText="Curly Hair Model in Coat"
                    title="Curly Girl Method Guide"
                    description="Complete guide to the CGM with washboards, tips, and step-by-step instructions designed specifically for Arab hair."
                    reverse={true}
                />

                {/* Block 3: Gold Image / Teal Content */}
                <GuideBlock
                    bgImageCol="bg-[#ea9d14]"
                    bgTextCol="bg-[#03989e]"
                    imagePlaceholderText="Sunlit Curls Model with Hat"
                    title="Curly Girl Method Guide"
                    description="Complete guide to the CGM with washboards, tips, and step-by-step instructions designed specifically for Arab hair."
                />
            </div>

            {/* 3. "Join the Curly Hair Revolution" Bottom Stats Banner */}
            <div className="w-full bg-[#0d2238] text-white py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left CTA Area */}
                    <div className="lg:col-span-7 space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Join the Curly Hair Revolution
                        </h3>
                        <p className="text-xs text-gray-300 italic font-serif max-w-md">
                            Transform your curly hair journey with expert guidance, premium products, and a supportive community.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="bg-[#00c3e3] hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-2.5 rounded-md text-xs flex items-center gap-2 transition-colors">
                                Explore Products <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <button className="border border-cyan-400/50 text-cyan-300 hover:bg-white/5 font-medium px-5 py-2.5 rounded-md text-xs transition-colors">
                                Learn Curly Girl Method
                            </button>
                        </div>
                    </div>

                    {/* Right Metrics Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-y-8 gap-x-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center sm:text-left">
                                <span className="block text-3xl font-bold text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="block text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};