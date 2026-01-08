import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Monitor, Layers, Scissors, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Audaces = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Helmet>
        <title>Audaces - Sistema de Modelagem e Encaixe Têxtil | Aprenda Audaces</title>
        <meta name="description" content="Aprenda Audaces, o sistema líder em modelagem digital, encaixe automático e criação de moldes para confecção. Domine o software usado pelas maiores empresas têxteis do Brasil." />
        <meta name="keywords" content="audaces, sistema audaces, software audaces, audaces vestuário, audaces moldes, audaces modelagem, audaces encaixe, audaces corte, curso audaces" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/audaces" />
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
            Audaces: O Sistema Completo para Confecção Têxtil
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            O Audaces é a solução tecnológica mais completa para a indústria da moda e confecção no Brasil. 
            Com módulos integrados de modelagem, encaixe, corte e gestão de produção, o software revolucionou 
            a forma como empresas desenvolvem suas coleções.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <Monitor className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Audaces Moldes</h3>
              <p className="text-gray-400">
                Crie e edite moldes digitais com precisão milimétrica. Ferramentas profissionais 
                para gradação, costura e desenvolvimento de peças completas.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <Layers className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Audaces Encaixe</h3>
              <p className="text-gray-400">
                Otimize o consumo de tecido com encaixe automático inteligente. Economize até 
                15% de matéria-prima em cada produção.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <Scissors className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Audaces Corte</h3>
              <p className="text-gray-400">
                Integração com máquinas de corte automatizadas para produção industrial 
                com máxima precisão e velocidade.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
              <TrendingUp className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Gestão de Produção</h3>
              <p className="text-gray-400">
                Controle ficha técnica, consumo de materiais e acompanhe toda a cadeia 
                produtiva em tempo real.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Por que Aprender Audaces?</h2>
          <p className="text-gray-300 mb-4">
            O mercado têxtil brasileiro exige profissionais qualificados em Audaces. Empresas de todos 
            os portes utilizam o software para desenvolvimento de coleções, desde pequenas confecções 
            até grandes indústrias como Renner, C&A e Hering.
          </p>

          <p className="text-gray-300 mb-4">
            Dominar o Audaces significa ter acesso a oportunidades de emprego com salários acima 
            da média do mercado. Modelistas certificados em Audaces são altamente valorizados e 
            requisitados por empresas de todo o país.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Versões do Audaces</h2>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li><strong>Audaces 360:</strong> Solução na nuvem com todos os módulos integrados</li>
            <li><strong>Audaces Vestuário:</strong> Pacote tradicional para modelagem e encaixe</li>
            <li><strong>Audaces Idea:</strong> Criação de desenhos técnicos e fichas</li>
            <li><strong>Audaces DigiFlash:</strong> Digitalização de moldes físicos</li>
          </ul>

          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Domine o Audaces e Transforme sua Carreira!
            </h3>
            <p className="text-white/90 mb-6">
              Aprenda do zero ao avançado com aulas práticas e certificado reconhecido.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Conhecer o Curso Completo
              </Button>
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default Audaces;
