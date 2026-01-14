import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Cpu, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ModelagemCad = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem CAD - Software de Modelagem Industrial | Aprenda Audaces</title>
        <meta name="description" content="Aprenda modelagem CAD com softwares profissionais como Audaces. Crie moldes digitais com precisão milimétrica para confecção industrial e aumente sua produtividade." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem CAD, software modelagem, Audaces CAD, moldes digitais" />
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
              Modelagem CAD
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A modelagem CAD (Computer-Aided Design) revolucionou a indústria da moda, permitindo criar moldes digitais com precisão absoluta. Softwares como Audaces são essenciais para confecções modernas.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">O Que é Modelagem CAD?</h2>
              <p className="text-muted-foreground mb-4">
                É a criação de moldes utilizando software especializado. Diferente da modelagem manual, o CAD permite edições rápidas, graduação automática e economia de tecido através do encaixe otimizado.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Vantagens da Modelagem CAD</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Rapidez</h3>
                  <p className="text-sm text-muted-foreground">Crie e modifique moldes em minutos, não horas.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Cpu className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Precisão</h3>
                  <p className="text-sm text-muted-foreground">Medidas exatas com precisão de milímetros.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Layers className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Graduação Automática</h3>
                  <p className="text-sm text-muted-foreground">Crie todos os tamanhos automaticamente.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Monitor className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Economia</h3>
                  <p className="text-sm text-muted-foreground">Otimização de encaixe reduz desperdício de tecido.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Principais Softwares CAD</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Audaces</strong> - Líder no mercado brasileiro
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Gerber</strong> - Padrão internacional
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Lectra</strong> - Soluções completas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Optitex</strong> - Simulação 3D avançada
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/audaces-7" className="text-accent hover:underline">→ Audaces 7</Link>
                <Link to="/audaces-gratis" className="text-accent hover:underline">→ Audaces Grátis</Link>
                <Link to="/modelagem-manual" className="text-accent hover:underline">→ Modelagem Manual</Link>
                <Link to="/modelagem-digital-completa" className="text-accent hover:underline">→ Modelagem Digital</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Domine o Audaces CAD</h2>
              <p className="text-muted-foreground mb-6">Aprenda modelagem CAD do zero ao avançado com nosso curso completo</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Começar Curso
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ModelagemCad;
