import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CosturarMoldesAudaces = () => {
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
              <Shirt className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Costurar com Moldes: Preciso do Audaces?
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Entenda como o Audaces transforma sua costura com moldes digitais precisos 
              que facilitam o corte e a montagem das peças.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Moldes digitais vs moldes em papel</h2>
            <p>
              Moldes feitos no <strong>Audaces</strong> são mais precisos, fáceis de armazenar 
              e podem ser modificados rapidamente. Você imprime apenas quando precisa, 
              economizando papel e espaço.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens para a costura</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Moldes com medidas exatas</li>
              <li>• Fácil gradação para outros tamanhos</li>
              <li>• Impressão em A4 ou plotter</li>
              <li>• Marcações de piques e pences</li>
              <li>• Informações técnicas no próprio molde</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Para quem é indicado</h2>
            <p>
              Costureiras, modelistas, ateliês e confecções que buscam mais precisão 
              e produtividade encontram no Audaces uma ferramenta essencial.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda a Criar Moldes Perfeitos
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine o Audaces no curso completo
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

export default CosturarMoldesAudaces;
