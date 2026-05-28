import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaBasica = () => {
  return (
    <>
      <Helmet>
        <title>Costura Básica - Aprenda a Costurar do Zero | Curso para Iniciantes</title>
        <meta name="description" content="Costura básica para iniciantes: aprenda costura em casa, costura e corte, e evolua para costura criativa, costura modinha e costura social." />
        <meta name="keywords" content="costura básica, costura, costura em casa, costura e corte, costura criativa, costura modinha, costura social, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, curso audaces, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Para Iniciantes</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Básica: Seu Primeiro Passo
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Afinal, a costura básica é o ponto de partida para qualquer pessoa que 
              deseja aprender a costurar. Além disso, ao começar com costura em casa, você 
              também domina o costura e corte. Dessa forma, consequentemente, evolui para 
              costura criativa e costura modinha com facilidade.
            </p>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <p className="text-muted-foreground mb-4">
              Então, no nosso curso básico, você terá acesso a conteúdos 
              fundamentais. Portanto, construirá uma base sólida.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Pontos Básicos</h3>
                <p className="text-sm text-muted-foreground">Ponto reto, zigue-zague e overloque. Ademais, essenciais para qualquer peça.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Uso da Máquina</h3>
                <p className="text-sm text-muted-foreground">Configuração e manuseio correto. Do mesmo modo, manutenção básica.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <h3 className="font-semibold mb-2">Primeiras Peças</h3>
                <p className="text-sm text-muted-foreground">Projetos simples para praticar. Em contrapartida, resultados visíveis.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Evolução na Costura</h2>
            <p className="text-muted-foreground mb-4">
              Por consequência, ao dominar o básico, você poderá avançar. 
              Todavia, cada etapa é importante no processo.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura básica → Costura intermediária, bem como técnicas avançadas</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura criativa e personalização, ainda mais liberdade criativa</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura modinha e tendências, enfim, sempre atualizado</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <span>Costura social e alta costura, por último, o nível profissional</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              No entanto, não se preocupe se você nunca costurou antes. Porque 
              nosso método é pensado para iniciantes. Por isso, cada aula é 
              clara e objetiva. Em suma, você aprenderá no seu ritmo. 
              Entretanto, a dedicação fará a diferença. Por outro lado, 
              oferecemos suporte para tirar dúvidas.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Comece do Zero</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda costura básica com aulas passo a passo para iniciantes. 
                Por fim, dê o primeiro passo rumo à profissionalização.
              </p>
              <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default CosturaBasica;
