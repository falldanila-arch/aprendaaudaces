import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaAlfaiataria = () => {
  return (
    <>
      <Helmet>
        <title>Costura Alfaiataria - Técnicas de Alfaiate Profissional | Curso</title>
        <meta name="description" content="Costura alfaiataria: aprenda técnicas de alfaiate para criar ternos, blazers e peças estruturadas. Alta costura, costura social e costura e corte profissional." />
        <meta name="keywords" content="costura alfaiataria, costura, alta costura, costura social, costura e corte, costura e design, costura básica, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem facil, curso audaces, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Alfaiataria</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Alfaiataria: A Arte dos Alfaiates
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a costura alfaiataria é uma especialidade refinada que envolve 
              técnicas de alta costura. Além disso, você aprende a criar ternos, blazers 
              e peças estruturadas. Dessa forma, consequentemente, domina também a costura 
              social e costura e corte profissional com acabamento impecável.
            </p>

            <h2 className="text-2xl font-bold mb-4">Peças de Alfaiataria</h2>
            <p className="text-muted-foreground mb-4">
              Então, conheça as principais peças que um alfaiate profissional 
              domina. Portanto, cada uma tem suas particularidades.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Ternos Completos</h3>
                <p className="text-sm text-muted-foreground">Paletó, calça e colete sob medida. Ademais, personalização total.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Blazers</h3>
                <p className="text-sm text-muted-foreground">Peças versáteis para ocasiões diversas. Do mesmo modo, elegantes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Calças Sociais</h3>
                <p className="text-sm text-muted-foreground">Corte e caimento perfeitos. Em contrapartida, conforto garantido.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Coletes</h3>
                <p className="text-sm text-muted-foreground">Elegância e sofisticação. Assim, complete o traje com estilo.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas de Alfaiataria</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, estas técnicas são fundamentais para o sucesso. 
              Todavia, nosso curso facilita o aprendizado.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e corte de lapelas e golas, bem como colarinhos</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Entretelas e estruturação, ainda mais importantes para a forma</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e design de bolsos, enfim, detalhes que fazem a diferença</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Acabamentos internos e externos, por último, a qualidade visível</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, a alfaiataria exige precisão e paciência. Porque cada 
              detalhe importa no resultado final. Por isso, nosso curso é detalhado 
              e prático. Em suma, você aprenderá desde a costura básica até técnicas 
              avançadas. Entretanto, a prática constante é essencial. Por outro lado, 
              o mercado valoriza muito esses profissionais.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Torne-se um Alfaiate</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura alfaiataria e domine a arte de criar ternos perfeitos. 
                Por fim, destaque-se no mercado de moda masculina.
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

export default CosturaAlfaiataria;
