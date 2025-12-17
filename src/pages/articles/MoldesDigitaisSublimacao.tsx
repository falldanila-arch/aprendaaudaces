import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldesDigitaisSublimacao = () => {
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
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Moldes Digitais do Audaces para Sublimação
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Descubra como exportar moldes do Audaces para usar em sublimação, 
              criando peças personalizadas com encaixe perfeito.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Audaces e Sublimação</h2>
            <p>
              A sublimação exige moldes precisos para que a estampa se alinhe perfeitamente com o corte da peça. 
              Com o <strong>Audaces</strong>, você cria moldes digitais que podem ser exportados para CorelDRAW 
              e outros softwares de design.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens do molde digital</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Precisão milimétrica no encaixe da estampa</li>
              <li>• Exportação para CorelDRAW e Illustrator</li>
              <li>• Moldes em PDF para conferência</li>
              <li>• Economia de tecido sublimado</li>
              <li>• Padronização da produção</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como exportar do Audaces</h2>
            <p>
              No curso, você aprende a exportar moldes do Audaces para formatos compatíveis com 
              impressoras de sublimação, garantindo que cada peça saia perfeita.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda Moldes para Sublimação
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine a exportação de moldes digitais no curso completo
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

export default MoldesDigitaisSublimacao;
