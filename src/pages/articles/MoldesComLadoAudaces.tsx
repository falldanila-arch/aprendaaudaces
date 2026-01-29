import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FlipHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldesComLadoAudaces = () => {
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
              <FlipHorizontal className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Moldes com Lado no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, entender como configurar moldes com lado direito e esquerdo 
              no Audaces é essencial. Além disso, dessa forma você garante o encaixe 
              correto de todas as peças.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Peças assimétricas</h2>
            <p>
              Então, algumas peças, como bolsos e mangas, não são simétricas. Portanto, 
              precisam ser cortadas em pares espelhados. Consequentemente, o <strong>Audaces</strong> 
              gerencia isso automaticamente. Ademais, evita erros no processo de corte.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Configurações disponíveis</h2>
            <p className="mb-4">
              Por isso, o software oferece diversas opções. Do mesmo modo, cada uma 
              atende a necessidades específicas:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Par simétrico (espelhado), bem como economia de tempo</li>
              <li>• Par assimétrico, todavia com precisão</li>
              <li>• Peça única, ainda mais rápido</li>
              <li>• Cortar na dobra, enfim, praticidade total</li>
              <li>• Definir lado do avesso, por último, organização completa</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Evite erros no corte</h2>
            <p>
              No entanto, sem as configurações corretas, erros podem acontecer. Porque 
              você pode cortar duas peças do mesmo lado ou esquecer de espelhar moldes. 
              Em suma, as configurações do Audaces previnem esses problemas. Por outro lado, 
              também agilizam a produção. Entretanto, é preciso aprender a usar corretamente.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Configure Moldes Corretamente
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda no curso completo. Por fim, elimine erros de produção.
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

export default MoldesComLadoAudaces;
