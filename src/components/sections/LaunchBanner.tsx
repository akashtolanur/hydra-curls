import React from 'react';
import { ArrowRight, Check, Droplets, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const LaunchBanner: React.FC = () => {
    const highlights = [
        { icon: Check, label: 'No SLS, Silicones, Parabens' },
        { icon: Droplets, label: '48-Hour Hydration' },
        { icon: Sparkles, label: 'Hair Types 2, 3, 4' },
    ];

    return (
        <section id="products" className="relative bg-white py-12 md:py-20 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Badge className="bg-purple-100 text-brand-lightPurple">New Launch</Badge>
                    <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark font-bold">
                        Hydra Curls Hydrating Range
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Revolutionary hair care range specially designed for Arab curly, coily & wavy hair.
                        Experience <span className="text-cyan-600 font-semibold">48-hour hydration</span> with natural ingredients like Hyaluronic Acid, Coconut & Avocado.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
                        {highlights.map((h, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <h.icon className="w-4 h-4 text-brand-cyan" /> {h.label}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button variant="primary">
                            Explore Products <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline">Learn Curly Girl Method</Button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-sm h-80 md:h-96 bg-brand-softBlue rounded-3xl flex items-center justify-center border border-cyan-100 shadow-inner">
                        <span className="text-gray-400 text-sm font-medium">Product Image Mockup</span>
                    </div>
                </div>
            </div>
        </section>
    );
};