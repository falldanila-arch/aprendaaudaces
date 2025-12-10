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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
