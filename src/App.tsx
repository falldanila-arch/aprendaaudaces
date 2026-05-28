import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Theme pages
import CursosModelagem from "./pages/CursosModelagem";
import MoldesPDF from "./pages/MoldesPDF";
import ModelagemDigital from "./pages/ModelagemDigital";
import MoldesParaCostura from "./pages/MoldesParaCostura";
import MoldeDeRoupa from "./pages/MoldeDeRoupa";
import ModelagemDescomplicada from "./pages/ModelagemDescomplicada";
import CosturaCriativa from "./pages/CosturaCriativa";
import ArtesanatoCostura from "./pages/ArtesanatoCostura";
import TecidoFabricaTextil from "./pages/TecidoFabricaTextil";
import FioTecido from "./pages/FioTecido";
import ReguasEsquadrosCostura from "./pages/ReguasEsquadrosCostura";
import CorteEnfestoTecido from "./pages/CorteEnfestoTecido";
import ModelagemDigitalPage from "./pages/ModelagemDigitalPage";
import ModelagemProfissional from "./pages/ModelagemProfissional";
import CriacaoRoupas from "./pages/CriacaoRoupas";
import ModelagemCad from "./pages/ModelagemCad";
import ModelagemManual from "./pages/ModelagemManual";
import Aviamentos from "./pages/Aviamentos";
import MaquinariosCostura from "./pages/MaquinariosCostura";
import AcabamentoCostura from "./pages/AcabamentoCostura";
import AudacesGratis from "./pages/AudacesGratis";
import AudacesSete from "./pages/AudacesSete";
import Audaces from "./pages/Audaces";
import AudacesDigiflash from "./pages/AudacesDigiflash";
import AudacesEncaixe from "./pages/AudacesEncaixe";
import Costura from "./pages/Costura";
import CosturaEmCasa from "./pages/CosturaEmCasa";
import CosturaECorte from "./pages/CosturaECorte";
import AltaCostura from "./pages/AltaCostura";
import CosturaSocial from "./pages/CosturaSocial";
import CosturaAlfaiataria from "./pages/CosturaAlfaiataria";
import CosturaBasica from "./pages/CosturaBasica";
import CosturaModinha from "./pages/CosturaModinha";
import CosturaEDesign from "./pages/CosturaEDesign";
import ApostilaCurso from "./pages/ApostilaCurso";
import ApostilaOperador from "./pages/ApostilaOperador";
import Bellajob from "./pages/Bellajob";
import PoliticaDevolucao from "./pages/PoliticaDevolucao";
import DigitalizarMoldeAudaces from "./pages/DigitalizarMoldeAudaces";

