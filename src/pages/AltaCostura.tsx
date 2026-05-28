import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AltaCostura = () => {
  return (
    <>
      <Helmet>
        <title>Alta Costura - Técnicas de Costura de Luxo | Curso Profissional</title>
        <meta name="description" content="Alta costura: aprenda técnicas refinadas de costura alfaiataria, costura social e costura e design. Crie peças exclusivas com acabamento de luxo." />
        <meta name="keywords" content="alta costura, costura, costura alfaiataria, costura social, costura e design, costura criativa, costura e corte, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem digital, curso audaces, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Costura de Luxo</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alta Costura: A Arte da Excelência
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a alta costura representa o ápice da moda. Além disso, ao aprender 
              técnicas refinadas de costura alfaiataria, você também domina a costura social 
              e costura e design. Dessa forma, consequentemente, criará peças exclusivas 
              com acabamento impecável.
            </p>

            <h2 className="text-2xl font-bold mb-4">Características da Alta Costura</h2>
            <p className="text-muted-foreground mb-4">
              Então, o que diferencia a alta costura das demais técnicas? Portanto, 
              veja os elementos essenciais que a tornam especial.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Exclusividade</h3>
                <p className="text-sm text-muted-foreground">Peças únicas feitas sob medida. Ademais, cada criação é especial.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Materiais Nobres</h3>
                <p className="text-sm text-muted-foreground">Tecidos e aviamentos de alta qualidade. Do mesmo modo, duráveis e elegantes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Acabamento Perfeito</h3>
                <p className="text-sm text-muted-foreground">Detalhes refinados e costuras impecáveis. Em contrapartida, exige dedicação.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Design Exclusivo</h3>
                <p className="text-sm text-muted-foreground">Costura criativa com estilo único. Assim, destaque-se no mercado.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas Avançadas</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, ao dominar estas técnicas, você alcançará outro patamar. 
              Todavia, é necessário praticar constantemente.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura alfaiataria para ternos e blazers, bem como coletes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social para vestidos de festa, ainda mais elegantes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura e corte no viés, enfim, para caimentos perfeitos</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Bordados e aplicações de luxo, por último, os detalhes finais</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, a alta costura não é apenas sobre técnica. Porque envolve também 
              criatividade e visão artística. Por isso, nosso curso aborda ambos os aspectos. 
              Em suma, você se tornará um profissional completo. Entretanto, o caminho 
              exige dedicação. Por outro lado, os resultados são extraordinários.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Entre no Mundo da Alta Costura</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda técnicas de alta costura e eleve seu trabalho ao nível profissional. 
                Por fim, crie peças dignas das passarelas.
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

export default AltaCostura;
