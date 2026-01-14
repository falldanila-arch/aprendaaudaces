import { motion } from "framer-motion";
import { ArrowRight, Scissors, Heart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ArtesanatoCostura = () => {
  return (
    <>
      <Helmet>
        <title>Artesanato de Costura - Projetos Artesanais com Tecido | Curso Completo</title>
        <meta name="description" content="Artesanato de costura: projetos artesanais com tecido para criar bolsas, necessaires, almofadas e mais. Aprenda técnicas de costura artesanal." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, artesanato de costura, costura artesanal, audaces moldes" />
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
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Artesanato com Tecido</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Artesanato de Costura: Crie Peças Únicas e Encantadoras
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              O artesanato de costura permite criar peças decorativas e utilitárias únicas. 
              De bolsas a almofadas, cada projeto é uma oportunidade de expressar sua criatividade.
            </p>

            <h2 className="text-2xl font-bold mb-4">Projetos de Artesanato em Costura</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <Gift className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bolsas e Necessaires</h3>
                <p className="text-muted-foreground">
                  Crie bolsas personalizadas para vender ou presentear.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Decoração de Casa</h3>
                <p className="text-muted-foreground">
                  Almofadas, cortinas e itens decorativos em tecido.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Scissors className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Acessórios</h3>
                <p className="text-muted-foreground">
                  Laços, faixas, scrunchies e acessórios de moda.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Benefícios do Artesanato de Costura</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Renda extra vendendo suas criações</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Presentes personalizados e únicos</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Decoração exclusiva para sua casa</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Terapia e relaxamento através da costura</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Sustentabilidade reaproveitando tecidos</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Páginas Relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <Link to="/costura-criativa" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Costura Criativa</p>
                <p className="text-sm text-muted-foreground">Técnicas criativas</p>
              </Link>
              <Link to="/moldes-para-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes para Costura</p>
                <p className="text-sm text-muted-foreground">Moldes profissionais</p>
              </Link>
              <Link to="/tecido-fabrica-textil" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Tecido e Fábrica Têxtil</p>
                <p className="text-sm text-muted-foreground">Materiais têxteis</p>
              </Link>
              <Link to="/fio-tecido" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Fio e Tecido</p>
                <p className="text-sm text-muted-foreground">Entenda os materiais</p>
              </Link>
              <Link to="/reguas-esquadros-costura" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Réguas e Esquadros</p>
                <p className="text-sm text-muted-foreground">Ferramentas essenciais</p>
              </Link>
              <Link to="/moldes-pdf" className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-foreground">Moldes em PDF</p>
                <p className="text-sm text-muted-foreground">Moldes digitais</p>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Comece Seu Artesanato Hoje</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda técnicas profissionais para criar projetos incríveis.
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

export default ArtesanatoCostura;
