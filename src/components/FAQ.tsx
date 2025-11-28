import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funcionam as aulas?",
    answer: "As aulas são 100% digitais em formato de vídeo. Após a compra, você recebe um link com acesso imediato a todo o conteúdo. Pode assistir quando e onde quiser, com direito a replay ilimitado. É possível baixar as aulas para assistir offline."
  },
  {
    question: "Qual versão do Audaces é ensinada?",
    answer: "O curso ensina o Audaces 5.5, que funciona em qualquer sistema operacional (não precisa de Windows XP). Você recebe o instalador do Audaces 5.5 junto com o curso, além do Digiflash. Esta versão faz tudo que as versões mais novas fazem."
  },
  {
    question: "Qual a configuração mínima do computador?",
    answer: "A configuração recomendada é Core 2 Duo ou superior. O Audaces 5.5 roda em qualquer sistema operacional moderno, ao contrário de versões mais antigas que exigem Windows XP."
  },
  {
    question: "Posso comercializar os moldes?",
    answer: "Sim! Os aproximadamente 50 moldes bases inclusos (feminino e infantil) podem ser comercializados livremente por você."
  },
  {
    question: "Terei suporte após a compra?",
    answer: "Sim! Você entra em um grupo exclusivo de alunos no WhatsApp onde pode tirar dúvidas. Também oferecemos suporte para instalação do Audaces via mensagens (não fazemos acesso remoto)."
  },
  {
    question: "Quanto tempo tenho de acesso?",
    answer: "O acesso ao curso é vitalício. Pague uma vez e estude no seu ritmo, quantas vezes quiser."
  },
  {
    question: "Como recebo o Audaces?",
    answer: "O Audaces 5.5 é enviado junto com as aulas após a compra. Você recebe o instalador e pode instalar em qualquer computador. Oferecemos suporte via WhatsApp para ajudar na instalação."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-[0_10px_40px_-10px_hsl(var(--accent)/0.15)]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5535998121698"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            Entre em contato via WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
