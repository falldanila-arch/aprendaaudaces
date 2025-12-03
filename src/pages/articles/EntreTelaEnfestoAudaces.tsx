import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EntreTelaEnfestoAudaces = () => {
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
              <Layers2 className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entretela no Enfesto Feito no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda a planejar o corte de entretela junto com o tecido principal 
              usando o Audaces.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Organizando entretela</h2>
            <p>
              No <strong>Audaces</strong>, você pode criar encaixes separados para entretela, 
              otimizando o uso desse material que geralmente tem largura diferente do tecido.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como trabalhar</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Identificar peças que levam entretela</li>
              <li>• Criar encaixe separado</li>
              <li>• Configurar largura da entretela</li>
              <li>• Calcular consumo específico</li>
              <li>• Gerar mapa de corte</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Produção organizada</h2>
            <p>
              Com encaixes separados para cada material, sua produção fica mais 
              organizada e você evita desperdício de entretela.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Organize sua Produção
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda técnicas profissionais no curso
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

export default EntreTelaEnfestoAudaces;
