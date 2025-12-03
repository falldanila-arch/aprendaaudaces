import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "Audaces Economizando Tecido", path: "/audaces-economizando-tecido" },
  { title: "Moldes Digitais para Sublimação", path: "/moldes-digitais-sublimacao" },
  { title: "Mapa para Risco no Audaces", path: "/mapa-risco-audaces" },
  { title: "Costurar com Moldes do Audaces", path: "/costurar-moldes-audaces" },
  { title: "Facção de Costura e Cortes Audaces", path: "/faccao-cortes-audaces" },
  { title: "Tecidos com Pé no Audaces", path: "/tecidos-pe-audaces" },
  { title: "Pregas e Pences no Audaces", path: "/pregas-pences-audaces" },
  { title: "Gradação de Moldes no Audaces", path: "/gradacao-moldes-audaces" },
  { title: "Converter Audaces para PDF", path: "/converter-audaces-pdf" },
  { title: "Criar Moldes no Audaces", path: "/criar-moldes-audaces" },
  { title: "Digitalizar Moldes com DigiFlash", path: "/digitalizar-moldes-digiflash" },
  { title: "Consumo de Tecido no Audaces", path: "/consumo-tecido-audaces" },
  { title: "Entretela no Enfesto Audaces", path: "/entretela-enfesto-audaces" },
  { title: "Moldes com Lado no Audaces", path: "/moldes-lado-audaces" },
  { title: "Fazer Piloto no Audaces", path: "/fazer-piloto-audaces" },
  { title: "Construir Moldes no Audaces", path: "/construir-moldes-audaces" },
  { title: "Moldes com Tabela de Medidas", path: "/moldes-tabela-medidas" },
  { title: "Gabarito de Bolso no Audaces", path: "/gabarito-bolso-audaces" },
];

export const ArticleLinks = () => {
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
            Aprenda Mais Sobre Audaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossos artigos e descubra tudo que você pode fazer com o Audaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
            >
              <Link
                to={article.path}
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-foreground/90 group-hover:text-accent transition-colors">
                  {article.title}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
