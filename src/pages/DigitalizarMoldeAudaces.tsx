import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BookOpen, Settings, Scissors, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const DigitalizarMoldeAudaces = () => {
  const canonical = "https://aprendaaudaces.lovable.app/digitalizar-molde-audaces";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Como Digitalizar Molde no Audaces: Passo a Passo Completo",
    description:
      "Aprenda a digitalizar molde no Audaces Moldes: configurações iniciais, paleta do usuário, posicionamento de fio, desdobrar molde, cortes, piques, costura e propriedades.",
    author: { "@type": "Person", name: "Professor Robson" },
    publisher: {
      "@type": "Organization",
      name: "Aprenda Audaces",
      url: "https://aprendaaudaces.lovable.app",
    },
    mainEntityOfPage: canonical,
    inLanguage: "pt-BR",
  };

  return (
    <>
      <Helmet>
        <title>Como Digitalizar Molde no Audaces: Guia Completo Passo a Passo</title>
        <meta
          name="description"
          content="Aprenda como digitalizar molde no Audaces Moldes: paleta do usuário, posicionamento de fio, desdobrar molde, cortes, piques, costura e propriedades. Tutorial completo."
        />
        <meta name="keywords" content="digitalizar molde audaces, audaces moldes, posicionamento de fio, paleta do usuário audaces, desdobrar molde audaces, propriedades molde, curso audaces, digiflash, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Como Digitalizar Molde no Audaces: Guia Completo" />
        <meta
          property="og:description"
          content="Tutorial completo de digitalização de moldes no Audaces Moldes — configurações, fio, desdobrar, cortes, piques e propriedades."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container px-6 py-12 mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Tutorial Audaces Moldes</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Como Digitalizar Molde no Audaces: Guia Completo Passo a Passo
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Antes de mexer no molde, aprenda as configurações iniciais, a montar sua paleta do
              usuário, posicionar o fio corretamente, desdobrar moldes, cortar, aplicar piques,
              costura e definir as propriedades — tudo o que você precisa para uma digitalização
              fiel e profissional no Audaces Moldes.
            </p>

            <section className="prose prose-lg max-w-none text-foreground space-y-6 mb-12">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Settings className="w-6 h-6 text-accent" /> 1. Configurações iniciais do Audaces
              </h2>
              <p>
                Primeiramente, acesse <strong>Iniciar &gt; Configurações</strong>. Para iniciantes,
                a recomendação é manter o <strong>botão Snap</strong> configurado no botão do meio
                do mouse (a rodinha). Além disso, não altere a unidade de medida nem opções
                avançadas — deixe como está. Em seguida, abra a <strong>Paleta do Usuário</strong>,
                onde estão agrupadas todas as ferramentas por categoria: início, construção,
                produção, marcações, graduação e manipulação.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Ruler className="w-6 h-6 text-accent" /> 2. Monte sua paleta com as ferramentas
                essenciais
              </h2>
              <p>
                Para não se perder em meio a tantas opções, crie uma paleta personalizada apenas
                com o que é mais usado. A seguir, as ferramentas indispensáveis para começar:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Início:</strong> selecionar.</li>
                <li><strong>Construção:</strong> reta, retângulo, curva, editor de pontos, inserir texto, editar texto.</li>
                <li><strong>Produção:</strong> criar molde, sentido do fio, costura, bainha, cortar molde, unir molde, dobrar/desdobrar.</li>
                <li><strong>Marcações:</strong> inserir pique, remover pique, pique texto, alinhar pique, alterar pique, inserir/remover linha auxiliar.</li>
                <li><strong>Graduação:</strong> por tabela, separar molde da graduação, remover graduação.</li>
                <li><strong>Manipulação:</strong> modificar, elemento paralelo, girar molde, espelhar molde, inserir ponto, excluir ponto.</li>
                <li><strong>Conferência:</strong> perímetros.</li>
              </ul>
              <p>
                Depois de adicionar, feche a janela e arraste a paleta para um canto da tela
                — assim sobra mais espaço de trabalho.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Ruler className="w-6 h-6 text-accent" /> 3. Posicionamento do fio do molde
              </h2>
              <p>
                Em primeiro lugar, antes de qualquer ação no molde, posicione corretamente o
                <strong> sentido do fio</strong>. Como regra prática, deixe o fio paralelo à
                moldura horizontal da tela — isso evita erros nas próximas etapas (encaixe,
                graduação, propriedades).
              </p>
              <p>
                Para fios <strong>exatos</strong> (paralelos à extremidade do molde), use{" "}
                <strong>Ponto do Molde</strong>: clique duas vezes no primeiro ponto e arraste até
                o segundo, sempre no <strong>sentido horário</strong> — caso contrário, o molde
                vira de cabeça para baixo. Para fios <strong>enviesados</strong>, desenhe uma
                linha de referência no Digiflash ou no próprio Audaces e use{" "}
                <strong>Ponto do Mouse</strong> sobre essa linha.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Scissors className="w-6 h-6 text-accent" /> 4. Desdobrar moldes e aplicar cortes
              </h2>
              <p>
                Em seguida, use a ferramenta <strong>Desdobrar</strong> para abrir mangas, golas e
                demais peças simétricas. Quando o molde precisar de um corte (por exemplo, a
                abertura do punho da camisa social), siga este fluxo:
              </p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Adicione uma <strong>linha auxiliar</strong> no local do corte.</li>
                <li>Use <strong>Cortar Molde</strong>: clique no molde, depois na linha e confirme.</li>
                <li>Exclua a parte que não será usada com a ferramenta Seleção.</li>
                <li>Remova as linhas auxiliares que ficaram, para evitar confusão do cortador.</li>
              </ol>
              <p>
                Sempre que cortar, consulte a modelista sobre a margem de <strong>costura</strong>{" "}
                a aplicar (normalmente 1 cm). Aplique-a pela ferramenta Costura, selecionando o
                trecho desejado.
              </p>

              <h2 className="text-2xl font-bold">5. Piques, viés e retângulos (punho)</h2>
              <p>
                Para marcar piques pequenos (0,3 cm) no meio de moldes simétricos, use{" "}
                <strong>Inserir Pique</strong> com o snap no ponto médio. Já para piques maiores
                (5 cm, por exemplo) no punho, escolha o formato <strong>T</strong>, defina a
                altura e ajuste o ângulo para acompanhar a linha original.
              </p>
              <p>
                Para criar um <strong>punho retangular</strong> a partir das medidas da modelista
                (ex.: 28 × 10 cm), use a ferramenta <strong>Retângulo</strong>, informe as
                coordenadas <em>dx</em> (horizontal) e <em>dy</em> (vertical) e depois transforme
                em molde com <strong>Criar Molde a partir de elementos de contorno conectados</strong>.
              </p>

              <h2 className="text-2xl font-bold">6. Propriedades do molde (nome e tecido)</h2>
              <p>
                Por fim, clique com o botão direito no molde e abra <strong>Propriedades</strong>.
                Digite o <strong>nome</strong> exatamente como está no papel original (frente,
                costas, manga, gola, punho), informe o <strong>tecido</strong> e o número de vezes
                que a peça vai no enfesto. Mantenha as peças orientadas na mesma posição da foto
                para não confundir nomes em moldes parecidos.
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" /> Resumo do fluxo de digitalização
                </h3>
                <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                  <li>Configurar Audaces e montar a paleta do usuário.</li>
                  <li>Posicionar o sentido do fio em todos os moldes.</li>
                  <li>Desdobrar moldes simétricos.</li>
                  <li>Aplicar cortes, costura, piques e linhas auxiliares.</li>
                  <li>Definir propriedades (nome, tecido, quantidade).</li>
                  <li>Salvar com nome de versão para preservar o trabalho.</li>
                </ol>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">
                Quer aprender Audaces do zero com Professor Robson?
              </h2>
              <p className="text-muted-foreground mb-6">
                Mais de 20 anos de experiência condensados no <strong>Curso Audaces Completo</strong>:
                aprenda DigiFlash, moldes, encaixe e digitalização profissional.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link to="/curso-audaces">Conhecer o Curso Audaces</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/audaces-digiflash">Ver DigiFlash</Link>
                </Button>
              </div>
            </section>

            <nav className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Continue aprendendo:</h3>
              <ul className="grid gap-2 sm:grid-cols-2 text-accent">
                <li><Link to="/blog/como-usar-audaces-digiflash" className="hover:underline">Como usar o Audaces DigiFlash</Link></li>
                <li><Link to="/blog/como-fazer-risco-no-audaces" className="hover:underline">Como fazer risco no Audaces</Link></li>
                <li><Link to="/gradacao-moldes-audaces" className="hover:underline">Graduação de moldes no Audaces</Link></li>
                <li><Link to="/criar-moldes-audaces" className="hover:underline">Criar moldes no Audaces</Link></li>
              </ul>
            </nav>
          </motion.article>
        </div>
        <WhatsAppButton />
      </main>
    </>
  );
};

export default DigitalizarMoldeAudaces;
