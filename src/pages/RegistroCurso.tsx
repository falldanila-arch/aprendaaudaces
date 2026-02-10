import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Users, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegistroCurso = () => {
  return (
    <>
      <Helmet>
        <title>Registro do Curso Audaces | Certificação e Segurança para Alunos</title>
        <meta name="description" content="Nosso curso Audaces possui registro oficial para maior segurança dos alunos. Além disso, garantimos que apenas profissionais preparados utilizem nosso material de modelagem digital, moldes em PDF e costura." />
        <meta name="keywords" content="registro curso audaces, certificação audaces, curso audaces registrado, cursos de modelagem, modelagem digital, moldes em pdf, costura, designer grafico, cursos de modelagem audaces" />
      </Helmet>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Início
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                CURSO REGISTRADO
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Registro Oficial do Curso Audaces
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso curso possui registro para maior segurança de nossos alunos. Ademais, essa certificação garante a qualidade e a autenticidade do material oferecido.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground">
                  Consequentemente, o registro protege nossos alunos e garante que o material seja utilizado de forma responsável.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Autenticidade</h3>
                <p className="text-sm text-muted-foreground">
                  Além disso, nos preocupamos para que pessoas despreparadas não façam comércio indevido do nosso material.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Benefício Exclusivo</h3>
                <p className="text-sm text-muted-foreground">
                  Dessa forma, isso é mais um benefício para nossos alunos, que contam com um curso sério e profissional.
                </p>
              </motion.div>
            </div>

            {/* Detailed Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Por que nosso curso é registrado?</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  Em primeiro lugar, a qualidade do ensino em <strong>cursos de modelagem Audaces</strong> e <strong>modelagem digital</strong> depende diretamente da seriedade com que o material é tratado. Por isso, nosso curso possui registro oficial, garantindo total transparência e segurança para todos os alunos. Todavia, sabemos que no mercado existem materiais sem procedência, e por outro lado, nosso compromisso é justamente oferecer o oposto.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Bem como a proteção dos alunos, o registro também assegura que nenhuma pessoa despreparada faça comércio indevido do nosso material de <strong>costura</strong>, <strong>moldes em PDF</strong> e <strong>designer gráfico</strong>. Enfim, essa medida é essencial para manter a qualidade e a credibilidade do curso. Do mesmo modo, os alunos podem ter certeza de que estão investindo em um material autêntico e de alta qualidade.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Portanto, ao adquirir nosso curso, você não está apenas aprendendo <strong>modelagem digital</strong> e técnicas de <strong>costura criativa</strong>, mas também contando com um material registrado e protegido. Em suma, é mais um benefício exclusivo que oferecemos. Consequentemente, nossos alunos se destacam no mercado com conhecimento sólido e certificado. Ainda mais, o registro fortalece a confiança entre instrutor e aluno, criando um ambiente de aprendizado seguro e profissional. Apesar disso, mantemos os preços acessíveis para que todos possam se profissionalizar. Assim, democratizamos o acesso ao conhecimento em <strong>Audaces</strong> e <strong>modelagem profissional</strong>.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Acesse o Registro do Curso</h3>
                  <p className="text-muted-foreground text-sm">
                    Confira o documento oficial de registro do nosso curso para sua total segurança.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open("https://drive.google.com/file/d/1mriSHyb0OPeuNuy3G2DBm-_GwSE9XAYH/view?usp=drivesdk", "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Registro Oficial
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-muted-foreground mb-4">Ainda não conhece nosso curso?</p>
                  <Link to="/">
                    <Button variant="outline" size="lg">
                      Conhecer o Curso Audaces
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegistroCurso;
