import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldesDigitaisSublimacao = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem digital, moldes em pdf, audaces moldes" />
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
              Afinal, descobrir como exportar moldes do Audaces para sublimação é essencial. 
              Além disso, você criará peças personalizadas com encaixe perfeito. 
              Consequentemente, a qualidade final será impecável.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Audaces e Sublimação</h2>
            <p>
              Então, a sublimação exige moldes precisos para que a estampa se alinhe 
              perfeitamente com o corte da peça. Portanto, com o <strong>Audaces</strong>, 
              você cria moldes digitais que podem ser exportados para CorelDRAW e outros 
              softwares de design. Ademais, a integração é perfeita.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens do molde digital</h2>
            <p className="mb-4">
              Por isso, as vantagens são inúmeras. Do mesmo modo, cada benefício 
              impacta na qualidade final:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Precisão milimétrica no encaixe da estampa, bem como alinhamento</li>
              <li>• Exportação para CorelDRAW e Illustrator, todavia simples</li>
              <li>• Moldes em PDF para conferência, ainda mais praticidade</li>
              <li>• Economia de tecido sublimado, enfim, redução de custos</li>
              <li>• Padronização da produção, por último, qualidade consistente</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como exportar do Audaces</h2>
            <p>
              No entanto, a exportação precisa ser feita corretamente. Porque no curso, 
              você aprende a exportar moldes do Audaces para formatos compatíveis com 
              impressoras de sublimação. Em suma, garante que cada peça saia perfeita. 
              Por outro lado, também ensinamos ajustes de margens e sangrias. Entretanto, 
              a prática é fundamental para dominar o processo.
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
              Domine a exportação de moldes digitais no curso completo. Por fim, 
              crie peças sublimadas perfeitas.
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
