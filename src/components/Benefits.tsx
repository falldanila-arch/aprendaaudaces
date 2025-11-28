import { motion } from "framer-motion";
import { CheckCircle2, Clock, Download, Users, Video, Award } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Aulas em Vídeo",
    description: "Assista quando e onde quiser, com direito a replay ilimitado até dominar cada técnica"
  },
  {
    icon: Download,
    title: "Conteúdo Offline",
    description: "Baixe todas as aulas e materiais para estudar mesmo sem internet"
  },
  {
    icon: CheckCircle2,
    title: "50+ Moldes Inclusos",
    description: "Bases femininas, infantis e muito mais - prontos para comercializar"
  },
  {
    icon: Users,
    title: "Grupo Exclusivo",
    description: "Suporte direto via WhatsApp e networking com outros profissionais"
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Pague uma vez e tenha acesso para sempre, com todas as atualizações"
  },
  {
    icon: Award,
    title: "Aprenda Praticando",
    description: "3 modelos interpretados e construídos em tempo real com você"
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
            Por Que Este Curso?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para se tornar um profissional de modelagem digital
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
      </div>
    </section>
  );
};
