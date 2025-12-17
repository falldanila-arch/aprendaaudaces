import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MapaRiscoAudaces = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
      </Helmet>
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
              <Map className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mapa para Risco no Audaces: Guia Completo
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda a criar mapas de risco profissionais no Audaces para otimizar 
              o corte de tecido na produção industrial.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que é mapa de risco?</h2>
            <p>
              O mapa de risco é o documento que mostra como os moldes devem ser posicionados 
              no tecido para o corte. Com o <strong>Audaces</strong>, você cria mapas de risco 
              que maximizam o aproveitamento do material.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Benefícios do mapa de risco digital</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Visualização clara do posicionamento dos moldes</li>
              <li>• Cálculo automático de consumo</li>
              <li>• Impressão em escala real ou reduzida</li>
              <li>• Múltiplas opções de encaixe</li>
              <li>• Economia de até 15% no tecido</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Criando mapas no Audaces</h2>
            <p>
              No Audaces Encaixe, você pode criar mapas de risco automaticamente ou manualmente, 
              ajustando cada molde para o melhor aproveitamento possível.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine o Mapa de Risco
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda a criar mapas profissionais no curso completo
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
    </>
  );
};

export default MapaRiscoAudaces;
