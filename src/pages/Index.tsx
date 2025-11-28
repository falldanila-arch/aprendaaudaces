import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseContent } from "@/components/CourseContent";
import { Testimonials } from "@/components/Testimonials";
import { DigitalProducts } from "@/components/DigitalProducts";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <CourseContent />
      <Testimonials />
      <DigitalProducts />
      <FAQ />
      <CTA />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
