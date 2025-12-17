import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TecidosPeAudaces = () => {
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
              <Layers className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecidos com Pé no Audaces: Como Trabalhar
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda a configurar corretamente tecidos com sentido de pé 
              no Audaces para evitar erros no corte.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que é tecido com pé?</h2>
            <p>
              Tecidos com pé são aqueles que têm um sentido definido, como veludo, 
              plush ou estampas direcionais. No <strong>Audaces</strong>, você configura 
              o encaixe para respeitar essa orientação.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Configurações no Audaces</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Definir sentido do fio</li>
              <li>• Bloquear rotação de moldes</li>
              <li>• Encaixe unidirecional</li>
              <li>• Visualização de aproveitamento</li>
              <li>• Cálculo de consumo ajustado</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Evite desperdício</h2>
            <p>
              Tecidos com pé geralmente têm menor aproveitamento, mas com o Audaces 
              você minimiza o desperdício com encaixes otimizados.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine Tecidos Especiais
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda todas as configurações no curso completo
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

export default TecidosPeAudaces;
