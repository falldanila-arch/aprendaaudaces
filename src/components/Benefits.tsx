import { motion } from "framer-motion";
import { CheckCircle2, Clock, Download, Users, Video, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Video,
    title: "Aprenda Audaces em Vídeo",
    description: "Curso Audaces completo para assistir quando e onde quiser, com replay ilimitado"
  },
  {
    icon: Download,
    title: "Moldes em PDF e CAD",
    description: "Converta Audaces para PDF em A4 e exporte molde CAD para impressão"
  },
  {
    icon: CheckCircle2,
    title: "50+ Moldes Digitais",
    description: "Moldes em Audaces prontos: bases femininas, infantis e molde de roupa variados"
  },
  {
    icon: Users,
    title: "Grupo Exclusivo",
    description: "Suporte direto via WhatsApp e networking com profissionais do programa Audaces"
  },
  {
    icon: Clock,
    title: "Audaces Encaixe e DigiFlash",
    description: "Domine encaixe de moldes, mapa de risco e risco em Audaces com o DigiFlash"
  },
  {
    icon: Award,
    title: "Modelagem por Foto",
    description: "Aprenda modelagem Audaces criando moldes gráficos a partir de fotos reais"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher Este Curso Audaces?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda Audaces e domine modelagem digital, moldes em PDF, Audaces PDF, converte PDF e muito mais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--accent)/0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Registro do Curso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Link to="/registro-curso" className="block">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:border-primary/40 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-1">📝 Curso com Registro Oficial</h3>
                <p className="text-muted-foreground text-sm">
                  Nosso curso possui registro para maior segurança dos alunos. Além disso, garantimos que apenas profissionais preparados utilizem nosso material. Clique para saber mais.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
