import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, Clock, Award, BookOpen, Monitor, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-cover.jpg";
import professorImage from "@/assets/professor-robson.jpg";
import productBox from "@/assets/product-box.jpg";

const CursoAudaces = () => {
  return (
    <>
      <Helmet>
        <title>Curso Audaces | Aprenda Audaces do Zero ao Avançado | Modelagem Digital</title>
        <meta name="description" content="Curso Audaces completo: aprenda Audaces software, Audaces encaixe, Audaces Digiflash e Audaces 7. O melhor curso Audaces do Brasil com modelagem digital, moldes PDF, costura profissional. Aprender Audaces nunca foi tão fácil. 500+ alunos formados." />
        <meta name="keywords" content="curso Audaces, Audaces, aprender Audaces, Audaces software, Audaces encaixe, Audaces Digiflash, Audaces 7, Audaces grátis, baixar Audaces, download Audaces, curso de modelagem, cursos de modelagem, modelagem digital, moldes PDF, costura profissional, operador Audaces" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/curso-audaces" />
        <meta property="og:title" content="Curso Audaces | Aprenda Audaces do Zero ao Avançado" />
        <meta property="og:description" content="O melhor curso Audaces do Brasil. Aprenda modelagem digital, Audaces encaixe, Digiflash e crie moldes profissionais. 500+ alunos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/curso-audaces" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Curso Audaces - Modelagem Digital Completa",
            "description": "Curso Audaces completo para aprender modelagem digital, criação de moldes em PDF e operação do Audaces software.",
            "provider": {
              "@type": "Organization",
              "name": "Aprenda Audaces",
              "url": "https://aprendaaudaces.lovable.app"
            },
            "instructor": {
              "@type": "Person",
              "name": "Professor Robson"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "ratingCount": "500"
            },
            "offers": {
              "@type": "Offer",
              "price": "299.90",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Curso Audaces - Aprenda modelagem digital com o melhor curso Audaces do Brasil" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
          </div>
          <div className="container relative z-10 px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
                  CURSO AUDACES COMPLETO
                </span>
                <h1 className="mb-6 text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Curso Audaces: Aprenda <span className="text-accent">Audaces</span> do Zero ao Avançado
                </h1>
                <p className="mb-10 text-xl text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
                  O melhor curso Audaces do Brasil. Além disso, você vai dominar o Audaces software, 
                  Audaces encaixe e Audaces Digiflash com aulas práticas e suporte exclusivo. 
                  Consequentemente, estará preparado para o mercado de trabalho.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-[0_8px_30px_-8px_hsl(var(--coral)/0.5)]" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                      Começar Curso Audaces Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <span className="text-xs text-primary-foreground/70 mt-2">Curso: Aprenda Modelagem no Audaces e Lucre</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O que é o Curso Audaces */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                O Que é o Curso Audaces e Por Que Aprender Audaces?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  O <strong>curso Audaces</strong> é um programa completo de formação profissional que ensina você a dominar 
                  o <strong>Audaces software</strong>, a ferramenta mais utilizada na indústria da moda brasileira. Ademais, 
                  o Audaces é o sistema CAD/CAM líder em modelagem digital, utilizado por milhares de empresas de confecção 
                  em todo o Brasil e no mundo. Portanto, aprender Audaces é essencial para quem deseja se destacar 
                  no mercado de modelagem e costura profissional.
                </p>
                <p>
                  Todavia, muitas pessoas ainda têm dúvidas sobre como começar a aprender Audaces. Por isso, nosso 
                  <strong> curso Audaces</strong> foi desenvolvido para levar você do zero ao avançado, de forma prática e 
                  descomplicada. Além disso, o curso cobre desde os fundamentos do Audaces software até técnicas avançadas 
                  de <strong>Audaces encaixe</strong> e <strong>Audaces Digiflash</strong>. Consequentemente, ao finalizar 
                  o curso Audaces, você estará apto a trabalhar como operador de Audaces em qualquer confecção.
                </p>
                <p>
                  Do mesmo modo, nosso curso Audaces é ideal tanto para iniciantes quanto para profissionais que desejam 
                  atualizar seus conhecimentos. Em vista de que o mercado de moda exige cada vez mais profissionais 
                  qualificados em Audaces, investir neste curso é investir no seu futuro profissional. Enfim, 
                  aprender Audaces com o Professor Robson é a maneira mais rápida e eficiente de dominar a modelagem digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para Quem é o Curso Audaces */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Para Quem é o Curso Audaces?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: <Users className="w-8 h-8 text-accent" />, title: "Iniciantes em Audaces", desc: "Se você nunca usou o Audaces software, nosso curso Audaces começa do absoluto zero. Assim, você aprende cada ferramenta passo a passo." },
                { icon: <Monitor className="w-8 h-8 text-accent" />, title: "Modelistas e Costureiras", desc: "Profissionais de costura que desejam migrar para a modelagem digital no Audaces. Dessa forma, aumentam sua produtividade e precisão." },
                { icon: <Award className="w-8 h-8 text-accent" />, title: "Operadores de CAD", desc: "Quem já trabalha com CAD mas quer dominar o Audaces encaixe e Audaces Digiflash. Portanto, amplia suas habilidades técnicas." },
                { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Estudantes de Moda", desc: "Estudantes que precisam aprender Audaces para o mercado de trabalho. Consequentemente, saem na frente na busca por emprego." },
                { icon: <Sparkles className="w-8 h-8 text-accent" />, title: "Empreendedores", desc: "Quem deseja criar e vender moldes digitais usando o Audaces. Bem como, aprender a comercializar seus produtos online." },
                { icon: <Clock className="w-8 h-8 text-accent" />, title: "Profissionais de Confecção", desc: "Funcionários de confecções que precisam operar o Audaces 7 no dia a dia. Ainda mais, quem trabalha com corte e enfesto." },
              ].map((item, i) => (
                <motion.div key={i} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conteúdo Programático */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              O Que Você Aprende no Curso Audaces
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                "Interface completa do Audaces software e criação de barra de ferramentas personalizada",
                "Construção de base do torso usando tabela de medidas do corpo",
                "Criação e transferência de pence princesa no Audaces",
                "Três métodos de criação de moldes: base do corpo, referência similar e tabela de medidas",
                "Saia godê e técnicas avançadas de modelagem no Audaces",
                "Pences, bolsos e recortes com precisão no Audaces software",
                "Workflow de exportação e importação entre CorelDRAW e Audaces",
                "Preparação de impressão para plotters e impressoras",
                "Audaces encaixe: otimização de tecido e mapa de risco",
                "Audaces Digiflash: digitalização de moldes físicos",
                "Conceitos de sublimação e arte para bordado no Audaces",
                "Estratégias de comercialização de moldes digitais em marketplaces",
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que o Audaces é importante */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Por Que o Audaces Software é Essencial na Indústria da Moda?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  O <strong>Audaces software</strong> é o sistema CAD/CAM mais utilizado pela indústria têxtil brasileira. 
                  Além disso, o Audaces é adotado por confecções de todos os portes, desde pequenos ateliês até grandes 
                  indústrias. Consequentemente, profissionais que dominam o Audaces têm uma vantagem competitiva significativa 
                  no mercado de trabalho. Portanto, fazer um <strong>curso Audaces</strong> de qualidade é o primeiro passo 
                  para uma carreira de sucesso.
                </p>
                <p>
                  Entretanto, muitas pessoas buscam por "<strong>Audaces grátis</strong>" ou "<strong>baixar Audaces</strong>" 
                  na internet. Todavia, o uso de software não licenciado traz riscos legais e técnicos significativos. 
                  Em contrapartida, nosso curso Audaces ensina você a trabalhar com o software de forma profissional 
                  e ética. Do mesmo modo, ao dominar o Audaces através do nosso curso, você poderá trabalhar em empresas 
                  que já possuem a licença do software.
                </p>
                <p>
                  O <strong>Audaces 7</strong> trouxe diversas melhorias em relação às versões anteriores. Ademais, 
                  recursos como o <strong>Audaces encaixe</strong> automático permitem economizar até 15% de tecido. 
                  Bem como, o <strong>Audaces Digiflash</strong> revolucionou a digitalização de moldes físicos. 
                  Em suma, dominar todas essas ferramentas através do nosso curso Audaces é fundamental para quem 
                  deseja se profissionalizar na área de modelagem digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instrutor */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent/30">
                <img src={professorImage} alt="Professor Robson - Instrutor do curso Audaces" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Professor Robson — Seu Instrutor no Curso Audaces
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Com mais de 20 anos de experiência no Audaces software, o Professor Robson já formou mais de 
                  500 alunos em cursos de modelagem e Audaces. Além disso, ele atua como consultor em confecções 
                  de todo o Brasil. Consequentemente, suas aulas combinam teoria e prática do dia a dia profissional.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ademais, o Professor Robson é especialista em Audaces encaixe, Audaces Digiflash e todas as 
                  ferramentas do Audaces 7. Portanto, você aprenderá com quem realmente domina o Audaces software 
                  e vive a realidade do mercado de modelagem digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              O Que Nossos Alunos do Curso Audaces Dizem
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Maria Silva", text: "O curso Audaces mudou minha carreira. Aprender Audaces com o Professor Robson foi a melhor decisão que tomei. Agora trabalho como operadora de Audaces em uma grande confecção." },
                { name: "João Santos", text: "Eu buscava aprender Audaces há meses. Esse curso Audaces é completo e prático. Além disso, o suporte pelo WhatsApp é excelente. Recomendo para quem quer dominar o Audaces software." },
                { name: "Ana Costa", text: "Graças ao curso Audaces, consegui criar meus próprios moldes digitais e vender online. O conteúdo sobre Audaces encaixe e Digiflash é muito detalhado e fácil de entender." },
              ].map((item, i) => (
                <motion.div key={i} className="bg-card p-8 rounded-2xl border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{item.text}"</p>
                  <p className="font-bold text-card-foreground">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Perguntas Frequentes sobre o Curso Audaces
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Preciso ter o Audaces instalado para fazer o curso Audaces?", a: "Não necessariamente. Nosso curso Audaces ensina passo a passo como utilizar o Audaces software. Além disso, você pode praticar em qualquer computador que tenha o Audaces instalado, como em escolas ou empresas." },
                { q: "O curso Audaces serve para iniciantes?", a: "Sim! Nosso curso Audaces foi desenvolvido para levar você do zero ao avançado. Portanto, mesmo que nunca tenha usado o Audaces software, conseguirá acompanhar todas as aulas." },
                { q: "O curso Audaces ensina Audaces encaixe e Audaces Digiflash?", a: "Sim. O curso Audaces cobre o Audaces encaixe para otimização de tecido e o Audaces Digiflash para digitalização de moldes. Consequentemente, você dominará todas as ferramentas principais." },
                { q: "Em quanto tempo consigo aprender Audaces?", a: "O curso Audaces tem aproximadamente 6 horas de conteúdo em vídeo. Todavia, recomendamos que você pratique regularmente. Em média, nossos alunos dominam o Audaces software em 2 a 4 semanas." },
                { q: "O curso Audaces tem suporte?", a: "Sim! Ao adquirir o curso Audaces, você recebe acesso a um grupo exclusivo no WhatsApp com o Professor Robson e outros alunos. Dessa forma, suas dúvidas são respondidas rapidamente." },
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-bold text-card-foreground mb-3">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links Internos */}
        <section className="py-16 bg-muted/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Explore Mais Conteúdos sobre Audaces e Cursos de Modelagem
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                { label: "Cursos de Modelagem", to: "/cursos-de-modelagem" },
                { label: "Audaces", to: "/audaces" },
                { label: "Audaces Encaixe", to: "/audaces-encaixe" },
                { label: "Audaces Digiflash", to: "/audaces-digiflash" },
                { label: "Audaces 7", to: "/audaces-7" },
                { label: "Modelagem Digital", to: "/modelagem-digital-completa" },
                { label: "Costura Profissional", to: "/costura" },
                { label: "Moldes PDF", to: "/moldes-pdf" },
                { label: "Operador Audaces", to: "/caminho-do-sucesso-usando-audaces" },
              ].map((link, i) => (
                <Link key={i} to={link.to} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary" />
          <div className="container px-6 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Comece Seu Curso Audaces Agora
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Invista no melhor curso Audaces do Brasil por apenas <span className="font-bold text-accent">R$ 299,90</span>. 
                Enfim, dê o primeiro passo para dominar o Audaces software e transformar sua carreira.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 rounded-full shadow-[0_12px_40px_-10px_hsl(var(--coral)/0.6)]" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                  Garantir Meu Curso Audaces
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <span className="text-xs text-primary-foreground/70 mt-2">Curso: Aprenda Modelagem no Audaces e Lucre</span>
              </motion.div>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>
    </>
  );
};

export default CursoAudaces;
