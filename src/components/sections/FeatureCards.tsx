import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const FeatureCards: React.FC = () => {
    return (
        <section className="w-full bg-[#f0f9fd] py-16 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-cyan-100 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#1e0c38]">Lorem Ipsum</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
                        </p>
                    </div>
                    <div className="pt-6">
                        <Button variant="primary">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-cyan-100 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#1e0c38]">Lorem Ipsum</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
                        </p>
                    </div>
                    <div className="pt-6">
                        <Button variant="primary">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};