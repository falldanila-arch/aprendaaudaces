import { motion } from "framer-motion";
import { ArrowRight, Monitor, Cpu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ModelagemDigitalPage = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem Digital - Crie Moldes no Computador | Curso Audaces Completo</title>
        <meta name="description" content="Modelagem digital: aprenda a criar moldes profissionais no computador usando Audaces. Curso completo de modelagem digital com certificado." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem digital, moldes digitais, audaces moldes, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Tecnologia em Moda</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modelagem Digital: O Futuro da Criação de Moldes
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A modelagem digital revolucionou a indústria da moda. Com softwares como o Audaces, 
              você cria moldes com precisão milimétrica, economia de tempo e possibilidade de 
              vender seus moldes online.
            </p>

            <h2 className="text-2xl font-bold mb-4">Vantagens da Modelagem Digital</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Cpu className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Precisão Total</h3>
                <p className="text-muted-foreground">
                  Medidas exatas sem margem de erro manual.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Download className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fácil Exportação</h3>
                <p className="text-muted-foreground">
                  Exporte para PDF, PLT, DXF e outros formatos.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Monitor className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gradação Automática</h3>
                <p className="text-muted-foreground">
                  Gere todos os tamanhos automaticamente.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Aprende</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Domínio completo do software Audaces</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Criação de moldes do zero usando tabelas de medidas</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Digitalização de moldes físicos com DigiFlash</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Gradação profissional para múltiplos tamanhos</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Encaixe automático para economia de tecido</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/modelagem-digital" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Modelagem Digital</p>
                <p className="text-sm text-muted-foreground">Página principal</p>
              </Link>
              <Link to="/moldes-pdf" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes em PDF</p>
                <p className="text-sm text-muted-foreground">Venda online</p>
              </Link>
              <Link to="/criar-moldes-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Criar Moldes Audaces</p>
                <p className="text-sm text-muted-foreground">Passo a passo</p>
              </Link>
              <Link to="/gradacao-moldes-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Gradação de Moldes</p>
                <p className="text-sm text-muted-foreground">Múltiplos tamanhos</p>
              </Link>
              <Link to="/digitalizar-moldes-digiflash" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Digitalizar Moldes</p>
                <p className="text-sm text-muted-foreground">DigiFlash</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Todos os cursos</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Entre na Era Digital</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda modelagem digital e transforme sua carreira na moda.
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
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ModelagemDigitalPage;
