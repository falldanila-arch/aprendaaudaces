import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cog, Zap, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const MaquinariosCostura = () => {
  return (
    <>
      <Helmet>
        <title>Maquinários para Costura - Máquinas Industriais e Domésticas | Aprenda Audaces</title>
        <meta name="description" content="Conheça os principais maquinários para costura: máquinas retas, overlocks, galoneiras e mais. Aprenda qual máquina usar para cada tipo de trabalho." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, maquinários costura, máquina de costura, overlock, galoneira, curso audaces, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
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
              Maquinários para Costura
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Conhecer os diferentes tipos de máquinas de costura é fundamental para produzir peças com qualidade profissional. Cada máquina tem sua função específica no processo de confecção.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Máquinas Essenciais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Cog className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Máquina Reta</h3>
                  <p className="text-sm text-muted-foreground">A mais comum, usada para costuras retas em tecidos planos. Industrial ou doméstica.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Overlock</h3>
                  <p className="text-sm text-muted-foreground">Faz acabamento nas bordas e costura elástica. Essencial para malhas.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Settings className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Galoneira</h3>
                  <p className="text-sm text-muted-foreground">Para bainhas e acabamentos em malha com elasticidade.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Wrench className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Interloque</h3>
                  <p className="text-sm text-muted-foreground">União de tecidos com acabamento simultâneo nas bordas.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Máquinas Especiais</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                  <div>
                    <strong className="text-foreground">Máquina de Caseado</strong>
                    <p className="text-sm">Faz casas de botão automaticamente com precisão.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                  <div>
                    <strong className="text-foreground">Prespontadeira</strong>
                    <p className="text-sm">Costuras decorativas aparentes com duas agulhas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                  <div>
                    <strong className="text-foreground">Máquina de Bordado</strong>
                    <p className="text-sm">Para bordados decorativos e logos em peças.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                  <div>
                    <strong className="text-foreground">Travete</strong>
                    <p className="text-sm">Reforço em pontos de tensão como passantes e bolsos.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Manutenção Básica</h2>
              <p className="text-muted-foreground mb-4">Para manter suas máquinas funcionando perfeitamente:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Limpe regularmente resíduos de linha e tecido</li>
                <li>• Lubrifique conforme manual do fabricante</li>
                <li>• Troque agulhas com frequência</li>
                <li>• Use linhas de qualidade adequada</li>
                <li>• Faça manutenção preventiva profissional</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/aviamentos" className="text-accent hover:underline">→ Aviamentos</Link>
                <Link to="/acabamento-costura" className="text-accent hover:underline">→ Acabamento na Costura</Link>
                <Link to="/costura-criativa" className="text-accent hover:underline">→ Costura Criativa</Link>
                <Link to="/criacao-de-roupas" className="text-accent hover:underline">→ Criação de Roupas</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda Costura Profissional</h2>
              <p className="text-muted-foreground mb-6">Domine o uso de todas as máquinas na confecção</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default MaquinariosCostura;
