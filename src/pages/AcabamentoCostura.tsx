import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Star, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const AcabamentoCostura = () => {
  return (
    <>
      <Helmet>
        <title>Acabamento na Costura - Técnicas Profissionais de Finalização | Aprenda Audaces</title>
        <meta name="description" content="Aprenda técnicas de acabamento profissional na costura. Bainhas, viés, overloque, pespontos e mais para peças com qualidade impecável." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, acabamento costura, bainhas, viés, overloque" />
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
              Acabamento na Costura
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              O acabamento é o que diferencia uma peça amadora de uma profissional. Técnicas corretas de finalização garantem durabilidade, conforto e aparência impecável às roupas.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Acabamento</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Overloque</h3>
                  <p className="text-sm text-muted-foreground">Acabamento nas bordas que evita desfiamento do tecido.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Star className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Viés</h3>
                  <p className="text-sm text-muted-foreground">Fita que envolve bordas curvas como decotes e cavas.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Sparkles className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Bainhas</h3>
                  <p className="text-sm text-muted-foreground">Acabamento inferior de saias, calças e vestidos.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Pespontos</h3>
                  <p className="text-sm text-muted-foreground">Costuras aparentes decorativas e funcionais.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Técnicas de Acabamento</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">1</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Bainha Invisível</strong>
                    <p className="text-sm">Costura quase imperceptível pelo lado direito da peça.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">2</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Costura Francesa</strong>
                    <p className="text-sm">Acabamento interno que esconde todas as bordas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">3</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Costura Inglesa</strong>
                    <p className="text-sm">Similar à francesa, com acabamento ainda mais refinado.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">4</span>
                  </span>
                  <div>
                    <strong className="text-foreground">Debrum</strong>
                    <p className="text-sm">Acabamento com tira de tecido que cobre a borda.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Dicas para Acabamento Perfeito</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Passe todas as costuras antes de prosseguir</li>
                <li>• Use a temperatura correta do ferro para cada tecido</li>
                <li>• Corte fios soltos antes de finalizar</li>
                <li>• Teste o acabamento em retalho antes</li>
                <li>• Mantenha margens de costura uniformes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/maquinarios-costura" className="text-accent hover:underline">→ Maquinários na Costura</Link>
                <Link to="/aviamentos" className="text-accent hover:underline">→ Aviamentos</Link>
                <Link to="/costura-criativa" className="text-accent hover:underline">→ Costura Criativa</Link>
                <Link to="/criacao-de-roupas" className="text-accent hover:underline">→ Criação de Roupas</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda Acabamento Profissional</h2>
              <p className="text-muted-foreground mb-6">Domine técnicas de finalização para peças impecáveis</p>
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

export default AcabamentoCostura;
