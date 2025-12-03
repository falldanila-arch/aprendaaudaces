import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AudacesEconomizandoTecido = () => {
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
              <Scissors className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Audaces Economizando Tecido: Como Reduzir Desperdício
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda como o Audaces pode ajudar você a economizar tecido no encaixe de moldes, 
              reduzindo desperdício e aumentando sua margem de lucro.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Por que economizar tecido é essencial?</h2>
            <p>
              O tecido representa um dos maiores custos na produção de roupas. Com o <strong>Audaces Encaixe</strong>, 
              você consegue otimizar o posicionamento dos moldes no enfesto, aproveitando cada centímetro de material.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como o Audaces ajuda na economia</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Encaixe automático e manual de moldes</li>
              <li>• Cálculo preciso de consumo de tecido</li>
              <li>• Mapa de risco para corte otimizado</li>
              <li>• Visualização do aproveitamento em porcentagem</li>
              <li>• Simulação de diferentes larguras de tecido</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Aprenda no Curso Audaces</h2>
            <p>
              No nosso curso completo, você aprende a usar o Audaces Encaixe para maximizar o aproveitamento 
              de tecido, criar mapas de risco profissionais e calcular consumo com precisão.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine o Audaces Encaixe
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda todas as técnicas de economia de tecido no curso completo
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

export default AudacesEconomizandoTecido;
