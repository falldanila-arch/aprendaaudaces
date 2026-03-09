import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, TrendingUp, Laptop } from "lucide-react";
import earnMoneyImage from "@/assets/earn-money.jpg";

export const DigitalProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
              INFO-PRODUTOS DIGITAIS
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cursos de Modelagem: Ganhe Dinheiro com Moldes Digitais
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Com nosso curso Audaces, aprenda a criar moldes em PDF, molde CAD e moldes gráficos 
              para vender como info-produtos. Nossos cursos de modelagem ensinam costura e comercialização.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Venda em Qualquer Marketplace</h3>
                  <p className="text-sm text-muted-foreground">
                    Mercado Livre, Shopee, Elo7 e muito mais
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Trabalhe de Casa</h3>
                  <p className="text-sm text-muted-foreground">
                    Crie moldes profissionais no conforto do seu lar
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Garantia de Satisfação</h3>
                  <p className="text-sm text-muted-foreground">
                    Ou seu dinheiro de volta
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-[0_8px_30px_-8px_hsl(var(--coral)/0.5)]"
                onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}
              >
                Começar Agora por R$ 299,90
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.4)]">
              <img 
                src={earnMoneyImage} 
                alt="Moldes em PDF - Ganhe dinheiro vendendo moldes digitais e modelagem digital online" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
