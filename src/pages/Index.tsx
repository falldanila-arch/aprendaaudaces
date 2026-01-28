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
import { ThematicLinks } from "@/components/ThematicLinks";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cursos de Modelagem Audaces | Moldes em PDF e Modelagem Digital</title>
        <meta name="description" content="Curso Audaces, modelagem digital, moldes em PDF, cursos de modelagem, costura e designer gráfico. Aprenda a criar moldes profissionais com as melhores técnicas do mercado têxtil." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem digital, moldes em pdf, audaces moldes, curso audaces, aprenda audaces, audaces, costura, designer grafico" />
      </Helmet>
      <main className="min-h-screen">
        <Hero />
        <OperadorAudaces />
        <Benefits />
        <CourseContent />
        <Instructor />
        <Testimonials />
        <DigitalProducts />
        <ThematicLinks />
        <ArticleLinks />
        <FAQ />
        <CTA />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
