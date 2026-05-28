import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PregasPencesAudaces = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem digital, moldes em pdf, audaces moldes, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
              <Ruler className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pregas e Pences no Audaces: Tutorial Completo
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Domine as ferramentas de pregas e pences no Audaces para criar 
              modelagens profissionais com ajuste perfeito.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Pences no Audaces</h2>
            <p>
              As pences são essenciais para dar forma às peças. No <strong>Audaces</strong>, 
              você cria, transfere e manipula pences com precisão milimétrica.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Ferramentas disponíveis</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Criar pences com medidas exatas</li>
              <li>• Transferir pences entre posições</li>
              <li>• Converter pences em recortes</li>
              <li>• Criar pregas e drapeados</li>
              <li>• Marcar piques para costura</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Técnicas avançadas</h2>
            <p>
              No curso, você aprende técnicas como transferência de pences para 
              recorte princesa, criação de pregas macho/fêmea e muito mais.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda Modelagem Profissional
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine pregas e pences no curso completo
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

export default PregasPencesAudaces;
