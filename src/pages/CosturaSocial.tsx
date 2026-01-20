import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaSocial = () => {
  return (
    <>
      <Helmet>
        <title>Costura Social - Roupas para Eventos e Ocasiões Especiais | Curso</title>
        <meta name="description" content="Costura social: aprenda a criar vestidos, ternos e roupas para eventos. Técnicas de alta costura, costura alfaiataria e costura e design para ocasiões especiais." />
        <meta name="keywords" content="costura social, costura, alta costura, costura alfaiataria, costura e design, costura criativa, costura modinha, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem em pdf" />
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
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Moda Social</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Social: Elegância para Eventos
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A costura social é especializada em criar peças para ocasiões especiais. 
              Aprenda técnicas de alta costura, costura alfaiataria e costura e design 
              para confeccionar vestidos, ternos e trajes elegantes.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Peças Sociais</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Vestidos de Festa</h3>
                <p className="text-sm text-muted-foreground">Para formaturas, casamentos e galas.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Ternos e Blazers</h3>
                <p className="text-sm text-muted-foreground">Costura alfaiataria profissional.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Trajes de Gala</h3>
                <p className="text-sm text-muted-foreground">Alta costura para eventos especiais.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas Essenciais</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura criativa com detalhes exclusivos</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha para tendências atuais</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Forros e estruturas internas</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Acabamentos de luxo</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Crie Peças Elegantes</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura social e confeccione roupas para as ocasiões mais especiais.
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

export default CosturaSocial;
