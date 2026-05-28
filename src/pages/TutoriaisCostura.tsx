import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, Youtube } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface VideoLink {
  title: string;
  url: string;
  source?: string;
}

interface Section {
  emoji: string;
  title: string;
  videos: VideoLink[];
}

const sections: Section[] = [
  {
    emoji: "👖",
    title: "Pregar cós",
    videos: [
      { title: "Cós Anatômico em short, saia ou calça", url: "https://www.youtube.com/results?search_query=c%C3%B3s+anat%C3%B4mico+como+costurar+short+saia+cal%C3%A7a", source: "CAMALEOA ATELIER DE COSTURA" },
      { title: "Como pregar cós em calça social", url: "https://www.youtube.com/results?search_query=como+prega+c%C3%B3s+cal%C3%A7a+social", source: "Marlene Mukai" },
    ],
  },
  {
    emoji: "👖",
    title: "Baguilha / braguilha",
    videos: [
      { title: "Como fazer braguilha em calça", url: "https://www.youtube.com/results?search_query=como+fazer+braguilha+cal%C3%A7a" },
      { title: "Como colocar zíper em calça jeans", url: "https://www.youtube.com/results?search_query=como+colocar+z%C3%ADper+em+cal%C3%A7a+jeans" },
    ],
  },
  {
    emoji: "👖",
    title: "Fechar calça / shorts / bermuda",
    videos: [
      { title: "Como fechar gancho da calça jeans", url: "https://www.youtube.com/watch?v=lOzzI4_rmAA" },
      { title: "Costura de shorts passo a passo", url: "https://www.youtube.com/results?search_query=costura+shorts+passo+a+passo" },
      { title: "Como costurar bermuda jeans", url: "https://www.youtube.com/results?search_query=como+costurar+bermuda+jeans" },
    ],
  },
  {
    emoji: "👖",
    title: "Pregar bolso (revel / espelho / embutido)",
    videos: [
      { title: "Como fazer bolso embutido", url: "https://www.youtube.com/results?search_query=como+fazer+bolso+embutido", source: "Marlene Mukai" },
      { title: "2 formas de pregar bolso embutido", url: "https://www.youtube.com/results?search_query=2+formas+de+pregar+bolso+embutido", source: "Marlene Mukai" },
      { title: "Bolso faca com revel e espelho", url: "https://www.youtube.com/results?search_query=bolso+faca+revel+e+espelho" },
    ],
  },
  {
    emoji: "👕",
    title: "Fechar camiseta",
    videos: [
      { title: "Como fechar camiseta na overlock", url: "https://www.youtube.com/results?search_query=como+fechar+camiseta+na+overlock" },
      { title: "Montagem completa de camiseta", url: "https://www.youtube.com/results?search_query=montagem+completa+camiseta" },
    ],
  },
  {
    emoji: "👚",
    title: "Fechar blusa",
    videos: [
      { title: "Como costurar blusa feminina passo a passo", url: "https://www.youtube.com/results?search_query=como+costurar+blusa+feminina+passo+a+passo" },
    ],
  },
  {
    emoji: "🧥",
    title: "Fechar moletom",
    videos: [
      { title: "Montagem de moletom passo a passo", url: "https://www.youtube.com/results?search_query=montagem+de+moletom+passo+a+passo" },
    ],
  },
  {
    emoji: "👗",
    title: "Fechar saia",
    videos: [
      { title: "Como fechar saia com zíper", url: "https://www.youtube.com/results?search_query=como+fechar+saia+com+z%C3%ADper" },
    ],
  },
  {
    emoji: "👙",
    title: "Fechar top",
    videos: [
      { title: "Como costurar top feminino", url: "https://www.youtube.com/results?search_query=como+costurar+top+feminino" },
    ],
  },
  {
    emoji: "🤵",
    title: "Fechar colete social",
    videos: [
      { title: "Como fazer colete social passo a passo", url: "https://www.youtube.com/results?search_query=como+fazer+colete+social+passo+a+passo" },
    ],
  },
  {
    emoji: "🤵",
    title: "Fechar blazer",
    videos: [
      { title: "Montagem de blazer alfaiataria", url: "https://www.youtube.com/results?search_query=montagem+de+blazer+alfaiataria" },
    ],
  },
  {
    emoji: "👖",
    title: "Fechar calça social",
    videos: [
      { title: "Calça social passo a passo", url: "https://www.youtube.com/results?search_query=cal%C3%A7a+social+passo+a+passo", source: "Marlene Mukai" },
    ],
  },
  {
    emoji: "🩲",
    title: "Fechar calcinha e cueca",
    videos: [
      { title: "Como costurar calcinha na overlock", url: "https://www.youtube.com/results?search_query=como+costurar+calcinha+na+overlock" },
      { title: "Como costurar cueca boxer", url: "https://www.youtube.com/results?search_query=como+costurar+cueca+boxer" },
    ],
  },
  {
    emoji: "🩱",
    title: "Fechar body",
    videos: [
      { title: "Como costurar body feminino", url: "https://www.youtube.com/results?search_query=como+costurar+body+feminino" },
    ],
  },
  {
    emoji: "🧥",
    title: "Fechar casaco",
    videos: [
      { title: "Montagem de casaco passo a passo", url: "https://www.youtube.com/results?search_query=montagem+de+casaco+passo+a+passo" },
    ],
  },
  {
    emoji: "🥋",
    title: "Fechar kimono",
    videos: [
      { title: "Como costurar kimono passo a passo", url: "https://www.youtube.com/results?search_query=como+costurar+kimono+passo+a+passo" },
    ],
  },
  {
    emoji: "🤠",
    title: "Fechar bombacha",
    videos: [
      { title: "Como costurar bombacha gaúcha", url: "https://www.youtube.com/results?search_query=como+costurar+bombacha+ga%C3%BAcha" },
    ],
  },
  {
    emoji: "👗",
    title: "Fechar vestido",
    videos: [
      { title: "Montagem de vestido passo a passo", url: "https://www.youtube.com/results?search_query=montagem+de+vestido+passo+a+passo" },
    ],
  },
  {
    emoji: "🔒",
    title: "Pregar zíper",
    videos: [
      { title: "Como pregar zíper invisível", url: "https://www.youtube.com/results?search_query=como+pregar+z%C3%ADper+invis%C3%ADvel" },
      { title: "Como colocar zíper comum", url: "https://www.youtube.com/results?search_query=como+colocar+z%C3%ADper+comum" },
    ],
  },
  {
    emoji: "🪡",
    title: "Pregar elástico",
    videos: [
      { title: "Como pregar elástico na cintura", url: "https://www.youtube.com/results?search_query=como+pregar+el%C3%A1stico+na+cintura" },
      { title: "Como costurar elástico na overlock", url: "https://www.youtube.com/results?search_query=como+costurar+el%C3%A1stico+na+overlock" },
    ],
  },
];

