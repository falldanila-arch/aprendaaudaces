import { motion } from "framer-motion";
import { ArrowRight, Circle, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FioTecido = () => {
  return (
    <>
      <Helmet>
        <title>Fio e Tecido - Entenda as Fibras e Composições Têxteis | Guia</title>
        <meta name="description" content="Fio e tecido: entenda as fibras, composições e características dos materiais têxteis. Guia completo para escolher os melhores materiais para costura." />
        <meta name="keywords" content="fio tecido, fibras têxteis, composição tecido, modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
                <Circle className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Fibras Têxteis</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fio e Tecido: Guia Completo de Fibras Têxteis
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Entender a composição dos fios e tecidos é essencial para escolher os melhores 
              materiais para cada tipo de peça e garantir qualidade em suas criações.
            </p>

            <h2 className="text-2xl font-bold mb-4">Tipos de Fibras</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Fibras Naturais Vegetais</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Algodão:</strong> Confortável e respirável</li>
                  <li>• <strong>Linho:</strong> Resistente e fresco</li>
                  <li>• <strong>Rami:</strong> Brilhante e durável</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Fibras Naturais Animais</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Seda:</strong> Luxuosa e brilhante</li>
                  <li>• <strong>Lã:</strong> Quente e isolante</li>
                  <li>• <strong>Cashmere:</strong> Macia e premium</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Fibras Sintéticas</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Poliéster:</strong> Durável e fácil lavagem</li>
                  <li>• <strong>Nylon:</strong> Resistente e elástico</li>
                  <li>• <strong>Elastano:</strong> Super elástico</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Fibras Artificiais</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Viscose:</strong> Macia e fluida</li>
                  <li>• <strong>Modal:</strong> Confortável e leve</li>
                  <li>• <strong>Lyocell:</strong> Ecológica e macia</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Como Ler a Composição do Tecido</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Verifique sempre a etiqueta de composição</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Percentuais mais altos indicam a fibra predominante</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Elastano de 2-5% oferece elasticidade sem deformar</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Misturas equilibram características de cada fibra</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/tecido-fabrica-textil" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Tecido e Fábrica Têxtil</p>
                <p className="text-sm text-muted-foreground">Indústria têxtil</p>
              </Link>
              <Link to="/corte-enfesto-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Corte e Enfesto</p>
                <p className="text-sm text-muted-foreground">Técnicas de corte</p>
              </Link>
              <Link to="/consumo-tecido-audaces" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Consumo de Tecido</p>
                <p className="text-sm text-muted-foreground">Calcule consumo</p>
              </Link>
              <Link to="/artesanato-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Artesanato de Costura</p>
                <p className="text-sm text-muted-foreground">Projetos artesanais</p>
              </Link>
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Crie seus moldes</p>
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
              <h3 className="text-2xl font-bold mb-4">Domine os Materiais Têxteis</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda tudo sobre tecidos e fibras em nosso curso completo.
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

export default FioTecido;
