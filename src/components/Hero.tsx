import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cover.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cursos de modelagem - Aprenda modelagem digital e crie moldes profissionais" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-24 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
              CURSOS DE MODELAGEM
            </span>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Curso Audaces: <span className="text-accent">Modelagem</span> e Costura Profissional
            </h1>
            
            <p className="mb-10 text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              O melhor curso de modelagem do Brasil. Aprenda Audaces, domine costura profissional, 
              crie moldes em PDF e CAD com Audaces Encaixe e DigiFlash. Mais de 500 alunos formados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-[0_8px_30px_-8px_hsl(var(--coral)/0.5)] transition-all duration-300 hover:shadow-[0_12px_40px_-10px_hsl(var(--coral)/0.7)]"
                  onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}
                >
                  Começar Agora por R$ 299,90
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <span className="text-xs text-primary-foreground/70 mt-2">Curso: Aprenda Modelagem no Audaces e Lucre</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-background/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
                  onClick={() => window.open('https://drive.google.com/file/d/1dvvwNgLqb6g1vetzKhcrE0YaWL1ndeoq/view?usp=drivesdk', '_blank')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Prévia do Curso
                </Button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-12 flex justify-center gap-12 text-primary-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">11+</div>
                <div className="text-sm uppercase tracking-wider">Aulas Completas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm uppercase tracking-wider">Moldes Bases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">6h+</div>
                <div className="text-sm uppercase tracking-wider">De Conteúdo</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