const channels: VideoLink[] = [
  { title: "Marlene Mukai no YouTube", url: "https://www.youtube.com/results?search_query=marlene+mukai+youtube" },
  { title: "A Costureirinha", url: "https://www.youtube.com/results?search_query=a+costureirinha+youtube" },
  { title: "ModaByNill", url: "https://www.youtube.com/results?search_query=ModaByNill" },
  { title: "Ateliê de Costura Novo Visual", url: "https://www.youtube.com/results?search_query=atelie+de+costura+novo+visual" },
];

const TutoriaisCostura = () => {
  return (
    <>
      <Helmet>
        <title>Tutoriais de Costura e Costura Criativa | Vídeos de Montagem de Peças</title>
        <meta
          name="description"
          content="Playlist completa de tutoriais de costura e costura criativa: como pregar cós, fechar calça, blusa, vestido, blazer, pregar zíper, elástico e muito mais. Vídeos selecionados para alunos do curso Audaces."
        />
        <meta
          name="keywords"
          content="tutoriais de costura, vídeos de costura, costura criativa, montagem de peças, como pregar cós, como fazer braguilha, como fechar calça, como costurar blusa, montagem de vestido, pregar zíper, pregar elástico, curso audaces, costura, curso de costura, curso de costura criativa, aprender costura, curso audaces online"
        />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/tutoriais-costura" />
        <meta property="og:title" content="Tutoriais de Costura e Costura Criativa | Vídeos de Montagem" />
        <meta property="og:description" content="Reunimos dezenas de vídeos de ajuda para costura, costura criativa e montagem de peças." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/tutoriais-costura" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tutoriais de Costura e Costura Criativa",
          description: "Coletânea de vídeos e tutoriais úteis para costura e montagem de peças.",
          url: "https://aprendaaudaces.lovable.app/tutoriais-costura",
          isPartOf: {
            "@type": "WebSite",
            name: "Aprenda Audaces",
            url: "https://aprendaaudaces.lovable.app",
          },
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container px-6 mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao início
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl">
                📚 Playlist de Tutoriais de Costura e Costura Criativa
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Reuni aqui vários links de vídeos de ajuda na costura, costura criativa e montagem de peças.
                Aproveite enquanto complementa o seu curso Audaces.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="py-16">
          <div className="container px-6 mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, i) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.05, duration: 0.4 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">{section.emoji}</span>
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.videos.map(v => (
                      <li key={v.url}>
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-2 text-foreground hover:text-accent transition-colors"
                        >
                          <Youtube className="w-4 h-4 mt-1 shrink-0 text-accent" />
                          <span className="text-sm">
                            {v.title}
                            {v.source && <span className="text-muted-foreground"> — {v.source}</span>}
                            <ExternalLink className="inline w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </div>

            <section className="mt-12 bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">🔥 Canais MUITO bons para acompanhar</h2>
              <p className="text-muted-foreground mb-6">Esses canais são referência em costura criativa e modelagem.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {channels.map(c => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-accent transition-colors"
                    >
                      <Youtube className="w-5 h-5 text-accent" />
                      <span className="font-medium text-foreground">{c.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-auto text-muted-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 text-center bg-muted/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Quer dominar a modelagem profissional?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Combine esses tutoriais com nosso Curso Audaces completo e acelere seus resultados.
              </p>
              <Link
                to="/curso-audaces"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Conhecer o Curso Audaces
              </Link>
            </section>
          </div>
        </main>

        <WhatsAppButton />
      </div>
    </>
  );
};

export default TutoriaisCostura;
