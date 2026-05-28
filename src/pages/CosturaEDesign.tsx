import { motion } from "framer-motion";
import { ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaEDesign = () => {
  return (
    <>
      <Helmet>
        <title>Costura e Design - Crie Moda com Design Profissional | Curso</title>
        <meta name="description" content="Costura e design: aprenda a criar moda unindo costura criativa, alta costura e costura modinha. Desenvolva peças exclusivas com design profissional." />
        <meta name="keywords" content="costura e design, costura, costura criativa, alta costura, costura modinha, costura social, costura alfaiataria, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem digital, curso audaces, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            ← Voltar para o Início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Moda e Criação</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura e Design: Crie Sua Própria Moda
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a união de costura e design permite criar peças únicas e autorais. 
              Além disso, ao aprender costura criativa e alta costura, você também 
              desenvolve a costura modinha. Dessa forma, consequentemente, suas coleções 
              exclusivas terão identidade própria.
            </p>

            <h2 className="text-2xl font-bold mb-4">Design de Moda</h2>
            <p className="text-muted-foreground mb-4">
              Então, entenda o processo criativo completo. Portanto, da ideia 
              à peça final, você dominará cada etapa.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Criação</h3>
                <p className="text-sm text-muted-foreground">Desenvolva seus próprios modelos. Ademais, expresse sua visão.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Modelagem</h3>
                <p className="text-sm text-muted-foreground">Transforme ideias em moldes. Do mesmo modo, com precisão técnica.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Execução</h3>
                <p className="text-sm text-muted-foreground">Costura criativa profissional. Em contrapartida, qualidade garantida.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Áreas do Design de Moda</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, ao dominar o design, você poderá atuar em 
              diversas áreas. Todavia, cada uma tem suas características.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Alta costura e peças exclusivas, bem como sob medida</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha e fast fashion, ainda mais acessível</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social e eventos, enfim, elegância para ocasiões</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura alfaiataria e tailoring, por último, refinamento máximo</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, ser designer de moda vai além da técnica. Porque 
              exige visão criativa e conhecimento de mercado. Por isso, nosso 
              curso aborda também tendências e comercialização. Em suma, você 
              estará preparado para empreender. Entretanto, a paixão pela moda 
              é o diferencial. Por outro lado, as oportunidades são inúmeras.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Seja um Designer</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura e design para criar sua própria marca de moda. 
                Por fim, transforme sua criatividade em negócio.
              </p>
              <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Acessar Curso <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default CosturaEDesign;