// Article pages
import AudacesEconomizandoTecido from "./pages/articles/AudacesEconomizandoTecido";
import MoldesDigitaisSublimacao from "./pages/articles/MoldesDigitaisSublimacao";
import MapaRiscoAudaces from "./pages/articles/MapaRiscoAudaces";
import CosturarMoldesAudaces from "./pages/articles/CosturarMoldesAudaces";
import FaccaoCortesAudaces from "./pages/articles/FaccaoCortesAudaces";
import TecidosPeAudaces from "./pages/articles/TecidosPeAudaces";
import PregasPencesAudaces from "./pages/articles/PregasPencesAudaces";
import GradacaoMoldesAudaces from "./pages/articles/GradacaoMoldesAudaces";
import ConverterAudacesPDF from "./pages/articles/ConverterAudacesPDF";
import CriarMoldesAudaces from "./pages/articles/CriarMoldesAudaces";
import DigitalizarMoldesDigiflash from "./pages/articles/DigitalizarMoldesDigiflash";
import ConsumoTecidoAudaces from "./pages/articles/ConsumoTecidoAudaces";
import EntreTelaEnfestoAudaces from "./pages/articles/EntreTelaEnfestoAudaces";
import MoldesComLadoAudaces from "./pages/articles/MoldesComLadoAudaces";
import FazerPilotoAudaces from "./pages/articles/FazerPilotoAudaces";
import ConstruirMoldesAudaces from "./pages/articles/ConstruirMoldesAudaces";
import MoldesTabelaMedidas from "./pages/articles/MoldesTabelaMedidas";
import GabaritoBolsoAudaces from "./pages/articles/GabaritoBolsoAudaces";
import DuvidasAudacesMoldes from "./pages/DuvidasAudacesMoldes";
import DuvidasAudacesMoldes2 from "./pages/DuvidasAudacesMoldes2";
import RegistroCurso from "./pages/RegistroCurso";
import CaminhoSucesso from "./pages/CaminhoSucesso";
import CursoAudaces from "./pages/CursoAudaces";
import CursosDeModelagem from "./pages/CursosDeModelagem";
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";
import BlogAdmin from "./pages/admin/BlogAdmin";
import AudacesErradoModelagem from "./pages/blog/AudacesErradoModelagem";
import GradacaoAutomaticaAudaces from "./pages/blog/GradacaoAutomaticaAudaces";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cursos-modelagem" element={<CursosModelagem />} />
          <Route path="/moldes-pdf" element={<MoldesPDF />} />
          <Route path="/modelagem-digital" element={<ModelagemDigital />} />
          <Route path="/moldes-para-costura" element={<MoldesParaCostura />} />
          <Route path="/molde-de-roupa" element={<MoldeDeRoupa />} />
          <Route path="/modelagem-descomplicada" element={<ModelagemDescomplicada />} />
          <Route path="/costura-criativa" element={<CosturaCriativa />} />
          <Route path="/artesanato-costura" element={<ArtesanatoCostura />} />
          <Route path="/tecido-fabrica-textil" element={<TecidoFabricaTextil />} />
          <Route path="/fio-tecido" element={<FioTecido />} />
          <Route path="/reguas-esquadros-costura" element={<ReguasEsquadrosCostura />} />
          <Route path="/corte-enfesto-tecido" element={<CorteEnfestoTecido />} />
          <Route path="/modelagem-digital-page" element={<ModelagemDigitalPage />} />
          <Route path="/modelagem-digital-completa" element={<ModelagemDigitalPage />} />
          <Route path="/modelagem-profissional" element={<ModelagemProfissional />} />
          <Route path="/criacao-de-roupas" element={<CriacaoRoupas />} />
          <Route path="/modelagem-cad" element={<ModelagemCad />} />
          <Route path="/modelagem-manual" element={<ModelagemManual />} />
          <Route path="/aviamentos" element={<Aviamentos />} />
          <Route path="/maquinarios-costura" element={<MaquinariosCostura />} />
          <Route path="/acabamento-costura" element={<AcabamentoCostura />} />
          <Route path="/audaces-gratis" element={<AudacesGratis />} />
          <Route path="/audaces-7" element={<AudacesSete />} />
          <Route path="/audaces" element={<Audaces />} />
          <Route path="/audaces-digiflash" element={<AudacesDigiflash />} />
          <Route path="/audaces-encaixe" element={<AudacesEncaixe />} />
          <Route path="/costura" element={<Costura />} />
          <Route path="/costura-em-casa" element={<CosturaEmCasa />} />
          <Route path="/costura-e-corte" element={<CosturaECorte />} />
          <Route path="/alta-costura" element={<AltaCostura />} />
          <Route path="/costura-social" element={<CosturaSocial />} />
          <Route path="/costura-alfaiataria" element={<CosturaAlfaiataria />} />
          <Route path="/costura-basica" element={<CosturaBasica />} />
          <Route path="/costura-modinha" element={<CosturaModinha />} />
          <Route path="/costura-e-design" element={<CosturaEDesign />} />
          <Route path="/apostila-curso-audaces" element={<ApostilaCurso />} />
          <Route path="/apostila-curso-operador-audaces" element={<ApostilaOperador />} />
          <Route path="/bellajob" element={<Bellajob />} />
          <Route path="/politica-de-devolucao" element={<PoliticaDevolucao />} />
          <Route path="/digitalizar-molde-audaces" element={<DigitalizarMoldeAudaces />} />
          <Route path="/cursos-de-modelagem" element={<CursosDeModelagem />} />
          <Route path="/audaces-economizando-tecido" element={<AudacesEconomizandoTecido />} />
          <Route path="/moldes-digitais-sublimacao" element={<MoldesDigitaisSublimacao />} />
          <Route path="/mapa-risco-audaces" element={<MapaRiscoAudaces />} />
          <Route path="/costurar-moldes-audaces" element={<CosturarMoldesAudaces />} />
          <Route path="/faccao-cortes-audaces" element={<FaccaoCortesAudaces />} />
          <Route path="/tecidos-pe-audaces" element={<TecidosPeAudaces />} />
          <Route path="/pregas-pences-audaces" element={<PregasPencesAudaces />} />
          <Route path="/gradacao-moldes-audaces" element={<GradacaoMoldesAudaces />} />
          <Route path="/converter-audaces-pdf" element={<ConverterAudacesPDF />} />
          <Route path="/criar-moldes-audaces" element={<CriarMoldesAudaces />} />
          <Route path="/digitalizar-moldes-digiflash" element={<DigitalizarMoldesDigiflash />} />
          <Route path="/consumo-tecido-audaces" element={<ConsumoTecidoAudaces />} />
          <Route path="/entretela-enfesto-audaces" element={<EntreTelaEnfestoAudaces />} />
          <Route path="/moldes-lado-audaces" element={<MoldesComLadoAudaces />} />
          <Route path="/fazer-piloto-audaces" element={<FazerPilotoAudaces />} />
          <Route path="/construir-moldes-audaces" element={<ConstruirMoldesAudaces />} />
          <Route path="/moldes-tabela-medidas" element={<MoldesTabelaMedidas />} />
          <Route path="/gabarito-bolso-audaces" element={<GabaritoBolsoAudaces />} />
          <Route path="/duvidas-audaces-moldes" element={<DuvidasAudacesMoldes />} />
          <Route path="/duvidas-audaces-moldes-2" element={<DuvidasAudacesMoldes2 />} />
          <Route path="/registro-curso" element={<RegistroCurso />} />
          <Route path="/caminho-do-sucesso-usando-audaces" element={<CaminhoSucesso />} />
          <Route path="/curso-audaces" element={<CursoAudaces />} />
          <Route path="/cursos-de-modelagem" element={<CursosDeModelagem />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/audaces-errado-modelagem-profissional" element={<AudacesErradoModelagem />} />
          <Route path="/blog/gradacao-automatica-audaces-pp-g10" element={<GradacaoAutomaticaAudaces />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
