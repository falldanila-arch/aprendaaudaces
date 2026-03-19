import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Edit2, Trash2, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

type BlogPost = Tables<"blog_posts">;

const emptyPost = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  date: new Date().toISOString().split("T")[0],
  read_time: "5 min",
  image: "/placeholder.svg",
  tags: [] as string[],
  has_video: false,
  video_url: "",
  video_title: "",
  published: false,
};

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<typeof emptyPost | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // Simple access key check (not secure, but prevents casual access)
  const ADMIN_KEY = "audaces2026";

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated]);

  const fetchPosts = async () => {
    // Fetch all posts (including unpublished) - requires direct query
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false });
    if (!error && data) setPosts(data);
  };

  const handleSave = async () => {
    if (!editing) return;
    setLoading(true);

    const postData = {
      ...editing,
      tags: tagsInput.split(",").map(t => t.trim()).filter(Boolean),
    };

    try {
      if (editingId) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", editingId);
        if (error) throw error;
        toast.success("Post atualizado!");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert(postData);
        if (error) throw error;
        toast.success("Post criado!");
      }
      setEditing(null);
      setEditingId(null);
      fetchPosts();
    } catch (err: any) {
      toast.error(err.message || "Erro ao salvar");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (!error) {
      toast.success("Post excluído");
      fetchPosts();
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setEditing({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      read_time: post.read_time,
      image: post.image || "/placeholder.svg",
      tags: post.tags,
      has_video: post.has_video,
      video_url: post.video_url || "",
      video_title: post.video_title || "",
      published: post.published,
    });
    setTagsInput(post.tags.join(", "));
  };

  const startNew = () => {
    setEditingId(null);
    setEditing({ ...emptyPost });
    setTagsInput("");
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card p-8 rounded-2xl border border-border max-w-sm w-full mx-4">
          <h1 className="text-xl font-bold text-foreground mb-4">Admin Blog</h1>
          <Input
            type="password"
            placeholder="Senha de acesso"
            value={accessKey}
            onChange={e => setAccessKey(e.target.value)}
            onKeyDown={e => e.key === "Enter" && accessKey === ADMIN_KEY && setAuthenticated(true)}
          />
          <Button
            className="w-full mt-4"
            onClick={() => {
              if (accessKey === ADMIN_KEY) setAuthenticated(true);
              else toast.error("Senha incorreta");
            }}
          >
            Entrar
          </Button>
        </div>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container px-6 mx-auto max-w-4xl py-8">
          <button onClick={() => { setEditing(null); setEditingId(null); }} className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar à lista
          </button>

          <h1 className="text-2xl font-bold text-foreground mb-6">
            {editingId ? "Editar Post" : "Novo Post"}
          </h1>

          <div className="space-y-5">
            <div>
              <Label>Título</Label>
              <Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} />
            </div>

            <div>
              <Label>Slug (URL)</Label>
              <Input
                value={editing.slug}
                onChange={e => setEditing({ ...editing, slug: e.target.value })}
                placeholder="meu-post-exemplo"
              />
              <p className="text-xs text-muted-foreground mt-1">URL: /blog/{editing.slug || "..."}</p>
            </div>

            <div>
              <Label>Resumo (excerpt)</Label>
              <Textarea value={editing.excerpt} onChange={e => setEditing({ ...editing, excerpt: e.target.value })} rows={3} />
            </div>

            <div>
              <Label>Conteúdo (HTML)</Label>
              <Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={15} className="font-mono text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Data</Label>
                <Input type="date" value={editing.date} onChange={e => setEditing({ ...editing, date: e.target.value })} />
              </div>
              <div>
                <Label>Tempo de leitura</Label>
                <Input value={editing.read_time} onChange={e => setEditing({ ...editing, read_time: e.target.value })} />
              </div>
            </div>

            <div>
              <Label>Tags (separadas por vírgula)</Label>
              <Input value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="Audaces, Modelagem, Curso" />
            </div>

            <div className="flex items-center gap-3">
              <Switch checked={editing.has_video} onCheckedChange={v => setEditing({ ...editing, has_video: v })} />
              <Label>Tem vídeo?</Label>
            </div>

            {editing.has_video && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>URL do vídeo (embed)</Label>
                  <Input value={editing.video_url} onChange={e => setEditing({ ...editing, video_url: e.target.value })} placeholder="https://www.youtube.com/embed/..." />
                </div>
                <div>
                  <Label>Título do vídeo</Label>
                  <Input value={editing.video_title} onChange={e => setEditing({ ...editing, video_title: e.target.value })} />
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <Switch checked={editing.published} onCheckedChange={v => setEditing({ ...editing, published: v })} />
              <Label>Publicado</Label>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} disabled={loading} className="flex-1">
                {loading ? "Salvando..." : editingId ? "Atualizar Post" : "Criar Post"}
              </Button>
              <Button variant="outline" onClick={() => { setEditing(null); setEditingId(null); }}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 mx-auto max-w-4xl py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
              ← Voltar ao Blog
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Gerenciar Blog</h1>
          </div>
          <Button onClick={startNew}>
            <Plus className="w-4 h-4 mr-2" /> Novo Post
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-semibold text-foreground truncate">{post.title}</h2>
                  {!post.published && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full shrink-0">Rascunho</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">/blog/{post.slug}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link to={`/blog/${post.slug}`} target="_blank">
                  <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => startEdit(post)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Nenhum post ainda. Crie o primeiro!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
