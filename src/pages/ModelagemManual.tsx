import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Pencil, Ruler, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ModelagemManual = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem Manual - Técnicas Tradicionais de Criação de Moldes | Aprenda Audaces</title>
        <meta name="description" content="Aprenda modelagem manual com técnicas tradicionais de criação de moldes. Domine o uso de réguas, esquadros e papel para criar moldes precisos à mão." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem manual, moldes à mão, técnicas tradicionais, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>
      <main className="min-h-screen bg-background">
        <div className="container px-6 py-12 mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <motion.article
            className="prose prose-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Modelagem Manual
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A modelagem manual é a base tradicional da criação de moldes. Mesmo na era digital, entender os princípios manuais é essencial para qualquer modelista profissional.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Materiais Necessários</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Ruler className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Réguas e Esquadros</h3>
                  <p className="text-sm text-muted-foreground">Régua de alfaiate, esquadro, curva francesa e régua de quadril.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Pencil className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Materiais de Desenho</h3>
                  <p className="text-sm text-muted-foreground">Papel kraft, lápis, borracha, carretilha e alfinetes.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <BookOpen className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Tabela de Medidas</h3>
                  <p className="text-sm text-muted-foreground">Referência de medidas padronizadas para cada tamanho.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Target className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Fita Métrica</h3>
                  <p className="text-sm text-muted-foreground">Para tirar medidas do corpo e conferir os moldes.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Técnicas de Modelagem Manual</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">1</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Traçado Base</strong>
                    <p className="text-sm">Criação do molde fundamental a partir das medidas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">2</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Interpretação</strong>
                    <p className="text-sm">Transformação do molde base no modelo desejado.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">3</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Graduação</strong>
                    <p className="text-sm">Ampliação e redução para diferentes tamanhos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">4</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Prova e Ajuste</strong>
                    <p className="text-sm">Teste do molde em tecido e correções necessárias.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/modelagem-cad" className="text-accent hover:underline">→ Modelagem CAD</Link>
                <Link to="/reguas-esquadros-costura" className="text-accent hover:underline">→ Réguas e Esquadros</Link>
                <Link to="/modelagem-profissional" className="text-accent hover:underline">→ Modelagem Profissional</Link>
                <Link to="/molde-de-roupa" className="text-accent hover:underline">→ Molde de Roupa</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda Modelagem Completa</h2>
              <p className="text-muted-foreground mb-6">Do manual ao digital, domine todas as técnicas de modelagem</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Ver Curso Completo
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ModelagemManual;
