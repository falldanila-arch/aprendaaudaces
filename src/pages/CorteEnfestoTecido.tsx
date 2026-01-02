import { motion } from "framer-motion";
import { ArrowRight, Scissors, Layers, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CorteEnfestoTecido = () => {
  return (
    <>
      <Helmet>
        <title>Corte e Enfesto de Tecido - Técnicas Profissionais | Audaces</title>
        <meta name="description" content="Corte e enfesto de tecido: aprenda técnicas profissionais de corte e enfesto para confecção. Otimize o aproveitamento de tecido e reduza desperdício." />
        <meta name="keywords" content="corte de tecido, enfesto, encaixe de moldes, modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Técnicas de Corte</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Corte e Enfesto de Tecido: Técnicas Profissionais
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              O corte e enfesto correto do tecido são fundamentais para a qualidade das peças 
              e economia de material. Aprenda as técnicas usadas na indústria.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Enfesto</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enfesto Par</h3>
                <p className="text-muted-foreground">
                  Tecido dobrado com direitos juntos. Ideal para peças simétricas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enfesto Ímpar</h3>
                <p className="text-muted-foreground">
                  Tecido aberto, uma camada sobre outra. Para peças assimétricas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Ruler className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enfesto Tubular</h3>
                <p className="text-muted-foreground">
                  Específico para malhas tubulares vindas de máquinas circulares.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Scissors className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enfesto Acordeão</h3>
                <p className="text-muted-foreground">
                  Tecido vai e vem formando camadas. Usado em produção industrial.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Dicas para Corte Perfeito</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Sempre respeite o sentido do fio do tecido</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Verifique se há defeitos antes de enfestar</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Use pesos ou alfinetes para fixar os moldes</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Corte com tesoura afiada ou cortadora circular</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Marque os piques corretamente para montagem</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/tecido-fabrica-textil" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Tecido e Fábrica Têxtil</p>
                <p className="text-sm text-muted-foreground">Conheça os materiais</p>
              </Link>
              <Link to="/consumo-tecido-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Consumo de Tecido</p>
                <p className="text-sm text-muted-foreground">Calcule o consumo</p>
              </Link>
              <Link to="/mapa-risco-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Mapa de Risco</p>
                <p className="text-sm text-muted-foreground">Encaixe profissional</p>
              </Link>
              <Link to="/audaces-economizando-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Economizando Tecido</p>
                <p className="text-sm text-muted-foreground">Reduza desperdício</p>
              </Link>
              <Link to="/faccao-cortes-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Facção e Cortes</p>
                <p className="text-sm text-muted-foreground">Produção em escala</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Aprenda mais</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Domine o Corte e Enfesto</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda todas as técnicas de corte profissional em nosso curso completo.
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

export default CorteEnfestoTecido;
