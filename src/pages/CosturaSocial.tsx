import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaSocial = () => {
  return (
    <>
      <Helmet>
        <title>Costura Social - Roupas para Eventos e Ocasiões Especiais | Curso</title>
        <meta name="description" content="Costura social: aprenda a criar vestidos, ternos e roupas para eventos. Técnicas de alta costura, costura alfaiataria e costura e design para ocasiões especiais." />
        <meta name="keywords" content="costura social, costura, alta costura, costura alfaiataria, costura e design, costura criativa, costura modinha, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem em pdf, curso audaces, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Moda Social</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Social: Elegância para Eventos
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a costura social é especializada em criar peças para ocasiões especiais. 
              Além disso, ao aprender técnicas de alta costura e costura alfaiataria, você 
              também domina o costura e design. Dessa forma, consequentemente, confeccionará 
              vestidos, ternos e trajes elegantes com perfeição.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Peças Sociais</h2>
            <p className="text-muted-foreground mb-4">
              Então, conheça as principais peças que você aprenderá a confeccionar. 
              Portanto, prepare-se para criar verdadeiras obras de arte.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Vestidos de Festa</h3>
                <p className="text-sm text-muted-foreground">Para formaturas, casamentos e galas. Ademais, com acabamento impecável.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Ternos e Blazers</h3>
                <p className="text-sm text-muted-foreground">Costura alfaiataria profissional. Do mesmo modo, elegância masculina.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Trajes de Gala</h3>
                <p className="text-sm text-muted-foreground">Alta costura para eventos especiais. Em contrapartida, exclusividade total.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas Essenciais</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, dominar estas técnicas é fundamental. Todavia, 
              nosso método torna o aprendizado acessível.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura criativa com detalhes exclusivos, bem como bordados</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha para tendências atuais, ainda mais elegantes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Forros e estruturas internas, enfim, a base da qualidade</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Acabamentos de luxo, por último, o diferencial profissional</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, a costura social vai além da técnica. Porque é preciso 
              entender as necessidades do cliente. Por isso, ensinamos também 
              atendimento personalizado. Em suma, você estará preparado para o mercado. 
              Entretanto, a prática é essencial. Por outro lado, os resultados 
              compensam todo o esforço.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Crie Peças Elegantes</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura social e confeccione roupas para as ocasiões mais especiais. 
                Por fim, encante seus clientes.
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

export default CosturaSocial;
