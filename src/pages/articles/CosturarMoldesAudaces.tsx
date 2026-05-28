import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturarMoldesAudaces = () => {
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
              <Shirt className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Costurar com Moldes: Preciso do Audaces?
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, entender como o Audaces transforma sua costura é fundamental. 
              Além disso, moldes digitais precisos facilitam o corte e a montagem 
              das peças. Consequentemente, você obtém resultados profissionais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Moldes digitais vs moldes em papel</h2>
            <p>
              Então, moldes feitos no <strong>Audaces</strong> são mais precisos 
              e fáceis de armazenar. Portanto, podem ser modificados rapidamente. 
              Ademais, você imprime apenas quando precisa, economizando papel e espaço.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens para a costura</h2>
            <p className="mb-4">
              Por isso, os benefícios são claros. Do mesmo modo, cada vantagem 
              impacta na qualidade do seu trabalho:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Moldes com medidas exatas, bem como precisão milimétrica</li>
              <li>• Fácil gradação para outros tamanhos, todavia automática</li>
              <li>• Impressão em A4 ou plotter, ainda mais flexível</li>
              <li>• Marcações de piques e pences, enfim, tudo incluído</li>
              <li>• Informações técnicas no próprio molde, por último, profissionalismo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Para quem é indicado</h2>
            <p>
              No entanto, o Audaces não é apenas para grandes empresas. Porque 
              costureiras, modelistas, ateliês e confecções que buscam mais precisão 
              e produtividade encontram no Audaces uma ferramenta essencial. 
              Em suma, qualquer profissional pode se beneficiar. Por outro lado, 
              o investimento se paga rapidamente. Entretanto, é preciso dedicar-se 
              ao aprendizado.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda a Criar Moldes Perfeitos
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine o Audaces no curso completo. Por fim, eleve sua costura ao próximo nível.
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

export default CosturarMoldesAudaces;
