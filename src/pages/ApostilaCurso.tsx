import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const modulos = [
  { num: 1, title: "Visão do Nosso Trabalho no Decorrer do Curso" },
  { num: 2, title: "Audaces Fácil e Dinâmico" },
  { num: 3, title: "Conhecendo e Criando Usuário 1 de Ferramentas Mais Usadas do Audaces" },
  { num: 4, title: "Noções de Como Criar Moldes" },
  { num: 5, title: "Bases de Moldes" },
  { num: 6, title: "Começando Moldes do Zero" },
  { num: 7, title: "Usando Tabelas" },
  { num: 8, title: "Fazendo Recortes e Criação de Bolsos e Aviamentos" },
  { num: 9, title: "Exportando para o CorelDRAW e Últimos Reparos" },
  { num: 10, title: "Noções de Publicação em PDF, Papéis de Plotagem e Uso para Sublimação" },
  { num: 11, title: "Observações Finais e Dicas de Venda no Mercado Livre" },
];

const ApostilaCurso = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Aprenda Modelagem no Audaces e Lucre",
    "description": "Curso completo de modelagem digital no Audaces com 11 módulos práticos. Aprenda a criar moldes profissionais, graduar, exportar para CorelDRAW e PDF, além de dicas de comercialização.",
    "provider": {
      "@type": "Organization",
      "name": "Modelagem e Diversos",
      "url": "https://aprendaaudaces.lovable.app"
    },
    "instructor": {
      "@type": "Person",
      "name": "Robson Costa",
      "jobTitle": "Modelista Especialista e CEO da Modelagem e Diversos"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT6H"
    }
  };

  return (
    <>
      <Helmet>
        <title>Apostila Curso Aprenda Modelagem no Audaces e Lucre | Professor Robson</title>
        <meta name="description" content="Apostila completa do curso Aprenda Modelagem no Audaces e Lucre. 11 módulos práticos: criação de moldes, graduação, exportação para CorelDRAW e PDF, dicas de venda. Professor Robson Costa, 20+ anos de experiência." />
        <meta name="keywords" content="apostila audaces, curso audaces, modelagem audaces, moldes digitais, curso modelagem, aprenda audaces, CorelDRAW moldes, moldes PDF, graduação audaces, criar moldes audaces, curso modelagem digital" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/apostila-curso-audaces" />
        <meta property="og:title" content="Apostila Curso Aprenda Modelagem no Audaces e Lucre" />
        <meta property="og:description" content="Curso completo com 11 módulos práticos de modelagem digital no Audaces. Do zero à comercialização de moldes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/apostila-curso-audaces" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            ← Voltar para o Início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
                APOSTILA DO CURSO
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Aprenda Modelagem no Audaces e Lucre
              </h1>
              <p className="text-lg text-muted-foreground">
                Professor Robson Fonseca — 20+ anos de experiência no setor têxtil
              </p>
            </div>

            {/* Sumário */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Sumário — 11 Módulos
              </h2>
              <div className="grid gap-3">
                {modulos.map((m) => (
                  <div
                    key={m.num}
                    className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      {m.num}
                    </span>
                    <span className="text-foreground font-medium">{m.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Módulo 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                Módulo 1 — Visão do Nosso Trabalho no Decorrer do Curso
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Olá! Sou Robson Costa, instrutor do curso. Tenho o prazer de apresentar para vocês esse projeto da experiência de minha vida, trazendo, além de conhecimento, empatia por todos vocês que vão adentrar no mundo da modelagem CAD. Essa expertise vem de mais de 20 anos de experiência no setor têxtil fabril de vestuário.
                </p>
                <p>
                  Comecei a trabalhar em fábricas da linha têxtil desde 2001, fazendo atividades desde o acabamento. Ademais, a um passado recente, fui operador de CAD no corte, cuidei de facções e pilotistas. Consequentemente, atuei como modelista e coloquei em prática tudo aquilo que vi no decorrer da minha vida na indústria têxtil. Além disso, já tive a minha própria indústria de roupas, e hoje sou proprietário da <strong>Modelagem e Diversos®</strong>, empresa de desenvolvimento e venda de modelagens em marketplaces e redes sociais.
                </p>
                <p>
                  <strong>O curso pode ser feito em qualquer versão do Audaces. Comece agora!</strong>
                </p>

                <h3 className="text-xl font-semibold text-foreground">Por que não fazer moldes no CorelDRAW?</h3>
                <p>
                  Para começar, é importante desmistificar um achismo da maioria: <strong>não é viável o desenvolvimento de moldes no CorelDRAW</strong>. Os moldes são desenvolvidos no Audaces ou softwares específicos de moldes, por ser uma produção técnica que exige ferramentas próprias. Dessa forma, só depois é exportado para o CorelDRAW.
                </p>
                <p>
                  O Audaces consiste em ser, na prática, como se fosse uma mesa de modelista com todas as suas ferramentas visuais em cima dela, porém no programa ficam mais detalhadas e de maneira mais simples para tais edições.
                </p>
                <p>
                  O CorelDRAW, por sua vez, é um programa mais usado hoje em dia por profissionais de artes gráficas, fotografias, designers, arquitetos, pessoal da sublimação, bordados e até engenheiros. Além disso, ele traz ferramentas mais universais e é, portanto, um parceiro líder na produção e confecção de roupas, aliando-se na hora de impressão dos moldes, edições simplificadas, artes para sublimação, riscos para cortes têxteis e finalização do produto para venda.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-3">📊 Participação de mercado na comercialização de moldes:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">2%</p>
                      <p className="text-sm">Audaces</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">50%</p>
                      <p className="text-sm">CorelDRAW</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">48%</p>
                      <p className="text-sm">PDF</p>
                    </div>
                  </div>
                  <p className="text-sm mt-3 text-muted-foreground">
                    Deu para ver que, se você pretende comercializar, o CorelDRAW e PDF são muito mais eficazes em termos de venda. Todavia, não se faz moldes em CorelDRAW — então temos que aprender a usar o Audaces primeiro.
                  </p>
                </div>
              </div>
            </section>

            {/* Módulo 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                Módulo 2 — Audaces Fácil e Dinâmico
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Neste módulo, apresentamos o Audaces 7 como base do curso, porque queremos que ele seja acessível para todos. Em primeiro lugar, o Audaces 7 tem custo zero ou baixíssimo, ideal para quem não tem um capital grande para investir. Além disso, esse curso serve tanto para o Audaces 7 quanto para outras versões, já que o programa se diferencia muito pouco de uma versão para outra.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Requisitos do Curso</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Possuir o programa <strong>Audaces Vestuário</strong> (qualquer versão)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Sistema operacional a partir do Windows XP (para o Audaces 7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Noções de medidas, costuras, cortes e programas gráficos</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Como funciona a modelagem no Audaces?</h3>
                <p>
                  Para entender o funcionamento, imagine que você está de frente ao espelho, bem simétrico. Uma linha imaginária corta o corpo ao meio no plano sagital. Isso é fundamental porque, na modelagem, geralmente fazemos apenas <strong>metade do molde</strong> — a outra metade é espelhada depois.
                </p>
                <p>
                  Então, imagine posicionar a metade do seu corpo dentro da área de trabalho do Audaces. Em seguida, você desenha a peça — uma blusa, um short, uma calça — em cima de uma <strong>base de molde</strong> que contém todas as medidas do corpo humano. Consequentemente, tudo que você desenhar nela vai refletir para servir em uma pessoa real.
                </p>
                <p>
                  É importante lembrar que o Audaces entende que o fio do tecido é sempre no sentido horizontal da tela. Portanto, faça seus moldes nesse sentido para não esquecer de posicionar o fio corretamente.
                </p>

                <div className="bg-accent/30 border border-accent rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-2">💡 Dica importante</h4>
                  <p className="text-sm">
                    Toda modelagem feita do zero é um <strong>protótipo</strong>. Depois de terminada, é necessário fazer um piloto (roupa teste) para tirar defeitos e verificar o caimento. Dessa forma, pode fazer o esboço tranquilamente — o ajuste vem na etapa seguinte.
                  </p>
                </div>
              </div>
            </section>

            {/* Módulo 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                Módulo 3 — Conhecendo e Criando a Barra de Ferramentas do Usuário
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Esse módulo é de muito aprendizado. Nele, você vai conhecer as ferramentas mais usadas do Audaces e criar uma barra de usuário personalizada. Afinal, o Audaces possui muitas ferramentas, e algumas fazem trabalhos semelhantes. Portanto, vamos selecionar as mais práticas e eficientes.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Ferramentas selecionadas para o Usuário 1</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Criar ou editar molde", desc: "Transforma um esboço em molde reconhecido pelo programa" },
                    { name: "Definir sentido do fio", desc: "Posiciona o fio do tecido corretamente no molde" },
                    { name: "Costura", desc: "Cria, remove ou inverte costuras no molde" },
                    { name: "Dobrar e desdobrar molde", desc: "Dobra ou desdobra moldes horizontal ou verticalmente" },
                    { name: "Cortar molde", desc: "Corta o molde usando uma linha guia" },
                    { name: "Unir moldes", desc: "Une partes cortadas do molde" },
                    { name: "Conferir medidas", desc: "Verifica se as laterais e partes do molde estão casando" },
                    { name: "Criar bainha", desc: "Cria bainhas e barras com medidas personalizadas" },
                    { name: "Adicionar/apagar pontos", desc: "Gerencia pontos de controle e quina do molde" },
                    { name: "Trocar e copiar elementos", desc: "Copia curvas e elementos entre moldes" },
                    { name: "Linhas auxiliares", desc: "Adiciona marcações como bolsos e aviamentos" },
                    { name: "Graduação via tabela", desc: "Gradua o molde para múltiplos tamanhos" },
                    { name: "Piques", desc: "Insere, altera, apaga e alinha piques" },
                    { name: "Retas e retângulos", desc: "Define linhas retas e retângulos auxiliares" },
                    { name: "Curvas e arcos", desc: "Cria curvas e arcos para detalhes do molde" },
                    { name: "Espelhar elemento", desc: "Espelha o molde horizontal, vertical ou livremente" },
                    { name: "Criar elemento paralelo", desc: "Cria linhas paralelas para referência" },
                    { name: "Texto", desc: "Adiciona e altera textos nos moldes" },
                  ].map((tool) => (
                    <div key={tool.name} className="bg-card border border-border rounded-lg p-4">
                      <p className="font-semibold text-foreground text-sm">{tool.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-2">⚡ Dica do Professor Robson</h4>
                  <p className="text-sm">
                    Estude cada ferramenta individualmente e pratique bastante. Sem praticá-las, você não conseguirá colocá-las em uso no cotidiano. Além do mais, com a experiência, você vai descobrir atalhos e combinações que aceleram seu trabalho.
                  </p>
                </div>
              </div>
            </section>

            {/* Módulos restantes preview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Próximos Módulos</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {modulos.slice(3).map((m) => (
                  <div
                    key={m.num}
                    className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <PlayCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Módulo {m.num}</p>
                      <p className="text-xs text-muted-foreground">{m.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                Os módulos 4 a 11 estão disponíveis no curso completo em vídeo.
              </p>
            </section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Comece Sua Jornada na Modelagem Digital
              </h2>
              <p className="text-muted-foreground mb-6">
                Invista em sua carreira com um curso prático, objetivo e com mais de 50 moldes base inclusos. Acesso vitalício e suporte do Professor Robson.
              </p>
              <a
                href="https://go.pepper.com.br/1xtll"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Quero Me Inscrever <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default ApostilaCurso;
