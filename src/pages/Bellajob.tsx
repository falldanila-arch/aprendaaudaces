import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Home, Award, TrendingUp } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Bellajob = () => {
  const benefits = [
    { icon: Home, title: "Estude de Casa", desc: "Aprenda no seu ritmo, sem sair de casa, conciliando estudos com trabalho e família." },
    { icon: Clock, title: "Horários Flexíveis", desc: "Trabalhe com autonomia, definindo seus próprios horários e conquistando independência." },
    { icon: Award, title: "Cursos Completos", desc: "Conteúdos atualizados e didáticos, do iniciante ao avançado, para você se profissionalizar." },
    { icon: TrendingUp, title: "Renda Própria", desc: "Transforme conhecimento em oportunidade real de trabalho no mercado da beleza." },
  ];

  const courses = [
    "Maquiagem Profissional",
    "Design de Sobrancelhas",
    "Manicure e Pedicure",
    "Estética Facial",
    "Técnicas Avançadas de Beleza",
    "Empreendedorismo na Beleza",
  ];

  return (
    <>
      <Helmet>
        <title>Bellajob - Cursos Online de Beleza e Estética | Profissionalização</title>
        <meta name="description" content="Conheça o Bellajob: plataforma de cursos online de beleza e estética. Aprenda maquiagem, design de sobrancelhas, manicure e pedicure. Estude no seu ritmo e conquiste renda própria." />
        <meta name="keywords" content="bellajob, cursos de beleza online, maquiagem profissional, design de sobrancelhas, manicure e pedicure, estética, profissionalização beleza, renda extra beleza, cursos online beleza, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/bellajob" />
        <meta property="og:title" content="Bellajob - Cursos Online de Beleza e Estética" />
        <meta property="og:description" content="Plataforma completa para quem deseja entrar no mercado da beleza com cursos online de maquiagem, sobrancelhas, manicure e muito mais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/bellajob" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bellajob",
            "url": "https://bellajob.com.br",
            "description": "Plataforma de cursos online de beleza e estética para profissionalização e renda própria.",
            "sameAs": ["https://bellajob.com.br"]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,114,182,0.15),transparent_60%)]" />
        <div className="container px-6 mx-auto relative z-10 py-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium tracking-wider text-pink-700 bg-pink-100 rounded-full border border-pink-200">
              <Sparkles className="w-4 h-4" />
              BELLAJOB
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Profissionalize-se no Mercado da{" "}
              <span className="text-pink-600">Beleza e Estética</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Se você está buscando uma forma prática de se profissionalizar e conquistar renda própria,
              vale a pena conhecer o <strong>Bellajob</strong>, uma plataforma criada para quem deseja entrar no
              mercado da beleza e estética com mais segurança e preparação.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-10 py-6 rounded-full shadow-lg"
                onClick={() => window.open('https://bellajob.com.br', '_blank')}
              >
                Acessar Bellajob
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Oportunidades no Mercado da Beleza
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Hoje, existem diversas oportunidades para quem quer aprender <strong>maquiagem</strong>,{" "}
              <strong>design de sobrancelhas</strong>, <strong>manicure e pedicure</strong>, entre outras técnicas
              que permitem trabalhar com autonomia e horários flexíveis. Além disso, a grande vantagem é que
              já é possível estudar online, no seu ritmo e sem precisar sair de casa.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dessa forma, isso facilita muito para quem precisa conciliar estudos com trabalho, casa e família,
              sem abrir mão da qualificação profissional. Ademais, o mercado da beleza é um dos que mais crescem
              no Brasil, oferecendo oportunidades reais de renda.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Consequentemente, investir em capacitação nessa área é uma decisão estratégica para quem busca
              independência financeira. Portanto, quanto antes você começar, mais rápido poderá colher os resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Por Que Escolher o Bellajob?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cursos Disponíveis</h2>
            <p className="text-gray-600 text-lg mb-10">
              Na plataforma, você encontra cursos completos voltados tanto para iniciantes quanto para
              quem deseja aperfeiçoar suas habilidades. Do mesmo modo, os conteúdos são atualizados,
              didáticos e pensados para ajudar você a transformar conhecimento em oportunidade real de trabalho.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((c, i) => (
                <motion.div
                  key={i}
                  className="bg-pink-50 rounded-xl p-4 text-pink-800 font-medium border border-pink-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-500">
        <div className="container px-6 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dê o Primeiro Passo Rumo à Sua Profissionalização
            </h2>
            <p className="text-white/90 text-lg mb-10 leading-relaxed">
              Enfim, se a sua meta é entrar no mercado da beleza, desenvolver novas habilidades e construir
              uma nova fonte de renda, acesse o <strong>bellajob.com.br</strong> e comece agora mesmo.
              Em suma, o investimento em conhecimento é o caminho mais seguro para a independência profissional.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-lg font-semibold"
                onClick={() => window.open('https://bellajob.com.br', '_blank')}
              >
                Acessar bellajob.com.br
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};

export default Bellajob;
