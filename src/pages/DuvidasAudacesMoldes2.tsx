import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const DuvidasAudacesMoldes2 = () => {
  return (
    <>
      <Helmet>
        <title>Dúvidas Audaces Moldes 2 - Curso Audaces Modelagem</title>
        <meta name="description" content="Aprenda a criar moldes no Audaces: geometria de construção, bases de moldes femininas, masculinas e infantis, e como começar moldes do zero." />
        <meta name="keywords" content="cursos de modelagem, cursos de modelagem audaces, cursos de modelagem descomplicada, cursos de modelagem facil, cursos de modelagem moldes e encaixe, cursos de modelagem e digiflash, cursos de modelagem digital, cursos de modelagem em pdf, curso modelagem, audaces moldes, criar moldes audaces, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-accent/10 to-background">
          <div className="container px-6 mx-auto max-w-4xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Dúvidas Audaces Moldes 2
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Geometria de construção, bases de moldes e criação do zero - Módulos 4 (continuação), 5 e 6
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-6 mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* Módulo 4 - Continuação */}
              <AccordionItem value="modulo-4-cont" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                  Módulo 4 (Continuação) - Geometria de Construção de Moldes
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 space-y-4">
                  <p>E vou fazendo mais ou menos a curva que eu quero fazer lá. Não vai ficar bem feito, mas isso aqui é assim mesmo. Depois a gente volta arrumando. Eu vou pôr aqui com o Snap que eu quero parar essa curva com 27,5. Certo? Então está aqui. Está vendo? Então a gente já fez a primeira linha do nosso módulo.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Usando o Snap para Referência</h4>
                  <p>Agora eu vou dar um Snap aqui. Esse Snap, agora como eu tenho uma linha que já foi deixada aqui, ou seja, um ponto de referência. Eu posso apertar o Snap nela, no que é a extremidade. Ou seja, o Snap só pega o meio, a extremidade ou as duas extremidades. Então eu posso dar um Snap aqui nessa extremidade e sair com uma linha aqui agora.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Trabalhando com Medidas</h4>
                  <p>Então eu saindo com uma linha aqui agora, eu posso já fazer essa linha do meu módulo aqui. Então essa linha do meu módulo, ela fala que chega aqui, no final, ela chega com 15 centímetros. Vou voltar a lembrar vocês, tudo o que eu fizer aqui no Audaces, no Corel Draw, imagine que vocês podem estar fazendo na mesa de vocês também.</p>
                  
                  <p>Essa parte do Corel Draw. Vocês podem desenhar esse módulo no retângulo. Vocês tem um módulo e vocês desenham ele no retângulo que pega todas as extremidades. E vai fazer essas referências de medidas. 15 centímetros. E vai sair com essas mesmas referências de medidas para você construir aqui no Audaces.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Construindo Medidas Precisas</h4>
                  <p>Agora o que eu tenho que fazer? Eu já fiz essa parte que chega até aqui embaixo e eu tenho que olhar o restante dele aqui. Ele fala para mim que na hora que ele chega aqui, esse tamanhozinho aqui tem 2,8 ou 2,85. Se alguém preferir fazer mais exato, 2,85.</p>
                  
                  <p>Quando eu falo 2,85, 8 seria o meu milímetro. 2 seria o centímetro. 8 seria o meu milímetro. 5 seria o meu milímetro. Então é muito pouca diferença. Para quem às vezes está falando que tem que ser exato. É pouca diferença. Então pode mais ou menos seguir do jeito que eu estou fazendo que não vai ter problema.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Retas Horizontais e Verticais</h4>
                  <p>Eu tenho que ter um ponto de referência aqui onde ela sai. Aqui está me falando. Ele tem, essa medida aqui. Ela tem 6 centímetros. 6,7. Então a gente vai pegar a partir daqui com 1 centímetro. A gente vai fazer uma reta. Que ela não pode nem subir nem descer. Ela tem que ficar na horizontal exata.</p>
                  
                  <p><strong>Quando eu quero uma reta na horizontal exata, eu venho aqui e ponho 0 de índice. E ponho a medida que eu quero.</strong> A medida que eu quero é 6,7. Então eu venho aqui 6,7. Deixei a minha reta aqui onde eu quero que fique.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Ferramenta Manipulação</h4>
                  <p>Para checar essa linha até agora, eu vou pegar a ferramenta manipulação. Ela chamou de carregamento de elementos. Só que ela é uma manipulação de pontos. Então eu vou clicar aqui. E vou apertar o snap aqui onde eu deixei a referência. Aqui no meu ponto e vou soltar ela.</p>
                  
                  <p>Aqui não dá para ver, mas tem uma emenda. Aperta o snap e ele acha certinho a emenda.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Fechando o Molde</h4>
                  <p>A única reta que ficou faltando foi essa última reta aqui. Que fecha o molde. A gente precisa sempre fechar o molde. E sempre fechar ele no snap. Eu dou o snap aqui para começar a reta. E dou outro aqui para fechar. Então o meu molde está fechadinho. Ele está fechado tanto aqui quanto aqui. Quanto nessa quina, quanto nessa quina, quanto nessa.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Transformando Esboço em Molde</h4>
                  <p>Agora o que eu posso fazer? A gente aprendeu nas aulas anteriores que a gente tem a ferramenta Criar e Registrar Molde. Então eu vou clicar aqui nessa linha. Deixei em automático. É bom deixar que está em automático. Deixei em automático e clico de novo.</p>
                  
                  <p>Aí está vendo que ele pegou uma linha errada aqui? Não é essa linha que faz parte do nosso molde. Então eu vou clicar com o botão direito. Para ele sair. Agora ele pegou a certa. Eu vou clicar com o botão esquerdo para confirmar.</p>
                  
                  <p><strong>É importantíssimo que vocês entendam isso:</strong> Quando eu clico com o botão esquerdo aqui, ele pegou essa linha. Então eu tenho que criar todas as linhas do molde que eu quero fechar. Do molde que faz parte do que eu quero criar. Essas linhas em volta são só linhas guias.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Refinando as Curvas</h4>
                  <p>Essas curvas não ficam exatas quando a gente faz isso. Para elas ficarem exatas é muito fácil. Imagine que você está com papel na mão. Em cima da mesa. Com seu molde em cima da mesa. E com esse retângulo vermelho. Você clica e faz retas. Essas retas você faz a medida delas. E transcreve para o molde.</p>
                  
                  <p>Como eu vou transcrever isso para lá? Eu pego essa medida daqui até aqui. E faço essa medida daqui até aqui. Então essa curva tem que passar exatamente na extremidade dessa reta.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Geometria Retangular</h4>
                  <p className="bg-accent/10 p-4 rounded-lg"><strong>Conceito fundamental:</strong> Eu queria que vocês entendessem a geometria de criação de um molde dentro do Audaces. Que todo molde é criado dentro de um retângulo. Ou melhor dizendo, ele é basicamente um retângulo que compõe o molde lá dentro. Um retângulo qualquer. Que o molde caça todas as extremidades lá dentro. E a partir disso a gente desenvolve o molde.</p>
                  
                  <p>Então a gente precisa ter essa noção. Essa geometria que foi usada aqui. Uma geometria retangular. Esquadrejada. Que a gente vai usar muito na criação de molde.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo 5 */}
              <AccordionItem value="modulo-5" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                  Módulo 5 - Bases de Moldes
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 space-y-4">
                  <p>Nós vamos falar aqui de base de moldes. Então eu vou mostrar os moldes aqui que é muito usado para a gente estar desenvolvendo os moldes dos clientes. Esses moldes eu uso muito na minha empresa hoje. Tudo para estar desenvolvendo os moldes que os clientes querem.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Conteúdo do Bônus do Curso</h4>
                  <p>Esses moldes são compostos de variações feminina, masculina, bases. Assim que vocês adquirirem o curso, vocês vão receber como bônus do curso todas essas bases:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Base de bebê</li>
                    <li>Base feminina</li>
                    <li>Base infantis</li>
                    <li>Base masculina</li>
                    <li>Planilha de custo de cada peça feito no tecido</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Bases Femininas</h3>
                  
                  <h4 className="font-semibold text-foreground mt-4">Variações de Camiseta Feminina</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Babylook Raglan feminina manga longa</li>
                    <li>Babylook Raglan manga curta</li>
                    <li>Babylook feminina manga curta (manga tradicional)</li>
                    <li>Babylook feminina manga longa (manga tradicional)</li>
                  </ul>
                  
                  <p>Para a gente, esse molde como é Babylook é para fazer no elastano, no tecido que tem elastano. Porque ele é uma base, já é uma modelagem mais justo ao corpo. A pessoa que quer uma Babylook com elastano é essa aqui ideal. Gola careca, tudo certinho.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Convertendo para Tecido Plano</h4>
                  <p>Se vocês quiserem pegar ela para fazer num tecido sem elastano é muito fácil:</p>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Clique com o botão direito, propriedades</li>
                    <li>Na parte de graduação, onde era G (base), mude para P</li>
                    <li>Configure: PP, P (que era G), e para baixo: M, G, GG, XG</li>
                    <li>Ponha cores diferentes para reconhecer cada tamanho</li>
                  </ol>
                  
                  <p>Então o P agora está maior, está um P que era um G Baby Look. Ou seja, o G Baby Look vai servir para uma pessoa que quer uma blusinha mais larguinha, que seja P. Uma pessoa que seja P na blusinha larguinha. Porém, quando ela usar a Baby Look, ela é G.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Outras Bases Femininas</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Base de construção de molde:</strong> Para fazer qualquer molde - vestido, calça, short, saia. Qualquer peça na modelagem feminina.</li>
                    <li><strong>Blazer feminino:</strong> Base bem completa com forro e tecido, já graduada.</li>
                    <li><strong>Calça base:</strong> Para construir calças mais coladas no corpo.</li>
                    <li><strong>Calça ginástica:</strong> Para calça bem colada.</li>
                    <li><strong>Calça jeans feminina:</strong> Com forro e coze, jeans tradicional.</li>
                    <li><strong>Base lingerie:</strong> Calça base para quem quer trabalhar com lingerie.</li>
                    <li><strong>Camiseta feminina:</strong> Base social feminina com pences, bem cinturada.</li>
                    <li><strong>Saia jeans:</strong> Tipo mini saia jeans.</li>
                    <li><strong>Short surf feminino:</strong> Feito em tactel.</li>
                    <li><strong>Sutiã:</strong> Base já mais ou menos montada.</li>
                    <li><strong>Vestido básico:</strong> Geralmente feito em malha ou viscose.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Tabela Feminina - Medidas</h4>
                  <p className="bg-accent/10 p-4 rounded-lg"><strong>Importante:</strong> Todas as medidas na tabela são circunferências. Se você medir a largura da roupa colocada na mesa, de um lado até o outro é metade. Para fazer metade do molde (base feminina), divida por 4. Exemplo: Busto P = 86 a 90cm → divida por 4 = 21,5 a 22,5cm. Essas medidas são sem costura (peça pronta). Acrescente a costura: geralmente 2,5cm na barra e 1cm no ombro.</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Bases Masculinas</h3>
                  
                  <h4 className="font-semibold text-foreground mt-4">Variações de Camiseta Masculina</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Camiseta Gola V manga raglan curta</li>
                    <li>Camiseta manga raglan curta</li>
                    <li>Camiseta manga raglan manga longa</li>
                    <li>Camiseta gola V manga tradicional</li>
                    <li>Camiseta gola careca tradicional manga longa</li>
                  </ul>
                  
                  <p>Masculino é uma modelagem mais usual. Se quiser mais slim, tire um pouco das laterais. Se tirar na lateral, tem que tirar na lateral da manga também porque a lateral da manga casa com as cavas.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Outras Bases Masculinas</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Bermuda surf:</strong> Para tactel.</li>
                    <li><strong>Bermuda malha:</strong> Para shorts de ficar em casa.</li>
                    <li><strong>Blazer terno:</strong> Modelagem slim. Numeração: 40 veste 14, 42 veste 16, 44 veste 36. Vai de 14, 16 até 46.</li>
                    <li><strong>Calça jeans masculina:</strong> Base com bastante recortes.</li>
                    <li><strong>Leg masculina:</strong> Para fazer na lycra, de elástico.</li>
                    <li><strong>Calça moletom:</strong> Serve também para tactel e malha.</li>
                    <li><strong>Calça social masculina</strong></li>
                    <li><strong>Camisa esporte:</strong> Esporte fino.</li>
                    <li><strong>Camisa social masculina:</strong> Manga longa tradicional.</li>
                    <li><strong>Cueca básica e cueca box</strong></li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Bases Infantis</h3>
                  
                  <h4 className="font-semibold text-foreground mt-4">Camisetas Infantis</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Camiseta tradicional infantil</li>
                    <li>Camiseta raglan infantil (manga longa e curta)</li>
                    <li>Manga longa careca</li>
                    <li>Manga raglan gola V</li>
                    <li>Gola V manga tradicional</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Outras Bases Infantis</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Base infantil 1 ano:</strong> Para fazer feminino - vestido, blusinha. Quase igual à base feminina.</li>
                    <li><strong>Bata infantil</strong></li>
                    <li><strong>Vestido infantil:</strong> Larguinho, geralmente em viscose ou tricoline. Dá para fazer com godê.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Bases Bebê</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Body bebê</li>
                    <li>Body bebê raglan</li>
                    <li>Calça bebê</li>
                    <li>Jardineira bebê</li>
                    <li>Macacão bebê (com sapatinho fechado, botão na frente, manga raglan, golinha alta)</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Planilha de Custo</h4>
                  <p>A planilha inclui consumo de tecido para: jaqueta, batas largas, casaco, calça, blusa, short, saia, vestido. Muito útil para responder clientes sobre quanto gasta de tecido em cada peça.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo 6 */}
              <AccordionItem value="modulo-6" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                  Módulo 6 - Começando Moldes do Zero
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 space-y-4">
                  <p>Vamos falar aqui sobre a construção de moldes. Essa aula vocês vão adorar porque agora realmente a gente vai pôr em prática todas as ferramentas que a gente aprendeu e vou ensinar como vocês vão começar moldes do zero.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Buscando Referência</h4>
                  <p>Eu vou no Google e vou digitar "fotos blusas femininas". Vai aparecer inúmeras blusas diferentes. Vou pegar uma aqui que não seja tão simples e não seja tão trabalhosa. Por exemplo, uma camisa de musseline crepe.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Preparando o Ambiente</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Abra o Audaces, coloque meia janela</li>
                    <li>Na pasta bases, abra bases femininas</li>
                    <li>Construa em cima da base de construção de moldes</li>
                    <li>Aperte F6 para esconder as graduações</li>
                    <li>Em Cores, coloque azul para o desenho (para diferenciar)</li>
                  </ol>
                  
                  <h4 className="font-semibold text-foreground mt-4">Entendendo DX e DY</h4>
                  <p className="bg-accent/10 p-4 rounded-lg"><strong>Conceito fundamental:</strong> O Audaces entende como um plano cartesiano. O Y é sempre a vertical e o X é sempre a horizontal. Então se você quer que a linha não ande na horizontal, coloque DX = 0. Se não quer que ande na vertical, coloque DY = 0.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Iniciando o Desenho da Blusa</h4>
                  <p>Como é uma camisa mais larga, eu geralmente ponho 2 centímetros de diferença da base corporal. Essas são medidas corporais de um tamanho 38.</p>
                  
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Pegue a ferramenta curva (faz tanto reta quanto curva)</li>
                    <li>Clique CTRL + botão esquerdo para snap na ponta da cava da base</li>
                    <li>Para sair 2cm da base: DX = 0, DY = 2</li>
                    <li>Isso cria uma linha guia para começar a cava</li>
                  </ol>
                  
                  <h4 className="font-semibold text-foreground mt-4">Desenhando a Lateral</h4>
                  <p>Com a ferramenta curva selecionada:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Clique CTRL + esquerdo para snap na extremidade da linha</li>
                    <li>Como quero camisa reta, faça cintura bem branda (não muito curvada)</li>
                    <li>Deixe o ponto mais ou menos na linha do gancho (lembre da barra)</li>
                    <li>Se der só um ponto = reta; mais pontos = curva</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Desenhando a Cava</h4>
                  <p>A blusa não pega o ombro inteiro, geralmente blusas não pegam a largura do ombro inteiro. Faça menor que o ombro e afaste um pouco do decote.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Sobre Pilotagem</h4>
                  <p className="bg-accent/10 p-4 rounded-lg"><strong>Importante:</strong> Todo moldelista que trabalha em fábrica já tem seus padrões. Aqui não temos padrões ainda, seguimos mais ou menos o que a blusa tem que ser. Vocês vão pilotar essa blusa, e com isso vão criar padrões. Toda roupa feita do zero, ainda mais por foto, tem que ser pilotada para chegar nos tamanhos exatos.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Criando o Decote</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Clique CTRL + esquerdo para snap</li>
                    <li>Digite a medida desejada (ex: 5cm ou 6cm)</li>
                    <li>Interprete a foto para decidir o tamanho</li>
                  </ol>
                  
                  <h4 className="font-semibold text-foreground mt-4">Fechando a Barra</h4>
                  <p>Para criar reta horizontal exata:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Coloque DY = 0 (não move verticalmente)</li>
                    <li>Isso dá só a distância X</li>
                    <li>Posicione onde quer a blusa (quase na linha do gancho)</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Transformando em Molde</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Use a ferramenta "criar ou editar molde"</li>
                    <li>Deixe a opção "automática"</li>
                    <li>Clique nas linhas do molde (não nas linhas guia)</li>
                    <li>Se pegar linha errada, clique botão direito para sair</li>
                    <li>Confirme com botão esquerdo</li>
                  </ol>
                  
                  <h4 className="font-semibold text-foreground mt-4">Criando as Costas</h4>
                  <p>Não precisa criar do zero! Pegue a frente e retrate nas costas:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sempre posicione pela cava (mesma referência da frente)</li>
                    <li>O ombro das costas tem que ser sempre maior que da frente</li>
                    <li>Isso dá um caimento para frente (padrão correto)</li>
                    <li>Coloque 2cm a mais no ombro das costas</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Por que as Costas são Menores?</h4>
                  <p>Geralmente a base é menor nas costas para ter caimento melhor. A frente tem o busto (volume), que puxa o pano para frente. Na hora que o busto faz volume, o tecido perde espaço e desce um pouco. Por isso tiramos 1-2cm nas costas para blusas coladas. Para blusas larguinhas, pode deixar do mesmo tamanho.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Adicionando/Removendo Costura</h4>
                  <p>Para remover costura só de uma parte:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Clique em "criar costura"</li>
                    <li>Coloque menos 1 (-1)</li>
                    <li>Isso remove 1cm de costura daquele ponto</li>
                  </ul>
                  
                  <p className="bg-accent/10 p-4 rounded-lg mt-4"><strong>Dica:</strong> Para molde exato (não por foto), use a técnica da aula anterior: pegue um molde ou roupa, desenhe um retângulo em volta pegando todas as extremidades, meça tudo e redesenhe no Audaces.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

            {/* CTA Section */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Quer aprender tudo isso na prática?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Garanta acesso ao curso completo com mais de 50 moldes bases inclusos!
                </p>
                <a
                  href="https://go.pepper.com.br/1xtll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Garantir Minha Vaga no Curso
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Curso: Aprenda Modelagem no Audaces e Lucre
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <WhatsAppButton />
      </div>
    </>
  );
};

export default DuvidasAudacesMoldes2;
