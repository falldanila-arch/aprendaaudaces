import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Scissors, Ruler, PenTool, Layers, Palette, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-cover.jpg";
import professorImage from "@/assets/professor-robson.jpg";

const CursosDeModelagem = () => {
  return (
    <>
      <Helmet>
        <title>Cursos de Modelagem | Curso de Modelagem Digital e Profissional | Audaces</title>
        <meta name="description" content="Cursos de modelagem completos: curso de modelagem digital no Audaces, modelagem manual, moldes PDF, costura profissional. Os melhores cursos de modelagem do Brasil com Audaces encaixe, Digiflash e modelagem descomplicada. 500+ alunos formados." />
        <meta name="keywords" content="cursos de modelagem, curso de modelagem, cursos de modelagem Audaces, cursos de modelagem digital, cursos de modelagem descomplicada, cursos de modelagem fácil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem em PDF, curso Audaces, modelagem profissional, modelagem digital, costura, moldes PDF, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/cursos-de-modelagem" />
        <meta property="og:title" content="Cursos de Modelagem | Modelagem Digital e Profissional com Audaces" />
        <meta property="og:description" content="Os melhores cursos de modelagem do Brasil. Aprenda modelagem digital no Audaces, crie moldes PDF e domine costura profissional. 500+ alunos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/cursos-de-modelagem" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Cursos de Modelagem - Aprenda Audaces",
            "description": "Lista dos melhores cursos de modelagem digital e profissional do Brasil",
            "itemListElement": [
              {
                "@type": "Course",
                "position": 1,
                "name": "Aprenda Modelagem no Audaces e Lucre",
                "description": "Curso de modelagem digital completo no Audaces software",
                "provider": {"@type": "Organization", "name": "Aprenda Audaces"},
                "offers": {"@type": "Offer", "price": "299.90", "priceCurrency": "BRL"}
              },
              {
                "@type": "Course",
                "position": 2,
                "name": "Operador de Audaces",
                "description": "Curso de modelagem focado em operação do Audaces, digitalização e encaixe",
                "provider": {"@type": "Organization", "name": "Aprenda Audaces"},
                "offers": {"@type": "Offer", "price": "299.90", "priceCurrency": "BRL"}
              }
            ]
          }
        `}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Cursos de modelagem - Os melhores cursos de modelagem digital do Brasil" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
          </div>
          <div className="container relative z-10 px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
                  CURSOS DE MODELAGEM
                </span>
                <h1 className="mb-6 text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Cursos de Modelagem: <span className="text-accent">Modelagem Digital</span> e Profissional
                </h1>
                <p className="mb-10 text-xl text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
                  Descubra os melhores cursos de modelagem do Brasil. Além disso, aprenda modelagem digital 
                  no Audaces, crie moldes em PDF e domine a costura profissional. Consequentemente, 
                  transforme sua paixão por moda em uma carreira de sucesso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-[0_8px_30px_-8px_hsl(var(--coral)/0.5)]" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                      Ver Cursos de Modelagem
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <span className="text-xs text-primary-foreground/70 mt-2">Curso: Aprenda Modelagem no Audaces e Lucre</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O que são cursos de modelagem */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                O Que São Cursos de Modelagem e Por Que Fazer um Curso de Modelagem?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Os <strong>cursos de modelagem</strong> são programas de formação que ensinam a arte e a técnica de criar 
                  moldes para roupas e peças de vestuário. Ademais, um bom <strong>curso de modelagem</strong> abrange desde 
                  os fundamentos da modelagem manual até as técnicas mais avançadas de modelagem digital utilizando softwares 
                  como o Audaces. Portanto, investir em cursos de modelagem é o caminho mais seguro para se profissionalizar 
                  na indústria da moda.
                </p>
                <p>
                  Todavia, nem todos os cursos de modelagem são iguais. Nossos <strong>cursos de modelagem</strong> se 
                  destacam porque combinam teoria e prática com o uso do Audaces software, a ferramenta líder do mercado. 
                  Além disso, nossos cursos de modelagem Audaces ensinam técnicas exclusivas de criação de moldes, 
                  encaixe otimizado e digitalização com Digiflash. Consequentemente, nossos alunos saem preparados 
                  para atuar profissionalmente em confecções, ateliês e até como empreendedores.
                </p>
                <p>
                  Do mesmo modo, a demanda por profissionais com formação em cursos de modelagem digital tem crescido 
                  significativamente no Brasil. Em vista de que a indústria têxtil busca cada vez mais eficiência 
                  e precisão, dominar a modelagem no Audaces tornou-se um diferencial competitivo essencial. 
                  Assim, quem faz nossos cursos de modelagem tem acesso às mesmas ferramentas e técnicas 
                  utilizadas pelas maiores confecções do país.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Cursos */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Nossos Cursos de Modelagem Disponíveis
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Curso 1 */}
              <motion.div className="bg-card p-8 rounded-2xl border-2 border-accent/30 shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">MAIS POPULAR</div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Aprenda Modelagem no Audaces e Lucre</h3>
                <p className="text-muted-foreground mb-6">
                  Nosso curso de modelagem principal ensina a criar moldes digitais no Audaces software desde o zero. 
                  Além disso, você aprende a comercializar seus moldes e lucrar com modelagem digital. Portanto, 
                  é ideal para quem quer empreender na área de moda.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Modelagem digital completa no Audaces", "Criação de moldes em PDF para venda", "Técnicas de pence, bolso e recortes", "Exportação CorelDRAW e impressão", "Estratégias de comercialização"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-accent">R$ 299,90</span>
                  <span className="text-muted-foreground">· ~6h de conteúdo</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                  Começar Este Curso de Modelagem <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Curso 2 */}
              <motion.div className="bg-card p-8 rounded-2xl border border-border shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">PROFISSIONAL</div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Operador de Audaces</h3>
                <p className="text-muted-foreground mb-6">
                  Curso de modelagem focado na operação profissional do Audaces software em confecções. 
                  Dessa forma, você aprende digitalização, Audaces encaixe e liberação de risco. 
                  Consequentemente, estará pronto para trabalhar no setor de corte.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Operação completa do Audaces software", "Audaces Digiflash e digitalização", "Audaces encaixe e mapa de risco", "Liberação de enfesto e corte", "Preparação para mercado de trabalho"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-accent">R$ 299,90</span>
                  <span className="text-muted-foreground">· ~6h de conteúdo</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                  Começar Este Curso de Modelagem <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tipos de Modelagem */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Tipos de Cursos de Modelagem: Qual Escolher?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: <PenTool className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem Digital", desc: "Aprenda modelagem digital no Audaces software. Nossos cursos de modelagem digital ensinam a criar moldes com precisão usando tecnologia CAD. Assim, você produz moldes perfeitos com rapidez.", to: "/modelagem-digital-completa" },
                { icon: <Ruler className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem Manual", desc: "A base de todo modelista. Nossos cursos de modelagem manual ensinam técnicas tradicionais de criação de moldes no papel. Entretanto, recomendamos complementar com modelagem digital.", to: "/modelagem-manual" },
                { icon: <Scissors className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem e Costura", desc: "Combinamos cursos de modelagem com técnicas de costura profissional. Além disso, você aprende corte, enfesto e acabamento para peças de alta qualidade.", to: "/costura" },
                { icon: <Layers className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem Descomplicada", desc: "Cursos de modelagem descomplicada para iniciantes. Do mesmo modo, simplificamos conceitos complexos para que qualquer pessoa possa aprender modelagem.", to: "/modelagem-descomplicada" },
                { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem em PDF", desc: "Aprenda a criar e vender moldes em PDF. Nossos cursos de modelagem em PDF ensinam desde a criação até a comercialização de moldes digitais.", to: "/moldes-pdf" },
                { icon: <Palette className="w-8 h-8 text-accent" />, title: "Cursos de Modelagem Profissional", desc: "Cursos de modelagem profissional para quem quer fazer carreira na indústria da moda. Portanto, abrange todas as técnicas necessárias para atuar profissionalmente.", to: "/modelagem-profissional" },
              ].map((item, i) => (
                <Link key={i} to={item.to}>
                  <motion.div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Vantagens dos Nossos Cursos de Modelagem
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Nossos <strong>cursos de modelagem</strong> oferecem uma série de vantagens exclusivas que nos diferenciam 
                  no mercado. Em primeiro lugar, todos os nossos cursos de modelagem utilizam o Audaces software, garantindo 
                  que você aprenda com a mesma ferramenta usada pela indústria. Além disso, o conteúdo é 100% prático, 
                  com projetos reais que você pode aplicar imediatamente.
                </p>
                <p>
                  Ademais, nossos cursos de modelagem incluem suporte exclusivo via WhatsApp com o Professor Robson. 
                  Dessa forma, suas dúvidas são respondidas rapidamente por um profissional com mais de 20 anos 
                  de experiência. Todavia, o diferencial principal é que nossos cursos de modelagem ensinam não apenas 
                  a técnica, mas também como lucrar com seus conhecimentos vendendo moldes digitais.
                </p>
                <p>
                  Por fim, nossos cursos de modelagem Audaces são acessíveis para todos os níveis. Bem como, 
                  oferecemos cursos de modelagem descomplicada para iniciantes e cursos de modelagem avançada para 
                  profissionais. Em suma, independentemente do seu nível atual, temos o curso de modelagem ideal 
                  para você. Portanto, não perca mais tempo e comece hoje mesmo seus cursos de modelagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-background">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Depoimentos de Alunos dos Cursos de Modelagem
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Carla Oliveira", text: "Fiz vários cursos de modelagem antes, mas nenhum se compara a este. O curso de modelagem digital no Audaces me abriu portas que eu nem imaginava. Hoje trabalho como modelista freelancer." },
                { name: "Fernanda Lima", text: "Buscava cursos de modelagem descomplicada e encontrei o melhor. O Professor Robson explica tudo com clareza. Ademais, o suporte é incrível." },
                { name: "Roberto Alves", text: "Os cursos de modelagem Audaces mudaram minha vida. Consegui emprego em uma confecção grande graças ao conhecimento de Audaces encaixe que aprendi." },
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
        <section className="py-20 bg-muted/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Perguntas Frequentes sobre Cursos de Modelagem
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Qual o melhor curso de modelagem para iniciantes?", a: "Nosso curso 'Aprenda Modelagem no Audaces e Lucre' é ideal para iniciantes. Além disso, nossos cursos de modelagem descomplicada facilitam o aprendizado desde o zero. Consequentemente, mesmo sem experiência prévia, você conseguirá criar moldes profissionais." },
                { q: "Os cursos de modelagem ensinam modelagem digital?", a: "Sim! Todos os nossos cursos de modelagem utilizam o Audaces software para modelagem digital. Portanto, você aprenderá com a ferramenta líder do mercado brasileiro." },
                { q: "Posso fazer os cursos de modelagem no meu ritmo?", a: "Sim. Nossos cursos de modelagem são em formato de vídeo-aulas com acesso ilimitado. Dessa forma, você estuda quando e onde quiser, quantas vezes precisar." },
                { q: "Os cursos de modelagem incluem material de apoio?", a: "Sim! Além das vídeo-aulas, nossos cursos de modelagem incluem moldes bases, tabelas de medidas e acesso ao grupo de suporte no WhatsApp. Bem como, você recebe material complementar para praticar." },
                { q: "Qual a diferença entre os cursos de modelagem oferecidos?", a: "Temos dois cursos de modelagem principais: 'Aprenda Modelagem no Audaces e Lucre' foca na criação e venda de moldes, enquanto 'Operador de Audaces' foca na operação profissional em confecções. Todavia, ambos ensinam modelagem digital no Audaces." },
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
        <section className="py-16 bg-background">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Explore Mais sobre Cursos de Modelagem e Audaces
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                { label: "Curso Audaces", to: "/curso-audaces" },
                { label: "Audaces", to: "/audaces" },
                { label: "Costura Profissional", to: "/costura" },
                { label: "Modelagem Digital", to: "/modelagem-digital-completa" },
                { label: "Modelagem Profissional", to: "/modelagem-profissional" },
                { label: "Modelagem Descomplicada", to: "/modelagem-descomplicada" },
                { label: "Moldes PDF", to: "/moldes-pdf" },
                { label: "Modelagem CAD", to: "/modelagem-cad" },
                { label: "Corte e Costura", to: "/costura-e-corte" },
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
                Comece Seus Cursos de Modelagem Agora
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Invista nos melhores cursos de modelagem do Brasil por apenas <span className="font-bold text-accent">R$ 299,90</span>. 
                Enfim, dê o primeiro passo para dominar a modelagem digital e transformar sua carreira.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 rounded-full shadow-[0_12px_40px_-10px_hsl(var(--coral)/0.6)]" onClick={() => window.open('https://go.pepper.com.br/1xtll', '_blank')}>
                  Garantir Meus Cursos de Modelagem
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

export default CursosDeModelagem;
