import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Wrench, Lightbulb, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DuvidasAudacesMoldes = () => {
  return (
    <>
      <Helmet>
        <title>Dúvidas Audaces Moldes - Apostila Completa do Curso | Aprenda Audaces</title>
        <meta name="description" content="Apostila completa do Curso Aprenda Modelagem no Audaces e Lucre. Tire suas dúvidas sobre moldes, ferramentas, graduação e muito mais." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, curso modelagem, audaces moldes, moldes digitais, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>

      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Apostila do Curso Aprenda Modelagem no Audaces e Lucre
              </h1>
              <p className="text-xl text-muted-foreground">
                Professor Robson Fonseca
              </p>
            </div>

            {/* Sumário */}
            <div className="bg-card rounded-xl p-6 mb-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Sumário dos Módulos
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Visão do nosso trabalho no decorrer do curso</li>
                <li>Audaces Fácil e Dinâmico</li>
                <li>Conhecendo e criando usuário de ferramentas mais usadas do Audaces</li>
                <li>Noções de como criar moldes</li>
                <li>Bases de moldes</li>
                <li>Começando moldes do zero</li>
                <li>Usando tabelas</li>
                <li>Fazendo recortes e criação de bolsos e aviamentos</li>
                <li>Exportando para o Corel Draw e últimos reparos</li>
                <li>Noções de publicação em PDF, papéis de plotagem e uso para sublimação</li>
                <li>Observações finais e dicas de venda no Mercado Livre</li>
              </ol>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Módulo 1 */}
              <AccordionItem value="modulo-1" className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Módulo 1 - Visão do Nosso Trabalho
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>
                    Olá! Sou Robson Costa, instrutor do curso. Tenho o prazer de apresentar para vocês esse projeto da experiência de minha vida, trazendo além de conhecimento, empatia por todos vocês que vão adentrar no mundo da modelagem CAD.
                  </p>
                  <p>
                    Essa expertise que trago vem de <strong>mais de 20 anos de experiência</strong> no setor têxtil fabril de vestuário. Comecei a trabalhar em fábricas da linha têxtil desde 2001, fazendo atividades desde o acabamento, e a um passado recente, fui operador de CAD no corte, cuidei de facções e pilotistas. Recentemente atuei como moldelista e coloquei em prática tudo aquilo que vi no decorrer da minha vida no trabalho da indústria têxtil.
                  </p>
                  <p>
                    Já tive a minha própria indústria de roupas, e hoje sou proprietário da <strong>Modelagem e Diversos®</strong>, empresa de desenvolvimento e venda de modelagens em MarketPlaces e redes sociais.
                  </p>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-foreground">O curso pode ser feito em qualquer versão do Audaces. Comece agora!</p>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mt-6">Por que usar Audaces e não Corel Draw?</h3>
                  <p>
                    Não é viável o desenvolvimento de moldes no Corel Draw. Os moldes são desenvolvidos no Audaces ou Softwares específicos de moldes, por ser uma produção técnica e que exige ferramentas próprias, e só assim é exportado para o Corel Draw.
                  </p>
                  <p>
                    O Audaces consiste em ser, na prática, como se fosse uma mesa de um moldelista com todas as suas ferramentas visuais em cima dela, mas que no programa, ficam mais detalhadas e de maneira mais simples para tais edições.
                  </p>
                  <p>
                    O Corel Draw por sua vez, é um programa mais usado hoje em dia, por muitos profissionais como de artes gráficas, de fotografias, designers, arquitetos, pessoal da sublimação, de bordados e até engenheiros.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">Mercado de comercialização de moldes:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>AUDACES:</strong> 2% do mercado</li>
                    <li><strong>COREL DRAW:</strong> 50% do mercado</li>
                    <li><strong>PDF:</strong> 48% do mercado</li>
                  </ul>
                  <p>
                    Deu pra ver que, se você pretende comercializar, o Corel Draw e PDF são muito mais eficazes em termos de venda. Mas como não se faz moldes em Corel Draw, então temos que aprender a usar o Audaces primeiro!
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo 2 */}
              <AccordionItem value="modulo-2" className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Módulo 2 - Audaces Fácil e Dinâmico
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Compatibilidade de versões</h3>
                  <p>
                    A gente quer que o curso seja para todos. A pessoa que vai adquirir o curso tem a disponibilidade de fazer com o <strong>Audaces 7</strong>, que o custo é zero ou custo baixíssimo. Esse curso serve tanto para o Audaces 7, quanto para outras versões de Audaces.
                  </p>
                  <p>
                    O Audaces se diferencia muito pouco um do outro. Todas as ferramentas que tem no 7, tem nos outros. O que vai diferenciar ali do Audaces 7 para os outros, vai ser a aparência das ferramentas e às vezes o lugar onde as ferramentas estão.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">Requisitos para o curso:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Possuir o programa Audaces vestuário</li>
                    <li>Sistema operacional a partir do XP (para Audaces 7)</li>
                    <li>Ter noções de medidas, costuras e cortes</li>
                    <li>Noções de Audaces e Corel Draw</li>
                  </ol>

                  <h3 className="text-lg font-bold text-foreground mt-6">Entendendo a simetria do corpo</h3>
                  <p>
                    Imagine-se o corpo de face para frente ao espelho, baseada na simetria. Se o corpo está de frente para o espelho, bem simétrico - uma parte igual de um lado ao outro. E você de face para frente ao espelho, com uma linha imaginária cortando seu corpo ao meio.
                  </p>
                  <p>
                    Esse plano é muito necessário na hora da modelagem: você imaginar o corpo pela metade. Por quê? Porque o molde, a gente geralmente faz ele da metade pelo seu total externo. A outra metade a gente espelha.
                  </p>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-bold text-foreground">Por que o molde fica deitado no Audaces?</h4>
                    <p className="mt-2">
                      O Audaces entende que o tecido sempre é no sentido horizontal da tela. É importante fazer os moldes no sentido do fio. O tecido tem um fio, e precisamos fazer o molde obedecendo esse fio do tecido.
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mt-6">Usando bases de moldes</h3>
                  <p>
                    Em vez de desenhar sobre o corpo, você usa uma <strong>base</strong>, que funciona como se fosse um corpo pela metade. Essa base tem todas as medidas de um corpo humano. Tudo que você desenhar nela, vai refletir depois para servir para uma pessoa.
                  </p>
                  <p>
                    Se ela é mais larga, você vai desenhar em cima da base com folgas. Se ela é mais estreita (mais justa ao corpo), você vai desenhar mais justa na base.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">Sobre protótipos e pilotos</h3>
                  <p>
                    Todo protótipo, toda modelagem é um protótipo. Toda fábrica que trabalhou sabe: a moldelista faz a modelagem, porém ela tem uma experiência de tempo que ela consegue desenhar uma modelagem que já quase sai pronta.
                  </p>
                  <p>
                    Mas todo mundo que trabalha numa fábrica sabe que quando a gente desenha em cima de uma base, a pessoa vai lá, corta o tecido, faz um <strong>piloto</strong>, experimenta esse piloto numa pessoa e ali que ela vai ver se tem algum defeito.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo 3 */}
              <AccordionItem value="modulo-3" className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Módulo 3 - Ferramentas do Audaces
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>
                    Esse módulo é um módulo de muito aprendizado. É preciso estudar cada ferramenta, porque sem estudá-las e praticá-las, você não vai conseguir pôr elas em prática no seu cotidiano.
                  </p>

                  <h3 className="text-lg font-bold text-foreground">Criando a Barra de Usuário</h3>
                  <p>
                    O Audaces tem muita ferramenta, e tem ferramentas que fazem o mesmo trabalho. Vamos somar as mais usadas e que fazem todo o trabalho que você precisa fazer. Vou mostrar as ferramentas mais práticas e fáceis para trabalhar no Audaces.
                  </p>
                  <p>
                    Para criar: vá em <strong>Configurações → Paleta do Usuário</strong> e acrescente as ferramentas que mais vai usar na barra de usuário 1.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">Ferramentas essenciais:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Criar ou Editar Molde</h4>
                      <p>Usada quando vai criar um molde do zero. Faz um esboço virar um molde reconhecido pelo programa. Deixe em "automático" e clique duas vezes para confirmar.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Definir Sentido do Fio</h4>
                      <p>Muda a posição do fio do molde. Use "Pontos do molde" para ir de ponto a ponto, ou "Pontos do mouse" para posicionar livremente. Pode usar ângulo adicional (ex: 45°) para moldes enviesados.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Costura</h4>
                      <p>Criar, remover ou inverter costura. Para criar: clique uma vez com esquerdo, esquerdo de novo, depois direito, e esquerdo para confirmar. Pode selecionar todo o molde ou parte dele. Use "manter base" para ver o pontilhado original.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Dobrar e Desdobrar</h4>
                      <p>Clique duas vezes com o mouse para dobrar ou desdobrar. Escolha se é horizontal ou vertical. Use "manter dobra" se um lado é diferente do outro.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Cortar Molde</h4>
                      <p>Primeiro crie uma linha guia (reta ou curva). Depois clique na linha do molde (não dentro dele), depois na linha de corte, e confirme duas vezes.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Unir Moldes</h4>
                      <p>Para unir moldes cortados: clique na linha que vai ser emendada, depois na outra linha, nos pontos de referência de cada um.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Conferir Medidas</h4>
                      <p>Posicione os moldes como vão ser costurados. Clique nas linhas que precisam casar (lateral com lateral, ombro com ombro) para verificar se as medidas batem.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Criar Bainha</h4>
                      <p>Define número de dobras e tamanho (geralmente 3,5cm). Pode incluir pique automaticamente.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Adicionar/Apagar Pontos</h4>
                      <p>Pontos de controle são as quinas do molde. Clique no molde e posicione o ponto onde quiser. Use apagar pontos para remover.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Adicionar Linhas Auxiliares</h4>
                      <p>Para marcações de bolso, por exemplo. Crie a linha, depois use "adicionar linhas auxiliares" para que ela ande junto com o molde.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Graduação (F6)</h4>
                      <p>Aperte F6 para mostrar/esconder a graduação. Use "graduar via tabela" para definir os tamanhos. Pode separar tamanhos, copiar graduação entre moldes, ou apagar a graduação.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Piques</h4>
                      <p>Inserir, alterar, apagar ou alinhar piques. Escolha o tipo de pique (T é o mais usado), largura, altura, e se fica sobre ou fora do contorno.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Criar Curvas</h4>
                      <p>Faz tanto reta quanto curva. Um clique = reta. Vários pontos sem clicar direito = curva. Quanto mais curva tem, mais pontos precisa.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Espelhar Elemento</h4>
                      <p>Espelhamento horizontal, vertical ou livre. Útil para conferência de medidas entre frente e costas.</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-foreground">Perímetro</h4>
                      <p>Clique em elementos para ver o perímetro. Vai somando conforme clica em mais pontas.</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg mt-6">
                    <h4 className="font-bold text-foreground">Dica importante:</h4>
                    <p>Quando girar o molde com a ferramenta de rotação, o fio não muda - continua do jeito que estava desde o início.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo 4 */}
              <AccordionItem value="modulo-4" className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Módulo 4 - Noções de Como Criar Moldes
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Entendendo a geometria dos moldes</h3>
                  <p>
                    Eu quero que vocês entendam a geometria, como que funciona ela aplicada no feitio de moldes. Eu preciso que vocês vejam essa visão que eu tenho de geometria para vocês estarem usando quando forem criar qualquer molde.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">A técnica do retângulo</h3>
                  <p>
                    Todo molde é melhor feito se for feito em uma <strong>base retangular</strong>. Você faz um retângulo que envolva o molde inteiramente dentro dele.
                  </p>
                  <p>
                    Fazendo uma analogia: se eu tivesse esse molde em cima da minha mesa, eu pegava esse molde e fazia um retângulo em volta dele. Um retângulo de papel atrás/por baixo dele, que pegue toda a extremidade, encostando nas extremidades, porém sem nada ficando para fora.
                  </p>
                  <p>
                    <strong>Importante:</strong> Esse retângulo precisa ser esquadrilhado - 90 graus em cada canto para dar certo a estratégia.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">A função Snap</h3>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p>
                      Snap é uma função essencial do Audaces. Configure em <strong>Configuração → Snap</strong>. Geralmente uso botão esquerdo do mouse + Ctrl.
                    </p>
                  </div>
                  
                  <p className="mt-4">
                    O Snap funciona assim: quando você for usar qualquer ferramenta, pode ser usado por referência. Segurando Ctrl e clicando com o botão esquerdo, ele pega a extremidade da linha mais perto ou o centro, dependendo de onde você clicou.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">Como usar o Snap com a ferramenta Curva:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Selecione a ferramenta Curva</li>
                    <li>Segure Ctrl e clique no ponto de referência (extremidade ou centro de uma linha)</li>
                    <li>Digite a distância em centímetros que quer sair com a linha</li>
                    <li>Confirme com botão esquerdo - a curva começa a andar com você</li>
                    <li>Para fazer reta: dê apenas dois pontos e confirme</li>
                    <li>Para fazer curva: dê vários pontos sem apertar o botão direito</li>
                  </ol>

                  <div className="bg-muted/50 p-4 rounded-lg mt-4">
                    <h4 className="font-bold text-foreground">Dica prática:</h4>
                    <p>Aproveite esse início, pause o vídeo e treine bastante o Snap com a ferramenta curva no seu computador antes de continuar.</p>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mt-6">Exemplo prático:</h3>
                  <p>
                    Se você tem um molde com retângulo de 25,6 x 72,6 cm, use a ferramenta retângulo do Audaces. Clique para começar a desenhar e nas coordenadas coloque comprimento 72,6 e altura 25,6.
                  </p>
                  <p>
                    Lembre-se: o fio do molde é no comprimento do corpo. A calça fica como o corpo - o fio do tecido é horizontal, e a roupa fica posicionada no horizontal.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 text-center border border-primary/20"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Quer aprender tudo isso na prática?
              </h2>
              <p className="text-muted-foreground mb-6">
                Acesse o curso completo com videoaulas, bases de moldes inclusas e suporte via WhatsApp.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <a href="https://go.pepper.com.br/1xtll" target="_blank" rel="noopener noreferrer">
                  Garantir Minha Vaga no Curso
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Curso Aprenda Modelagem no Audaces e Lucre
              </p>
            </motion.div>
          </motion.article>
        </div>
      </main>
    </>
  );
};

export default DuvidasAudacesMoldes;
