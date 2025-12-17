import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FaccaoCortesAudaces = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
              Como facções de costura podem trabalhar com arquivos e cortes 
              gerados pelo Audaces de forma eficiente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O padrão da indústria</h2>
            <p>
              O <strong>Audaces</strong> é o software mais usado na indústria têxtil brasileira. 
              Se você tem uma facção, saber interpretar arquivos Audaces é um diferencial competitivo.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Vantagens para facções</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Conferir encaixes recebidos</li>
              <li>• Verificar consumo de tecido</li>
              <li>• Identificar problemas antes do corte</li>
              <li>• Comunicação técnica com clientes</li>
              <li>• Oferecer serviços de modelagem</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Amplie seus serviços</h2>
            <p>
              Aprendendo Audaces, sua facção pode oferecer não apenas costura, 
              mas também serviços de modelagem e encaixe, aumentando o faturamento.
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
              Aprenda Audaces e ofereça mais serviços
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
