import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Clock, Mail, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const PoliticaDevolucao = () => {
  return (
    <>
      <Helmet>
        <title>Política de Devolução e Reembolso | Aprenda Audaces</title>
        <meta name="description" content="Conheça nossa política de devolução e reembolso para cursos digitais. Garantia de 7 dias conforme o Código de Defesa do Consumidor." />
        <meta name="keywords" content="política de devolução, reembolso, garantia, curso audaces, devolução curso online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/politica-de-devolucao" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container px-6 py-12 mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Última atualização: Abril 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Devolução e Reembolso
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Transparência e segurança na sua compra de cursos digitais.
            </p>

            {/* Garantia de 7 dias */}
            <section className="mb-10 p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Garantia de 7 Dias</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conforme o <strong>Art. 49 do Código de Defesa do Consumidor</strong>, você tem o direito de solicitar o reembolso integral no prazo de <strong>7 (sete) dias corridos</strong> após a data da compra, sem necessidade de justificativa. Esse é o seu direito de arrependimento para compras realizadas fora do estabelecimento comercial (internet, telefone, etc.).
                  </p>
                </div>
              </div>
            </section>

            {/* Como solicitar */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                Como Solicitar o Reembolso
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Para solicitar a devolução, siga os passos abaixo:</p>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                  <li>
                    Entre em contato pelo nosso <a href="https://wa.me/5535998121698" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium">WhatsApp (35) 99812-1698</a> informando seu nome completo e e-mail utilizado na compra.
                  </li>
                  <li>
                    Informe o motivo da solicitação (opcional, mas nos ajuda a melhorar).
                  </li>
                  <li>
                    Aguarde a confirmação do processamento em até <strong>3 dias úteis</strong>.
                  </li>
                  <li>
                    O reembolso será efetuado pela mesma forma de pagamento utilizada na compra em até <strong>10 dias úteis</strong> após a confirmação.
                  </li>
                </ol>
              </div>
            </section>

            {/* Prazos */}
            <section className="mb-10 p-6 bg-card rounded-2xl border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Prazos
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-background rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Prazo para solicitar</p>
                  <p className="text-lg font-semibold text-foreground">7 dias corridos</p>
                  <p className="text-xs text-muted-foreground">A partir da data da compra</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Prazo para reembolso</p>
                  <p className="text-lg font-semibold text-foreground">Até 10 dias úteis</p>
                  <p className="text-xs text-muted-foreground">Após confirmação da solicitação</p>
                </div>
              </div>
            </section>

            {/* Condições */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                Condições Importantes
              </h2>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  O reembolso é válido apenas dentro do prazo de 7 dias corridos após a compra.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Após o prazo de 7 dias, não será possível solicitar devolução, pois o conteúdo digital já foi disponibilizado integralmente.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  O acesso ao curso será suspenso imediatamente após a confirmação do reembolso.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Cursos adquiridos por meio de promoções ou cupons seguem a mesma política de devolução.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Em caso de chargeback (contestação junto ao cartão de crédito), o acesso será bloqueado automaticamente.
                </li>
              </ul>
            </section>

            {/* Contato */}
            <section className="p-8 bg-card rounded-2xl border border-border text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Dúvidas sobre devolução?</h2>
              <p className="text-muted-foreground mb-6">
                Fale conosco pelo WhatsApp. Estamos prontos para ajudar.
              </p>
              <a
                href="https://wa.me/5535998121698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Falar no WhatsApp
              </a>
            </section>
          </motion.div>
        </div>

        <WhatsAppButton />
      </main>
    </>
  );
};

export default PoliticaDevolucao;
