import { motion } from "framer-motion";
import { ArrowRight, FileText, Printer, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldesPDF = () => {
  return (
    <>
      <Helmet>
        <title>Moldes em PDF - Aprenda a Criar e Converter Moldes Digitais | Audaces</title>
        <meta name="description" content="Aprenda a criar moldes em PDF profissionais com Audaces. Converta moldes para impressão em A4, plotters e sublimação. Curso completo com 50+ moldes inclusos." />
        <meta name="keywords" content="modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            ← Voltar para o Início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Moldes em PDF: O Guia Completo
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Os moldes em PDF revolucionaram a indústria da moda, permitindo que profissionais 
              e entusiastas criem, compartilhem e imprimam moldes de qualquer lugar do mundo. 
              Aprenda a dominar essa tecnologia com nossos cursos especializados.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                O Que São Moldes em PDF?
              </h2>
              <p className="text-muted-foreground">
                Moldes em PDF são arquivos digitais que contêm os padrões de modelagem prontos para 
                impressão. Eles podem ser impressos em folhas A4 comuns, plotters profissionais ou 
                enviados diretamente para serviços de impressão. São ideais para venda online, 
                compartilhamento com clientes e arquivo digital de coleções.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Vantagens dos Moldes em PDF</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Fácil Distribuição</p>
                  <p className="text-sm text-muted-foreground">Envie por email ou venda em marketplaces</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Qualidade Preservada</p>
                  <p className="text-sm text-muted-foreground">Mantém precisão em qualquer tamanho</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Impressão Flexível</p>
                  <p className="text-sm text-muted-foreground">De A4 caseiro a plotter industrial</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Renda Extra</p>
                  <p className="text-sm text-muted-foreground">Venda seus moldes como info-produtos</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Como Criar Moldes em PDF no Audaces</h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 border-l-4 border-primary bg-card rounded-r-lg">
                <Printer className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">1. Crie ou Importe o Molde</h3>
                  <p className="text-muted-foreground">
                    Use as ferramentas do Audaces para criar moldes do zero ou digitalize moldes 
                    físicos existentes usando DigiFlash.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border-l-4 border-primary bg-card rounded-r-lg">
                <Download className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">2. Configure a Exportação</h3>
                  <p className="text-muted-foreground">
                    Defina o tamanho do papel, margens de corte e marcações de montagem para 
                    impressão em múltiplas folhas A4.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border-l-4 border-primary bg-card rounded-r-lg">
                <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">3. Exporte para PDF</h3>
                  <p className="text-muted-foreground">
                    Gere o arquivo PDF final pronto para impressão ou distribuição digital, 
                    mantendo todas as informações técnicas necessárias.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Artigos Relacionados</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link to="/converter-audaces-pdf" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Converter Audaces para PDF</h3>
                <p className="text-sm text-muted-foreground">Passo a passo completo de exportação</p>
              </Link>
              <Link to="/moldes-digitais-sublimacao" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Moldes para Sublimação</h3>
                <p className="text-sm text-muted-foreground">Prepare moldes para estamparia digital</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Aprenda a Criar Moldes em PDF</h3>
              <p className="text-muted-foreground mb-6">
                Nosso curso inclui mais de 50 moldes base prontos e ensina todas as técnicas 
                de exportação para PDF profissional.
              </p>
              <a 
                href="https://go.pepper.com.br/1xtll"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-2">Curso: Aprenda Modelagem no Audaces e Lucre</p>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default MoldesPDF;
