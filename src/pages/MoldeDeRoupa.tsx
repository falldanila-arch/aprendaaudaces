import { motion } from "framer-motion";
import { ArrowRight, Shirt, Ruler, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MoldeDeRoupa = () => {
  return (
    <>
      <Helmet>
        <title>Molde de Roupa - Como Criar Moldes de Roupas Profissionais | Audaces</title>
        <meta name="description" content="Aprenda como criar molde de roupa profissional. Técnicas de modelagem para camisetas, calças, vestidos e mais. Curso completo com certificado." />
        <meta name="keywords" content="molde de roupa, moldes de roupas, modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
                <Shirt className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Modelagem de Roupas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Molde de Roupa: Como Criar do Zero ao Profissional
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Criar um molde de roupa é o primeiro passo para confeccionar peças perfeitas. 
              Aprenda as técnicas profissionais usadas na indústria da moda.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Moldes de Roupa</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Shirt className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blusas e Camisetas</h3>
                <p className="text-muted-foreground">
                  Moldes para partes superiores incluindo frente, costas, mangas e gola.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Ruler className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Calças e Shorts</h3>
                <p className="text-muted-foreground">
                  Modelagem de partes inferiores com gancho, cós e pernas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Scissors className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vestidos e Saias</h3>
                <p className="text-muted-foreground">
                  Moldes femininos com variações de comprimento e modelagem.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Passos para Criar um Molde de Roupa</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Tire as medidas corporais com precisão</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Trace a base do molde usando as medidas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Adicione folgas e costuras necessárias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Faça a gradação para outros tamanhos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <span>Teste o molde com uma piloto antes da produção</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Guia completo de moldes</p>
              </Link>
              <Link to="/modelagem-digital" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Modelagem Digital</p>
                <p className="text-sm text-muted-foreground">Crie moldes no computador</p>
              </Link>
              <Link to="/artesanato-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Artesanato de Costura</p>
                <p className="text-sm text-muted-foreground">Projetos criativos</p>
              </Link>
              <Link to="/reguas-esquadros-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Réguas e Esquadros</p>
                <p className="text-sm text-muted-foreground">Ferramentas essenciais</p>
              </Link>
              <Link to="/tecido-fabrica-textil" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Tecido e Fábrica Têxtil</p>
                <p className="text-sm text-muted-foreground">Conheça os materiais</p>
              </Link>
              <Link to="/criar-moldes-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Criar Moldes no Audaces</p>
                <p className="text-sm text-muted-foreground">Software profissional</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Domine a Criação de Moldes de Roupa</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda todas as técnicas de modelagem com nosso curso completo de Audaces.
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

export default MoldeDeRoupa;
