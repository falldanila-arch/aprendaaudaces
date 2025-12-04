import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseContent } from "@/components/CourseContent";
import { Instructor } from "@/components/Instructor";
import { Testimonials } from "@/components/Testimonials";
import { DigitalProducts } from "@/components/DigitalProducts";
import { OperadorAudaces } from "@/components/OperadorAudaces";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArticleLinks } from "@/components/ArticleLinks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <OperadorAudaces />
      <Benefits />
      <CourseContent />
      <Instructor />
      <Testimonials />
      <DigitalProducts />
      <ArticleLinks />
      <FAQ />
      <CTA />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
