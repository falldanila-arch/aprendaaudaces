import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Márcia",
    role: "Aluna",
    text: "Muito bom o curso! Sim lógico que aprendi e recomendo e ô entendi tão para quem eu conhecia o método! Muito bom!",
    rating: 5,
  },
  {
    name: "Brunna",
    role: "Aluna",
    text: "Eu amava quando eu chega em casa vinha logo em problema. Estava aprendendo muito com o Curso. Continuo com as Aulas!!! Obrigada!!!",
    rating: 5,
  },
  {
    name: "Débora",
    role: "Aluna",
    text: "Eu adorei, Carol, muito obrigada! E percebi o quanto você é uma professora MARAVILHOSA!",
    rating: 5,
  },
];

export const Testimonials = () => {
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
            Avaliações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos dizem sobre o curso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-4 bg-accent/10 px-8 py-6 rounded-full border-2 border-accent/20">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent text-accent-foreground">
              <span className="text-2xl font-bold">400+</span>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-foreground">Somos Mais de</p>
              <p className="text-xl text-muted-foreground">400 Alunos!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
