import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CriarMoldesAudaces = () => {
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
              <PenTool className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Criar Moldes no Audaces do Zero
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender a criar moldes profissionais no Audaces é essencial. 
              Além disso, você dominará desde a base corporal até peças complexas. 
              Consequentemente, terá autonomia total na criação.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Começando do zero</h2>
            <p>
              Então, no <strong>Audaces</strong>, você pode criar moldes usando medidas 
              diretas ou a partir de bases pré-definidas. Portanto, o curso ensina ambos 
              os métodos. Ademais, você escolhe o que melhor se adapta às suas necessidades.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que você aprende</h2>
            <p className="mb-4">
              Por isso, o conteúdo é completo e abrangente. Do mesmo modo, cada 
              técnica é ensinada de forma prática:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Criar bases corporais femininas e infantis, bem como masculinas</li>
              <li>• Desenhar moldes com ferramentas de precisão, todavia de forma simples</li>
              <li>• Adicionar pences, recortes e costuras, ainda mais detalhados</li>
              <li>• Incluir margens de costura, enfim, prontos para corte</li>
              <li>• Criar informações técnicas, por último, profissionalismo total</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Moldes inclusos</h2>
            <p>
              No entanto, você não precisa criar tudo do zero. Porque você também 
              recebe aproximadamente 50 moldes bases prontos. Em suma, são pontos 
              de partida para suas criações. Por outro lado, aceleram seu trabalho. 
              Entretanto, aprender a criar do zero é fundamental para personalização.
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
              Aprenda do zero no curso completo. Por fim, tenha autonomia total.
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

export default CriarMoldesAudaces;
