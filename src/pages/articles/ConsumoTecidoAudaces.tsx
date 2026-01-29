import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ConsumoTecidoAudaces = () => {
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
              <Calculator className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consumo de Tecido no Audaces
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, calcular com precisão quanto tecido você precisa para cada peça 
              é fundamental. Além disso, usando as ferramentas do Audaces, consequentemente 
              você otimiza custos e evita desperdícios.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Cálculo preciso</h2>
            <p>
              Então, o <strong>Audaces</strong> calcula automaticamente o consumo de tecido 
              baseado no encaixe dos moldes. Portanto, considera diferentes larguras de tecido. 
              Ademais, isso permite comparar opções e escolher a mais econômica.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Informações geradas</h2>
            <p className="mb-4">
              Por isso, o software fornece dados completos. Do mesmo modo, facilita 
              a tomada de decisões:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• Metragem total necessária, bem como custo estimado</li>
              <li>• Aproveitamento em porcentagem, todavia de forma visual</li>
              <li>• Consumo por peça individual, ainda mais detalhado</li>
              <li>• Comparativo entre larguras, enfim, para melhor escolha</li>
              <li>• Relatório de custos, por último, para precificação</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Planilha de custos</h2>
            <p>
              No entanto, o cálculo de tecido é apenas o começo. Porque o curso inclui 
              uma planilha de gastos completa. Em suma, você calculará custos e definirá 
              preços de venda com margem adequada. Por outro lado, também ensinamos a 
              negociar com fornecedores. Entretanto, a prática é essencial.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Calcule Custos com Precisão
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda no curso completo + planilha inclusa. Por fim, maximize seus lucros.
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

export default ConsumoTecidoAudaces;
