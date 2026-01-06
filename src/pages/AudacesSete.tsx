import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Layers, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const AudacesSete = () => {
  return (
    <>
      <Helmet>
        <title>Audaces 7 - Recursos e Funcionalidades da Versão 7 | Aprenda Audaces</title>
        <meta name="description" content="Conheça o Audaces 7 e suas funcionalidades. Aprenda a usar esta versão do software de modelagem digital mais utilizado na indústria têxtil brasileira." />
        <meta name="keywords" content="Audaces 7, Audaces versão 7, software Audaces, modelagem Audaces 7, curso Audaces 7" />
      </Helmet>
      <main className="min-h-screen bg-background">
        <div className="container px-6 py-12 mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <motion.article
            className="prose prose-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Audaces 7
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              O Audaces 7 é uma versão consolidada do software de modelagem digital mais usado no Brasil. Conhecido pela estabilidade e ampla adoção no mercado, continua sendo referência em muitas confecções.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Principais Módulos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Monitor className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Audaces Moldes</h3>
                  <p className="text-sm text-muted-foreground">Criação e edição de moldes digitais com ferramentas completas.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Layers className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Audaces Encaixe</h3>
                  <p className="text-sm text-muted-foreground">Otimização do encaixe de moldes para economia de tecido.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Audaces Digiflash</h3>
                  <p className="text-sm text-muted-foreground">Digitalização de moldes físicos para o formato digital.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Settings className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Audaces Vestuário</h3>
                  <p className="text-sm text-muted-foreground">Simulação 3D e prototipagem virtual de peças.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Recursos do Audaces 7</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong className="text-foreground">Traçado preciso</strong> - Ferramentas de desenho com medidas exatas</li>
                <li>• <strong className="text-foreground">Graduação automática</strong> - Geração de todos os tamanhos</li>
                <li>• <strong className="text-foreground">Encaixe otimizado</strong> - Redução de desperdício de tecido</li>
                <li>• <strong className="text-foreground">Plotagem</strong> - Impressão em plotters industriais</li>
                <li>• <strong className="text-foreground">Digitalização</strong> - Conversão de moldes físicos</li>
                <li>• <strong className="text-foreground">Biblioteca de moldes</strong> - Armazenamento organizado</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Por Que Aprender Audaces 7?</h2>
              <p className="text-muted-foreground mb-4">
                Mesmo com versões mais novas disponíveis, o Audaces 7 continua sendo amplamente utilizado por sua estabilidade e pela grande base instalada no mercado brasileiro. Aprender esta versão abre portas em diversas confecções.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/audaces-gratis" className="text-accent hover:underline">→ Audaces Grátis</Link>
                <Link to="/modelagem-cad" className="text-accent hover:underline">→ Modelagem CAD</Link>
                <Link to="/modelagem-digital-completa" className="text-accent hover:underline">→ Modelagem Digital</Link>
                <Link to="/cursos-de-modelagem" className="text-accent hover:underline">→ Cursos de Modelagem</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Domine o Audaces 7</h2>
              <p className="text-muted-foreground mb-6">Curso completo do básico ao avançado com projetos práticos</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Iniciar Curso
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default AudacesSete;
