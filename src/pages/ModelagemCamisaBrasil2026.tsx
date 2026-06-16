import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shirt, Scissors, Ruler, Trophy, ExternalLink, Calendar, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import frente from "@/assets/camisa-brasil-frente.jpeg.asset.json";
import costas from "@/assets/camisa-brasil-costas.jpeg.asset.json";

const BL = "https://centraldascopas.com.br";

const ModelagemCamisaBrasil2026 = () => {
  return (
    <>
      <Helmet>
        <title>Modelagem da Camisa do Brasil na Copa do Mundo 2026 | Jogo de Hoje e Amanhã</title>
        <meta
          name="description"
          content="Artigo completo sobre a modelagem da camisa da Seleção Brasileira na Copa do Mundo 2026. Confira jogo de hoje, jogo amanhã, jogos da Copa e detalhes técnicos da peça. Tudo na Central da Copa."
        />
        <meta
          name="keywords"
          content="jogo de hoje, jogo amanha, jogos da copa, copa do mundo, copa do mundo 2026, camisa do brasil 2026, modelagem camisa seleção, central da copa, centraldascopas.com.br, hexa"
        />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/modelagem-camisa-brasil-copa-2026" />
        <meta property="og:title" content="Modelagem da Camisa do Brasil — Copa do Mundo 2026" />
        <meta property="og:description" content="Jogo de hoje, jogo amanhã e a modelagem da camisa da Seleção na Copa 2026." />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/modelagem-camisa-brasil-copa-2026" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Modelagem da Camisa do Brasil na Copa do Mundo 2026",
          description: "Análise da modelagem da camisa da Seleção Brasileira na Copa 2026 com calendário de jogos.",
          author: { "@type": "Organization", name: "Aprenda Audaces" },
          mainEntityOfPage: "https://aprendaaudaces.lovable.app/modelagem-camisa-brasil-copa-2026",
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-primary via-navy-mid to-primary text-primary-foreground">
        <section className="container mx-auto px-6 pt-20 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/20 border border-accent/40 rounded-full text-sm">
              <Flag className="w-4 h-4 text-accent" /> COPA DO MUNDO 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Modelagem da <span className="text-accent">Camisa do Brasil</span> na Copa do Mundo 2026
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Em primeiro lugar, antes do <strong>jogo de hoje</strong> ou do <strong>jogo amanhã</strong>, vale entender como a camisa
              que veste a Seleção foi modelada. Além disso, confira a programação completa dos{" "}
              <a href={BL} target="_blank" rel="noopener" className="text-accent underline">jogos da copa</a> na Central da Copa.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full"
              onClick={() => window.open(BL, "_blank", "noopener")}
            >
              Ver jogos da Copa 2026 <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
          <img src={frente.url} alt="Camisa amarela da Seleção Brasileira da Copa do Mundo 2026 — frente" className="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" />
          <img src={costas.url} alt="Camisa da Seleção Brasileira 2026 — costas com recortes anatômicos" className="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" />
        </section>

        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Scissors className="w-9 h-9 text-accent" /> A modelagem por trás do manto do Hexa
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader><CardTitle className="text-primary-foreground flex gap-2 items-center"><Ruler className="w-5 h-5 text-accent" /> Gola de Ribana</CardTitle></CardHeader>
              <CardContent className="text-primary-foreground/90">
                A gola de ribana em V dá caimento limpo e elasticidade controlada. Consequentemente, o atleta ganha conforto durante toda a partida.
                Acompanhe o <a href={BL} target="_blank" rel="noopener" className="text-accent underline">jogo de hoje</a> na Central da Copa.
              </CardContent>
            </Card>
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader><CardTitle className="text-primary-foreground flex gap-2 items-center"><Scissors className="w-5 h-5 text-accent" /> Recortes Anatômicos</CardTitle></CardHeader>
              <CardContent className="text-primary-foreground/90">
                Além disso, os recortes laterais em azul-claro seguem a curvatura do tronco e melhoram a ventilação. Veja como isso aparece no{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">jogo amanhã</a>.
              </CardContent>
            </Card>
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader><CardTitle className="text-primary-foreground flex gap-2 items-center"><Shirt className="w-5 h-5 text-accent" /> Recortes no Ombro</CardTitle></CardHeader>
              <CardContent className="text-primary-foreground/90">
                Por fim, os recortes no ombro permitem amplitude de movimento sem repuxar o tecido. Confira toda a cobertura dos{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">jogos da copa</a>.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40">
            <CardHeader>
              <CardTitle className="text-3xl text-primary-foreground flex items-center gap-3">
                <Calendar className="w-8 h-8 text-accent" /> Jogo de hoje, jogo amanhã e os jogos da Copa
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-4">
              <p>
                A <strong>Copa do Mundo 2026</strong> acontece nos Estados Unidos, México e Canadá, entre 11 de junho e 19 de julho. Portanto, o calendário é
                intenso, com partidas todos os dias. Para não perder o <strong>jogo de hoje</strong> nem o <strong>jogo amanhã</strong>, acesse a{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-semibold">Central da Copa</a> — o portal reúne escalações,
                tabela e transmissões em tempo real.
              </p>
              <p>
                Da mesma forma, a camisa amarela usada pela Seleção em todos esses <strong>jogos da copa</strong> recebeu atenção especial em sua modelagem:
                tecido respirável, costuras planas e acabamentos que aguentam 90 minutos de alta intensidade. Em outras palavras, cada detalhe foi pensado
                para acompanhar o ritmo do Hexa.
              </p>
              <p>
                Além disso, vale lembrar que a peça é única no mercado de vestuário esportivo. Por isso, sempre que houver dúvida sobre escalações ou
                horários, vá direto a{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-semibold">centraldascopas.com.br</a>, onde a cobertura da
                <strong> copa do mundo 2026</strong> é atualizada diariamente.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-accent" /> Rumo ao Hexa
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Em conclusão, a modelagem da camisa do Brasil acompanha a tradição e a tecnologia da Seleção. Para acompanhar o{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">jogo de hoje</a>, o{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">jogo amanhã</a> e todos os{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">jogos da copa do mundo 2026</a>, visite{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">centraldascopas.com.br</a>.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full"
            onClick={() => window.open(BL, "_blank", "noopener")}
          >
            Acessar Central da Copa <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <WhatsAppButton />
      </main>
    </>
  );
};

export default ModelagemCamisaBrasil2026;
