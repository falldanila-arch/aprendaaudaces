import { motion } from "framer-motion";
import { ArrowRight, Palette, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CosturaCriativa = () => {
  return (
    <>
      <Helmet>
        <title>Costura Criativa - Técnicas e Projetos Criativos de Costura | Curso</title>
        <meta name="description" content="Costura criativa: aprenda técnicas de costura criativa para criar peças únicas e personalizadas. Projetos exclusivos com moldes profissionais." />
        <meta name="keywords" content="costura criativa, costura artesanal, modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes" />
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
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Criatividade em Costura</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Costura Criativa: Transforme Tecidos em Arte
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              A costura criativa vai além da confecção tradicional. É a arte de criar peças 
              únicas, personalizadas e cheias de personalidade usando técnicas especiais e 
              moldes exclusivos.
            </p>

            <h2 className="text-2xl font-bold mb-4">O Que é Costura Criativa?</h2>
            <p className="text-foreground/80 mb-6">
              Costura criativa combina técnicas tradicionais de costura com elementos artísticos, 
              permitindo criar peças exclusivas que expressam sua personalidade e estilo único.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Peças Únicas</h3>
                <p className="text-muted-foreground">
                  Crie roupas exclusivas que ninguém mais terá igual.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalização</h3>
                <p className="text-muted-foreground">
                  Adapte os moldes ao seu estilo e preferências pessoais.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Palette className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expressão Artística</h3>
                <p className="text-muted-foreground">
                  Transforme tecidos em verdadeiras obras de arte vestíveis.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Técnicas de Costura Criativa</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Patchwork e quilting para roupas</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Aplicações e bordados decorativos</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Combinação de tecidos diferentes</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Recortes e modelagens diferenciadas</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Tingimento e estamparia artesanal</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/artesanato-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Artesanato de Costura</p>
                <p className="text-sm text-muted-foreground">Projetos artesanais</p>
              </Link>
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Moldes profissionais</p>
              </Link>
              <Link to="/tecido-fabrica-textil" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Tecido e Fábrica Têxtil</p>
                <p className="text-sm text-muted-foreground">Conheça os materiais</p>
              </Link>
              <Link to="/modelagem-descomplicada" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Modelagem Descomplicada</p>
                <p className="text-sm text-muted-foreground">Aprenda fácil</p>
              </Link>
              <Link to="/molde-de-roupa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Molde de Roupa</p>
                <p className="text-sm text-muted-foreground">Crie suas roupas</p>
              </Link>
              <Link to="/cursos-modelagem" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Cursos de Modelagem</p>
                <p className="text-sm text-muted-foreground">Aprenda técnicas</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Liberte Sua Criatividade</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda técnicas profissionais para criar peças únicas e criativas.
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

export default CosturaCriativa;
