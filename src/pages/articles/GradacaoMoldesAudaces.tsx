import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scaling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const GradacaoMoldesAudaces = () => {
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
              <Scaling className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gradação de Moldes no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender a gradar moldes no Audaces é fundamental. Além disso, 
              você criará todos os tamanhos da sua grade a partir de um único molde base. 
              Consequentemente, economiza tempo e garante precisão.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que é gradação?</h2>
            <p>
              Então, a gradação é o processo de criar diferentes tamanhos de um molde. 
              Portanto, no <strong>Audaces</strong>, você faz isso automaticamente usando 
              tabelas de medidas ou manualmente ponto a ponto. Ademais, o processo é 
              muito mais rápido que o método tradicional.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Métodos de gradação</h2>
            <p className="mb-4">
              Por isso, o software oferece várias opções. Do mesmo modo, cada método 
              atende a necessidades específicas:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Gradação por tabela de medidas, bem como personalizada</li>
              <li>• Gradação ponto a ponto, todavia com controle total</li>
              <li>• Gradação por incrementos, ainda mais rápida</li>
              <li>• Cópia de gradação entre peças, enfim, praticidade</li>
              <li>• Verificação de sobreposição, por último, qualidade garantida</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Economia de tempo</h2>
            <p>
              No entanto, a maior vantagem está na produtividade. Porque com a gradação 
              automática, você cria uma grade completa em minutos. Em suma, não leva 
              mais horas como no método manual tradicional. Por outro lado, a precisão 
              é muito superior. Entretanto, é importante conhecer os fundamentos 
              da gradação para obter melhores resultados.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Domine a Gradação
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda todas as técnicas no curso completo. Por fim, crie grades perfeitas.
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

export default GradacaoMoldesAudaces;
