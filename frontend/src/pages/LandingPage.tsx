import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/features/landing/components/hero";
import Features from "@/features/landing/components/Features";
import DashboardShowcase from "@/features/landing/dashboard";
import Testimonials from "@/features/landing/testimonials";
import Pricing from "@/features/landing/pricing";
import FAQ from "@/features/landing/faq";
import Workflow from "@/features/landing/components/Workflow";
import CTA from "@/features/landing/components/CTA";
import TrustedBy from "@/features/landing/components/trusted/TrustedBy";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DashboardShowcase />
        <Testimonials />
        <Pricing />
        <Workflow />
        <FAQ />
        <CTA />
        
      </main>

      <Footer />
    </>
  );
}