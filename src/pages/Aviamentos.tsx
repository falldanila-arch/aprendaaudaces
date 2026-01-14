import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Circle, Square, Ribbon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Aviamentos = () => {
  return (
    <>
      <Helmet>
        <title>Aviamentos para Costura - Zíperes, Botões, Fitas e Mais | Aprenda Audaces</title>
        <meta name="description" content="Conheça os principais aviamentos para costura: zíperes, botões, fitas, elásticos, entretelas e mais. Aprenda a escolher os aviamentos certos para cada peça." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, aviamentos, zíperes, botões, fitas, elásticos" />
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
              Aviamentos para Costura
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Aviamentos são todos os materiais auxiliares usados na confecção de roupas, além do tecido principal. Eles são essenciais para o acabamento, funcionalidade e estética das peças.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Aviamentos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Circle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Botões</h3>
                  <p className="text-sm text-muted-foreground">De pressão, casinha, jeans, forrados. Funcionais e decorativos.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Square className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Zíperes</h3>
                  <p className="text-sm text-muted-foreground">Invisível, comum, de metal, separável para diferentes aplicações.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Ribbon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Fitas e Rendas</h3>
                  <p className="text-sm text-muted-foreground">Viés, sianinha, passamanaria, rendas para acabamento.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Sparkles className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Entretelas</h3>
                  <p className="text-sm text-muted-foreground">Termocolantes e de costura para estruturar peças.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Aviamentos Essenciais</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong className="text-foreground">Elásticos</strong> - Cós, alça, renda elástica</li>
                <li>• <strong className="text-foreground">Linhas</strong> - Para costura, overlock, bordado</li>
                <li>• <strong className="text-foreground">Colchetes e Ganchos</strong> - Para fechamentos discretos</li>
                <li>• <strong className="text-foreground">Velcro</strong> - Fechamento prático e reutilizável</li>
                <li>• <strong className="text-foreground">Ilhoses e Rebites</strong> - Decorativos e funcionais</li>
                <li>• <strong className="text-foreground">Etiquetas</strong> - De composição e marca</li>
                <li>• <strong className="text-foreground">Enchimentos</strong> - Manta acrílica, espuma, fibra</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Como Escolher Aviamentos</h2>
              <p className="text-muted-foreground mb-4">
                A escolha correta dos aviamentos impacta diretamente na qualidade final da peça:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Considere o peso e caimento do tecido</li>
                <li>• Verifique a compatibilidade de cores</li>
                <li>• Avalie a funcionalidade necessária</li>
                <li>• Pense na durabilidade e lavagem</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Páginas Relacionadas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/acabamento-costura" className="text-accent hover:underline">→ Acabamento na Costura</Link>
                <Link to="/maquinarios-costura" className="text-accent hover:underline">→ Maquinários na Costura</Link>
                <Link to="/criacao-de-roupas" className="text-accent hover:underline">→ Criação de Roupas</Link>
                <Link to="/fio-tecido" className="text-accent hover:underline">→ Fio e Tecido</Link>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Aprenda Confecção Completa</h2>
              <p className="text-muted-foreground mb-6">Domine o uso de aviamentos e todas as técnicas de costura</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://pay.hotmart.com/W98444882E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Ver Curso
                </a>
              </Button>
            </section>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default Aviamentos;
