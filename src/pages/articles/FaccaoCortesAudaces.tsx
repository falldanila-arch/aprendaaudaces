import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FaccaoCortesAudaces = () => {
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
              <Factory className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Facção de Costura: Recebendo Cortes do Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, entender como facções de costura podem trabalhar com arquivos 
              e cortes gerados pelo Audaces é essencial. Além disso, isso representa 
              um diferencial competitivo. Consequentemente, você conquista mais clientes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O padrão da indústria</h2>
            <p>
              Então, o <strong>Audaces</strong> é o software mais usado na indústria 
              têxtil brasileira. Portanto, se você tem uma facção, saber interpretar 
              arquivos Audaces é um diferencial competitivo. Ademais, abre portas 
              para novos clientes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens para facções</h2>
            <p className="mb-4">
              Por isso, conhecer o Audaces traz diversos benefícios. Do mesmo modo, 
              cada vantagem impacta nos resultados:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Conferir encaixes recebidos, bem como verificar qualidade</li>
              <li>• Verificar consumo de tecido, todavia com precisão</li>
              <li>• Identificar problemas antes do corte, ainda mais economia</li>
              <li>• Comunicação técnica com clientes, enfim, profissionalismo</li>
              <li>• Oferecer serviços de modelagem, por último, mais receita</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Amplie seus serviços</h2>
            <p>
              No entanto, aprender Audaces vai além da interpretação de arquivos. 
              Porque sua facção pode oferecer não apenas costura, mas também serviços 
              de modelagem e encaixe. Em suma, aumenta significativamente o faturamento. 
              Por outro lado, você se diferencia da concorrência. Entretanto, 
              o conhecimento precisa ser aplicado na prática.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Destaque sua Facção
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda Audaces e ofereça mais serviços. Por fim, aumente seu faturamento.
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

export default FaccaoCortesAudaces;
