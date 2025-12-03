import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CriarMoldesAudaces = () => {
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
              <PenTool className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Criar Moldes no Audaces do Zero
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda a criar moldes profissionais no Audaces, 
              desde a base corporal até peças complexas.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Começando do zero</h2>
            <p>
              No <strong>Audaces</strong>, você pode criar moldes usando medidas diretas 
              ou a partir de bases pré-definidas. O curso ensina ambos os métodos.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que você aprende</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Criar bases corporais femininas e infantis</li>
              <li>• Desenhar moldes com ferramentas de precisão</li>
              <li>• Adicionar pences, recortes e costuras</li>
              <li>• Incluir margens de costura</li>
              <li>• Criar informações técnicas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Moldes inclusos</h2>
            <p>
              Você também recebe aproximadamente 50 moldes bases prontos para 
              usar como ponto de partida para suas criações.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Crie Moldes Profissionais
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda do zero no curso completo
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

export default CriarMoldesAudaces;
