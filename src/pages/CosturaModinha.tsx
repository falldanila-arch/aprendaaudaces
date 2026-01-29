import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaModinha = () => {
  return (
    <>
      <Helmet>
        <title>Costura Modinha - Tendências de Moda e Costura Atual | Curso</title>
        <meta name="description" content="Costura modinha: aprenda a criar roupas seguindo tendências de moda. Técnicas de costura criativa, costura e design, costura social e costura básica." />
        <meta name="keywords" content="costura modinha, costura, costura criativa, costura e design, costura social, costura básica, costura em casa, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem moldes e encaixe" />
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
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Tendências de Moda</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Modinha: Acompanhe as Tendências
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a costura modinha permite criar peças atuais e desejadas. Além disso, 
              ao aprender costura criativa e costura e design, você também produz roupas 
              que seguem as últimas tendências. Dessa forma, consequentemente, desde a 
              costura básica até a costura social, tudo fica mais atual.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tendências Atuais</h2>
            <p className="text-muted-foreground mb-4">
              Então, conheça as peças que estão em alta no mercado. Portanto, 
              prepare-se para criar looks modernos e desejados.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Cropped e Tops</h3>
                <p className="text-sm text-muted-foreground">Peças curtas e modernas. Ademais, versáteis para várias ocasiões.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Wide Leg</h3>
                <p className="text-sm text-muted-foreground">Calças pantalona e fluidas. Do mesmo modo, confortáveis e elegantes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Conjuntos</h3>
                <p className="text-sm text-muted-foreground">Sets coordenados em alta. Em contrapartida, praticidade garantida.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Oversized</h3>
                <p className="text-sm text-muted-foreground">Peças amplas e confortáveis. Assim, estilo e conforto juntos.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas para Modinha</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, ao dominar estas técnicas, você criará peças 
              sempre atualizadas. Todavia, é importante acompanhar as tendências.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura criativa com detalhes diferenciados, bem como aplicações</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e design de peças atuais, ainda mais inovadoras</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura em casa seguindo tendências, enfim, no conforto do lar</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Adaptação de moldes para modinha, por último, personalização total</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, a moda muda constantemente. Porque as tendências se 
              renovam a cada temporada. Por isso, nosso curso inclui atualizações. 
              Em suma, você sempre terá conteúdo relevante. Entretanto, o básico 
              nunca sai de moda. Por outro lado, a criatividade é seu maior diferencial.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Esteja na Moda</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura modinha e crie peças atuais e desejadas. 
                Por fim, destaque-se com produções únicas.
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

export default CosturaModinha;
