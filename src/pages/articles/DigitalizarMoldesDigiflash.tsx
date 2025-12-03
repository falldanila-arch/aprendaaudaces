import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DigitalizarMoldesDigiflash = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-6 py-12 mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Curso
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <ScanLine className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Artigo sobre Audaces</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Digitalizar Moldes com Audaces DigiFlash
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl text-muted-foreground mb-8">
              Transforme seus moldes em papel em arquivos digitais 
              usando o Audaces DigiFlash.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">O que é DigiFlash?</h2>
            <p>
              O <strong>Audaces DigiFlash</strong> é uma ferramenta que permite digitalizar 
              moldes físicos fotografando-os, convertendo-os em arquivos editáveis no Audaces.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Como funciona</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Fotografe o molde com referências</li>
              <li>• Importe a foto no DigiFlash</li>
              <li>• Trace o contorno automaticamente</li>
              <li>• Ajuste e exporte para o Audaces</li>
              <li>• Edite como qualquer molde digital</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Importante saber</h2>
            <p className="bg-muted/50 p-4 rounded-lg border border-border">
              O DigiFlash não instala em qualquer computador ou sistema operacional. 
              Funciona de forma mais confiável apenas no Windows XP. O suporte é 
              exclusivamente via mensagens no WhatsApp, sem acesso remoto.
            </p>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aprenda DigiFlash
            </h3>
            <p className="text-muted-foreground mb-6">
              O curso inclui aulas sobre digitalização
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}
            >
              Começar Agora por R$ 299,90
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
};

export default DigitalizarMoldesDigiflash;
