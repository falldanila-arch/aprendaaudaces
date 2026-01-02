import { motion } from "framer-motion";
import { ArrowRight, Scissors, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldesParaCostura = () => {
  return (
    <>
      <Helmet>
        <title>Moldes para Costura - Aprenda a Criar Moldes Profissionais | Curso Audaces</title>
        <meta name="description" content="Aprenda a criar moldes para costura profissionais. Curso completo de modelagem digital com mais de 50 moldes bases prontos para usar em suas criações." />
        <meta name="keywords" content="moldes para costura, moldes de costura, modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Guia Completo</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Moldes para Costura: Guia Completo para Iniciantes e Profissionais
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Os moldes para costura são a base de qualquer projeto de confecção de roupas. 
              Aprenda como criar, interpretar e utilizar moldes profissionais para suas criações.
            </p>

            <h2 className="text-2xl font-bold mb-4">O Que São Moldes para Costura?</h2>
            <p className="text-foreground/80 mb-6">
              Moldes são representações planas das partes de uma peça de roupa. Eles servem como 
              guia para cortar o tecido com precisão, garantindo que as peças se encaixem perfeitamente 
              quando costuradas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Moldes Digitais</h3>
                <p className="text-muted-foreground mb-4">
                  Criados em softwares como Audaces, permitem precisão milimétrica e fácil 
                  reprodução em qualquer tamanho.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Scissors className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Moldes Manuais</h3>
                <p className="text-muted-foreground mb-4">
                  Feitos em papel, são tradicionais e ainda muito utilizados por costureiras 
                  em todo o Brasil.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Vantagens dos Moldes Digitais</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Precisão milimétrica em todas as medidas</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Fácil gradação para múltiplos tamanhos</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Economia de tempo e material</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Possibilidade de venda online</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/molde-de-roupa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Molde de Roupa</p>
                <p className="text-sm text-muted-foreground">Como criar moldes de roupas</p>
              </Link>
              <Link to="/moldes-pdf" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes em PDF</p>
                <p className="text-sm text-muted-foreground">Venda moldes digitais</p>
              </Link>
              <Link to="/costura-criativa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Costura Criativa</p>
                <p className="text-sm text-muted-foreground">Técnicas criativas</p>
              </Link>
              <Link to="/modelagem-descomplicada" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Modelagem Descomplicada</p>
                <p className="text-sm text-muted-foreground">Aprenda de forma simples</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Cursos profissionais</p>
              </Link>
              <Link to="/corte-enfesto-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Corte e Enfesto</p>
                <p className="text-sm text-muted-foreground">Técnicas de corte</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Aprenda a Criar Moldes Profissionais</h3>
              <p className="text-muted-foreground mb-6">
                Domine a arte de criar moldes para costura com nosso curso completo de Audaces.
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

export default MoldesParaCostura;
