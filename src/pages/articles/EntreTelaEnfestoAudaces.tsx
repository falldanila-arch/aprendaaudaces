import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EntreTelaEnfestoAudaces = () => {
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
              <Layers2 className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entretela no Enfesto Feito no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender a planejar o corte de entretela junto com o tecido 
              principal é fundamental. Além disso, usando o Audaces, consequentemente 
              você otimiza o uso desse material importante.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Organizando entretela</h2>
            <p>
              Então, no <strong>Audaces</strong>, você pode criar encaixes separados 
              para entretela. Portanto, otimiza o uso desse material que geralmente 
              tem largura diferente do tecido. Ademais, evita desperdícios desnecessários.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como trabalhar</h2>
            <p className="mb-4">
              Por isso, o processo é organizado e eficiente. Do mesmo modo, cada 
              etapa é clara e objetiva:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Identificar peças que levam entretela, bem como quantidades</li>
              <li>• Criar encaixe separado, todavia integrado ao projeto</li>
              <li>• Configurar largura da entretela, ainda mais precisão</li>
              <li>• Calcular consumo específico, enfim, sem desperdício</li>
              <li>• Gerar mapa de corte, por último, pronto para produção</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Produção organizada</h2>
            <p>
              No entanto, a organização vai além do software. Porque com encaixes 
              separados para cada material, sua produção fica mais eficiente. 
              Em suma, você evita desperdício de entretela e otimiza custos. 
              Por outro lado, também ganha tempo na confecção. Entretanto, a 
              prática é essencial para dominar o processo.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Organize sua Produção
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda técnicas profissionais no curso. Por fim, maximize sua eficiência.
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

export default EntreTelaEnfestoAudaces;
