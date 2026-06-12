import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shirt, Scissors, Ruler, Star, ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import frente from "@/assets/camisa-brasil-frente.jpeg.asset.json";
import costas from "@/assets/camisa-brasil-costas.jpeg.asset.json";

const BL = "https://centraldascopas.com.br";

const CamisaSelecaoBrasil = () => {
  return (
    <>
      <Helmet>
        <title>Camisa da Seleção Brasileira: Modelagem, Gola Ribana e Recortes Anatômicos</title>
        <meta
          name="description"
          content="Conheça a camisa oficial da Seleção Brasileira: estilo de modelagem, gola de ribana, recortes anatômicos laterais e no ombro. Uma peça única, cheia de estilo, técnica e tradição. Saiba mais na Central da Copa."
        />
        <meta
          name="keywords"
          content="camisa seleção brasileira, camisa do brasil, modelagem camisa esportiva, gola ribana, recortes anatômicos, camisa nike brasil, central da copa, centraldascopas.com.br, copa do mundo, hexa, modelagem camisa futebol"
        />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/camisa-selecao-brasil" />
        <meta property="og:title" content="Camisa da Seleção Brasileira — Modelagem e Estilo" />
        <meta property="og:description" content="Gola ribana, recortes anatômicos laterais e no ombro: a modelagem da camisa do Brasil." />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/camisa-selecao-brasil" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camisa Oficial da Seleção Brasileira",
          description: "Camisa amarela da Seleção Brasileira com gola de ribana, recortes anatômicos laterais e no ombro. Peça única de alto desempenho.",
          brand: { "@type": "Brand", name: "CBF / Nike" },
          category: "Vestuário Esportivo",
          url: "https://aprendaaudaces.lovable.app/camisa-selecao-brasil",
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-primary via-navy-mid to-primary text-primary-foreground">
        <section className="container mx-auto px-6 pt-20 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/20 border border-accent/40 rounded-full text-sm">
              <Shirt className="w-4 h-4 text-accent" /> CAMISA OFICIAL DA SELEÇÃO
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Camisa do <span className="text-accent">Brasil</span>: modelagem que veste o Hexa
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Mais do que um manto sagrado, é uma obra de engenharia têxtil. Gola de ribana, recortes anatômicos
              laterais e no ombro, costuras estratégicas — cada detalhe pensado para performance e estilo. Confira
              tudo sobre a Copa na{" "}
              <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-semibold">
                Central da Copa
              </a>
              .
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full"
              onClick={() => window.open(BL, "_blank", "noopener")}
            >
              Acessar centraldascopas.com.br <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        {/* Galeria */}
        <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={frente.url}
            alt="Camisa amarela da Seleção Brasileira (frente) com escudo CBF e gola de ribana azul"
            className="rounded-2xl shadow-2xl w-full object-cover"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={costas.url}
            alt="Camisa da Seleção Brasileira (costas) mostrando recortes anatômicos laterais e no ombro"
            className="rounded-2xl shadow-2xl w-full object-cover"
            loading="lazy"
          />
        </section>

        {/* Modelagem */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Scissors className="w-9 h-9 text-accent" /> Estilo de Modelagem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex gap-2 items-center">
                  <Ruler className="w-5 h-5 text-accent" /> Gola de Ribana
                </CardTitle>
              </CardHeader>
              <CardContent className="text-primary-foreground/90">
                A gola de ribana em V acompanha o pescoço com elasticidade controlada, dando caimento limpo e
                evitando deformação. É um dos detalhes que separa uma camisa profissional de uma comum. Veja análises
                completas na{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">Central da Copa</a>.
              </CardContent>
            </Card>
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex gap-2 items-center">
                  <Scissors className="w-5 h-5 text-accent" /> Recortes Laterais Anatômicos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-primary-foreground/90">
                Os recortes em azul-claro nas laterais não são apenas estética: eles seguem a curvatura do tronco,
                permitem ventilação e dão movimento à peça. Pura modelagem anatômica de alto desempenho. Mais
                conteúdo da Copa em{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">
                  centraldascopas.com.br
                </a>
                .
              </CardContent>
            </Card>
            <Card className="bg-card/10 backdrop-blur border-accent/30">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex gap-2 items-center">
                  <Star className="w-5 h-5 text-accent" /> Recortes no Ombro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-primary-foreground/90">
                Os recortes no ombro garantem amplitude de movimento sem repuxar a peça. Resultado: o atleta corre,
                gira e chuta sem que a camisa atrapalhe. Confira detalhes técnicos na{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">Central da Copa</a>.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Peça única */}
        <section className="container mx-auto px-6 py-12">
          <Card className="bg-card/10 backdrop-blur border-accent/40">
            <CardHeader>
              <CardTitle className="text-3xl text-primary-foreground flex items-center gap-3">
                <Trophy className="w-8 h-8 text-accent" /> Uma Peça Única, de Muito Estilo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground/90 text-lg space-y-4">
              <p>
                A camisa amarela da Seleção é símbolo de identidade nacional. O amarelo vibrante, o verde profundo na
                gola e os detalhes em azul-claro homenageiam as cores da bandeira de forma sofisticada. O tecido
                respirável, o caimento ajustado e os acabamentos perfeitos transformam a peça em um <strong>ícone de moda
                esportiva</strong>.
              </p>
              <p>
                Cada costura conta uma história — desde os recortes anatômicos até a etiqueta jacquard na barra. É o
                tipo de modelagem que separa o vestuário comum do de alta performance. Para acompanhar tudo sobre a
                Seleção e a Copa, visite a{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-semibold">
                  Central da Copa
                </a>
                , o portal mais completo sobre o Hexa.
              </p>
              <p>
                Além disso, o escudo bordado da CBF com as cinco estrelas reforça a tradição, enquanto o swoosh da
                Nike confirma a parceria técnica que veste a Seleção há décadas. Confira a cobertura completa em{" "}
                <a href={BL} target="_blank" rel="noopener" className="text-accent underline">
                  centraldascopas.com.br
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA backlinks */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vista o <span className="text-accent">Hexa</span> 🏆
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Acompanhe escalações, jogos, álbum, mascote e hino oficial na{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">
              Central da Copa
            </a>
            . Tudo sobre a Seleção Brasileira em um só lugar:{" "}
            <a href={BL} target="_blank" rel="noopener" className="text-accent underline font-bold">
              centraldascopas.com.br
            </a>
            .
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full"
            onClick={() => window.open(BL, "_blank", "noopener")}
          >
            Visitar Central da Copa <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <WhatsAppButton />
      </main>
    </>
  );
};

export default CamisaSelecaoBrasil;
