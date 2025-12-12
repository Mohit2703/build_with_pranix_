'use client';

import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import AIRequirementGenerator from '@/components/home/AIRequirementGenerator';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import CTABanner from '@/components/home/CTABanner';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-[var(--brand-blue)] selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <ServicesGrid />
        <AIRequirementGenerator />
        <WhyChooseUs />
        <ProcessTimeline />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
