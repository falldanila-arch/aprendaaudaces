import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaEmCasa = () => {
  return (
    <>
      <Helmet>
        <title>Costura em Casa - Aprenda a Costurar no Conforto do Lar | Curso</title>
        <meta name="description" content="Costura em casa: aprenda costura básica, costura criativa e corte e costura para criar roupas em casa. Técnicas de costura modinha e costura social." />
        <meta name="keywords" content="costura em casa, costura, costura criativa, costura e corte, costura básica, costura modinha, costura social, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem digital" />
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
                <Home className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Costura Doméstica</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura em Casa: Crie Suas Próprias Roupas
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Aprenda costura em casa e transforme seu lar em um ateliê. Domine técnicas de 
              costura básica, costura criativa e corte e costura para produzir peças incríveis 
              sem sair de casa.
            </p>

            <h2 className="text-2xl font-bold mb-4">Vantagens da Costura em Casa</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Economia</h3>
                <p className="text-sm text-muted-foreground">Produza roupas com menor custo.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Flexibilidade</h3>
                <p className="text-sm text-muted-foreground">Costure no seu próprio ritmo.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Personalização</h3>
                <p className="text-sm text-muted-foreground">Crie peças únicas e exclusivas.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Montar seu espaço de costura em casa</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Técnicas de costura básica e intermediária</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha e tendências atuais</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social para eventos especiais</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Transforme Sua Casa em Ateliê</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura em casa com técnicas profissionais e comece a criar.
              </p>
              <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
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

export default CosturaEmCasa;
