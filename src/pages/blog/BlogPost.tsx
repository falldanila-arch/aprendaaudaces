import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useBlogPost } from "@/hooks/useBlogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  if (!post || error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Post não encontrado.</p>
        <Link to="/blog" className="text-accent hover:underline">Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Aprenda Audaces</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://aprendaaudaces.lovable.app/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://aprendaaudaces.lovable.app/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.updated_at,
          author: { "@type": "Person", name: "Professor Robson" },
          publisher: { "@type": "Organization", name: "Aprenda Audaces", url: "https://aprendaaudaces.lovable.app" },
          mainEntityOfPage: `https://aprendaaudaces.lovable.app/blog/${post.slug}`,
          ...(post.has_video && post.video_url ? {
            video: {
              "@type": "VideoObject",
              name: post.video_title || post.title,
              description: post.excerpt,
              embedUrl: post.video_url,
              uploadDate: post.date,
            }
          } : {}),
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="container px-6 mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Blog
              </Link>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

              <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.read_time}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        <article className="py-12 md:py-16">
          <div className="container px-6 mx-auto max-w-4xl">
            {post.has_video && post.video_url && (
              <motion.div className="mb-12 rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={post.video_url}
                    title={post.video_title || post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <motion.div
              className="mt-12 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Quer aprender Audaces de verdade?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Conheça nosso curso completo com mais de 500 alunos formados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/curso-audaces" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Conhecer o Curso Audaces
                </Link>
                <Link to="/cursos-de-modelagem" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-primary-foreground/20 transition-colors">
                  Ver Cursos de Modelagem
                </Link>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center">
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Blog
              </Link>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: post.title, url: window.location.href });
                  }
                }}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </article>
      </div>

      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
