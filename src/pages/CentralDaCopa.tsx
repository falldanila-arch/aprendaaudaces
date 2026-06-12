import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Music, Star, ExternalLink, Flag, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const CentralDaCopa = () => {
  const escalacao = [
    "Alisson (GOL)",
    "Danilo",
    "Marquinhos",
    "Gabriel Magalhães",
    "Wendell",
    "Bruno Guimarães",
    "André",
    "Lucas Paquetá",
    "Raphinha",
    "Vinicius Jr.",
    "Rodrygo",
  ];

  const grupos = [
    { nome: "Grupo A", times: ["México", "Canadá", "Uruguai", "Egito"] },
    { nome: "Grupo B", times: ["Estados Unidos", "Equador", "Coreia do Sul", "Noruega"] },
    { nome: "Grupo C", times: ["Argentina", "Austrália", "Tunísia", "Catar"] },
    { nome: "Grupo D", times: ["Brasil", "Marrocos", "Suíça", "Nova Zelândia"] },
    { nome: "Grupo E", times: ["França", "Senegal", "Japão", "Panamá"] },
    { nome: "Grupo F", times: ["Inglaterra", "Croácia", "Costa do Marfim", "Arábia Saudita"] },
    { nome: "Grupo G", times: ["Espanha", "Colômbia", "Irã", "Jamaica"] },
    { nome: "Grupo H", times: ["Alemanha", "Países Baixos", "Gana", "Bolívia"] },
    { nome: "Grupo I", times: ["Portugal", "Bélgica", "Camarões", "Honduras"] },
    { nome: "Grupo J", times: ["Itália", "México (Conv.)", "Nigéria", "Paraguai"] },
    { nome: "Grupo K", times: ["Holanda", "Áustria", "África do Sul", "Costa Rica"] },
    { nome: "Grupo L", times: ["Dinamarca", "Turquia", "Argélia", "Venezuela"] },
  ];

  return (
    <>
      <Helmet>
        <title>Central da Copa 2026: Brasil x Marrocos 13/06, Escalação e Grupos</title>
        <meta
          name="description"
          content="Central da Copa 2026: tudo sobre a Copa do Mundo FIFA 2026. Jogo Brasil x Marrocos em 13/06, escalação da Seleção, 12 grupos completos, álbum, mascote e hino oficial. Acesse centraldascopas.com.br."
        />
        <meta
          name="keywords"
          content="copa do mundo 2026, central da copa, brasil x marrocos, jogo do brasil 13/06, escalação brasil 2026, grupos copa 2026, álbum copa 2026, mascote copa 2026, hino copa 2026, rumo ao hexa, centraldascopas.com.br"
        />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/central-da-copa" />
        <meta property="og:title" content="Central da Copa 2026: Brasil x Marrocos 13/06" />
        <meta property="og:description" content="Jogo Brasil x Marrocos, escalação, 12 grupos, álbum, mascote e hino. Rumo ao Hexa!" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/central-da-copa" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "Copa do Mundo FIFA 2026 - Central da Copa",
          description: "Cobertura completa da Copa do Mundo 2026: jogo Brasil x Marrocos em 13/06, escalações, 12 grupos, álbum, mascote e hino oficial.",
          startDate: "2026-06-11",
          endDate: "2026-07-19",
          sport: "Futebol",
          url: "https://centraldascopas.com.br",
          location: [
            { "@type": "Place", name: "Estados Unidos" },
            { "@type": "Place", name: "México" },
            { "@type": "Place", name: "Canadá" },
          ],
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-primary via-navy-mid to-primary text-primary-foreground">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-20 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/20 border border-accent/40 rounded-full text-sm">
              <Trophy className="w-4 h-4 text-accent" /> CENTRAL DA COPA
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tudo sobre a <span className="text-accent">Copa do Mundo</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Jogos, escalações, chaves, álbum, mascote, hino e o sonho do <strong className="text-accent">Hexa</strong>.
              Sua central oficial de informações da Copa.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full"
              onClick={() => window.open("https://centraldascopas.com.br", "_blank", "noopener")}
            >
              Acessar Central da Copa <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        {/* Jogo do dia */}
        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-primary-foreground">
                <Calendar className="w-8 h-8 text-accent" /> Jogo do Brasil — 13/06
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-3">
              <p>
                <strong className="text-accent">Brasil x Argentina</strong> — abertura clássica da fase de grupos.
                Horário: <strong>16h</strong> (horário de Brasília). Transmissão nas principais emissoras.
              </p>
              <p>
                Acompanhe ao vivo, com lances, estatísticas e narração em tempo real na{" "}
                <a
                  href="https://centraldascopas.com.br"
                  target="_blank"
                  rel="noopener"
                  className="text-accent underline font-semibold"
                >
                  Central da Copa
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Escalação */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-9 h-9 text-accent" /> Escalação do Brasil
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {escalacao.map((jogador, i) => (
              <motion.div
                key={jogador}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card/10 backdrop-blur border border-accent/30 rounded-lg p-4 flex items-center gap-3"
              >
                <Flag className="w-5 h-5 text-accent" />
                <span className="font-medium">{jogador}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-primary-foreground/80 mt-4 text-sm">
            Técnico: Dorival Jr. — esquema 4-3-3. Confira a escalação completa atualizada na{" "}
            <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline">
              centraldascopas.com.br
            </a>
            .
          </p>
        </section>

        {/* Chaves */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Shield className="w-9 h-9 text-accent" /> Chaves dos Grupos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {grupos.map((g) => (
              <Card key={g.nome} className="bg-card/10 backdrop-blur border-accent/30">
                <CardHeader>
                  <CardTitle className="text-accent">{g.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-primary-foreground/90">
                    {g.times.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent" /> {t}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Álbum, Mascote, Hino */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground">
                <Trophy className="w-6 h-6 text-accent" /> Álbum da Copa
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              Colecione as figurinhas oficiais, troque com amigos e complete seu álbum. Guia de figurinhas raras e
              dicas de troca disponíveis na Central da Copa.
            </CardContent>
          </Card>
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground">
                <Star className="w-6 h-6 text-accent" /> Mascote Oficial
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              Conheça o mascote oficial da Copa, sua história, simbolismo e curiosidades. Um símbolo de união entre
              torcedores do mundo todo.
            </CardContent>
          </Card>
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground">
                <Music className="w-6 h-6 text-accent" /> Hino e Música
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              Ouça o hino oficial da Copa e as músicas que embalam a torcida brasileira rumo ao Hexa. Playlist completa
              na Central.
            </CardContent>
          </Card>
        </section>

        {/* Rumo ao Hexa */}
        <section className="container mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Rumo ao <span className="text-accent">Hexa</span> 🏆
          </motion.h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            A seleção brasileira busca o sexto título mundial. Acompanhe cada jogo, cada gol e cada emoção na{" "}
            <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline font-bold">
              Central da Copa
            </a>
            , o portal completo da Copa do Mundo.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full"
            onClick={() => window.open("https://centraldascopas.com.br", "_blank", "noopener")}
          >
            Visitar centraldascopas.com.br <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <WhatsAppButton />
      </main>
    </>
  );
};

export default CentralDaCopa;
