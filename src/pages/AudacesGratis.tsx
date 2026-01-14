import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const AudacesGratis = () => {
  return (
    <>
      <Helmet>
        <title>Audaces Grátis - Versão Gratuita do Software de Modelagem | Aprenda Audaces</title>
        <meta name="description" content="Saiba como usar o Audaces grátis. Conheça a versão de demonstração, alternativas gratuitas e como aprender modelagem digital sem investir em licença." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, Audaces grátis, Audaces free, Audaces demonstração" />
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
              Audaces Grátis
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Muitos profissionais buscam usar o Audaces gratuitamente. Entenda as opções disponíveis, limitações e como aprender o software mesmo sem licença própria.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Opções para Usar Audaces</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <Download className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Versão de Demonstração</h3>
                      <p className="text-sm text-muted-foreground">A Audaces oferece versão trial com funcionalidades limitadas para teste do software.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Cursos com Acesso</h3>
                      <p className="text-sm text-muted-foreground">Alguns cursos oferecem acesso ao software durante o período de aprendizado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Versão Gratuita vs Paga</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-green-500/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Versão Demo
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Funções básicas de modelagem</li>
                    <li>• Período limitado de uso</li>
                    <li>• Ideal para aprendizado</li>
                    <li>• Sem suporte técnico</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-xl border border-accent/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Versão Completa
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Todas as funcionalidades</li>
                    <li>• Uso ilimitado</li>
                    <li>• Atualizações incluídas</li>
                    <li>• Suporte técnico oficial</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cuidados Importantes</h2>
              <div className="bg-destructive/10 p-6 rounded-xl border border-destructive/30">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Evite Versões Piratas</h3>
                    <p className="text-sm text-muted-foreground">
                      Usar software pirata é ilegal e pode trazer vírus, além de não ter suporte ou atualizações. Opte sempre por meios legais de acesso ao Audaces.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/audaces-7" className="text-accent hover:underline">→ Audaces 7</Link>
                <Link to="/modelagem-cad" className="text-accent hover:underline">→ Modelagem CAD</Link>
                <Link to="/modelagem-digital-completa" className="text-accent hover:underline">→ Modelagem Digital</Link>
                <Link to="/cursos-de-modelagem" className="text-accent hover:underline">→ Cursos de Modelagem</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda Audaces do Zero</h2>
              <p className="text-muted-foreground mb-6">Curso completo com aulas práticas e suporte para dúvidas</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Conhecer o Curso
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default AudacesGratis;
