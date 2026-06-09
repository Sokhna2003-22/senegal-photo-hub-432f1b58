import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PhotoCard } from "@/components/PhotoCard";
import { Input } from "@/components/ui/input";
import { photos, categories } from "@/lib/mock-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerie — PhotoPlatform" },
      { name: "description", content: "Parcourez des milliers de photos professionnelles par catégorie." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Tout");
  const filtered = photos.filter((p) => (cat === "Tout" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <Layout>
      <section className="bg-navy text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Galerie</h1>
          <p className="text-white/70 mt-2">Découvrez les œuvres des photographes de la plateforme.</p>
          <div className="mt-6 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher une photo…" className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {["Tout", ...categories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}>
              {c}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="text-center py-20 text-muted-foreground">Aucune photo trouvée.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => <PhotoCard key={p.id} photo={p} />)}
          </div>
        )}
      </section>
    </Layout>
  );
}