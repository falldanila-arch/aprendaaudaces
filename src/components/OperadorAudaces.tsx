import { motion } from "framer-motion";
import { CheckCircle, Users, Play, ExternalLink, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import operadorImg1 from "@/assets/operador-audaces-1.jpg";
import operadorImg2 from "@/assets/operador-audaces-2.jpg";

export const OperadorAudaces = () => {
  const targetAudience = [
    "Pessoas que querem se profissionalizar",
    "Pessoas que querem empreender",
    "Fabricantes e Confeccionistas",
    "Cortadores de tecido",
    "Costureiras",
    "Empresários",
    "Acabadores"
  ];

  const benefits = [
    "7 módulos completos com expertise de +20 anos",
    "Aulas em vídeo com replay ilimitado",
    "Grupo exclusivo de alunos para networking",
    "Oportunidades de trabalho no grupo",
    "Aproximadamente 6 horas de conteúdo",
    "Acesso imediato após a compra"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            TAMBÉM TEMOS O CURSO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Curso Operador de Audaces
          </h2>
          <p className="text-xl text-primary font-semibold mb-2">
            Digitalização e Liberação de Risco/Mapa
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curso destinado a quem quer se profissionalizar para trabalhar no setor de corte, 
            na plotter, na digitalização e liberação de risco/mapa. 
            Encontre milhares de vagas por todo o território brasileiro!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={operadorImg1} 
                  alt="Curso Audaces - Digitalização de moldes em PDF e modelagem digital" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={operadorImg2} 
                  alt="Modelagem digital - Liberação de risco e mapa de corte no Audaces" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Video Link */}
            <a 
              href="https://youtu.be/twamdwGLLh4?si=WNY-enPg3OF3SafF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Assista ao vídeo explicativo</p>
                <p className="text-sm text-muted-foreground">Saiba mais sobre o curso no YouTube</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground ml-auto" />
            </a>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Description */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sobre o Curso</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Esse curso é uma das minhas experiências profissionais de mais de 20 anos operando o software. 
                Trago para vocês em primeira mão esse formidável conteúdo, onde aprenderão todos os métodos e 
                problemáticas para fazer uma digitalização de qualidade e fiel ao molde.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O profissional Operador de Audaces é visto pelas empresas como um coringa na hora de economia 
                e estratégia. Por isso é muito importante ser assertivo e econômico nas práticas e raciocínio 
                do molde/risco.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">O que você recebe:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Para quem é este curso:
              </h3>
              <div className="flex flex-wrap gap-2">
                {targetAudience.map((audience, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirement */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Requisito:</strong> Noções básicas de computação
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">MEGA PROMOÇÃO</p>
              <p className="text-4xl font-bold text-primary mb-1">R$ 299,90</p>
              <p className="text-sm text-muted-foreground mb-4">Acesso imediato após a compra</p>
              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.open("https://go.pepper.com.br/ikzkd", "_blank")}
              >
                <Play className="w-5 h-5 mr-2" />
                Comprar Agora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
