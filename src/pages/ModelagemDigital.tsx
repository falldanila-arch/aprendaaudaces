import { motion } from "framer-motion";
import { ArrowRight, Laptop, Layers, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ModelagemDigital = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem Digital - O Futuro da Moda | Curso Audaces Completo</title>
        <meta name="description" content="Modelagem digital é o futuro da indústria da moda. Aprenda técnicas profissionais de CAD com Audaces. Curso com 20+ anos de experiência do Professor Robson." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem digital, moldes em pdf, audaces moldes" />
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
              Modelagem Digital: O Futuro da Indústria da Moda
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A modelagem digital transformou completamente a indústria têxtil e de confecção. 
              Com softwares como Audaces, profissionais podem criar moldes precisos, fazer 
              gradações automáticas e otimizar o consumo de tecido — tudo no computador.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">O Que é Modelagem Digital?</h3>
                <p className="text-muted-foreground">
                  É o processo de criar moldes de roupas usando software CAD (Computer-Aided Design) 
                  em vez de papel e réguas tradicionais. O Audaces é o software líder no Brasil 
                  para esta finalidade.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Por Que Migrar para o Digital?</h3>
                <p className="text-muted-foreground">
                  Maior precisão, velocidade na produção, facilidade de alterações, economia de 
                  materiais e possibilidade de trabalhar remotamente ou vender moldes online.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Vantagens da Modelagem Digital</h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Precisão Milimétrica</h3>
                  <p className="text-muted-foreground">
                    Elimine erros de medição manual. O software garante medidas exatas em todos os pontos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Gradação Automática</h3>
                  <p className="text-muted-foreground">
                    Crie múltiplos tamanhos automaticamente a partir de um molde base, economizando horas de trabalho.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Economia de Tecido</h3>
                  <p className="text-muted-foreground">
                    O encaixe automático otimiza o aproveitamento do tecido, reduzindo desperdício e custos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold">Arquivo Digital</h3>
                  <p className="text-muted-foreground">
                    Mantenha toda sua biblioteca de moldes organizada digitalmente, com backup seguro e fácil acesso.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Ferramentas Essenciais</h2>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <Layers className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Audaces Moldes</p>
                <p className="text-sm text-muted-foreground">Criação de moldes</p>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Audaces Encaixe</p>
                <p className="text-sm text-muted-foreground">Otimização de corte</p>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <Laptop className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">DigiFlash</p>
                <p className="text-sm text-muted-foreground">Digitalização</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Artigos sobre Modelagem Digital</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link to="/criar-moldes-audaces" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Criar Moldes no Audaces</h3>
                <p className="text-sm text-muted-foreground">Aprenda do zero</p>
              </Link>
              <Link to="/gradacao-moldes-audaces" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Gradação de Moldes</h3>
                <p className="text-sm text-muted-foreground">Múltiplos tamanhos automáticos</p>
              </Link>
              <Link to="/digitalizar-moldes-digiflash" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Digitalizar com DigiFlash</h3>
                <p className="text-sm text-muted-foreground">Converta moldes físicos</p>
              </Link>
              <Link to="/mapa-risco-audaces" className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary">Mapa de Risco</h3>
                <p className="text-sm text-muted-foreground">Encaixe e economia</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Domine a Modelagem Digital</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda todas as técnicas de modelagem digital com o Professor Robson, 
                com mais de 20 anos de experiência no mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://go.pepper.com.br/1xtll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Curso de Modelagem <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a 
                  href="https://go.pepper.com.br/ikzkd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    Operador de Audaces <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ModelagemDigital;
