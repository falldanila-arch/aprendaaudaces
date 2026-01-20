import { motion } from "framer-motion";
import { ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Costura = () => {
  return (
    <>
      <Helmet>
        <title>Costura - Aprenda Técnicas de Costura Profissional | Curso Completo</title>
        <meta name="description" content="Costura profissional: domine técnicas de costura criativa, costura em casa, corte e costura, alta costura, costura social e alfaiataria. Curso completo." />
        <meta name="keywords" content="costura, costura criativa, costura em casa, costura e corte, alta costura, costura social, costura alfaiataria, costura básica, costura modinha, costura e design, cursos de modelagem, cursos de modelagem audaces" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
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
              <span className="text-sm text-muted-foreground">Técnicas de Costura</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura: Domine a Arte de Criar Roupas
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A costura é uma habilidade essencial para quem deseja criar peças únicas. 
              Aprenda desde costura básica até técnicas avançadas de alta costura, 
              costura social e alfaiataria profissional.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Costura</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Costura Criativa</h3>
                <p className="text-sm text-muted-foreground">Explore técnicas artísticas e personalizadas.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Costura em Casa</h3>
                <p className="text-sm text-muted-foreground">Produza suas próprias roupas no conforto do lar.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Alta Costura</h3>
                <p className="text-sm text-muted-foreground">Técnicas refinadas para peças exclusivas.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Costura Alfaiataria</h3>
                <p className="text-sm text-muted-foreground">Aprenda a criar ternos e peças estruturadas.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e corte profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social para eventos</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha e tendências</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e design de moda</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Comece Sua Jornada na Costura</h3>
              <p className="text-muted-foreground mb-6">
                Do básico ao avançado, aprenda todas as técnicas de costura profissional.
              </p>
              <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Acessar Curso Completo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default Costura;
