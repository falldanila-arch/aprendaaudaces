import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConstruirMoldesAudaces = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-6 py-12 mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Curso
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Hammer className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Construir Moldes no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Domine as ferramentas de construção de moldes no Audaces 
              e crie peças profissionais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Ferramentas de construção</h2>
            <p>
              O <strong>Audaces</strong> oferece ferramentas poderosas para construir 
              moldes com precisão: linhas, curvas, pontos de referência e muito mais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Recursos disponíveis</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Desenho com medidas exatas</li>
              <li>• Curvas bezier para decotes</li>
              <li>• Linhas perpendiculares e paralelas</li>
              <li>• Espelhamento de peças</li>
              <li>• União e separação de moldes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Da base à peça final</h2>
            <p>
              No curso, você aprende a partir de uma base corporal e transformá-la 
              em qualquer tipo de peça: blusas, vestidos, saias e muito mais.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Construa Moldes Profissionais
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine todas as ferramentas no curso
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}
            >
              Começar Agora por R$ 299,90
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
};

export default ConstruirMoldesAudaces;
