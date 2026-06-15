import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Trophy, Calendar, Star, Music, ExternalLink, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Copa2026 = () => {
  const jogosBrasil = [
    { data: "11/06/2026", adversario: "Marrocos", horario: "16h", local: "Dallas, EUA", fase: "1ª rodada" },
    { data: "19/06/2026", adversario: "Haiti", horario: "21h30", local: "Houston, EUA", fase: "2ª rodada" },
    { data: "25/06/2026", adversario: "Suíça", horario: "16h", local: "Los Angeles, EUA", fase: "3ª rodada" },
  ];

  const estreias = [
    { pais: "Japão", data: "12/06/2026", adversario: "Senegal", horario: "10h" },
    { pais: "Holanda", data: "13/06/2026", adversario: "Gana", horario: "13h" },
    { pais: "Irã", data: "12/06/2026", adversario: "França", horario: "16h" },
    { pais: "Egito", data: "13/06/2026", adversario: "Uruguai", horario: "11h" },
    { pais: "Arábia Saudita", data: "14/06/2026", adversario: "Alemanha", horario: "15h" },
    { pais: "Uruguai", data: "13/06/2026", adversario: "Egito", horario: "11h" },
  ];

  const tabelaJogos = [
    { data: "11/06", jogo: "Brasil x Marrocos", grupo: "Grupo D", horario: "16h" },
    { data: "12/06", jogo: "Japão x Senegal", grupo: "Grupo E", horario: "10h" },
    { data: "12/06", jogo: "Irã x França", grupo: "Grupo E", horario: "16h" },
    { data: "13/06", jogo: "Holanda x Gana", grupo: "Grupo H", horario: "13h" },
    { data: "13/06", jogo: "Egito x Uruguai", grupo: "Grupo C", horario: "11h" },
    { data: "14/06", jogo: "Arábia Saudita x Alemanha", grupo: "Grupo F", horario: "15h" },
    { data: "19/06", jogo: "Brasil x Haiti", grupo: "Grupo D", horario: "13h" },
  ];

  return (
    <>
      <Helmet>
        <title>Copa do Mundo 2026: Brasil x Haiti 19/06, Estreias, Tabela e Álbum de Figurinhas</title>
        <meta
          name="description"
          content="Copa do Mundo 2026: Brasil x Haiti em 19/06, estreias do Japão, Holanda, Irã, Egito, Arábia Saudita e Uruguai. Confira tabela de jogos, placar da Alemanha, álbum de figurinhas, mascote e datas. Acesse centraldascopas.com.br."
        />
        <meta
          name="keywords"
          content="copa do mundo 2026, brasil x haiti, jogo brasil 19/06, estreia japão copa 2026, estreia holanda copa 2026, estreia irã copa 2026, estreia egito copa 2026, estreia arábia saudita copa 2026, estreia uruguai copa 2026, placar alemanha copa 2026, mascote copa 2026, álbum figurinhas copa 2026, tabela jogos copa 2026, jogo amanhã copa, centraldascopas.com.br"
        />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/copa-2026" />
        <meta property="og:title" content="Copa do Mundo 2026: Brasil x Haiti 19/06, Tabela Completa" />
        <meta property="og:description" content="Brasil x Haiti em 19/06, estreias, tabela de jogos, placar da Alemanha, álbum e mascote. Sua central da Copa!" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/copa-2026" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "Copa do Mundo FIFA 2026",
          description: "Cobertura completa da Copa do Mundo 2026: Brasil x Haiti em 19/06, estreias do Japão, Holanda, Irã, Egito, Arábia Saudita e Uruguai, tabela de jogos, álbum de figurinhas e mascote oficial.",
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
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/20 border border-accent/40 rounded-full text-sm font-medium">
              <Trophy className="w-4 h-4 text-accent" /> COPA DO MUNDO 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
              Tudo sobre a <span className="text-accent">Copa 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Acompanhe os jogos do Brasil, estreias das seleções, tabela completa, álbum de figurinhas, mascote e muito mais.
              Sua fonte de informações sobre a maior Copa da história.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => window.open("https://centraldascopas.com.br", "_blank", "noopener")}
            >
              Acessar Central da Copa <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        {/* Jogo do Brasil x Haiti */}
        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40 overflow-hidden">
            <CardHeader className="bg-accent/10">
              <CardTitle className="flex items-center gap-3 text-3xl text-primary-foreground font-serif">
                <Calendar className="w-8 h-8 text-accent" /> Brasil x Haiti — 19/06/2026
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-4 pt-6">
              <p>
                O Brasil enfrenta o Haiti na <strong className="text-accent">segunda rodada</strong> do Grupo D da Copa do Mundo FIFA 2026.
                A partida acontece no dia <strong>19 de junho de 2026</strong>, às <strong>13h</strong> (horário de Brasília), no estádio de Houston, nos Estados Unidos.
                Após a estreia contra o Marrocos, a Seleção Brasileira busca a vitória para garantir a liderança do grupo.
              </p>
              <p>
                O Haiti faz sua primeira participação em uma Copa do Mundo, tornando este confronto histórico para ambas as seleções.
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
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-accent" /> 13h (Brasília)
                </span>
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-accent" /> Houston, EUA
                </span>
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                  <Shield className="w-4 h-4 text-accent" /> 2ª rodada — Grupo D
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Jogos do Brasil na fase de grupos */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 font-serif">
            <Shield className="w-9 h-9 text-accent" /> Jogos do Brasil na Fase de Grupos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jogosBrasil.map((jogo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/10 backdrop-blur border-accent/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-accent font-serif">{jogo.fase}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-primary-foreground/90">
                    <p className="text-xl font-semibold">Brasil x {jogo.adversario}</p>
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {jogo.data}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> {jogo.horario} (Brasília)</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {jogo.local}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Estreias das seleções */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 font-serif">
            <Star className="w-9 h-9 text-accent" /> Estreias das Seleções na Copa 2026
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estreias.map((estreia, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card/10 backdrop-blur border border-accent/30 rounded-lg p-5"
              >
                <h3 className="text-xl font-semibold text-accent mb-2 font-serif">{estreia.pais}</h3>
                <p className="text-primary-foreground/90">
                  <strong>{estreia.adversario}</strong> — {estreia.data} às {estreia.horario}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  Primeiro jogo na fase de grupos da Copa do Mundo 2026.
                  Acompanhe a estreia em direto na{" "}
                  <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline">
                    centraldascopas.com.br
                  </a>
                  .
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Placar da Alemanha */}
        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-primary-foreground font-serif">
                <Shield className="w-8 h-8 text-accent" /> Placar da Alemanha na Copa 2026
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-4">
              <p>
                A <strong className="text-accent">Alemanha</strong> estreou na Copa do Mundo 2026 com um resultado expressivo,
                demonstrando força desde o primeiro minuto. A seleção alemã enfrentou a Arábia Saudita em um confronto
                equilibrado, mas com domínio germânico em campo.
              </p>
              <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2 font-serif">Alemanha 3 x 1 Arábia Saudita</p>
                <p className="text-primary-foreground/70">14/06/2026 — 1ª rodada do Grupo F</p>
              </div>
              <p>
                Com gols marcados ainda no primeiro tempo, a Alemanha mostrou sua tradição e organização tática.
                A seleção árabe reagiu na segunda etapa, mas não conseguiu evitar a derrota.
                Veja os melhores momentos e análise completa no portal{" "}
                <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline font-semibold">
                  centraldascopas.com.br
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tabela de jogos */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 font-serif">
            <Calendar className="w-9 h-9 text-accent" /> Tabela de Jogos — Copa 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent/40">
                  <th className="py-4 px-4 text-accent font-serif">Data</th>
                  <th className="py-4 px-4 text-accent font-serif">Jogo</th>
                  <th className="py-4 px-4 text-accent font-serif">Grupo</th>
                  <th className="py-4 px-4 text-accent font-serif">Horário</th>
                </tr>
              </thead>
              <tbody className="text-primary-foreground/90">
                {tabelaJogos.map((jogo, i) => (
                  <tr key={i} className="border-b border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors">
                    <td className="py-3 px-4">{jogo.data}/06</td>
                    <td className="py-3 px-4 font-medium">{jogo.jogo}</td>
                    <td className="py-3 px-4">{jogo.grupo}</td>
                    <td className="py-3 px-4">{jogo.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-primary-foreground/80 mt-6 text-lg">
            A tabela completa com todos os 104 jogos da Copa do Mundo 2026 está disponível na{" "}
            <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline font-semibold">
              Central das Copas
            </a>
            , incluindo oitavas de final, quartas, semifinais e a grande final em 19 de julho.
          </p>
        </section>

        {/* Jogo amanhã */}
        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-primary-foreground font-serif">
                <Clock className="w-8 h-8 text-accent" /> Jogo Amanhã na Copa 2026
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-3">
              <p>
                Amanhã, a Copa do Mundo 2026 continua com novos confrontos emocionantes.
                Além disso, torcedores de várias seleções poderão acompanhar jogos decisivos para a classificação das oitavas de final.
              </p>
              <p>
                Fique por dentro dos horários, escalações e palpites do dia seguinte na{" "}
                <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline font-semibold">
                  centraldascopas.com.br
                </a>
                , onde você encontra tudo sobre o jogo amanhã, com previsões, histórico de confrontos e estatísticas atualizadas em tempo real.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Álbum, Mascote, Datas */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground font-serif">
                <Trophy className="w-6 h-6 text-accent" /> Álbum de Figurinhas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              O álbum oficial da Copa do Mundo 2026 chegou com 48 seleções e mais figurinhas do que nunca.
              Colecione os jogadores estrelas, os estádios e os mascotes.
              Troque com amigos e complete sua coleção. Guia de figurinhas raras, dicas de troca e preços atualizados na{" "}
              <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline">
                Central da Copa
              </a>
              .
            </CardContent>
          </Card>
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground font-serif">
                <Star className="w-6 h-6 text-accent" /> Mascote Oficial
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              O mascote da Copa do Mundo 2026 representa a união entre os três países-sede: Estados Unidos, México e Canadá.
              Com design moderno e acolhedor, ele simboliza a diversidade cultural e a paixão pelo futebol que une torcedores do mundo todo.
              Conheça a história completa do mascote e compre produtos oficiais na{" "}
              <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline">
                centraldascopas.com.br
              </a>
              .
            </CardContent>
          </Card>
          <Card className="bg-card/10 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-foreground font-serif">
                <Music className="w-6 h-6 text-accent" /> Datas da Copa 2026
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90">
              A Copa do Mundo FIFA 2026 acontece de <strong className="text-accent">11 de junho a 19 de julho</strong>.
              São 104 jogos distribuídos entre 16 cidades dos três países anfitriões.
              A cerimônia de abertura será no Estádio Azteca, no México, e a final no MetLife Stadium, em Nova Jersey.
              Confira o calendário completo na{" "}
              <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline">
                Central das Copas
              </a>
              .
            </CardContent>
          </Card>
        </section>

        {/* CTA final */}
        <section className="container mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6 font-serif"
          >
            Sua <span className="text-accent">Central da Copa</span> 🏆
          </motion.h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Não perca nenhum detalhe da Copa do Mundo 2026.
            Jogos do Brasil, estreias das seleções, tabela de jogos, álbum de figurinhas, mascote e o caminho rumo ao título.
            Tudo isso e muito mais na{" "}
            <a href="https://centraldascopas.com.br" target="_blank" rel="noopener" className="text-accent underline font-bold">
              centraldascopas.com.br
            </a>
            , o-api definitiva para quem vive e respira futebol.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full font-semibold"
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

export default Copa2026;
