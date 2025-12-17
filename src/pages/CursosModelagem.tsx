import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CursosModelagem = () => {
  return (
    <>
      <Helmet>
        <title>Cursos de Modelagem - Aprenda Audaces Online | Cursos Profissionais</title>
        <meta name="description" content="Cursos de modelagem profissional em Audaces. Aprenda modelagem digital, criação de moldes e técnicas avançadas. Mais de 400 alunos formados." />
        <meta name="keywords" content="modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes, curso audaces" />
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
              Cursos de Modelagem Profissional
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Nossos cursos de modelagem são desenvolvidos para transformar iniciantes em profissionais 
              qualificados no mercado de moda e confecção. Com mais de 400 alunos formados, oferecemos 
              a experiência de 20 anos do Professor Robson em cursos práticos e objetivos.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aprenda Modelagem no Audaces e Lucre</h3>
                <p className="text-muted-foreground mb-4">
                  Curso completo para criar e vender moldes digitais. Inclui 50+ moldes base prontos 
                  e técnicas de comercialização.
                </p>
                <a 
                  href="https://go.pepper.com.br/1xtll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Operador de Audaces</h3>
                <p className="text-muted-foreground mb-4">
                  Especialização em operação do software, digitalização e liberação de riscos. 
                  Ideal para trabalhar em fábricas e confecções.
                </p>
                <a 
                  href="https://go.pepper.com.br/ikzkd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Por Que Escolher Nossos Cursos?</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">400+ Alunos</p>
                <p className="text-sm text-muted-foreground">Formados com sucesso</p>
              </div>
              <div className="text-center p-4">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">~6 Horas</p>
                <p className="text-sm text-muted-foreground">De conteúdo em vídeo</p>
              </div>
              <div className="text-center p-4">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">20+ Anos</p>
                <p className="text-sm text-muted-foreground">De experiência</p>
              </div>
              <div className="text-center p-4">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Acesso Vitalício</p>
                <p className="text-sm text-muted-foreground">Assista quando quiser</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender</h2>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Criação de moldes profissionais do zero usando tabela de medidas</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Técnicas de gradação para múltiplos tamanhos</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Exportação para PDF, CorelDRAW e impressão em plotters</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Digitalização de moldes físicos com DigiFlash</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Criação de mapas de risco e encaixe automático</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Comece Sua Jornada Hoje</h3>
              <p className="text-muted-foreground mb-6">
                Invista em sua carreira na indústria da moda com cursos práticos e atualizados.
              </p>
              <Link to="/#cursos">
                <Button size="lg">
                  Ver Todos os Cursos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default CursosModelagem;
