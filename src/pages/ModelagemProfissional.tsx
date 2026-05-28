import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, BookOpen, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ModelagemProfissional = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem Profissional - Técnicas Avançadas para Confecção | Aprenda Audaces</title>
        <meta name="description" content="Domine a modelagem profissional com técnicas avançadas. Aprenda a criar moldes precisos para confecção industrial e artesanal com qualidade profissional." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem profissional, técnicas de modelagem, moldes profissionais, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
              Modelagem Profissional
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A modelagem profissional é a base da confecção de qualidade. Dominar técnicas avançadas de criação de moldes permite produzir peças com acabamento impecável e ajuste perfeito ao corpo.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">O Que Define um Modelista Profissional</h2>
              <p className="text-muted-foreground mb-4">
                Um modelista profissional combina conhecimento técnico, criatividade e precisão. Ele entende anatomia, tecidos, e como transformar ideias em peças vestíveis com qualidade industrial.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Domínio de tabelas de medidas e graduação</li>
                <li>• Conhecimento de diferentes tipos de tecidos</li>
                <li>• Habilidade em interpretação de croquis</li>
                <li>• Precisão nos cálculos e traçados</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Técnicas Avançadas de Modelagem</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Target className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Moulage</h3>
                  <p className="text-sm text-muted-foreground">Técnica de modelagem tridimensional diretamente sobre o manequim.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <BookOpen className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Modelagem Plana</h3>
                  <p className="text-sm text-muted-foreground">Criação de moldes a partir de diagramas e cálculos precisos.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Modelagem CAD</h3>
                  <p className="text-sm text-muted-foreground">Uso de softwares como Audaces para modelagem digital.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Alfaiataria</h3>
                  <p className="text-sm text-muted-foreground">Técnicas especializadas para roupas estruturadas.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/modelagem-cad" className="text-accent hover:underline">→ Modelagem CAD</Link>
                <Link to="/modelagem-manual" className="text-accent hover:underline">→ Modelagem Manual</Link>
                <Link to="/modelagem-digital-completa" className="text-accent hover:underline">→ Modelagem Digital</Link>
                <Link to="/criacao-de-roupas" className="text-accent hover:underline">→ Criação de Roupas</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Torne-se um Modelista Profissional</h2>
              <p className="text-muted-foreground mb-6">Aprenda todas as técnicas de modelagem com nosso curso completo</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ModelagemProfissional;
