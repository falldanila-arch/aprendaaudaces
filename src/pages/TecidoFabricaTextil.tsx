import { motion } from "framer-motion";
import { ArrowRight, Factory, Layers, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TecidoFabricaTextil = () => {
  return (
    <>
      <Helmet>
        <title>Tecido e Fábrica Têxtil - Guia Completo de Tecidos | Indústria Têxtil</title>
        <meta name="description" content="Tecido e fábrica têxtil: conheça os principais tipos de tecidos, produção industrial e como escolher o melhor material para suas criações." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, tecido, fábrica têxtil, indústria têxtil, audaces moldes, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            ← Voltar para o Início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Indústria Têxtil</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tecido e Fábrica Têxtil: Entenda a Indústria da Moda
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Conhecer os tipos de tecidos e como funcionam as fábricas têxteis é fundamental 
              para qualquer profissional de moda e confecção.
            </p>

            <h2 className="text-2xl font-bold mb-4">Principais Tipos de Tecidos</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tecidos Planos</h3>
                <p className="text-muted-foreground">
                  Tricoline, oxford, sarja, jeans. Produzidos em teares com trama e urdume.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Shirt className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Malhas</h3>
                <p className="text-muted-foreground">
                  Meia-malha, ribana, moletom. Produzidas em máquinas circulares.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Factory className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tecidos Sintéticos</h3>
                <p className="text-muted-foreground">
                  Poliéster, nylon, tactel. Produzidos a partir de fibras artificiais.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tecidos Naturais</h3>
                <p className="text-muted-foreground">
                  Algodão, linho, seda. Produzidos com fibras naturais vegetais ou animais.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Como Escolher o Tecido Certo</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Considere o caimento desejado para a peça</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Verifique a composição e percentual de elastano</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Analise a gramatura ideal para o modelo</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Teste o encolhimento antes de cortar</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/fio-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Fio e Tecido</p>
                <p className="text-sm text-muted-foreground">Fibras e composições</p>
              </Link>
              <Link to="/corte-enfesto-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Corte e Enfesto</p>
                <p className="text-sm text-muted-foreground">Técnicas de corte</p>
              </Link>
              <Link to="/consumo-tecido-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Consumo de Tecido</p>
                <p className="text-sm text-muted-foreground">Calcule o consumo</p>
              </Link>
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Crie seus moldes</p>
              </Link>
              <Link to="/audaces-economizando-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Economizando Tecido</p>
                <p className="text-sm text-muted-foreground">Reduza desperdício</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Aprenda mais</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Domine o Uso de Tecidos</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda a escolher e trabalhar com diferentes tecidos em nosso curso.
              </p>
              <a 
                href="https://go.pepper.com.br/1xtll"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default TecidoFabricaTextil;
