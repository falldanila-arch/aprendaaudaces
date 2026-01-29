import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ConverterAudacesPDF = () => {
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
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Converter Moldes Audaces para PDF
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Afinal, aprender a exportar moldes do Audaces para PDF em A4 é essencial. 
              Além disso, isso permite impressão em qualquer impressora comum. 
              Consequentemente, você alcança mais clientes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Por que converter para PDF?</h2>
            <p>
              Então, o formato PDF permite que qualquer pessoa imprima seus moldes. 
              Portanto, mesmo sem ter o <strong>Audaces</strong> instalado, seus clientes 
              conseguem utilizar os moldes. Ademais, é ideal para vender moldes digitais 
              ou compartilhar com clientes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Opções de exportação</h2>
            <p className="mb-4">
              Por isso, o software oferece diversas opções. Do mesmo modo, cada uma 
              atende a necessidades específicas:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>• PDF em A4 com linhas de colagem, bem como marcações claras</li>
              <li>• PDF em tamanho real para plotter, todavia sem emendas</li>
              <li>• Exportação via CorelDRAW, ainda mais flexibilidade</li>
              <li>• Múltiplas peças em um arquivo, enfim, organização total</li>
              <li>• Incluir informações técnicas, por último, profissionalismo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Venda moldes digitais</h2>
            <p>
              No entanto, converter para PDF é apenas o começo. Porque com moldes em 
              PDF, você pode criar info-produtos lucrativos. Em suma, venda em marketplaces 
              como Mercado Livre, Shopee e Elo7. Por outro lado, também pode criar sua 
              própria loja virtual. Entretanto, a qualidade dos moldes é fundamental 
              para o sucesso nas vendas.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda a Converter para PDF
            </h3>
            <p className="text-muted-foreground mb-6">
              Domine a exportação no curso completo. Por fim, monetize seus conhecimentos.
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

export default ConverterAudacesPDF;
