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
        <title>Curso Audaces | Cursos de Modelagem e Costura Profissional | Moldes PDF</title>
        <meta name="description" content="Curso Audaces completo: aprenda Audaces, modelagem digital e costura profissional. Cursos de modelagem com moldes em PDF, Audaces encaixe, Audaces Digiflash. Mais de 500 alunos formados. O melhor curso de modelagem do Brasil." />
        <meta name="keywords" content="Audaces, curso Audaces, cursos de modelagem, curso de modelagem, costura, costura profissional, modelagem digital, moldes em PDF, Audaces encaixe, Audaces Digiflash, Audaces software, aprender Audaces, Audaces 7, Audaces grátis, baixar Audaces, download Audaces, moldes digitais, corte e costura, alta costura, costura criativa, modelagem Audaces, operador Audaces" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/" />
        <meta property="og:title" content="Curso Audaces | Cursos de Modelagem e Costura Profissional" />
        <meta property="og:description" content="Aprenda Audaces do zero ao avançado. Curso de modelagem digital com moldes em PDF, costura profissional e certificado. 500+ alunos formados." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Curso Audaces - Modelagem Digital e Costura Profissional",
            "description": "Curso completo de Audaces para modelagem digital, criação de moldes em PDF e costura profissional. Aprenda Audaces encaixe, Digiflash e técnicas de corte e costura.",
            "provider": {
              "@type": "Organization",
              "name": "Aprenda Audaces",
              "url": "https://aprendaaudaces.lovable.app",
              "sameAs": ["https://wa.me/5535998121698"]
            },
            "instructor": {
              "@type": "Person",
              "name": "Professor Robson",
              "description": "Especialista em Audaces com mais de 20 anos de experiência em modelagem digital e costura"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "ratingCount": "500"
            },
            "offers": {
              "@type": "Offer",
              "price": "299.90",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT6H"
            },
            "teaches": ["Audaces", "Modelagem Digital", "Costura", "Moldes em PDF", "Audaces Encaixe", "Audaces Digiflash", "Corte e Costura"]
          }
        `}</script>
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
