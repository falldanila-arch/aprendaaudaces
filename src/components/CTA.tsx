import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={patternBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-mid to-primary" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/20 rounded-full border border-accent/40">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              OFERTA ESPECIAL
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Comece Sua Jornada Profissional Agora
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
            Invista em sua carreira por apenas <span className="font-bold text-accent">R$ 299,90</span> e 
            receba acesso imediato a todo o conteúdo, moldes e suporte exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 rounded-full shadow-[0_12px_40px_-10px_hsl(var(--coral)/0.6)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_hsl(var(--coral)/0.8)]"
                onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}
              >
                Garantir Minha Vaga Agora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              Acesso Imediato
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              Pagamento Seguro
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              Suporte Incluso
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
