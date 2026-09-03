import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#07050b] text-white pt-16 pb-10 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
                    <div className="lg:col-span-4 space-y-5">
                        <div className="space-y-2">
                            <div className="inline-block border border-white/30 rounded px-1.5 py-0.5 text-left leading-tight">
                                <span className="block text-[7px] tracking-wider text-gray-300 uppercase">PARACHUTE</span>
                                <span className="block text-[9px] font-bold tracking-widest text-white uppercase">ADVANSED</span>
                            </div>
                            <h3 className="text-3xl font-bold font-serif italic text-cyan-400 leading-tight">
                                Hydra<br />Curls
                            </h3>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-normal">
                            Advanced hair care specially designed for Arab curly, coily & wavy hair types 2, 3, and 4.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Hair care</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300">
                            <li>
                                <a href="#method" className="hover:text-cyan-400 transition-colors duration-200">
                                    Curly Girl Method
                                </a>
                            </li>
                            <li>
                                <a href="#guide" className="hover:text-cyan-400 transition-colors duration-200">
                                    Hair Type Guide
                                </a>
                            </li>
                            <li>
                                <a href="#styling" className="hover:text-cyan-400 transition-colors duration-200">
                                    Styling Tips
                                </a>
                            </li>
                            <li>
                                <a href="#ingredients" className="hover:text-cyan-400 transition-colors duration-200">
                                    Ingredient Benefits
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Connect</h4>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                            Follow us for daily hair care tips and inspiration for your curly hair journey.
                        </p>
                    </div>

                    {/* Column 4: Newsletter (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Newsletter</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Get expert tips and exclusive offers delivered to your inbox.
                        </p>

                        {/* Input with Attached Button */}
                        <form onSubmit={handleSubscribe} className="flex items-center pt-1">
                            <div className="relative flex-1 flex items-stretch">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    required
                                    className="w-full bg-[#18181b] text-white text-xs px-4 py-3 rounded-l-lg border border-r-0 border-white/10 focus:outline-none focus:border-cyan-400 placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="bg-[#00c3e3] hover:bg-[#00b0cd] text-black px-4 flex items-center justify-center rounded-r-lg transition-colors duration-200 shrink-0"
                                >
                                    <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="w-full h-px bg-white/10" />

                {/* Bottom Copyright */}
                <div className="pt-8 text-center">
                    <p className="text-xs text-gray-400">
                        © 2026 Parachute Advansed Hydra Curls. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};