import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Play } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Blog = () => {
  const { data: blogPosts, isLoading } = useBlogPosts();

  return (
    <>
      <Helmet>
        <title>Blog | Cursos de Modelagem Audaces - Dicas, Tutoriais e Novidades</title>
        <meta name="description" content="Blog sobre cursos de modelagem, Audaces, costura profissional e modelagem digital. Dicas, tutoriais e novidades para quem quer dominar o Audaces e trabalhar com moda." />
        <meta name="keywords" content="blog modelagem, blog Audaces, dicas Audaces, tutorial Audaces, cursos de modelagem, modelagem digital, costura profissional, curso audaces, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
        <link rel="canonical" href="https://aprendaaudaces.lovable.app/blog" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Aprenda Audaces",
            "description": "Dicas, tutoriais e novidades sobre Audaces, modelagem digital e costura profissional",
            "url": "https://aprendaaudaces.lovable.app/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Aprenda Audaces",
              "url": "https://aprendaaudaces.lovable.app"
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container px-6 mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 inline-block transition-colors">
                ← Voltar ao início
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Aprenda Audaces</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Dicas, tutoriais e novidades sobre cursos de modelagem, Audaces e costura profissional
              </p>
            </motion.div>
          </div>
        </header>

        <section className="py-16">
          <div className="container px-6 mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
                    <div className="aspect-video bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts?.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                        {post.has_video && (
                          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center group-hover:bg-primary/70 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-7 h-7 text-accent-foreground ml-1" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>

                        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(post.date).toLocaleDateString("pt-BR")}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.read_time}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container px-6 mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quer dominar o Audaces e a modelagem profissional?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Conheça nosso curso completo com mais de 500 alunos formados
            </p>
            <Link
              to="/curso-audaces"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Conhecer o Curso Audaces
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  );
};

export default Blog;
