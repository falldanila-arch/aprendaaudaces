import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import softwarePreview from "@/assets/printing-layout.jpg";

const topics = [
  "Noção e visão do programa Audaces para criação de moldes",
  "Criar moldes em Audaces e moldes digitais do zero",
  "Exportação para CorelDRAW e moldes gráficos",
  "Converte Audaces para PDF em A4 e Audaces PDF",
  "Usar Audaces Encaixe e mapa de risco",
  "Encaixe de moldes e risco em Audaces",
  "Trabalhar com Audaces DigiFlash",
  "Modelagem por foto - criar molde de roupa por imagem",
  "Molde CAD e Audaces CAD profissional",
  "Criação de moldes digitais para info-produtos",
  "Base corporal, recorte princesa e transferência de pences",
  "Estratégias de comercialização no Mercado Livre"
];

const includes = [
  "11 aulas completas com todo conteúdo",
  "Aula bônus de transformação raglan",
  "Aproximadamente 50 moldes bases (feminino e infantil)",
  "3 modelos interpretados em tempo real",
  "Tabela de medidas de todos os gêneros",
  "Planilha de gastos de tecido",
  "Audaces 5.5 para instalação",
  "Suporte via WhatsApp",
  "Grupo exclusivo de alunos"
];

export const CourseContent = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O Que Você Vai Aprender no Curso Audaces?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprenda Audaces do básico ao avançado: modelagem Audaces, moldes em Audaces, converte PDF e muito mais.
            </p>

            <div className="space-y-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)]">
              <img 
                src={softwarePreview} 
                alt="Interface do Audaces" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-8 bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Está Incluído no Curso:
              </h3>
              <div className="space-y-3">
                {includes.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
