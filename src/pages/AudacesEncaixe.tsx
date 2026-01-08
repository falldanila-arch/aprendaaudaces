import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutGrid, TrendingDown, Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AudacesEncaixe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Helmet>
        <title>Audaces Encaixe - Otimização de Tecido e Corte | Aprenda Audaces</title>
        <meta name="description" content="Domine o Audaces Encaixe e aprenda a otimizar o consumo de tecido. Encaixe automático inteligente que economiza até 15% de matéria-prima na confecção." />
        <meta name="keywords" content="audaces encaixe, encaixe automático, otimização tecido, economia tecido, encaixe moldes, risco tecido, mapa de corte, audaces corte" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/audaces-encaixe" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o curso
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert prose-amber max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Audaces Encaixe: Maximize a Economia de Tecido
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            O Audaces Encaixe é o módulo responsável por otimizar o posicionamento dos moldes no tecido, 
            garantindo o menor desperdício possível. Com algoritmos inteligentes de encaixe automático, 
            você pode economizar até 15% de matéria-prima em cada produção.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <LayoutGrid className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Encaixe Automático</h3>
              <p className="text-gray-400">
                O sistema calcula automaticamente a melhor disposição dos moldes, considerando 
                sentido do fio, estampas e restrições de corte.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <TrendingDown className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Redução de Desperdício</h3>
              <p className="text-gray-400">
                Algoritmos otimizados garantem aproveitamento máximo do tecido, reduzindo 
                custos de produção significativamente.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <Clock className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Rapidez no Processo</h3>
              <p className="text-gray-400">
                Gere encaixes em segundos que levariam horas se feitos manualmente, 
                aumentando a produtividade da equipe.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <Settings className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Configurações Avançadas</h3>
              <p className="text-gray-400">
                Personalize parâmetros de encaixe como margem de segurança, rotação 
                de peças e agrupamento por tamanho.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">O que é Encaixe de Moldes?</h2>
          <p className="text-gray-300 mb-4">
            O encaixe é o processo de posicionar os moldes de uma peça de roupa sobre o tecido de forma 
            a aproveitar o máximo de material possível. Um bom encaixe considera o sentido do fio, 
            a largura do tecido, as especificações de cada molde e as restrições da produção.
          </p>

          <p className="text-gray-300 mb-4">
            No método tradicional, o encaixe era feito manualmente sobre papel, consumindo horas de 
            trabalho. Com o Audaces Encaixe, esse processo é automatizado e otimizado por algoritmos 
            que testam milhares de combinações em segundos.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tipos de Encaixe no Audaces</h2>
          <ul className="text-gray-300 space-y-3 mb-8">
            <li>
              <strong>Encaixe Automático:</strong> O software posiciona todos os moldes automaticamente, 
              buscando o menor consumo de tecido.
            </li>
            <li>
              <strong>Encaixe Semi-automático:</strong> Você posiciona algumas peças manualmente e o 
              sistema completa o restante.
            </li>
            <li>
              <strong>Encaixe Manual:</strong> Total controle sobre o posicionamento de cada molde, 
              ideal para tecidos especiais.
            </li>
            <li>
              <strong>Encaixe por Grade:</strong> Organiza moldes de diferentes tamanhos em um 
              único risco de corte.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Benefícios Financeiros do Encaixe Otimizado</h2>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20 mb-8">
            <p className="text-gray-300 mb-4">
              Em uma confecção que processa 1.000 metros de tecido por mês, uma economia de 10% 
              no encaixe representa:
            </p>
            <ul className="text-amber-400 space-y-2">
              <li>• 100 metros de tecido economizados por mês</li>
              <li>• Economia de R$ 3.000 a R$ 10.000 mensais (dependendo do tecido)</li>
              <li>• R$ 36.000 a R$ 120.000 de economia anual</li>
              <li>• Retorno do investimento no software em poucos meses</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Integração com Máquinas de Corte</h2>
          <p className="text-gray-300 mb-8">
            O Audaces Encaixe gera arquivos compatíveis com as principais máquinas de corte automático 
            do mercado. O risco de corte pode ser enviado diretamente para o equipamento, eliminando 
            erros de transferência e garantindo precisão total no processo produtivo.
          </p>

          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aprenda a Criar Encaixes Profissionais!
            </h3>
            <p className="text-white/90 mb-6">
              Curso completo de Audaces com módulo dedicado ao encaixe e otimização de tecido.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Começar Agora
              </Button>
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default AudacesEncaixe;
