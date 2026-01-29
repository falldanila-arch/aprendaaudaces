import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MapaRiscoAudaces = () => {
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
              <Map className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mapa para Risco no Audaces: Guia Completo
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender a criar mapas de risco profissionais no Audaces é fundamental. 
              Além disso, você otimizará o corte de tecido na produção industrial. 
              Consequentemente, economizará materiais e aumentará lucros.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que é mapa de risco?</h2>
            <p>
              Então, o mapa de risco é o documento que mostra como os moldes devem ser 
              posicionados no tecido para o corte. Portanto, com o <strong>Audaces</strong>, 
              você cria mapas de risco que maximizam o aproveitamento do material. 
              Ademais, evita desperdícios e erros de produção.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Benefícios do mapa de risco digital</h2>
            <p className="mb-4">
              Por isso, os benefícios são significativos. Do mesmo modo, cada vantagem 
              impacta diretamente nos resultados:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Visualização clara do posicionamento dos moldes, bem como orientações</li>
              <li>• Cálculo automático de consumo, todavia preciso</li>
              <li>• Impressão em escala real ou reduzida, ainda mais versátil</li>
              <li>• Múltiplas opções de encaixe, enfim, flexibilidade total</li>
              <li>• Economia de até 15% no tecido, por último, mais lucro</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Criando mapas no Audaces</h2>
            <p>
              No entanto, criar mapas de risco é apenas uma parte do processo. Porque 
              no Audaces Encaixe, você pode criar mapas automaticamente ou manualmente. 
              Em suma, ajusta cada molde para o melhor aproveitamento possível. 
              Por outro lado, também pode comparar diferentes opções. Entretanto, 
              a experiência faz diferença na otimização.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine o Mapa de Risco
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda a criar mapas profissionais no curso completo. Por fim, economize tecido.
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

export default MapaRiscoAudaces;
