import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ModelagemDescomplicada = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem Descomplicada - Aprenda Modelagem de Forma Simples | Curso Audaces</title>
        <meta name="description" content="Modelagem descomplicada: aprenda técnicas de modelagem de roupas de forma simples e prática. Curso para iniciantes com passo a passo fácil de seguir." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, modelagem descomplicada, modelagem fácil, audaces moldes, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Aprenda Fácil</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modelagem Descomplicada: Aprenda de Forma Simples e Prática
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A modelagem não precisa ser difícil. Com as técnicas certas e um bom método de ensino, 
              qualquer pessoa pode aprender a criar moldes profissionais de forma descomplicada.
            </p>

            <h2 className="text-2xl font-bold mb-4">Por Que Nossa Metodologia Funciona</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Passo a Passo Claro</h3>
                <p className="text-muted-foreground">
                  Cada técnica é explicada em etapas simples, do básico ao avançado.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Exemplos Práticos</h3>
                <p className="text-muted-foreground">
                  Aprenda fazendo com projetos reais aplicados ao dia a dia.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dicas Profissionais</h3>
                <p className="text-muted-foreground">
                  Segredos do mercado compartilhados por quem tem 20 anos de experiência.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <ArrowRight className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Progressão Natural</h3>
                <p className="text-muted-foreground">
                  Conteúdo organizado para você evoluir de forma natural e consistente.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Fundamentos da modelagem sem complicação</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Como tirar medidas corporais corretamente</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Traçado de bases de forma simplificada</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Interpretação de modelos com técnicas fáceis</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Uso do Audaces de forma intuitiva</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/modelagem-digital" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Modelagem Digital</p>
                <p className="text-sm text-muted-foreground">Aprenda no computador</p>
              </Link>
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Guia de moldes</p>
              </Link>
              <Link to="/costura-criativa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Costura Criativa</p>
                <p className="text-sm text-muted-foreground">Técnicas criativas</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Todos os cursos</p>
              </Link>
              <Link to="/molde-de-roupa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Molde de Roupa</p>
                <p className="text-sm text-muted-foreground">Crie suas roupas</p>
              </Link>
              <Link to="/gradacao-moldes-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Gradação de Moldes</p>
                <p className="text-sm text-muted-foreground">Múltiplos tamanhos</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Comece Sua Jornada Descomplicada</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda modelagem de forma simples com nosso curso completo e didático.
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

export default ModelagemDescomplicada;
