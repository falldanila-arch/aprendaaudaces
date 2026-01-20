import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaAlfaiataria = () => {
  return (
    <>
      <Helmet>
        <title>Costura Alfaiataria - Técnicas de Alfaiate Profissional | Curso</title>
        <meta name="description" content="Costura alfaiataria: aprenda técnicas de alfaiate para criar ternos, blazers e peças estruturadas. Alta costura, costura social e costura e corte profissional." />
        <meta name="keywords" content="costura alfaiataria, costura, alta costura, costura social, costura e corte, costura e design, costura básica, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem facil" />
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
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Alfaiataria</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Alfaiataria: A Arte dos Alfaiates
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A costura alfaiataria é uma especialidade refinada que envolve técnicas de 
              alta costura para criar ternos, blazers e peças estruturadas. Aprenda costura 
              social e costura e corte profissional com acabamento impecável.
            </p>

            <h2 className="text-2xl font-bold mb-4">Peças de Alfaiataria</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Ternos Completos</h3>
                <p className="text-sm text-muted-foreground">Paletó, calça e colete sob medida.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Blazers</h3>
                <p className="text-sm text-muted-foreground">Peças versáteis para ocasiões diversas.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Calças Sociais</h3>
                <p className="text-sm text-muted-foreground">Corte e caimento perfeitos.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Coletes</h3>
                <p className="text-sm text-muted-foreground">Elegância e sofisticação.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas de Alfaiataria</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e corte de lapelas e golas</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Entretelas e estruturação</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e design de bolsos</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Acabamentos internos e externos</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Torne-se um Alfaiate</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura alfaiataria e domine a arte de criar ternos perfeitos.
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

export default CosturaAlfaiataria;
