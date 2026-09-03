import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { LaunchBanner } from '@/components/sections/LaunchBanner';
import { ProductShowcase } from '@/components/sections/ProductShowCase';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { ProductCarousel } from '@/components/sections/ProductCarousel';
import { ClinicalProof } from '@/components/sections/ClinicalProof';
import { IngredientsSection } from '@/components/sections/IngredientsSection';
import { CommunityReviews } from '@/components/sections/CommunityReviews';
import { JourneySection } from '@/components/sections/JourneySection';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      <Navbar />
      <main>
        <HeroSection />
        <LaunchBanner />
        <ProductShowcase />
        <FeatureCards />
        <ProductCarousel />
        <ClinicalProof />
        <IngredientsSection />
        <CommunityReviews />
         <JourneySection />
      </main>
      <Footer />
    </div>
  );
}