import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Star, Users, Award, ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/audaces-da-criacao-ao-lucro.png";

const stats = [
  { icon: Users, value: "500+", label: "Alunos inscritos" },
  { icon: Star, value: "5 ★", label: "Estrelas no Business" },
  { icon: Award, value: "20+", label: "Anos de experiência" },
];

const highlights = [
  "Modelagem digital intuitiva como desenhar no papel",
  "Conversão para CorelDRAW e PDF",
  "Digitalização de moldes com precisão cirúrgica",
  "Liberação de risco para corte profissional",
  "Comercialização digital para qualquer lugar do mundo",
];

const CaminhoSucesso = () => {
  return (
    <>
      <Helmet>
        <title>Caminho do Sucesso Usando Audaces | Curso Audaces, Software, Encaixe e Digiflash</title>
        <meta
          name="description"
          content="Descubra o caminho do sucesso usando Audaces com o Professor Robson. Curso Audaces completo: Audaces software, Audaces encaixe, Audaces Digiflash, aprender Audaces, Audaces 7. Alternativa segura ao Audaces crackeado e Audaces grátis — baixar Audaces de forma legal e profissional. Mais de 500 alunos formados e selo de 5 estrelas."
        />
        <meta name="keywords" content="Audaces, usando Audaces, Audaces software, curso Audaces, Audaces encaixe, Audaces Digiflash, aprender Audaces, Audaces 7, Audaces crackeado, Audaces grátis, download Audaces, baixar Audaces, modelagem digital, operador Audaces, moldes digitais, Professor Robson, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/caminho-do-sucesso-usando-audaces" />
        <meta property="og:title" content="Caminho do Sucesso Usando Audaces | Curso Audaces, Software, Encaixe e Digiflash" />
        <meta property="og:description" content="Aprenda Audaces com o Professor Robson: curso Audaces, Audaces software, Audaces encaixe, Audaces Digiflash e Audaces 7. Mais de 500 alunos formados. A melhor alternativa ao Audaces grátis ou download Audaces não oficial." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/caminho-do-sucesso-usando-audaces" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header / Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Início
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src={heroImage}
                  alt="Professor Robson - Audaces: Da Criação ao Lucro - Domine a Modelagem Digital com moldes em PDF e CorelDRAW"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-5 py-2 rounded-full font-bold shadow-lg text-sm">
                  500+ Alunos Formados
                </div>
              </motion.div>

              {/* Title block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide">
                  PROFESSOR ROBSON
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  O Caminho do Sucesso na Modelagem Digital
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Meu convite para você transformar sua carreira no mundo da moda com Audaces, moldes digitais e liberdade profissional real.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-card border border-border rounded-xl p-4 text-center"
                    >
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full md:w-auto"
                  onClick={() => window.open("https://aprendaaudaces.lovable.app", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Acessar o Curso Agora
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6 mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Minha história — e o que posso fazer pela sua carreira
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Olá, eu sou o Robson. <strong>Atualmente</strong>, sou reconhecido como um impulsionador de carreiras no mundo da moda, <strong>no entanto</strong>, eu sei exatamente como é estar no seu lugar, enfrentando as limitações do corte manual. <strong>Porém</strong>, eu decidi que precisava evoluir para não ser engolido pelo mercado. <strong>Por outro lado</strong>, eu sabia que a tecnologia poderia parecer intimidadora para muitos. <strong>Dessa maneira</strong>, mergulhei no universo do Audaces até desenvolver um método que mudou minha vida profissional.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Este método é verdadeiramente especial, <strong>visto que</strong> ele ensina a fazer moldes de forma intuitiva e simples, exatamente como se você estivesse desenhando uma roupa em uma folha de papel. <strong>Além disso</strong>, eu ensino você a converter essas modelagens para <strong>CorelDRAW e PDF</strong>. <strong>Ou seja</strong>, você ganha o poder de comercializar seu trabalho de forma digital para qualquer lugar do mundo. <strong>Dessa forma</strong>, a barreira entre a sua criação e o lucro real simplesmente desaparece.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Em seguida</strong>, no meu treinamento para <strong>Operador de Audaces</strong>, eu preparo você para digitalizar moldes e dominar a liberação de risco para o corte com precisão cirúrgica. <strong>Portanto</strong>, você deixa de ser apenas mais um profissional para se tornar um especialista disputado. <strong>Ademais</strong>, os números comprovam a eficácia desse caminho, <strong>já que</strong> hoje conto com mais de <strong>500 alunos inscritos</strong>. <strong>Por causa disso</strong>, nosso curso ostenta com orgulho o selo de <strong>5 estrelas no Business</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Afinal</strong>, meu objetivo não é apenas ensinar o uso de uma ferramenta, <strong>mas também</strong> servir como o exemplo vivo de sucesso que você pode e deve espelhar. <strong>Logo</strong>, se você busca autoridade e um crescimento real na carreira, não há por que hesitar. <strong>Assim sendo</strong>, convido você a dar esse passo agora, <strong>pois</strong> o mercado da confecção não espera por ninguém. <strong>Por fim</strong>, a decisão de transformar sua história profissional e alcançar a liberdade que eu alcancei está em suas mãos.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                O que você aprende no curso
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Pronto para transformar sua carreira?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Junte-se aos mais de 500 alunos que já mudaram suas vidas com o método do Professor Robson. Consequentemente, você também pode alcançar a liberdade profissional que tanto busca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  onClick={() => window.open("https://aprendaaudaces.lovable.app", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Acessar o Curso
                </Button>
                <Link to="/">
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                    Conhecer Mais Detalhes
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaminhoSucesso;
