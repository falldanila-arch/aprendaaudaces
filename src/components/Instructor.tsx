import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Scissors, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import professorImage from "@/assets/professor-robson.jpg";
import corporateImage from "@/assets/corporate-training.jpg";

const credentials = [
  { icon: GraduationCap, text: "Licenciatura em Matemática" },
  { icon: GraduationCap, text: "Graduado em Gestão Comercial" },
  { icon: Award, text: "20 anos de Audaces comprovado em carteira" },
  { icon: Scissors, text: "Costureiro e Modelista" },
  { icon: Briefcase, text: "Empresário CEO da Modelagem e Diversos (11 anos)" },
  { icon: Users, text: "Mais de 400 alunos formados" },
];

export const Instructor = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        {/* Professor Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src={professorImage}
              alt="Professor de costura e modelagem digital - Instrutor do Curso Audaces com 20 anos de experiência"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg">
              20+ Anos de Experiência
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
              CONHEÇA SEU PROFESSOR
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professor Robson — Instrutor dos Cursos de Modelagem Audaces
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Especialista em curso Audaces e cursos de modelagem com mais de duas décadas de experiência em costura e modelagem digital.
            </p>

            <div className="grid gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <credential.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Corporate Training Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium tracking-wider text-accent uppercase">
                Treinamento Corporativo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Treinamento Presencial para Empresas
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Leve o melhor curso de Audaces diretamente para sua empresa. Oferecemos treinamentos 
              presenciais e corporativos personalizados para equipes de modelagem e confecção.
            </p>
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Treinamento in-company personalizado
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Pacotes empresariais sob medida
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Certificado para toda a equipe
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre treinamentos corporativos de Audaces.', '_blank')}
            >
              Entre em Contato
            </Button>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={corporateImage}
              alt="Curso Audaces - Treinamento corporativo de modelagem digital em empresas têxteis"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
