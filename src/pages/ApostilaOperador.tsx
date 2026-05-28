import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Camera, Monitor, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const modulos = [
  { num: 1, title: "Visão do Curso, Fixação de Moldes no Quadro DigiFlash e Fotos no Padrão Audaces" },
  { num: 2, title: "Digitalização Automática e Manual no DigiFlash 5, Edição, Marcações e Piques. Ferramentas do Audaces Moldes e Paleta do Usuário" },
  { num: 3, title: "Desdobramento de Moldes, Corte de Mangas, Recortes, Construção de Moldes Retangulares, Piques e Posição de Fio" },
  { num: 4, title: "Configuração de Propriedades dos Moldes, Nome, Tecido, Visualização, Gradação de Tamanhos e Conferência de Medidas" },
  { num: 5, title: "Molde da Entretela, Situações-Problema da Profissão, Moldes Grandes, Moldes com Lado Certo e Marcações Arredondadas" },
  { num: 6, title: "Ferramentas Avançadas da Paleta do Usuário, Graduação Grade Complexa/Quebrada e Tecido com Pé de Estampa ou Veludado" },
  { num: 7, title: "Audaces Encaixe: Risco, Ferramentas, Propriedades, Configuração de Tecido e Grade de Pedidos Quebrada" },
];

const ApostilaOperador = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso Operador de Audaces",
    "description": "Curso completo para operadores de Audaces com 7 módulos práticos. Aprenda digitalização com DigiFlash, edição de moldes no Audaces Moldes, graduação, encaixe e risco para trabalhar em fábricas e confecções.",
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
        <title>Apostila Curso Operador de Audaces | Professor Robson Costa</title>
        <meta name="description" content="Apostila completa do curso Operador de Audaces. 7 módulos práticos: digitalização DigiFlash, Audaces Moldes, graduação, encaixe e risco. Professor Robson Costa, 20+ anos de experiência na indústria têxtil." />
        <meta name="keywords" content="operador de audaces, curso operador audaces, digitalização digiflash, audaces moldes, audaces encaixe, risco audaces, graduação audaces, cursos de modelagem, cursos de modelagem audaces, cursos de modelagem digital, moldes digitais, plotagem audaces, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/apostila-curso-operador-audaces" />
        <meta property="og:title" content="Apostila Curso Operador de Audaces | Professor Robson Costa" />
        <meta property="og:description" content="Curso completo com 7 módulos práticos para operar Audaces em fábricas e confecções. DigiFlash, Moldes, Encaixe e Risco." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprendaaudaces.lovable.app/apostila-curso-operador-audaces" />
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
                Curso Operador de Audaces
              </h1>
              <p className="text-lg text-muted-foreground">
                Professor Robson Fonseca — 20+ anos de experiência no setor têxtil
              </p>
            </div>

            {/* Apresentação */}
            <section className="mb-12">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Apresentação</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Esse curso é uma das minhas experiências profissionais, e trago para vocês em primeira mão esse formidável conteúdo, onde vocês aprenderão todos os métodos e problemáticas para se fazer uma digitalização de qualidade e fiel ao molde que irão trabalhar. Ademais, esse curso é voltado para quem quer trabalhar com sistema Audaces em fábrica, ou confecção, na função de digitalizador, liberação de molde e risco e plotagem.
                  </p>
                  <p>
                    Além disso, trago várias situações-problema vividas em minha experiência profissional, que ajudarão vocês a transcorrer em todos os desafios, sem maiores dificuldades ou surpresa na hora de pôr em prática o que foi ensinado. Consequentemente, esse cenário da profissão operador de Audaces é visto pelas empresas como um <strong>coringa na hora de economia e estratégia</strong>.
                  </p>
                  <p>
                    Por isso, é muito importante que o profissional seja muito assertivo, e também econômico em suas práticas e raciocínio do molde/risco. Então, aqui mostro nos processos a importância de se conferir e monitorar o resultado da liberação de qualquer trabalho a ser feito. Portanto, esperem que gostem e aproveitem ao máximo todos os aprendizados!
                  </p>
                </div>
              </div>
            </section>

            {/* Sumário */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Sumário — 7 Módulos
              </h2>
              <div className="grid gap-3">
                {modulos.map((m) => (
                  <div
                    key={m.num}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm mt-0.5">
                      {m.num}
                    </span>
                    <span className="text-foreground font-medium text-sm">{m.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Três Softwares */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Os 3 Softwares do Curso</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Camera className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">DigiFlash</h3>
                  <p className="text-xs text-muted-foreground">Digitalização de moldes físicos por fotografia</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Audaces Moldes</h3>
                  <p className="text-xs text-muted-foreground">Edição, graduação e propriedades dos moldes</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Layers className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Audaces Encaixe</h3>
                  <p className="text-xs text-muted-foreground">Encaixe dos moldes e criação do risco para corte</p>
                </div>
              </div>
            </section>

            {/* Módulo 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                Módulo 1 — Visão do Curso, Quadro DigiFlash e Como Tirar Fotos
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Olá pessoal! Sou Robson, trabalho com Audaces desde 2002 e tenho bastante experiência. Hoje sou modelista, então tenho uma visão do Audaces bem diferente de muitos outros que operam a ferramenta. Além disso, modelo também no físico, o molde em papel, portanto tenho muito mais propriedade para passar conhecimento e experiência para vocês.
                </p>
                <p>
                  Esse curso deixa vocês aptos para operar o Audaces como um cortador numa fábrica. Consequentemente, vocês farão a função de um operador que deixa pronto o risco para o cortador, faz plotagem para a modelista, digitaliza, gradua e organiza os moldes. Ademais, a gente vai trabalhar em cima de três programas que são os mais usuais para quem vai operar o Audaces.
                </p>

                <h3 className="text-xl font-semibold text-foreground">O Quadro DigiFlash</h3>
                <p>
                  Primeiramente, o quadro DigiFlash é usado para posicionar os moldes que você quer digitalizar. Se você vai trabalhar em uma fábrica ou ter sua própria empresa, usará esse quadro para fotografar os moldes que a modelista fez manualmente em papel. Em seguida, essas fotos são processadas pelo software DigiFlash.
                </p>

                <div className="bg-accent/30 border border-accent rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-3">📌 Regras para Fixação no Quadro</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Posicione o molde com o <strong>fio paralelo à borda maior</strong> (horizontal) do quadro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Fixe com <strong>imãs em todas as extremidades</strong> — quanto mais, melhor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Elimine <strong>bolsas de ar</strong> — o molde deve ficar completamente plano no quadro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Se o molde <strong>não couber no quadro</strong>, corte-o em linha reta e posicione as partes separadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Moldes que podem ser <strong>dobrados ao meio</strong> (simétricos) devem ser posicionados dobrados</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground">Configuração da Câmera</h3>
                <p>
                  A câmera mais recomendada pela Audaces é a Sony, com pelo menos 5 megapixels (ideal 12+). Todavia, outras câmeras também podem funcionar. Do mesmo modo, é essencial configurar corretamente:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 my-4">
                  {[
                    { label: "ISO", value: "Menor que 100 (ideal 80)" },
                    { label: "Compensação de Exposição", value: "Acima de 1.3" },
                    { label: "Zoom", value: "Desabilitado" },
                    { label: "Flash", value: "Ativo (depende da iluminação)" },
                    { label: "Macro", value: "Desabilitado" },
                    { label: "Enquadramento", value: "Não cortar nenhuma borda do quadro" },
                  ].map((c) => (
                    <div key={c.label} className="bg-card border border-border rounded-lg p-3">
                      <p className="font-semibold text-foreground text-sm">{c.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{c.value}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Em suma, na hora de tirar a foto, a câmera deve enquadrar o quadro inteiro sem cortar nenhuma borda. Além disso, a distância deve ser suficiente para que todo o quadro fique visível. Por último, a iluminação do local deve ser equilibrada — nem muito clara, nem muito escura.
                </p>
              </div>
            </section>

            {/* Módulo 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                Módulo 2 — Digitalização no DigiFlash 5 e Introdução ao Audaces Moldes
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Depois que vocês tiraram a foto do molde, pensando naquelas dicas do Módulo 1, o próximo passo é processar essa imagem no software DigiFlash. Primeiramente, vocês transferem a foto da câmera para o computador (via cabo ou e-mail). Em seguida, abrem o DigiFlash e localizam o arquivo da foto.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Digitalização Automática</h3>
                <p>
                  Ao abrir a foto no DigiFlash, se a imagem foi tirada corretamente, o programa oferece a opção <strong>"Processar"</strong>. Dessa forma, ele digitaliza automaticamente o contorno do molde. Todavia, é necessário revisar o resultado — verificar se não ficou nenhum errinho e corrigir pontos que não ficaram fiéis ao molde original.
                </p>
                <p>
                  Para corrigir imperfeições, basta clicar e arrastar os pontos, ou selecionar pontos errados e apertar <strong>Delete</strong>. Consequentemente, quanto melhor a foto, mais próximo do real o molde digitalizado ficará.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Digitalização Manual</h3>
                <p>
                  Porém, para quem está começando, é muito importante aprender a digitalizar manualmente. Por quê? Porque quando você digitaliza manualmente, você entende o molde por inteiro — como o programa interpreta cada ponto e cada curva. Assim, lá no Audaces Moldes, você será mais assertivo.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-3">🖱️ Controles do Mouse na Digitalização Manual</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Clique esquerdo simples</strong> — cria um ponto de quina (reta)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Ctrl + clique esquerdo</strong> — cria ponto de curva (segure Ctrl para curvas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Quanto mais fechada a curva, <strong>mais pontos de Ctrl</strong> são necessários</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>No final, o <strong>último ponto deve unir ao primeiro</strong> para fechar o molde</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground">Marcações e Linhas Auxiliares</h3>
                <p>
                  Além do contorno, os moldes podem ter marcações internas — como linhas de corte, posições de bolso e referências de recorte. No entanto, essas marcações devem ser adicionadas como linhas auxiliares dentro do molde. Enfim, após desenhar a linha, clique na seta, confirme, e verifique se ela fica vermelha junto com o molde (indicando que faz parte dele).
                </p>

                <h3 className="text-xl font-semibold text-foreground">Piques no DigiFlash</h3>
                <p>
                  A ferramenta de piques serve para posicionar marcações de referência no molde. Por exemplo, os piques tipo "T" são muito usados. Bem como, vocês podem ajustar o tamanho do pique e posicioná-lo em todas as extremidades necessárias. Em contrapartida, se o molde for simétrico e puder ser dobrado ao meio, é preferível fixá-lo dobrado no quadro para melhor precisão.
                </p>

                <div className="bg-accent/30 border border-accent rounded-xl p-6 my-6">
                  <h4 className="font-bold text-foreground mb-2">💡 Dica do Professor Robson</h4>
                  <p className="text-sm">
                    Para iniciantes, digitalizar manualmente é essencial para entender como o programa interpreta cada ponto. Dessa forma, quando vocês chegarem no Audaces Moldes, não ficarão perdidos — vão saber exatamente como o molde foi construído e como cada curva e quina funcionam no sistema.
                  </p>
                </div>
              </div>
            </section>

            {/* Próximos Módulos */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Próximos Módulos</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {modulos.slice(2).map((m) => (
                  <div
                    key={m.num}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs mt-0.5">
                      {m.num}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Módulo {m.num}</p>
                      <p className="text-xs text-muted-foreground">{m.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                Os módulos 3 a 7 estão disponíveis no curso completo em vídeo.
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
                Torne-se um Operador de Audaces Profissional
              </h2>
              <p className="text-muted-foreground mb-6">
                Domine DigiFlash, Audaces Moldes e Audaces Encaixe com um curso prático e direto ao ponto. Acesso vitalício e suporte do Professor Robson.
              </p>
              <a
                href="https://go.pepper.com.br/ikzkd"
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

export default ApostilaOperador;
