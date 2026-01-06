import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Shirt, BookOpen, Monitor, Palette, Heart, Factory, Ribbon, Ruler, Layers, Award, Cog, Pencil, Circle, Wrench, CheckCircle, Download, Settings, GraduationCap } from "lucide-react";

const thematicPages = [
  { path: "/moldes-para-costura", title: "Moldes para Costura", icon: Scissors },
  { path: "/molde-de-roupa", title: "Molde de Roupa", icon: Shirt },
  { path: "/modelagem-descomplicada", title: "Modelagem Descomplicada", icon: BookOpen },
  { path: "/modelagem-digital-completa", title: "Modelagem Digital", icon: Monitor },
  { path: "/costura-criativa", title: "Costura Criativa", icon: Palette },
  { path: "/artesanato-costura", title: "Artesanato de Costura", icon: Heart },
  { path: "/tecido-fabrica-textil", title: "Tecido e Fábrica Têxtil", icon: Factory },
  { path: "/fio-tecido", title: "Fio e Tecido", icon: Ribbon },
  { path: "/reguas-esquadros-costura", title: "Réguas e Esquadros", icon: Ruler },
  { path: "/corte-enfesto-tecido", title: "Corte e Enfesto", icon: Layers },
  { path: "/modelagem-profissional", title: "Modelagem Profissional", icon: Award },
  { path: "/criacao-de-roupas", title: "Criação de Roupas", icon: Shirt },
  { path: "/modelagem-cad", title: "Modelagem CAD", icon: Cog },
  { path: "/modelagem-manual", title: "Modelagem Manual", icon: Pencil },
  { path: "/aviamentos", title: "Aviamentos", icon: Circle },
  { path: "/maquinarios-costura", title: "Maquinários", icon: Wrench },
  { path: "/acabamento-costura", title: "Acabamento", icon: CheckCircle },
  { path: "/audaces-gratis", title: "Audaces Grátis", icon: Download },
  { path: "/audaces-7", title: "Audaces 7", icon: Settings },
  { path: "/cursos-de-modelagem", title: "Cursos de Modelagem", icon: GraduationCap },
];

export const ThematicLinks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-6 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Nossos Conteúdos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navegue por temas de modelagem, costura e confecção têxtil
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {thematicPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                to={page.path}
                className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <page.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground text-center group-hover:text-accent transition-colors">
                  {page.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
