import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AudacesEconomizandoTecido = () => {
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
              <Scissors className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Audaces Economizando Tecido: Como Reduzir Desperdício
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender como o Audaces pode ajudar você a economizar tecido 
              é fundamental. Além disso, você reduzirá desperdício e, consequentemente, 
              aumentará sua margem de lucro significativamente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Por que economizar tecido é essencial?</h2>
            <p>
              Então, o tecido representa um dos maiores custos na produção de roupas. 
              Portanto, com o <strong>Audaces Encaixe</strong>, você consegue otimizar 
              o posicionamento dos moldes no enfesto. Ademais, aproveita cada centímetro 
              de material disponível.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como o Audaces ajuda na economia</h2>
            <p className="mb-4">
              Por isso, o software oferece recursos poderosos. Do mesmo modo, cada 
              funcionalidade contribui para a redução de custos:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Encaixe automático e manual de moldes, bem como comparação</li>
              <li>• Cálculo preciso de consumo de tecido, todavia rápido</li>
              <li>• Mapa de risco para corte otimizado, ainda mais visual</li>
              <li>• Visualização do aproveitamento em porcentagem, enfim, clareza total</li>
              <li>• Simulação de diferentes larguras de tecido, por último, flexibilidade</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Aprenda no Curso Audaces</h2>
            <p>
              No entanto, economizar tecido é apenas o começo. Porque no nosso curso 
              completo, você aprende a usar o Audaces Encaixe para maximizar o 
              aproveitamento. Em suma, criará mapas de risco profissionais e calculará 
              consumo com precisão. Por outro lado, também ensinamos técnicas avançadas. 
              Entretanto, a prática é essencial para resultados consistentes.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine o Audaces Encaixe
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda todas as técnicas de economia de tecido no curso completo. 
              Por fim, aumente seus lucros.
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

export default AudacesEconomizandoTecido;
