'use client';

import Navigation from '@/components/Navigation';
import SimpleHero from '@/components/SimpleHero';
import ServicesGrid from '@/components/ServicesGrid';
import OurApproach from '@/components/OurApproach';
import About from '@/components/About';
import SimpleCTA from '@/components/SimpleCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <SimpleHero />
        <ServicesGrid />
        <OurApproach />
        <About />
        <SimpleCTA />
      </main>
      <Footer />
    </>
  );
}