import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, FileImage, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AudacesDigiflash = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Helmet>
        <title>Audaces DigiFlash - Digitalização de Moldes | Aprenda Audaces</title>
        <meta name="description" content="Aprenda Audaces DigiFlash para digitalizar moldes físicos com câmera ou scanner. Converta moldes de papel em arquivos digitais de forma rápida e precisa." />
        <meta name="keywords" content="audaces digiflash, digitalizar moldes, digitalização moldes, scanner moldes, câmera moldes, converter moldes papel, audaces digitalização" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/audaces-digiflash" />
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
            Audaces DigiFlash: Digitalize Seus Moldes com Facilidade
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            O Audaces DigiFlash é a solução ideal para quem precisa converter moldes físicos em 
            arquivos digitais. Utilizando apenas uma câmera ou scanner, você transforma décadas 
            de modelagem manual em arquivos editáveis no Audaces Moldes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20 text-center">
              <Camera className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Captura por Câmera</h3>
              <p className="text-gray-400 text-sm">
                Use qualquer câmera digital para fotografar seus moldes e convertê-los automaticamente.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20 text-center">
              <FileImage className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Precisão Digital</h3>
              <p className="text-gray-400 text-sm">
                Reconhecimento automático de contornos, piques e furos com alta precisão.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20 text-center">
              <Zap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rapidez no Processo</h3>
              <p className="text-gray-400 text-sm">
                Digitalize moldes em minutos, economizando horas de redesenho manual.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Como Funciona o DigiFlash?</h2>
          <p className="text-gray-300 mb-4">
            O processo de digitalização com o DigiFlash é simples e intuitivo. Primeiro, você 
            fotografa o molde físico sobre uma superfície de referência com marcadores especiais. 
            O software então processa a imagem, identificando automaticamente o contorno do molde.
          </p>

          <p className="text-gray-300 mb-4">
            Após o reconhecimento, você pode fazer ajustes finos nos pontos de contorno, adicionar 
            piques, furos e informações técnicas. O resultado é um molde digital pronto para ser 
            usado no Audaces Moldes, com todas as ferramentas de edição disponíveis.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Vantagens do Audaces DigiFlash</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Preservação do Acervo</h4>
                <p className="text-gray-400">Digitalize moldes antigos e preserve décadas de trabalho em formato seguro.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Economia de Tempo</h4>
                <p className="text-gray-400">Evite redesenhar moldes do zero - capture e edite em poucos minutos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Integração Total</h4>
                <p className="text-gray-400">Moldes digitalizados funcionam perfeitamente com Audaces Moldes e Encaixe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Baixo Custo de Equipamento</h4>
                <p className="text-gray-400">Use câmeras comuns ou scanners - não precisa de mesa digitalizadora cara.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Requisitos para Usar o DigiFlash</h2>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li><strong>Câmera digital:</strong> Resolução mínima de 5 megapixels</li>
            <li><strong>Superfície de captura:</strong> Base com marcadores de referência</li>
            <li><strong>Iluminação:</strong> Ambiente bem iluminado para melhor reconhecimento</li>
            <li><strong>Software:</strong> Audaces DigiFlash instalado no computador</li>
          </ul>

          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aprenda a Digitalizar Moldes com DigiFlash!
            </h3>
            <p className="text-white/90 mb-6">
              Curso completo com aulas práticas de digitalização e edição de moldes.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Acessar o Curso Completo
              </Button>
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default AudacesDigiflash;
