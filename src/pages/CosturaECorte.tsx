import { motion } from "framer-motion";
import { ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaECorte = () => {
  return (
    <>
      <Helmet>
        <title>Costura e Corte - Técnicas Profissionais de Corte e Costura | Curso</title>
        <meta name="description" content="Costura e corte profissional: aprenda técnicas de alta costura, costura alfaiataria, costura criativa e costura básica. Domine o corte e a costura de roupas." />
        <meta name="keywords" content="costura e corte, costura, alta costura, costura alfaiataria, costura criativa, costura básica, costura em casa, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada" />
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
              <span className="text-sm text-muted-foreground">Corte e Costura</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura e Corte: Fundamentos da Confecção
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              O corte e costura são a base de toda confecção de roupas. Aprenda técnicas 
              profissionais de alta costura, costura alfaiataria e costura criativa para 
              dominar completamente a arte de criar peças.
            </p>

            <h2 className="text-2xl font-bold mb-4">Técnicas de Corte</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Corte Reto</h3>
                <p className="text-sm text-muted-foreground">Base para costura básica e peças simples.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Corte no Viés</h3>
                <p className="text-sm text-muted-foreground">Técnica de alta costura para caimento perfeito.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Corte Alfaiataria</h3>
                <p className="text-sm text-muted-foreground">Para ternos e peças estruturadas.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Corte Criativo</h3>
                <p className="text-sm text-muted-foreground">Técnicas inovadoras de costura e design.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Preparação do tecido para corte</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Técnicas de marcação e risco</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social e modinha</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Acabamento profissional</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Domine o Corte e Costura</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda técnicas profissionais de corte e costura com moldes digitais.
              </p>
              <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Acessar Curso <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default CosturaECorte;
