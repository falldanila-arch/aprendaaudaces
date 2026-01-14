import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette, Scissors, Sparkles, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const CriacaoRoupas = () => {
  return (
    <>
      <Helmet>
        <title>Criação de Roupas - Do Design à Confecção | Aprenda Audaces</title>
        <meta name="description" content="Aprenda o processo completo de criação de roupas, desde o design até a confecção final. Técnicas de estilismo, modelagem e produção de peças exclusivas." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, criação de roupas, design de moda, confecção de roupas" />
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
              Criação de Roupas
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A criação de roupas é um processo criativo e técnico que transforma ideias em peças vestíveis. Envolve desde a concepção do design até a confecção final, passando por modelagem, corte e costura.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Etapas da Criação de Roupas</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Pesquisa e Inspiração</h3>
                    <p className="text-sm text-muted-foreground">Busca de referências, tendências e definição do conceito da peça.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Design e Croqui</h3>
                    <p className="text-sm text-muted-foreground">Desenho técnico da peça com detalhes de modelagem e acabamentos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Modelagem</h3>
                    <p className="text-sm text-muted-foreground">Criação dos moldes que servirão de base para o corte do tecido.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Corte e Costura</h3>
                    <p className="text-sm text-muted-foreground">Execução da peça com técnicas de corte preciso e costura profissional.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Elementos Essenciais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Palette className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Cores e Estampas</h3>
                  <p className="text-sm text-muted-foreground">Combinação harmoniosa que define a identidade da peça.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Scissors className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Tecidos</h3>
                  <p className="text-sm text-muted-foreground">Escolha do material adequado para cada tipo de peça.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Sparkles className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Aviamentos</h3>
                  <p className="text-sm text-muted-foreground">Zíperes, botões, fitas e outros acessórios funcionais.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Shirt className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Acabamentos</h3>
                  <p className="text-sm text-muted-foreground">Detalhes finais que garantem qualidade e durabilidade.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/modelagem-profissional" className="text-accent hover:underline">→ Modelagem Profissional</Link>
                <Link to="/aviamentos" className="text-accent hover:underline">→ Aviamentos</Link>
                <Link to="/acabamento-costura" className="text-accent hover:underline">→ Acabamento na Costura</Link>
                <Link to="/costura-criativa" className="text-accent hover:underline">→ Costura Criativa</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda a Criar Suas Próprias Roupas</h2>
              <p className="text-muted-foreground mb-6">Domine todas as etapas da criação de roupas profissionais</p>
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

export default CriacaoRoupas;
